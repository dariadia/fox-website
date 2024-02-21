import { Routes, Route, Outlet, Link } from "react-router-dom"
import { Layout } from "./components"
import { Home, NoMatch, About } from "./pages"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
