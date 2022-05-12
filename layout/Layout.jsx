import Head from 'next/head'
import { useState } from 'react'

import HeaderHome from '../components/HeaderHome'
import NavBar from '../components/NavBar'
import StyleLayout from '../styles/layout.module.css'

export default function Layout ({ children, home }) {
  const [shopping, setShopping] = useState([])

  return (
        <div className={StyleLayout.layout}>
            <Head>

                <title>Romeo Beer</title>
                <meta name="description" content="Cervecería Artesanal en Maipú - Abrimos mañana a las 09:00" />
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <div className={StyleLayout.container}>
                <header className={StyleLayout.header}>

                    <NavBar
                        shopping={shopping}
                        setShopping={setShopping}
                    />

                    {
                        (home)
                          ? <HeaderHome />
                          : <h1>Not home</h1>
                    }
                </header>
                <main className={StyleLayout.main}>
                    {children}
                </main>

                <footer className={StyleLayout.footer}>
                    footer
                </footer>
            </div>

        </div>
  )
}
