import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

/*see ohsnap for eg*/

function ContactForm(){
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function changeHandler(e){
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
              
                setErrorMessage('Your email is invalid');
            } else {
                if(!e.target.value.length){
                    console.log('invalid');
                    setErrorMessage(`${e.target.name} is required`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }
    function submitHandler(e){
        e.preventDefault();
        //console.log(formState);
    }

    return (
        <section id="#contact">
            <h1>Get in Touch</h1>
            <h3>Cell: (850)408-6736</h3>
            <h3>email: Cluce059@gmail.com</h3>
            <form id="contact-form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Your Name: </label>
                    <input type="text" onBlur={changeHandler} name={name} defaultValue={name}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="7" defaultValue={message} onBlur={changeHandler} />
                
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default ContactForm;