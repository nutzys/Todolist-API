import React from 'react'
import { Todo } from '../model/todo'
import TodoItem from './TodoItem'

interface Props {
    user: Todo[]
}
const UserList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.user.map(item => (
        <TodoItem
        title={item.title}
        userId={item.userId}
        key={item.id}
        />
      ))}
    </div>
  )
}

export default UserList
