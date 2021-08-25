import User from './User';

       const UserList= ({list, callback})=>{
       	console.log(list);
 
       // const user={id:1, name: 'Nahin', dept: 'se'};
   /*      const users=  [   

         {id:1, name: 'Nahin', dept: 'CSE'},
          {id:2, name: 'Naruto', dept: 'SE'},
           {id:3, name: 'Natsu', dept: 'CIS'},
            {id:4, name: 'Kakashi', dept: 'CS'}
            ];  


    */   
           return(
                
                <div>  
                {  
                    
              /*    users.map((user)=>{
                   return <User {...user} />
                   */

                   list.map((user)=>{
                   return <User {...user} deleteCallback={callback} />

                  })  
                } 

                </div>
 
           	)

       }

       export default UserList;