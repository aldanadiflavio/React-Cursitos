import { NavLink } from "react-router-dom"
import { Redes } from "./redes"

export const Navbar = () => {
  const btnLink = 'mr-5 hover:text-gray-900 block inline-block cursor-pointer py-1'
  const activeLink = 'mr-5 block inline-block cursor-pointer py-1 text-indigo-500'

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"></path>
            </svg>
            <span className="ml-3 text-xl">Cursitos</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink className={({ isActive }) => isActive ? activeLink : btnLink} to="/">Inicio</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLink : btnLink} to="/cursos">Cursos</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLink : btnLink} to="/categorias">Categorías</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLink : btnLink} to="/nosotros">Nosotros</NavLink>
          </nav>
          <Redes></Redes>
          <button className="inline-flex items-centerborder-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-indigo-500 ml-10 mt-4 md:mt-0">Registrarse
          </button>
          <button className="inline-flex items-center bg-indigo-600 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-white mt-4 md:mt-0">Login
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
