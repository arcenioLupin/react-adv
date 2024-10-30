import { FormEvent } from "react";
import "../styles/styles.css";
import useForm from "../hooks/useForm";
export const RegisterPage = () => {

  const { formData, isValidEmail, onChange, resetForm, name, email, password1, password2 } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

 
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };



  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        { name.trim().length <= 0 &&<span>Este campo es necesario</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email.trim()) && <span>Correo no valido</span> }
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        { password1.trim().length <= 0 &&<span>Este campo es necesario</span>}
        { password1.trim().length > 0 && password1.trim().length  < 6 && <span>La contraseña debe tener 6 o más caracteres</span>}


        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        { password2.trim().length <= 0 &&<span>Este campo es necesario</span>}
        { password2.trim().length > 0 && password2 !== password1 && <span>Las contraseñas no son iguales</span>}


        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  );
};
