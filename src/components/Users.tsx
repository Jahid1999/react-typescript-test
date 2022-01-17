import { useEffect } from "react";
import { Table } from 'react-bootstrap'

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import  {userActionCreators}  from '../state';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';


// interface dataType {
//     id: number,
//     first_name: string,
//     last_name: string,
//     email: string
// }

const Users= () => {

    const dispatch = useDispatch();
    const {fetchUsers } = bindActionCreators(userActionCreators, dispatch)

    const users = useSelector((state: RootState) => state.users)
    const serachKey = useSelector((state: RootState) => state.task.searchKey)

    useEffect(() => {
        fetchUsers()
      }, []);

    //   const table_data = users.map((user) => { 
    //       return (
    //         <tr key={user["id"]}>
    //             <td>{user['id']}</td>
    //             <td>{user['first_name']}</td>
    //             <td>{user['last_name']}</td>
    //             <td>{user['email']}</td>
    //         </tr>
    //       )   
    // })

    // const table_data = users.map((user : any) => { 
    //     return (
    //       <tr key={user.id}>
    //           <td>{user.id}</td>
    //           <td>{user.first_name}</td>
    //           <td>{user.last_name}</td>
    //           <td>{user.email}</td>
    //       </tr>
    //     )   
    // })
    return (
      <div>
          <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     serachKey ==="" ?
                       users.map(u =>
                        <tr key={u.id}>
                          <td>{u.id}</td>
                          <td>{u.first_name}</td>
                          <td>{u.last_name}</td>
                          <td>{u.email}</td> 
                        </tr>   
                        ) : users.filter(user => user.first_name.startsWith(serachKey)).map(u =>
                          <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.first_name}</td>
                            <td>{u.last_name}</td>
                            <td>{u.email}</td> 
                          </tr>   
                          )
                   }
                </tbody>
           </Table>
          
      </div>
    );
  }

export default Users;