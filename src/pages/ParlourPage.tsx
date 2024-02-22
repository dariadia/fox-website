export const Parlour = () => {
  return (
    <>
      <h2 className="merriweather-bold lead-in">Лавка: свечи, консультации, расклады</h2>
      <div className="parlour-showcase">
        {ITEMS.map(item => <div key={item.link} className="parlour-item">
          <img src={`src/data/assets/${item.image}`} alt={item.name} />
          <h6>{item.name}</h6><span>{item.price}</span>
          <p>{item.description}</p>
        </div>)}
      </div>
    </>
  )
}

const ITEMS = [
  { link: "", name: "Свеча ритуальная: на привлечение удачи", description: "Работает так и так, привлекает так и так. Изготавливаю лично под заказ.", image: "candle.png", price: "от 1000р." },
  { link: "", name: "Расклад на таро", description: "Такие-то вопросы, получаете ответы и советы.", image: "tarot.png", price: "от 5000р." },
]
