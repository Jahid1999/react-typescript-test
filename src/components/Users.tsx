import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'

import { useDispatch } from 'react-redux';
import {useSelectorTyped } from '../state-redux-toolkit/store';
import {actioUsers, fetchUsers} from '../state-redux-toolkit/features/userSlice'

import axios from 'axios';
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const api = axios.create({baseURL:'https://reqres.in/api'})

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
}

const Users= () => {

    const store = useSelectorTyped((state) => ({users:state.users.users , searchKey:state.tasks.searchKey}))
    const [users, setUsers] = useState<IUser[]>([])

    const navigate = useNavigate()
    const fetchUsers = async () => {
          const response = await  api.get<IUserResponse>('/users?page=2')
          return response.data.data
    }

    useEffect(() => {
        fetchUsers().then(res => {
          setUsers(res)
        })        
      }, []);

      const gotoHome = () => {
        navigate('/')
      }
  
    return (
      <div>
        <button className="btn btn-block" onClick={gotoHome}>Go to Home</button>
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