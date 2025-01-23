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
      {/*  */}
      <section class="text-gray-600 body-font bg-gray-100">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Curso></Curso>  
            <Curso></Curso>  
            <Curso></Curso>  
            <Curso></Curso>  
          </div>
        </div>
      </section>
    </>

  )
}
