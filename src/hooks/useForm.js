import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const availableTimes = [
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

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
    availableTimes,
    onInputChange,
    onResetForm,
  };
};
