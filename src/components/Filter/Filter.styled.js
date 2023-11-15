import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Text = styled.label`
  font-size: 18px;
  font-weight: 500;
`;

const Field = styled.input`
  border: 2px solid grey;
  border-radius: 4px;
  font-size: 14px;
  min-width: 125px;
  padding: 8px;
  &:hover {
    border: 1px solid blue;
  }
`;

const Button = styled.button`
  background-color: rgb(255, 132, 37);
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
    background-color: rgb(209, 107, 30);
  }
`;

export { Wrapper, Text, Field, Button };
