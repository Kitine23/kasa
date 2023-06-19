import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { API_HOST } from '../config/api'
import Collapse from '../components/collapse/Collapse'
import CircleIcon from '../components/icons/CircleIcon'
import Stars from '../components/pages/estate/Stars'
import styles from './Estate.module.scss'
import Slideshow from '../components/slideshow/Slideshow'

export default function Estate() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: estates, isLoading } = useFetch(API_HOST)
  if (isLoading) return <p>Chargement...</p>

  const estate = estates.find((estate) => estate.id === id)
  if (!estate) {
    navigate('/404')
    return
  }

  return (
    <article className={styles.estate}>
      <Slideshow images={estate.pictures} />
      <div className={styles.body}>
        <div className={styles.content}>
          <h1>{estate.title}</h1>
          <p>{estate.location}</p>
          <div className={styles.tags}>
            {estate.tags.map((tag) => (
              <button key={tag}>{tag}</button>
            ))}
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.host}>
            <p>{estate.host.name.split(' ').join('\n')}</p>
            <CircleIcon />
          </div>
          <div className={styles.stars}>
            <Stars note={parseInt(estate.rating)} />
          </div>
        </div>
      </div>
      <div className={styles.collapses}>
        <Collapse title="Description">{estate.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {estate.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </article>
  )
}
