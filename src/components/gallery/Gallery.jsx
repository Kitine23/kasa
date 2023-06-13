import { API_HOST } from '../../config/api'
import Card from '../card/Card'
import styles from './Gallery.module.scss'
import { useEffect, useState } from 'react'

const useFetch = (apiRoute) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(apiRoute)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [apiRoute])

  return { data, isLoading }
}

export default function Gallery() {
  const { data: estates, isLoading } = useFetch(API_HOST)

  if (isLoading) return <p>Chargement...</p>

  return (
    <div className={styles.gallery}>
      {estates?.length > 0 &&
        estates.slice(0, 6).map((estate) => {
          return <Card key={estate.id} title={estate.title} />
        })}
    </div>
  )
}
