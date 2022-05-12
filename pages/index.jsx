import Cards from '../components/Cards'
import Section from '../components/Section'
import Layout from '../layout/Layout'

import SvgPay from '../components/svg/SvgPay'
import SvgCheck from '../components/svg/SvgCheck'
import SvgDelivery from '../components/svg/SvgDelivery'
import ReadMore from '../components/ReadMore'
import Buttons from '../components/Buttons'
import ProductCards from '../components/ProductCards'

export default function Home ({ products }) {
  return (
    <Layout home>

      <Section>
        <a name='caracteristicas' id='caracteristicas'></a>
        <h2>Nuestras <span>características</span></h2>

        <Cards>

          <div>
            <header>
              <SvgCheck />
            </header>
            <h3>Cuidado y calidad</h3>
            <p>El cuidado de mis clientes es la primera regla, pero también los debo dejar a gusto. Es por ello que con mucho esfuerzo fabrico productos de buena calidad y sabor.</p>
          </div>

          <div>
            <header>
              <SvgDelivery />
            </header>
            <h3>Delivery a domicilio</h3>
            <p>Entrega a domicilio en cercanía. Tu consulta no molesta.</p>
          </div>

          <div>
            <header>
              <SvgPay />
            </header>
            <h3>Medios de pago</h3>
            <p>Consulta por medios de pago. Acepto pagos electrónicos.</p>
          </div>

        </Cards>
      </Section>

      <Section>
        <a name='cervezas' id='cervezas'></a>
        <h2>Nuestras <span>cervezas</span></h2>

        {<ProductCards
          controls={false}
          products={products}
        />}

      </Section>

      <ReadMore
        msg="Este producto es bueno"
      >
        <Buttons toLink={false}>Hola</Buttons>
      </ReadMore>
    </Layout>
  )
}

export async function getServerSideProps () {
  const URL = `${process.env.SERVER}/api/products`

  const res = await fetch(URL)
  const products = await res.json()

  return {
    props: {
      products
    }
  }
}
