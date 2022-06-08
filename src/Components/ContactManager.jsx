import React, {useState} from 'react'
import AddPersonForm from './AddPersonForm';
import PeopleList from './PeopleList';

export default function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
 
  function addPerson(name) {
    setContacts([...contacts, name]);
    console.log(contacts,name)
  }

  return (
    <div>
      <AddPersonForm formSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
