import { Link } from "react-router-dom"

export const Navigation = () => (<ul>
  <li>
    <Link to="/">Главная</Link>
  </li>
  <li>
    <Link to="/read">Статьи</Link>
  </li>
  <li>
    <Link to="/practice">Практика</Link>
  </li>
  <li>
    <Link to="/learn">Обучение</Link>
  </li>
  <li>
    <Link to="/about">Обо мне</Link>
  </li>
  <li>
    <Link to="/parlour">Лавка</Link>
  </li>
</ul>)
