
import User from './User.js';
export default function UserList(users)
{    
	//const user= {
	//	id: 1,
	//	name: 'nahin',   const array korar por 
	//	dept: 'cs'

	//};
	return(
		`<table border=1>
		<tr>
		   <th>ID</th>
		   <th>NAME</th>
		   <th>DEPT</th>
		    <th>Action</th>

		</tr>
		${
			users.map((user)=>{ 
				return User(user); 

			}).join(" ")
		}

		</table>`





		);
}