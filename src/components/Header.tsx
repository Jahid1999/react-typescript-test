import Button from './Button'
import {useLocation} from 'react-router-dom'
import React from 'react';

interface Props {
    title?: string,
    onAddClick: () => void,
    showAdd: boolean
}
export const Header: React.FC<Props> =  ({title, onAddClick, showAdd}) => {
    const location = useLocation();
    return (
      <header className="header">
        {
          location.pathname==='/users' ? <h1>List of Users</h1> :<h1>{title}</h1>
        }
          
          { 
            location.pathname === '/' && (
              onAddClick && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAddClick}/>
            )
            
          }
          
      </header>
    );
  }

  Header.defaultProps = {
      title: 'Task Tracker'
  }
  
  export default React.memo(Header) ;