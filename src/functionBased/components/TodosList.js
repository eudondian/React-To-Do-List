/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        handleChangeProps={props.handleChangeProps}
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        deleteTodoProps={props.deleteTodoProps}
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);
export default TodosList;
