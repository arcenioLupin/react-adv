
import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyInputText } from "../components";
import { formInitialValues, formValidationSchema } from "../utils/valuesFormValidation";
export const RegisterFormikPage = () => {


  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object(formValidationSchema)}
      >
       {({ handleReset}) => (
            <Form>
               <MyInputText label="Name" name="name" placeholder="Name"/>
               <MyInputText label="Email" name="email"  type="email" placeholder="Email"/>
               <MyInputText label="Password1" name="password1"  type="password" placeholder="Password"/>
               <MyInputText label="Password2" name="password2"  type="password" placeholder="Repeat Password"/>
               <button type="submit">Submit</button>
               <button type="button" onClick={handleReset}>Reset</button>

            </Form>
        )
       }

      </Formik>
     
    </div>
  );
};
