import Nav from '../Nav'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src="/logo/k.svg" alt="lettre K" />
        <img src="/logo/house.svg" alt="lettre A" />
        <img src="/logo/s.svg" alt="lettre S" />
        <img src="/logo/a.svg" alt="lettre A" />
      </div>
      <Nav />
    </header>
  )
}
