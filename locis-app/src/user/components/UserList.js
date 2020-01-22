import React from 'react'
import './UserList.css'
import UserItem from './UserItem'

const UserList = props => {
  if(props.items.length === 0){
    return (
      <div className='center'>
            <h2>No user found</h2>
      </div>)
  }
  return <ul className='users-list'>
          {props.items.map((user) =>
             <UserItem
             key={user.id}
             id={user.id}
             image={user.image}
             placeCount={user.places} />)}
         </ul>

}
export default UserList
