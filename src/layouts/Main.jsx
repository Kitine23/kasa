export default function MainLayout({ children }) {
  return (
    <>
      <header>
        <nav>
          header
          <ul>
            <li>
              <a href={`/home`}>Accueil</a>
            </li>
            <li>
              <a href={`/fiche-logement`}>Fiche logement</a>
            </li>
            <li>
              <a href={`/about`}>A propos</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
