import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

export default function Card({ title, href }) {
  return (
    <Link to={href}>
      <article className={styles.card}>
        <h3>{title}</h3>
      </article>
    </Link>
  )
}
