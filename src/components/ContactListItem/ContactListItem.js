import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <p>
        {name}: {number}
      </p>{' '}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
