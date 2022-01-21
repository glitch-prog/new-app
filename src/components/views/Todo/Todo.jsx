import React from 'react';

import { LogoutContainer } from '../../containers/Logout/Logout';
import DateButtton from '../../DateButtton';
// import { logout } from '../utils/logout';
// import { TODAY_DAY } from '../constants/constants';

export function TodoView({
  user,
  todos,
  setTodos,
  createTodo,
  handleChangeText,
  handleChangeUpdateText,
  handleClickUpdateText,
  handleClickDeleteTodo,
}) {
  // //////

  return (
    <div className='App'>
      {/* <DateButtton /> */}
      <input
        type='text'
        placeholder='name'
        onChange={handleChangeText}
      ></input>
      <button onClick={createTodo}>add</button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.test}</p>
            <input type='text' onChange={handleChangeUpdateText}></input>
            <button onClick={handleClickUpdateText(todo.id)}>Change</button>

            <button onClick={handleClickDeleteTodo(todo.id)}>Delete</button>
          </div>
        );
      })}
      <LogoutContainer />
    </div>
  );
}
