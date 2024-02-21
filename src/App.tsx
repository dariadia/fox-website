import { Routes, Route, Outlet, Link } from "react-router-dom"
import { Layout } from "./components"
import { Home, NoMatch, About, Read, Practice, Learn, Parlour } from "./pages"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="read" element={<Read />} />
        <Route path="practice" element={<Practice />} />
        <Route path="learn" element={<Learn />} />
        <Route path="parlour" element={<Parlour />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
