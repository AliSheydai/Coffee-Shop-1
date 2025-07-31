import { Routes, Route } from "react-router-dom"
import { HeaderProvider } from "./contexts/HeaderContext"
import { AuthProvider } from "./contexts/AuthContext"

import Header from './components/Header'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import CuncatUs from "./pages/CuncatUs"
import Login from "./pages/Login"

import Footer from "./components/Footer"
import './css/App.css'
import './css/index.css'

function App() {

  return (
    <HeaderProvider >
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cuncat-us" element={<CuncatUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </HeaderProvider>
  )
}

export default App
