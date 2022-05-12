import clientsButtonsStyles from '../styles/ClientsButtons.module.css'

export default function ClientsButtons () {
  return (
    <div className={clientsButtonsStyles.ClientsButtons}>
        <button>
            <p>-</p>
        </button>

        <input type="number" name="" placeholder='0' />

        <button>
            <p>+</p>
        </button>
    </div>
  )
}
