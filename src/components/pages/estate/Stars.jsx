import StarIcon from '../../icons/StarIcon'
import styles from './Stars.module.scss'

export default function Stars({ note }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(<StarIcon key={i} full={note >= i} />)
  }

  return <div className={styles.stars}>{stars}</div>
}
