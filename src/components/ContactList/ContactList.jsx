import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/selectors.js';
import { ContactListItem } from '../ContactListItem/ContactListItem.jsx';
import { List } from './ContactList.styled.js';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {filter
        ? visibleContacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))
        : contacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
