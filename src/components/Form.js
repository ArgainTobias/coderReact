import React from "react";

const Form = ({ handleChange, data, handleSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input placeholder="Full name" type="text" name="name" onChange={handleChange} value={data.name} required />
        <input placeholder="Email" type="mail" name="email" onChange={handleChange} value={data.email} required />
        <input placeholder="Email confirmation" type="mail" name="emailConfirmation" onChange={handleChange} value={data.emailConfirmation} required />
        <input placeholder="Phone" type="tel" name="phone" onChange={handleChange} value={data.phone} required />
        <button>Finalizar compra</button>
      </form>
    </div>
  );
};

export default Form;
