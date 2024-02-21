import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
  return (<>
    <header>
      <h1>Название сайта</h1>
      <p>
        Какой-то вводный текст.
      </p>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <nav className="navigation_top nav-links">
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">Обо мне</Link>
            </li>
            <li>
              <Link to="/prices">Услуги и цены</Link>
            </li>
          </ul></nav>
      </div>
      <hr />
    </header>
    <main>
      <Outlet />
    </main>
  </>
  )
}
