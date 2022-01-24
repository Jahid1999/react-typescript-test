import { useEffect, useState } from "react";
import { Spinner, Table } from 'react-bootstrap'

import { shallowEqual, useDispatch } from 'react-redux';
import {useSelectorTyped } from '../state-redux-toolkit/store';
import {fetchUsers, fetchResource} from '../state-redux-toolkit/features/userSlice'

import axios from 'axios';
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isNewExpression } from "typescript";
import { stat } from "fs/promises";

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
  //(prev, next)=> prev.searchKey === next.searchKey && prev.isAPICallling === next.isAPICallling && prev.users === next.users

    const store = useSelectorTyped((state) => (
      {users:state.users.response , searchKey:state.tasks.searchKey, statusUserFetch: state.users.status, 
        statusResourceFetch: state.resources.status, totalResource: state.resources.response}), shallowEqual
      )
    const [users, setUsers] = useState<IUser[]>([])

    const dispatch = useDispatch()

    const navigate = useNavigate()
    // const fetchUsers = async () => {
    //       const response = await  api.get<IUserResponse>('/users?page=2')
    //       return response.data.data
    // }

    useEffect(() => {
        // dispatch(actioUsers.makeIsAPICallingTrue())
        // fetchUsers().then(res => {
        //   // setUsers(res)
        //   dispatch(actioUsers.fetchUsers(res))
        //   dispatch(actioUsers.makeIsAPICallingFalse())      
        // })  
        dispatch(fetchUsers())
        dispatch(fetchResource())
      }, []);

      const gotoHome = () => {
        navigate('/')
      }
  
    return (
      <div>
        {
          (store.statusUserFetch === 'pending') && (
          <div className="row"> 
            <div className="col-2"> <h4>Loading Users....</h4></div>
            <div className="col-3">  <Spinner style={{marginBottom:27}} animation="border" variant="danger" /> </div>
            
          </div>)
        }
        <button className="btn btn-block" onClick={gotoHome}>Go to Home</button>
        <div>
          {
            (store.statusResourceFetch === 'pending') && (
            <div className="row"> 
              <div className="col-2"> <h4>Loading Resources....</h4></div>
              <div className="col-3">  <Spinner style={{marginBottom:27}} animation="border" variant="success" /> </div>
              
            </div>)
          }
          <h5> Total {store.totalResource} resouces fetched.</h5>
        </div>
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
                     store?.users?.map(u =>
                        <tr key={u.id}>
                          <td>{u.id}</td>
                          <td>{u.first_name}</td>
                          <td>{u.last_name}</td>
                          <td>{u.email}</td> 
                        </tr>   
                        ) : store?.users?.filter(user => user.first_name.startsWith(store.searchKey)).map(u =>
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