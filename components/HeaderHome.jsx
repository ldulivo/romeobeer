import Image from 'next/image'
import StyleHeaderHome from '../styles/HeaderHome.module.css'

import imgBeer from '../public/assets/img/beer-g574c4bd67_1920.png'
import Buttons from './Buttons'

import imgLogo from '../public/assets/img/logo.png'

export default function HeaderHome () {
  return (
        <section className={StyleHeaderHome.HeaderHome}>

            <div className={StyleHeaderHome.container}>
                <div className={StyleHeaderHome.content}>
                    <Image
                        src={imgLogo}
                        alt="Romeo Beer"
                    />
                    <h3 className={StyleHeaderHome.h3}>cerveza hecha con amor</h3>
                    <p>No es para menos que nuestros clientes aseguren el buen sabor de esta cerveza, ya que está elaborada con ingredientes selectos y el tiempo adecuado en los procesos de elaboración.</p>
                    <Buttons>
                        Quiero ver!
                    </Buttons>
                </div>

                <div className={StyleHeaderHome.content}>
                    <div className={StyleHeaderHome.imgContent}>
                        <Image
                            src={imgBeer}
                            alt="Cerveza Romeo Beer"
                        />
                    </div>
                </div>
            </div>

        </section>
  )
}
