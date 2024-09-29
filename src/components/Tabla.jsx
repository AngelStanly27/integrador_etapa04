import { useContext } from "react"
import ProductosContext from "../context/ProductosContext"

import TablaFila from "./TablaFila";
import './Tabla.scss'

const Tabla = () => {
  
  const {productos,productoAEliminar}=useContext(ProductosContext)

  return (
    <table className="tabla-alta" >
      <thead >
        <tr>
          <th className="nav-bar__nav-link">Nombre</th>
          <th className="nav-bar__nav-link">Precio</th>
          <th className="nav-bar__nav-link">Stock</th>
          <th className="nav-bar__nav-link">Marca</th>
          <th className="nav-bar__nav-link">Categoría</th>
          <th className="nav-bar__nav-link">Foto</th>
          <th className="nav-bar__nav-link">Envío</th>
          <th className="nav-bar__nav-link">Acciones</th>
          </tr>
      </thead>
          <tbody>
           {productos&&productos.map((producto, idx)=>(
            <TablaFila key={producto.id+idx} producto={producto} productoAEliminar={productoAEliminar}/>
            ))}
          </tbody>
    </table>
  )
}
export default Tabla