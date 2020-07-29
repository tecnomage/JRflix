import React from "react";

function FormField({label,nome,name,handleChange,type,tag}) {
    

  return (
    <div>
      <label>
        {label}
        </label>
        <input
          type={type}
          name={name}
          value={nome}
          onChange={handleChange}
        />
    </div>
  );
}

export default FormField;
