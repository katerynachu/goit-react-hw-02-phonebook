
import { Formik, Field, Form } from 'formik';

export const ContactForm = ({addContact}) =>{
return(
    <Formik

    initialValues={{
      name: '',
      number: ''
    }}

    onSubmit={(values,actions) => {
addContact(values)
actions.resetForm();
    }}
  >
    <Form>
      <label>Name
      <Field name="name" placeholder="Jane" />
      </label>
    

      <label>Number
      <Field name="number" type="number"/>
      </label>
      <button type="submit">add contact</button>
    </Form>
  </Formik>
)
}