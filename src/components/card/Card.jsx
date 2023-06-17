import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

export default function Card({ title, href, img }) {
  return (
    <Link to={href}>
      <article
        className={styles.card}
        style={{ backgroundImage: `url('${img}')` }}
      >
        <h3>{title}</h3>
      </article>
    </Link>
  )
}
