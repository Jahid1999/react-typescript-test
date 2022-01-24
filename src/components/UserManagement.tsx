import { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Spinner, Table } from 'react-bootstrap'
import {useSelectorTyped } from '../state-redux-toolkit/store';
import React from "react";
import { useNavigate } from "react-router-dom";

import Select from 'react-select'
import { shallowEqual } from "react-redux";

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users= () => {

    const store = useSelectorTyped((state) => (
      {users:state.users.response , searchKey:state.tasks.searchKey, isAPICalling: state.users.status}), shallowEqual)
      
    const [users, setUsers] = useState<IUser[]>([])
    const [options, setOptions] = useState<IUser[]>([])


    const [selectedOption, setSelectedOption] = useState<IUser>({} as IUser);

   const handleChange = (selectedOption : any) => {
      let selectedCustomers = [...users, selectedOption]   
      setUsers(selectedCustomers)   

      let updatedOptions = options.filter(op => op.id != selectedOption.id)
      setOptions(updatedOptions)
    };

    const navigate = useNavigate()

      const gotoHome = () => {
        navigate('/')
      }

    useEffect(() => {
      if(store.users)
          setOptions(store.users)
    }, []);
  //users.length? store.users : store.users.filter(u => {users.find(ur=> ur.id == u.id)})
    return (
      <div>
        {
          store.isAPICalling === 'pending' && (
          <div className="row"> 
            <div className="col-2"> <h4>Loading....</h4></div>
            <div className="col-3">  <Spinner style={{marginBottom:27}} animation="border" variant="danger" /> </div>
            
          </div>)
        }
        <button className="btn btn-block" style={{backgroundColor:'gray'}} onClick={gotoHome}>Go to Home</button>
       <Select options={options} 
       value={selectedOption}
        onChange={handleChange} getOptionLabel={e => e?.first_name} placeholder="Select User" />

        <br />  <br />
        <hr />
        <h4>Selected Customer's Table</h4>

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
                     store.searchKey ==="" ?
                     users.map(u =>
                        <tr key={u.id}>
                          <td>{u.id}</td>
                          <td>{u.first_name}</td>
                          <td>{u.last_name}</td>
                          <td>{u.email}</td> 
                        </tr>   
                        ) : users.filter(user => user.first_name.startsWith(store.searchKey)).map(u =>
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

export default React.memo(Users) ;