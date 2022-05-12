import { useEffect, useState } from 'react'
import PopUpStyles from '../styles/PopUp.module.css'
import FormContent from './form/FormContent'
import FormError from './form/FormError'

import FormContentStyle from '../styles/FormContent.module.css'

export default function PopUp ({ openClosePopUp, URL, listRefresh, edit = false, editProduct }) {
  /**
     * initial settings
     */
  const [errors, setErrors] = useState({})
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    offer_price: '',
    offer_start_date: '',
    offer_end_date: ''
  })

  useEffect(() => {
    if (edit) {
      setNewProduct({
        title: editProduct.title,
        description: editProduct.description,
        price: editProduct.price,
        stock: editProduct.stock,
        offer_price: editProduct.offer_price,
        offer_start_date: (editProduct.offer_start_date != null) ? editProduct.offer_start_date.slice(0, 10) : '',
        offer_end_date: (editProduct.offer_end_date != null) ? editProduct.offer_end_date.slice(0, 10) : ''
      })
    }
  }, [])

  /**
     * listening input
     */
  const handleChange = (e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })

  /**
     * submit button
     */
  const handleSubmit = async (e) => {
    e.preventDefault()

    // check submit
    const err = validate()
    if (Object.keys(err).length) return setErrors(err)

    setNewProduct({
      ...newProduct,
      offer_price: (newProduct.offer_price === '') ? null : newProduct.offer_price,
      offer_start_date: (newProduct.offer_start_date === '') ? null : newProduct.offer_start_date,
      offer_end_date: (newProduct.offer_end_date === '') ? null : newProduct.offer_end_date

    })

    /**
         * check edit
         */
    if (edit) {
      await updateProduct()
    } else {
      await createProduct()
    }

    /**
         * limpia formulario
         */
    for (let index = 0; index < (e.target.length - 1); index++) {
      e.target[index].value = ''
    }

    /**
         * Reiniciar variable
         */
    setErrors({})
    setNewProduct({
      title: '',
      description: '',
      price: '',
      stock: '',
      offer_price: '',
      offer_start_date: '',
      offer_end_date: ''
    })

    listRefresh() // function refresh list
    openClosePopUp()
  }

  /**
     * send data for api rest
     */
  const createProduct = async () => {
    const PostURL = `${URL}/api/products`

    try {
      await fetch(PostURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
    } catch (error) {
      console.error(error)
    }
  }

  /**
     * Update product
     */
  const updateProduct = async () => {
    const id = editProduct._id
    const PutURL = `${URL}/api/products/${id}`

    try {
      await fetch(PutURL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
    } catch (error) {
      console.error(error)
    }
  }

  /**
     * check data valid
     */
  const validate = () => {
    const errors = {}

    if (!newProduct.title) errors.title = 'Título requerido'
    if (!newProduct.description) errors.description = 'Descripción requerida'
    if (!newProduct.price) errors.price = 'Precio requerido'
    if (!newProduct.stock) errors.stock = 'Stock requerida'

    return errors
  }

  /**
     * return view form
     */
  return (
    <div className={PopUpStyles.PopUp}>

        <div onClick={ () => openClosePopUp()} className={PopUpStyles.close}></div>

        <div className={PopUpStyles.card}>
            <FormContent>
                <form onSubmit={handleSubmit}>
                    <label>Título
                      <input
                          type="text"
                          name="title"
                          onChange={handleChange}
                          className={ (errors.title) ? FormContentStyle.alert : '' }
                          placeholder="Título"
                          value={ newProduct.title}
                      />
                      <FormError err={errors.title} />
                    </label>

                    <label>Descripción
                      <input
                          type="text"
                          name="description"
                          onChange={handleChange}
                          className={ (errors.description) ? FormContentStyle.alert : '' }
                          placeholder="Descripción"
                          value={ newProduct.description}
                      />
                      <FormError err={errors.description} />
                    </label>

                    <label>Precio
                      <input
                          type="number"
                          name="price"
                          onChange={handleChange}
                          className={ (errors.price) ? FormContentStyle.alert : '' }
                          value={ newProduct.price}
                      />
                      <FormError err={errors.price} />
                    </label>

                    <label>Stock
                      <input
                          type="number"
                          name="stock"
                          onChange={handleChange}
                          className={ (errors.stock) ? FormContentStyle.alert : '' }
                          value={newProduct.stock}
                      />
                      <FormError err={errors.stock} />
                    </label>

                    <label>Precio de oferta
                      <input
                          type="number"
                          name="offer_price"
                          onChange={handleChange}
                          className={ (errors.offer_price) ? FormContentStyle.alert : '' }
                          value={ newProduct.offer_price}
                      />
                      <FormError err={errors.offer_price} />
                    </label>

                    <label>Inicio de oferta
                      <input
                          type="date"
                          name="offer_start_date"
                          onChange={handleChange}
                          className={ (errors.offer_start_date) ? FormContentStyle.alert : '' }
                          value={ newProduct.offer_start_date}
                      />
                      <FormError err={errors.offer_start_date} />
                    </label>

                    <label>Fin de oferta
                      <input
                          type="date"
                          name="offer_end_date"
                          onChange={handleChange}
                          className={ (errors.offer_end_date) ? FormContentStyle.alert : '' }
                          value={ newProduct.offer_end_date}
                      />
                      <FormError err={errors.offer_end_date} />
                    </label>

                    <div className={PopUpStyles.buttons}>
                        <button
                            type="submit"
                            className={ edit ? PopUpStyles.buttonEdit : null}
                        >Agregar</button>

                        <button
                            onClick={ () => openClosePopUp()}
                            className={PopUpStyles.buttonCancel}
                        >Cancelar</button>
                    </div>

                </form>
            </FormContent>

        </div>
    </div>
  )
}
