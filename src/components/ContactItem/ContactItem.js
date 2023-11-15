import { Wrapper, AccentText, Text, Button } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <Wrapper>
      <Text>
        <AccentText>Name: </AccentText>
        {name}
      </Text>
      <Text>
        <AccentText>Number: </AccentText>
        {number}
      </Text>
      <Button onClick={() => onDelete(id)}>Delete contact</Button>
    </Wrapper>
  );
};
