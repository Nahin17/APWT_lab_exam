
    import {Link} from 'react-router-dom';
  const Navbar = ()=> {
  	return(
           <div> 
           <Link to= '/'> Home |</Link>
           <Link to = '/create'> Create New User |</Link>
           <Link to = '/userList'> User List </Link>

           </div>
  		);
  	}
    export default Navbar;
  
 