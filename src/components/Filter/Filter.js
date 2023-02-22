

function Filter({list,filter}) {


 const search = (event) => {
                   
                                  
                    
                                    
        filter(list.filter( contact => contact.name.toLowerCase().includes(event.target.value.toLowerCase())))
          
     }

    return (
        <div>
            

             <p>Find contact</p>
            <input type="text" name="filter" onInput={search} />
         </div>
        
     )
}
export default Filter