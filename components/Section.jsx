import StyleSection from '../styles/Section.module.css'

export default function Section ({ children }) {
  return (
        <section className={StyleSection.Section}>
            <div className={StyleSection.container}>
                {children}
            </div>
        </section>
  )
}
