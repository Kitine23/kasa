import { useEffect, useState } from 'react'

export const useFetch = (apiRoute) => {
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
