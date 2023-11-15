import { Wrapper, Text, Field, Button } from './Filter.styled';

export const Filter = ({ filter, onUpdateFilter, onReset }) => {
  return (
    <Wrapper>
      <Text>Find contacts by name</Text>
      
      <Field
        type="text"
        value={filter}
        onChange={evt => onUpdateFilter(evt.target.value)}
      />
      <Button onClick={onReset}>Reset filter</Button>
    </Wrapper>
  );
};
