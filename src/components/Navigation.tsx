import { noop } from "lodash"
import { Link } from "react-router-dom"

export const Navigation = ({ onClick }: { onClick?: () => void }) =>
(<ul className="navigation__list" onClick={onClick ? onClick : noop}>
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
