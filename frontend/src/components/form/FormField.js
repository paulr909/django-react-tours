import React from "react";
import "./FormField.css";
import { useValidation } from "./FieldValidation";

export function FormFieldHook({ name, label, value, onUpdate }) {
  const [ErrorDisplay, validate] = useValidation();
  const onChange = event => {
    validate(event);
    onUpdate(name, event.target.value);
  };
  return (
    <div key={name} className="FormField">
      <label>{label}</label>
      <br />
      <input type="text" name={name} value={value} onChange={onChange} />
      <ErrorDisplay />
    </div>
  );
}

// export function FormField({ name, label, value, onUpdate }) {
//   const onChange = event => {
//     onUpdate(name, event.target.value);
//   };
//   return (
//     <div key={name} className="FormField">
//       <label>{label}</label>
//       <br />
//       <input type="text" name={name} value={value} onChange={onChange} />
//     </div>
//   );
// }
