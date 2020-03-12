import React from 'react';
import AddTodo from './AddTodo';
import Footer from '../components/Footer';
import VisibleTodoList from './VisibleTodoList'

const Todo = () => {
  return (
    <div>
      <AddTodo/>
      <VisibleTodoList />
      <Footer/>
    </div>
  );
}

export default Todo;