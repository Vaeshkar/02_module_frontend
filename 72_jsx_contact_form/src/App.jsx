import { useState } from 'react'
import './App.css'

const App = () => {
  // contact form object
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // change handler
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Precent default, validate and log it
  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmpty = Object.values(form).some((value) => value.trim() === '');
    if (hasEmpty) {
      alert('Please fill out all fields.');
      return;
    }

    alert('Form submitted succesfully. Thank you.')
    console.log('Form submitted:', form);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='name' autoComplete='name' value={form.name} onChange={handleChange} />
      <input type="text" name='email' placeholder='email' autoComplete='email' value={form.email} onChange={handleChange} />
      <input type="text" name='phone' placeholder='phonenumber' autoComplete='phone' value={form.phone} onChange={handleChange} />
      <textarea name="message" placeholder='enter a message' autoComplete='off' value={form.message} onChange={handleChange} />
      <button type='submit'>Send</button>
    </form>
  );
};

export default App;

