import { Link } from "react-router-dom"

export const NoMatch = () => {
  return (
    <div>
      <h2 className="caveat-700">Такой страницы нет!</h2>
      <p>
        <Link to="/">Вернуться на главную</Link>
      </p>
    </div>
  )
}
