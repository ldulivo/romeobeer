import Link from 'next/link'

import Section from '../../components/Section'

export default function Dashboard ({ URL, products, categories }) {
  return (
    <div>
        <h2>dashboard</h2>
        <Section>
              <Link
                href={`${URL}/admin/product`}
              >
                  <a>
                    <p>Productos: <span>{products}</span></p>
                  </a>
              </Link>

              <Link
                href={`${URL}/admin/category`}
              >
                  <a>
                    <p>category: <span>{categories}</span></p>
                  </a>
              </Link>
          </Section>
    </div>
  )
}

export async function getServerSideProps () {
  const URL = process.env.SERVER

  const resProducts = await fetch(`${URL}/api/products/count`)
  const products = await resProducts.json()

  const resCategories = await fetch(`${URL}/api/category/count`)
  const categories = await resCategories.json()

  return {
    props: {
      URL,
      products,
      categories
    }
  }
}
