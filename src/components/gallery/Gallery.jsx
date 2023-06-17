import { API_HOST } from '../../config/api'
import Card from '../card/Card'
import styles from './Gallery.module.scss'
import { useFetch } from '../../hooks/useFetch'

export default function Gallery() {
  const { data: estates, isLoading } = useFetch(API_HOST)

  if (isLoading) return <p>Chargement...</p>

  return (
    <div className={styles.gallery}>
      {estates?.length > 0 &&
        estates.slice(0, 6).map((estate) => {
          return (
            <Card
              key={estate.id}
              title={estate.title}
              href={`/fiche-logement/${estate.id}`}
              img={estate.cover}
            />
          )
        })}
    </div>
  )
}
