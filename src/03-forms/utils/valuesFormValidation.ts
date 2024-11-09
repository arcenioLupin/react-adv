import * as Yup from "yup";

export const formInitialValues = {
    name: "",
    email: "",
    password1: "",
    password2: "",
  };

 export const formValidationSchema = {
    name:  Yup.string()
                 .min(2,"El nombre debe ser mínimo de 2 caracteres")
                 .max(15,"En nombre no puede ser mayor de 15 caracteres")
                 .required('Requerido'),
    
    email: Yup.string()
               .required('Requerido')
               .email('Email inválido'),
    password1: Yup.string()
                  .max(6,'No puede ser mayor a 6 caracteres')
                  .required('requerido'),
    password2: Yup.string()
                  .oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir')
                  .max(6,'No puede ser mayor a 6 caracteres')
                  .required('requerido')
  }