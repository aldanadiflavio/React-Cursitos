import { Bloques } from "./components/bloques"
import Button from "./components/button"
import { Layout } from "./components/layout"
import { Navbar } from "./components/navbar"
import { Routes, Route} from "react-router-dom"
import { Inicio } from "./pages/inicio"
import { Cursos } from "./pages/cursos"

function App() {
  
  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <Navbar></Navbar>
        <Layout>
          
            <Routes>
              <Route path='/' element={<Inicio></Inicio>}></Route>
              <Route path='/cursos' element={<Cursos></Cursos>}></Route>
            </Routes>
        
        </Layout>
        {/* <Bloques></Bloques> */}
      </div>
    </>
  )
}

export default App