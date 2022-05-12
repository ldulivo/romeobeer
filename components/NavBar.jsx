import Link from 'next/link'

import StyleNavBar from '../styles/NavBar.module.css'

import SvgBeer from './svg/SvgBeer'
import SvgMenu from './svg/SvgMenu'
import SvgShoppingBag from './svg/SvgShoppingBag'
import SvgMaps from './svg/SvgMaps'
import SvgHome from './svg/SvgHome'

export default function NavBar () {
  return (
        <nav className={StyleNavBar.NavBar}>

            <div className={StyleNavBar.navLink}>
                <ul>
                    <li>
                        <Link
                            href='/'
                        >
                            <a>
                                <SvgHome color='#ff7800' />
                                <p>Inicio</p>
                            </a>
                        </Link>
                    </li>
                    <li className={StyleNavBar.beer}>
                        <Link
                            href='/#cervezas'
                        >
                            <a>
                                <SvgBeer color='#ff7800' />
                                <p>cervezas</p>
                            </a>
                        </Link>
                    </li>

                    <li>
                        <a>
                            <SvgShoppingBag />
                            <p>Mi compra</p>
                        </a>
                    </li>

                    <li>
                        <a>
                            <SvgMaps color='#ff7800' />
                            <p>Lugar</p>
                        </a>
                    </li>

                    <li>
                        <a>
                            <SvgMenu color='#ff7800' />
                            <p>Menú</p>
                        </a>
                    </li>
                </ul>

            </div>

        </nav>
  )
}
