import React from 'react'

const PaginaNoEncontrada = () => {
  return (
    <div className='portada-error min-vh-100 '>
      <h1 className='titulo-error'>404</h1>
      <p className='parrafo-error'>La página que estas buscando no existe! A menos que estes buscando este error... entonces lo encontraste!</p>
      <div className="contenido d-flex justify-content-center align-items-center text-center">
      <h2 className='titulo2-error '>Deliciosos Mimos</h2>

      </div>
    </div>
  )
}

export default PaginaNoEncontrada