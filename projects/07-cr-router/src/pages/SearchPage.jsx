import { useEffect } from "react"

export default function SearchPage ({routeParams}){
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  return (
    <h1>Search query: {routeParams.query}</h1>
  )
} 