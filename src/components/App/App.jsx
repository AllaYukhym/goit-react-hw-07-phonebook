import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Container, Title, Subtitle } from './App.styled';
import { Form } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
        <Subtitle>Contacts</Subtitle>
        <Filter />
        {isLoading && !error && <b>Loading contacts...</b>}
        <ContactList />
      </Container>
    </>
  );
};
