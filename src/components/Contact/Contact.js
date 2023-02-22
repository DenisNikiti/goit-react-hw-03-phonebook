function Contact({id,name,number,deleteContact}) {
    const click = () => {
         deleteContact(id)
      
     }
    return (
     

        <li key={id}>

        <p>{name}:{number}</p>

     <button type="button" onClick={click}>Delete</button>
        </li>

        
 )


}

export default Contact