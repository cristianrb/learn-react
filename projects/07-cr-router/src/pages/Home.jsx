import { Link } from '../Link'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Ejemplo para cear un React router desde cero</p>
      <Link to="/about">Ir a sobre nosotros</Link>
    </>
  )
}