import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 12px;
`;

const AccentText = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-style: oblique;
`;

const Button = styled.button`
  background-color: rgb(231, 53, 53);
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
    background-color: rgb(184, 42, 42);
  }
`;

export { Wrapper, AccentText, Text, Button };
