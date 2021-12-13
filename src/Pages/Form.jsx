import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import {
  Formulario,
  Input,
  InputPages,
  Select,
  Texarea,
} from "../Styles/Formulario";
import { useState } from "react/cjs/react.development";


const Form = () => {
  const [aprovedSend, setAprovedSend] = useState(false)
  return (
    <div className="container_form">
      <h1>Agregar nuevo libro</h1>
      <Formik
        initialValues={
          {
            nombre:"",
            autor:"",
            descripcion:"",
            paginas:""
          }
        }
        validate={(datos) =>{

          let errores = {};
          
          if(!datos.nombre) {
            errores.nombre = 'Por favor Ingrese el titulo de su libro';
          }

          if(!datos.autor) {
            errores.autor = 'Por favor seleccione un autor';
          }

          if(!datos.descripcion || datos.descripcion.maxLength > 800) {
            errores.descripcion = 'Por favor ingrese una breve descripción';
          }
          if(!datos.paginas) {
            errores.paginas = 'Por favor ingrese un numero de paginas mayor a 0';
          }else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(datos.paginas)){
            errores.paginas = 'Ingrese solo numeros';
          }
          return errores;
        }}
        onSubmit={(datos, {resetForm})=>{
          resetForm();
          console.log(datos);
          setAprovedSend(true)
          setTimeout(()=>
            setAprovedSend(false),4000);
        }}
      >

        {({handleSubmit, values, handleChange, handleBlur, errors, touched}) => (

        <Formulario onSubmit={handleSubmit}>
          <div className="div_inputs">
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nombre && errors.nombre && <div className="failed">{errors.nombre}</div>}
          </div>

          <div className="div_inputs">
            <Select
              name="autor"
              required
              value={values.autor}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled>
                Autor
              </option>
              <option value="Miguel de Cervantes">Miguel de Cervantes</option>
              <option value="Victor Hugo">Victor Hugo</option>
              <option value="Jane Austen">Jane Austen</option>
              <option value="Mary Shelley">Mary Shelley</option>
            </Select>
            {touched.autor && errors.autor && <div className="failed">{errors.autor}</div>}
          </div>

          <div className="div_inputs">
            <Texarea
              name="descripcion"
              placeholder="Descripción"
              cols="30"
              rows="5"
              required
              value={values.descripcion}
              maxLength={800}
              onChange={handleChange}
              onBlur={handleBlur}
            ></Texarea>
            {touched.descripcion && errors.descripcion && <div className="failed">{errors.descripcion}</div>}
          </div>
          <div className="div_inputs">
            <span>Páginas</span>
            <InputPages
              type="text"
              name="paginas"
              required
              value={values.paginas}
              min={1}
              maxLength={5}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Número"
            />
            {touched.paginas && errors.paginas && <div className="failed">{errors.paginas}</div>}
          </div>

          <div className="btn_group">
            <Link to="/">
              <button id="btn_cancel">Cancelar</button>
            </Link>

            <button id="btn_save" type="submit">
              Guardar
            </button>
          </div>
          {aprovedSend && <p className="aproved">¡ Envio exitoso !</p> }
          
        </Formulario>
        )}
      </Formik>
    </div>
  );
};

export default Form;
