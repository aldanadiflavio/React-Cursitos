export const Curso = ({ categoria, titulo, instructor, precio }) => {
  return (

    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{categoria}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{titulo}</h2>
        <h2 className="text-gray-500 title-font text-xs font-medium">{instructor}</h2>
        <p className="mt-1">{precio}</p>
      </div>
    </div>



  )
}
