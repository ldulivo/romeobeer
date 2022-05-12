import StyleCards from '../styles/Cards.module.css'

export default function Cards ({ children }) {
  return (
        <div className={StyleCards.Cards}>
            {children}
        </div>
  )
}
