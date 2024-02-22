import { Link } from "react-router-dom"
import { ARTICLES } from "../data"

export const Read = ({ showPopup, hasPremiumAccess }: { showPopup: () => void, hasPremiumAccess: boolean }) => {
  return (
    <div>
      <h2 className="merriweather-bold lead-in">Статьи</h2>
      <ul className="articles_list">
        {ARTICLES.map(article =>
          <li key={article.title} >
            {(hasPremiumAccess || !article.isPremium) ? <Link to={`/read${article.link}`}>{article.title}</Link>
              : <span className="locked-article" onClick={showPopup}>{article.title}</span>}
            {(article.isPremium && !hasPremiumAccess) ? <span>{' '}&#128274;</span> : null}
          </li>
        )}
      </ul>
    </div>
  )
}
