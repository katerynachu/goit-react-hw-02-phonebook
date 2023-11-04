import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import {ContactList} from './ContactList/ContactList'
import { ContactForm } from './ContactForm/ContactForm';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  updateContactList = (newValues) => {
 

    const newContact = {
     ...newValues,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  updateContactFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContactItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.updateContactList}/>
        <h2>Contacts</h2>
        <Filter
          onUpdate={this.updateContactFilter}
          filter={this.state.filter}
        />
      <ContactList contacts={filteredContactItems}/>
      </div>
    );
  }
}
export default App;
