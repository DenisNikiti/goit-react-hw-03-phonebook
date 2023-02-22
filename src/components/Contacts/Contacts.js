import Contact from "../Contact/Contact"



function Contacts({list,filter,deleteContact}) {
    
    return (

        <div>
           

        <ul>
            {list.map((contact) => {
                return (

                    <Contact id={contact.id} name={contact.name} number={contact.number} deleteContact={ deleteContact} />


                )
                


            }        )
            
            
            }

        </ul>


            </div>
    
    )
}
export default Contacts