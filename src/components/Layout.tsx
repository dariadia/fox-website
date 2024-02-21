import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"

export const Layout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (<>
    <header>
      <h1>Название сайта</h1>
      <p>
        Какой-то вводный текст. Текст занимает строки две и рассказывает о чем-то, какой-то вводный текст.
      </p>
      <div className="nav">
        <nav className="navigation_top">
          <div className="nav_controls" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'Закрыть' : 'Меню'}
          </div>
          {isMenuOpen ? <div className="navigation__mobile">
          <Navigation />
          </div> : null}
          <Navigation />
          </nav>
      </div>
      <hr />
    </header>
    <main>
      <Outlet />
    </main>
  </>
  )
}
