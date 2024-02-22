import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import Cookies from "universal-cookie"
import { COOKIE_NAME } from "../data"
import { Popup } from "./Popup"
import { noop } from "lodash"

export const Layout = ({ hasPremiumAccess, isPopupShown, showPopup }: { hasPremiumAccess: boolean, isPopupShown: boolean, showPopup: (val?: boolean) => void }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const cookies = new Cookies()

  return (<>
    {isPopupShown ? <Popup /> : null}
    {isMenuOpen ? <div className="navigation__mobile">
      <Navigation onClick={() => setMenuOpen(!isMenuOpen)} />
    </div> : null}
    <header onClick={() => isPopupShown ? showPopup(false) : noop}>
      <h1 className="merriweather-bold">Название сайта</h1>
      <div className="caption caveat-400">
        Короткий текст (caption)
      </div>
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
    <main onClick={() => isPopupShown ? showPopup(false) : noop}>
      <Outlet />
    </main>
  </>
  )
}
