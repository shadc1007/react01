import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-blue-500 md:bg-yellow-500 lg:bg-bg">
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}
