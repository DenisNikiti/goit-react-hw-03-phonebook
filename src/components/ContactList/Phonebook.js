import { ReactPropTypes } from "react";

function Phonebook({onSubmit}) {
    const submit = event => {
           event.preventDefault()
        
       
        
        
         onSubmit( event.target.elements.name.value,event.target.elements.number.value)
       }
    return (


        <div>
            <h1>Phonebook</h1>
          
            
            <form onSubmit = {submit}>
                <label> Name</label>
  <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />

                
                <label>Number</label>
                
                 <input type="tel"name="number"pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"required/>  

              <button type="submit">Add</button>
    </form>


        
        
        </div>
          
)


}

export default Phonebook