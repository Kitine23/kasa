import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas</p>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </section>
  )
}
