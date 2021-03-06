/* import Link from 'next/link' */
import { useState } from 'react'
import CardProduct from '../../../components/ProductCards'
import PopUp from '../../../components/PopUp'

import Section from '../../../components/Section'

import ProductsIndexStyle from '../../../styles/ProductsIndex.module.css'

export default function ProductsIndex ({ URL, products }) {
  const [newPopUp, setNewPopUp] = useState(false)
  const [editPopUp, setEditPopUp] = useState(false)
  const [editProduct, setEditProduct] = useState({})
  const [newProducts, setNewProducts] = useState(products)

  const listRefresh = async () => {
    const resProducts = await fetch(`${URL}/api/products/index_all`)
    const products = await resProducts.json()
    setNewProducts(products)
  }

  const openClosePopUp = (product = {}) => {
    setNewPopUp(!newPopUp)
    setEditProduct(product)
  }

  return (
    <div className={ProductsIndexStyle.ProductsIndex}>

        <Section
        white
        title='Productos'
        >
        {
            <CardProduct
                products={newProducts}
                controls='admin'
                URL={URL}
                listRefresh={listRefresh}
                openClosePopUp={openClosePopUp}
                setEditPopUp={setEditPopUp}
            />
        }

        </Section>

        {
            newPopUp
              ? <PopUp
                    openClosePopUp={openClosePopUp}
                    URL={URL}
                    listRefresh={listRefresh}
                    edit={editPopUp}
                    editProduct={editProduct}
                />
              : null
        }

    </div>
  )
}

export async function getServerSideProps () {
  const URL = process.env.SERVER

  const resProducts = await fetch(`${URL}/api/products/index_all`)
  const products = await resProducts.json()

  return {
    props: {
      URL,
      products
    }
  }
}
