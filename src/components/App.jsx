import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const updateFilter = newTopic => {
    setFilter(newTopic);
  };

  const resetFilter = () => {
    setFilter('');
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== contactId)
    );
  };

  const addContact = newContact => {
    const isOnContacts = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isOnContacts) {
      alert(`${newContact.name} already in phonebook!`);
      return;
    }

    const contact = { ...newContact, id: nanoid() };

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const visibleContacts = contacts.filter(contact => {
    const hasContact = contact.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    return hasContact;
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />

      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onUpdateFilter={updateFilter}
        onReset={resetFilter}
      />
      {visibleContacts.length > 0 && (
        <ContactList items={visibleContacts} onDelete={deleteContact} />
      )}
    </div>
  );
};
