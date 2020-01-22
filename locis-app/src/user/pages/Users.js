import React from 'react'
import UserList from '../components/UserList'
const Users = () => {
  const USERS = [{id:'u1',name:'Mark Smith',image:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',places:3}];
  return (
    <UserList items={USERS} />
  )
}
export default Users
