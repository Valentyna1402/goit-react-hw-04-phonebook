import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 16px;
  padding: 20px;
`;

const Item = styled.li`
  border: 1px solid grey;
  border-radius: 8px;
  background-color: rgba(255, 227, 227, 0.4);
`;

export { List, Item };
