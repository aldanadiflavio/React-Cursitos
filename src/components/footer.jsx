import { Redes } from "./redes"

export const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ACERCA DE</h2>
                        <nav className="list-none mb-10">
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Nosotros</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Contacto</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Empleo</a></li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">DESCUBRE EN CURSITOS</h2>
                        <nav className="list-none mb-10">
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Planes y precios</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Enseña en Cursitos</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Ayuda y asistencia</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Afiliados</a></li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ASPECTOS LEGALES Y ACCESIBILIDAD</h2>
                        <nav className="list-none mb-10">
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Declaración de accesibilidad</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Política de privacidad</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Mapa del sitio</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-indigo-500">Condiciones</a></li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUSCRIBITE</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Suscribirse</button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Recibe información de todos nuestros cursos.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Cursitos</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2025 Cursitos - Todos los derechos reservados.</p>
                    <Redes></Redes>
                </div>
            </div>
        </footer>
    )
}
