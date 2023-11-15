import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(STORAGE_KEY);

    if (savedContacts !== null) {
      this.setState({
        contacts:  JSON.parse(savedContacts),
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
  };

  updateFilter = newTopic => {
    this.setState({
      filter: newTopic,
    });
  };

  resetFilter = () => {
    this.setState({
      filter: '',
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  addContact = newContact => {
    const isOnContacts = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isOnContacts) {
      alert(`${newContact.name} already in phonebook!`);
      return;
    }

    const contact = { ...newContact, id: nanoid() };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact => {
      const hasContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return hasContact;
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          onUpdateFilter={this.updateFilter}
          onReset={this.resetFilter}
        />
        {visibleContacts.length > 0 && (
          <ContactList items={visibleContacts} onDelete={this.deleteContact} />
        )}
      </div>
    );
  }
}
