import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  ErrorMessage,
  Field,
  Form,
  FormGroup,
  Button,
  Container,
} from './ContactForm.styled';

const contactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required!'),
  number: Yup.string()
    .min(8, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required!'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactsSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup htmlFor="name">
            Name
            <Field name="name" placeholder="Anna" />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup htmlFor="number">
            Number
            <Field name="number" placeholder="+45..." />
            <ErrorMessage name="number" component="span" />
          </FormGroup>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </Container>
  );
};
