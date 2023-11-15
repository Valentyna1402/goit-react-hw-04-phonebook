import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, Item } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <ContactItem contact={item} onDelete={onDelete} />
        </Item>
      ))}
    </List>
  );
};
