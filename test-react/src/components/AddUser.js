
   
      import { useState} from 'react';


  const AddUser = ({status, callback})=> {
   
    const[ user,setUser] = useState({name:'', id: '', dept:''});

      const change= (e) => {
       
        const attr = e.target.name;
        const val = e.target.value;
        setUser({...user,[attr] : val});
      }

 const onSubmit = (e)=>{ 
            e.preventDefault();
            console.log(e.target.value);
           console.log(user);
         callback(user);
            }


  	return(
           <div> 

          <form onSubmit={onSubmit}>
            <table>
               <tr>
                  <td>Name </td>
                  <td> <input type='text' name='name' value={user.name} onChange={change} /></td>
                  </tr>
 
                <tr>
                  <td>Id </td>
                  <td> <input type='text' name='id' value={user.id} onChange={change}/></td>
                 </tr>


              <tr>
                  <td>Dept </td>
                  <td> <input type='text' name='dept' value={user.dept} onChange={change} /></td>
                 </tr>

               <tr>
                  <td> </td>
                  <td> <input type='submit' name='submit' value='Submit'/></td>
                </tr>
                </table>
                </form>

                 

                  

         
           </div> 
  		);
  }
  
  export default AddUser;