import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import Cookies from "universal-cookie"
import { COOKIE_NAME } from "../data"

export const Layout = ({ hasPremiumAccess }: { hasPremiumAccess: boolean }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const cookies = new Cookies()

  return (<>
    {isMenuOpen ? <div className="navigation__mobile">
      <Navigation onClick={() => setMenuOpen(!isMenuOpen)} />
    </div> : null}
    <header>
      <h1 className="merriweather-bold">Название сайта</h1>
      <div className="caption caveat-400">
        Короткий текст (caption)
      </div>
      {hasPremiumAccess ? null : <button onClick={() => cookies.set(COOKIE_NAME, 'true', { path: '/' })}>"купить" премиум доступ</button>}
      <div className="nav">
        <nav className="navigation_top">
          <div className="nav_controls" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'Закрыть' : 'Меню'}
          </div>
          <Navigation />
          <div className="art_tail"/>
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
