import { useContext, useEffect, useState } from "react"
import ProductosContext from "../context/ProductosContext"


const FormulAlta = () => {
  
      const formInit = {
          id: '',
          nombre: '',
          precio: '',
          stock: '',
          marca: '',
          categoria: '',
          foto: '',
          envio: false
        }
    
      const [form, setForm] = useState(formInit)
    
      const {crearProductoContext,actualizarProductoContext,productoAEditar,setProductoAEditar}=useContext(ProductosContext);
      // console.log(productoAEditar)

      useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInit)
      }, [productoAEditar])
    
    
      const handleSubmit = async e => {
        e.preventDefault()
        // console.log(e.preventDefault())
    
        try {
    
          if ( form.id === '' ) {
            // console.log('Creando un producto')
            await crearProductoContext(form)
          } else {
            // console.log('Actualizando producto',form)
            await actualizarProductoContext(form)
          }
          handleReset()
          
        } catch (error) {
          console.error('[handleSubmit]', error)
        }
    
      }
    
      const handleChange = e => {
        
        const{type,name,checked,value}= e.target
    
        setForm({...form,[name]:type==='checkbox'?checked:value})
        
      }
    
      const handleReset = () => {
        
        setForm(formInit)
        setProductoAEditar(null)
      }
    
      return (
        <> 
         <form className="form" onSubmit={handleSubmit}>

            <div className="form__group">
              <label className="form__label" htmlFor="lbl-nombre">Nombre</label>
              <input className="form__input" 
                type="text" 
                name="nombre" 
                id="lbl-nombre" 
                value={form.nombre} 
                required
                onChange={handleChange}
                 />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="lbl-precio">Precio</label>
              <input className="form__input" 
                type="number" 
                name="precio" 
                id="lbl-precio" 
                value={form.precio} 
                required
                onChange={handleChange}
                 />
            </div >
            <div className="form__group">
              <label className="form__label" htmlFor="lbl-stock">Stock</label>
              <input className="form__input" 
                type="number" 
                name="stock" 
                id="lbl-stock" 
                required
                value={form.stock} 
                onChange={handleChange}
                 />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="lbl-marca">Marca</label>
              <input className="form__input" 
                type="text" 
                name="marca" 
                required
                id="lbl-marca" 
                value={form.marca} 
                onChange={handleChange}
                 />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="lbl-categoria">Categoría</label>
              <input className="form__input" 
                type="text" 
                name="categoria" 
                required
                id="lbl-categoria" 
                value={form.categoria} 
                onChange={handleChange}
                 />
            </div>
            
            <div className="form__group">
              <label className="form__label" htmlFor="lbl-foto">Foto</label>
              <input className="form__input" 
                type="text" 
                name="foto" 
                id="lbl-foto" 
                required
                value={form.foto} 
                onChange={handleChange}
                 />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="lbl-envio">Envío</label>
              <input className="form__input" 
                type="checkbox" 
                name="envio" 
                // required
                id="lbl-envio" 
                checked={form.envio} 
                onChange={handleChange}
                 />
            </div>
    
          <div className="flex-editar" >

            <button className="form__enviar" type="submit">Guardar</button>

             <button className="form__enviar" type="reset" onClick={handleReset}>Limpiar</button>
             
             {/* <button className="form__enviar" type="reset" onClick={handleReset}>Eliminar</button> */}
          </div>

          </form>
        
        </>
     )
}

export default FormulAlta