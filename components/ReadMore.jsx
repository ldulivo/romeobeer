import { useState } from 'react'
import StyleReadMore from '../styles/ReadMore.module.css'

export default function ReadMore ({ children, msg = '' }) {
  const [view, setView] = useState(false)

  if (view) {
    return (
            <div
                onClick={(() => setView(!view))}
            >
                {children}
                <div className={StyleReadMore.ReadMore}>
                    <p>{msg}</p>
                </div>
            </div>
    )
  } else {
    return (
            <div
                onClick={(() => setView(!view))}
            >
                {children}
            </div>
    )
  }
}
