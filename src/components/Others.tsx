import { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Spinner, Table } from 'react-bootstrap'
import {useSelectorTyped } from '../state-redux-toolkit/store';
import React from "react";
import { useNavigate } from "react-router-dom";

import Select from 'react-select'

const Others= () => {
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };

    const navigate = useNavigate()

      const gotoHome = () => {
        navigate('/')
      }

    // useEffect(() => {
    //     setOptions(store.users)
    // }, []);
  //users.length? store.users : store.users.filter(u => {users.find(ur=> ur.id == u.id)})
    return (
      <div>
        <div className="row">
          <div className="col-6">
          
          </div>
          <div className="col-6">
            <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
              <img
                alt=""
                src="https://mdbootstrap.com/img/Photos/Others/img%20(51).webp"
              />
            </div>
          </div>
        </div>
          
      </div>
    );
  }

export default React.memo(Others) ;