import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  /**
   *
   * @param {event} event
   * @param {Boolean} toLower Bandera para saber si se debe pasar a minusculas el valor por ejemplo en emails
   */
  const onInputChange = (event, toLower = false) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: toLower ? value.toLowerCase() : value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};
