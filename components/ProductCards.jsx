import Image from 'next/image'

import StyleProductCards from '../styles/ProductCards.module.css'
import AdminButtons from './AdminButtons'
import ClientsButtons from './ClientsButtons'

import imgBotella from '../public/assets/img/botella_1l_apa.png'
import NewItem from './NewItem'

const ifOffer = (offerDateStart, offerDateEnd) => {
  if (offerDateStart === null || offerDateEnd === null) return false

  const offerDateTimeStart = new Date(`${offerDateStart.slice(0, 10)}T00:00:00`)
  const offerDateTimeEnd = new Date(`${offerDateEnd.slice(0, 10)}T00:00:00`)

  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const newDate = new Date(`${year}-${month}-${day}`)

  return (newDate.getTime() >= (offerDateTimeStart.getTime()) && newDate.getTime() <= (offerDateTimeEnd.getTime()))
}

export default function ProductCards ({ products, controls = true, URL, listRefresh, openClosePopUp, setEditPopUp }) {
  return (
        <div className={StyleProductCards.ProductCards}>
            {
            (controls)
              ? <NewItem openClosePopUp={openClosePopUp} setEditPopUp={setEditPopUp}/>
              : null
            }

            {
                (products.length > 0)
                  ? products.map(product =>
                    <section
                        key={product._id}
                        className={product.active ? null : StyleProductCards.deactive}
                    >
                        {
                            (ifOffer(product.offer_start_date, product.offer_end_date))
                              ? <div>
                                <p className={StyleProductCards.oferta_patch}>
                                    { Math.floor(100 - ((product.offer_price * 100) / product.price)) }
                                </p>

                                <p className={StyleProductCards.oferta_precio_antes}>
                                    Antes: <span>{`$${product.price}`}</span>
                                </p>

                                <p className={StyleProductCards.oferta_duration}>
                                    hasta el {product.offer_end_date.slice(0, 10)}
                                </p>
                                </div>
                              : null
                        }

                        <p className={StyleProductCards.img}>
                            <Image
                                src={imgBotella}
                                alt={product.title}
                            />
                        </p>

                        <h3>{product.title}</h3>
                        <span>{
                            (ifOffer(product.offer_start_date, product.offer_end_date))
                              ? `$${product.offer_price}`
                              : `$${product.price}`
                            }</span>
                        {
                            (controls)
                              ? <AdminButtons
                                id={product._id}
                                active={product.active}
                                URL={URL}
                                listRefresh={listRefresh}
                                openClosePopUp={openClosePopUp}
                                setEditPopUp={setEditPopUp}
                                product={product}
                              />
                              : <ClientsButtons />
                        }
                    </section>)
                  : null
            }
        </div>
  )
}
