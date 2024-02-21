import { TELEGRAM, TELEGRAM_BOT } from "../data"

export const About = () => {
  return (
    <div className="about_wrapper">
      <h2>Обо мне</h2>
      <div className="avatar fox" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <article className="contacts-all">
        <a className="contact-item" href={TELEGRAM}>&#129418; Написать мне в телеграм</a>
        <a className="contact-item" href={TELEGRAM_BOT}>&#129302; Спросить у моего бота-помощника</a>
      </article>
    </div>
  )
}
