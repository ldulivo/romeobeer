import Link from 'next/link'
import StyleButtons from '../styles/Buttons.module.css'

export default function Buttons ({ children, href = '#', toLink = true }) {
  if (toLink) {
    return (
            <Link
                href={href}
            >
                <a>
                    <button className={StyleButtons.Buttons}>
                        {children}
                    </button>
                </a>
            </Link>
    )
  } else {
    return (
            <button className={StyleButtons.Buttons}>
                {children}
            </button>
    )
  }
}
