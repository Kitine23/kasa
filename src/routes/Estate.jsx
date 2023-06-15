import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { API_HOST } from '../config/api'
import Collapse from '../components/collapse/Collapse'

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
    <article>
      <h1>{estate.title}</h1>
      <img src={estate.cover} alt="" />
      <Collapse title="Description">{estate.description}</Collapse>
    </article>
  )
}
