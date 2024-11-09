import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [ x : string ]: any;
}

export const MySelect = ( { label, ...props} : Props ) => {
  
   const [ field, meta] =    useField(props);

    return (
    <>
        <label htmlFor={props.id || props.name }>{label}</label>
        <select {...field } {...props }>
          <option value="">Seleccione un valor</option>
          {
            props.options.map((op: any) => <option key={op.id} value={op.id}>{op.label}</option>)
          }
           
          </select>
        <ErrorMessage name={props.name} component="span"/>       
    </>
  )
}


