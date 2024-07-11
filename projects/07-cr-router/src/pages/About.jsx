import { Link } from "../Link"

const i18n = {
  es: {
    description: "Hola que tal",
    title: "Sobre nosotros"
  },
  en: {
    title: "About us",
    description: "Hi there"
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <p>{i18n.description}</p>
      </div>

      <Link to="/">Ir a la home</Link>
    </>
  )
}