import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
      <header>
        <h1>Название сайта</h1>
        <p>
          Какой-то вводный текст.
        </p>
        <nav className="navigation_top">
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
          </ul>
        </nav>
        <hr />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
