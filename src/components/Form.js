import React from "react";

const Form = ({ handleChange, data, handleSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre completo" type="text" name="name" onChange={handleChange} value={data.name} />
        <input placeholder="Email" type="mail" name="email" onChange={handleChange} value={data.email} />
        <input placeholder="telefono" type="tel" name="phone" onChange={handleChange} value={data.phone} />
        <button>Finalizar compras</button>
      </form>
    </div>
  );
};

export default Form;
