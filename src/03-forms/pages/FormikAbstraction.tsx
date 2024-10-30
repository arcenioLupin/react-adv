import { Formik, Form,  } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import {MyInputText, MySelect, MyCheckbox}  from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}

        onSubmit={(values) => {
          console.log(values);
        }}

        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string().required("Requerido").email("Email invalido"),
          terms: Yup.boolean().oneOf(
            [true],
            "Debe aceptar los terminos y condiciones"
          ),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "No puede elegir este tipo de trabajo")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyInputText label="First Name" name="firstName" placeholder="Arcenio"/>
            <MyInputText label="Last Name" name="lastName" placeholder="Vilca"/>
            <MyInputText label="Email Address" name="email"  type="email" placeholder="algo@gmail.com"/>

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="software-developer">Software developer</option>
              <option value="scrum-master">Scrum master</option>
              <option value="product-owner">Product Owner</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">It Jr.</option>
            </MySelect>
            <MyCheckbox name="terms"  label="Terms and conditions" />
    
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

