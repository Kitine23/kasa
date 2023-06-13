import KIcon from '../icons/KIcon'
import HouseIcon from '../icons/HouseIcon'
import SIcon from '../icons/SIcon'
import AIcon from '../icons/AIcon'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <KIcon color="#fff" />
        <HouseIcon color="#fff" />
        <SIcon color="#fff" />
        <AIcon color="#fff" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
