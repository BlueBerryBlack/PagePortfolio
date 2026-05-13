import styles from './Form.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

const Form = () => {

   const handleChange = (e) => {
     e.preventDefault()
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
        
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        console.log(e.target.name)
      };

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:4000/sendemail', 
      {method:"POST", 
      body:JSON.stringify({message:formData.message, name:formData.name, email:formData.email,}), 
      headers:{'Content-Type':"application/json"}})
    };

    const [formData, setFormData] = useState({
      name :'', email:'', message:''
    });

    return (

        <div className={styles.box}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
            type="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange} 
            required          
            />
            <Button 
            text='send message' 
            className={styles.media}       
            type="submit" >       
            </Button>
          </form>
        </div>
    );
};

export default Form;