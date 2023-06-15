import { useEffect, useState } from 'react'

export const useFetch = (apiRoute) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(apiRoute)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [apiRoute])

  return { data, isLoading }
}
