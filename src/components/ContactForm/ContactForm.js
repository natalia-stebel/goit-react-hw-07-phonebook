import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from './../../contactStorage/contactsSlice';
import css from './ContactForm.module.css';
import { getContacts } from './../../contactStorage/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contactsItems.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in your list`);
    }

    dispatch(addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.contactForm}>
      <form action="submit" onSubmit={handleSubmit}>
        <label className={css.label}>
          <span className={css.name}>Name</span>
          <input
            className={css.input}
            value={name}
            onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label}>
          <span className={css.name}>Number</span>
          <input
            className={css.input}
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.addButton}>
          Add contact
        </button>
      </form>
      <ToastContainer autoClose={2000} />
    </div>
  );
}
