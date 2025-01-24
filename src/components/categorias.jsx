import React from 'react'
import { Curso } from './curso'

export const Categorias = ({ categoriaTitulo, descripcion }) => {
    return (
       
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">{categoriaTitulo}</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">{descripcion}</p>
                </div>

    )
}
