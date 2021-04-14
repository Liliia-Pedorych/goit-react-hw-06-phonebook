import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contactList.map(({ name, number, id }) => (
        <li key={id} className={styles.contactItem}>
          <p className={styles.contactInformation}>
            {name}: {number}
          </p>
          <button
            onClick={() => {
              onDeleteContact(id);
            }}
            className={styles.contactDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
