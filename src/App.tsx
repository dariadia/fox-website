import { Routes, Route, Outlet, Link } from "react-router-dom"
import { Layout } from "./components"
import { Home, NoMatch, About, Read, Practice, Learn, Parlour } from "./pages"
import { useState } from "react"
import Cookies from 'universal-cookie'
import { COOKIE_NAME } from "./data"

export default function App() {
  const [isPopupShown, setPopupShown] = useState(false)
  const showPopup = () => setPopupShown(!isPopupShown)
  const cookies = new Cookies()
  const hasPremiumAccess = cookies.get(COOKIE_NAME)

  return (
    <Routes>
      <Route path="/" element={<Layout hasPremiumAccess={hasPremiumAccess} />}>
        <Route index element={<Home />} />
        <Route path="read" element={<Read hasPremiumAccess={hasPremiumAccess} showPopup={showPopup} />} />
        <Route path="practice" element={<Practice />} />
        <Route path="learn" element={<Learn />} />
        <Route path="parlour" element={<Parlour />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
