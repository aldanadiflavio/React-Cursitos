import { Bloques } from "./components/bloques"
import { Layout } from "./components/layout"
import { Navbar } from "./components/navbar"
import { Routes, Route} from "react-router-dom"
import { Inicio } from "./pages/inicio"
import { Cursos } from "./pages/cursos"
import { Categorias } from "./pages/categorias"
import { Nosotros } from "./pages/nosotros"

function App() {
  
  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <Navbar></Navbar>
        <Layout>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/cursos' element={<Cursos></Cursos>}></Route>
            <Route path='/categorias' element={<Categorias></Categorias>}></Route>
            <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
          </Routes>
        </Layout>
        {/* <Bloques></Bloques> */}
      </div>
    </>
  )
}

export default App