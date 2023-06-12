import KIcon from '../icons/KIcon'
import HouseIcon from '../icons/HouseIcon'
import SIcon from '../icons/SIcon'
import AIcon from '../icons/AIcon'

import Nav from '../nav/Nav'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <KIcon />
        <HouseIcon />
        <SIcon />
        <AIcon />
      </div>
      <Nav />
    </header>
  )
}
