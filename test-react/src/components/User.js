     import{Link} from 'react-router-dom';

     import './User.css';

   
   const User = ({id, name, dept, deleteCallback})=>{
       return( 
                       <div className='user' >
                       <h3>Name: {name} </h3>
                       <p>ID: {id} </p>
                       <p>Dept: {dept}</p>
                       <button onClick={()=>deleteCallback(id)}> Delete </button>
                 
                    <Link to={`/edit/${id}`}> Edit </Link>
  
           </div>
           );    
  
   } 
  
   export default User;

