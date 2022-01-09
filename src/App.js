import { useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from './redux/contacts/contacts-selectors';
import { getContacts } from './redux/contacts/contacts-selectors';
import { fetchContacts } from './redux/contacts/contacts-operations';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const searchContactByName = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const concurrentContact = searchContactByName();

  return (
    <>
      <Section title="Phonebook">
        <ContactForm></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList contacts={concurrentContact}></ContactList>
      </Section>
    </>
  );
}
