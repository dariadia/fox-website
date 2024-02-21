export const Read = () => {
  return (
    <div>
      <h2 className="lead-in">Статьи</h2>
      <ul className="articles_list">
        {ARTICLES.map(article =>
          <li key={article.title}>
            <a href={`${article.link}`} target="_blank">{article.title}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

const ARTICLES = [
  { title: 'Название статьи есть', link: '/some-link' },
  { title: 'Название статьи 2', link: '/some-link' },
  { title: 'Название статьи 3', link: '/some-link' },
  { title: 'Название статьи 4', link: '/some-link' },
  { title: 'Название статьи тут', link: '/some-link' },
]
