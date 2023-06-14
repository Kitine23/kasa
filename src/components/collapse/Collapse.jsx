import styles from './Collapse.module.scss'
import ArrowIcon from '../icons/ArrowIcon'
import { useState } from 'react'

export default function Collapse({ title, children }) {
  const [isActive, setIsActive] = useState(false)

  let classNames = styles['collapse-body']
  if (isActive) classNames += ' ' + styles.active

  return (
    <div className={styles.collapse}>
      <header>
        <span>{title}</span>
        <button onClick={() => setIsActive((prev) => !prev)}>
          <ArrowIcon className={isActive ? styles.down : ''} />
        </button>
      </header>
      <div className={classNames}>{children}</div>
    </div>
  )
}
