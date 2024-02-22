import { ARTICLES } from "../data"
import { _ARTICLES } from "../data/articles"

export const Article = () => {
  const pathname = window?.location?.pathname || ''
  const _key = ARTICLES.find(article => pathname.includes(article.link))?.link.slice(1) || ''
  const data = _ARTICLES[_key]
  return (
    <div className="main" dangerouslySetInnerHTML={{ __html: data}} />
  )
}
