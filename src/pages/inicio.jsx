import { Categorias } from "../components/categorias"
import { Curso } from "../components/curso"

export const Inicio = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-[url(img/bg-inicio-cursos.jpg)] bg-fixed bg-cover bg-center">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-bold text-6xl text-indigo-600">Todas las habilidades que necesitas en un único lugar</h1>
            <p className="leading-relaxed mt-4 text-3xl">Desde habilidades esenciales hasta temas técnicos, Cursitos respalda tu desarrollo profesional.</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-3xl font-medium title-font mb-5">Registro</h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Nombre completo</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Registrarse</button>
            <p className="text-xs text-gray-500 mt-3">Al registrarte, aceptas nuestras <a className="text-indigo-600" href="#">Condiciones de uso</a> y nuestra <a className="text-indigo-600" href="#">Política de privacidad</a>.</p>
          </div>
        </div>
      </section>
      {/* CURSOS POR CATEGORIAS */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            <Categorias categoriaTitulo='Desarrollo Web' descripcion='Los cursos de desarrollo web enseñan habilidades fundamentales para crear y mantener sitios web. Abarcan temas como la creación de sitios atractivos y funcionales, principios de diseño web y diseño de experiencia/interfaz de usuario, que son esenciales para carreras en diseño web, desarrollo y UX/UI.' />

            <Curso categoria='categoria' titulo='titulo' precio='precio' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />

            <a href="" className="mt-3 text-indigo-500 inline-flex items-center mb-10">Más cursos
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>

            <Categorias categoriaTitulo='Contabilidad' descripcion='Los cursos de contabilidad abarcan el registro de documentos, la elaboración de informes y el análisis sistemáticos de las transacciones financieras; esto incluye la contabilidad, la elaboración de estados financieros y el cumplimiento de las obligaciones tributarias. Dominar la contabilidad es fundamental para los contables, los empresarios y los profesionales del ramo financiero.' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />

            <a href="" className="mt-3 text-indigo-500 inline-flex items-center  mb-10">Más cursos
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>

            <Categorias categoriaTitulo='Diseño Gráfico' descripcion='Los cursos de diseño gráfico enseñan principios fundamentales, como la tipografía, la teoría del color y la composición, lo que permite a los diseñadores crear elementos visuales atractivos para la elaboración de marcas, el marketing y los medios digitales.' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />
            <Curso categoria='categoria' titulo='titulo' precio='precio' />

            <a href="" className="mt-3 text-indigo-500 inline-flex items-center  mb-10">Más cursos
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
