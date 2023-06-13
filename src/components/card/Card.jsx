import styles from './Card.module.scss'

export default function Card({ title }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
    </article>
  )
}
