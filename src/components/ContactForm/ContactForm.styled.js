import styled from 'styled-components';
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as ErrorMsg,
} from 'formik';

const ErrorMessage = styled(ErrorMsg)`
  color: red;
  font-size: 12px;
`;

const Field = styled(FormikField)`
  border: 2px solid grey;
  border-radius: 4px;
  font-size: 14px;
  min-width: 125px;
  padding: 8px;
  &:hover {
    border: 1px solid blue;
  }
`;

const Form = styled(FormikForm)`
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
`;

const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 12px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: rgb(76, 234, 81);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:active,
  &:focus,
  &:hover {
    background-color: rgb(54, 167, 57);
  }
`;

const Container = styled.div`
  padding: 20px;
  max-width: 100%;
  margin-bottom: 24px;
`;

export { ErrorMessage, Field, Form, FormGroup, Button, Container };
