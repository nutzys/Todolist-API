import React from 'react'
import { GetUsers } from '../api/fetchUsers'
import TodoItem from './TodoItem'

interface Props {
    userId: number,
}

const UserList: React.FC<Props> = (props) => {

    const {data: users} = GetUsers({
        userId: props.userId,
    })
  return (
    <div>
      {users?.map(item => (
        <TodoItem
        title={item.title}
        userId={item.userId}
        />
      ))}
    </div>
  )
}

export default UserList
