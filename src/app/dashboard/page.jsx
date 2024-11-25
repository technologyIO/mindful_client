"use client"
import axios from 'axios';
import AllTodos from '@/components/AllTodos';
import { useEffect, useState } from 'react';

export default  function Dashboard() {
  // Fetch data using Axios on the server side
  const [todos, setTodos] = useState([]);
  const fetch = async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setTodos(res.data);
  }

  useEffect(()=>{
    fetch()
  },[])

  return (
    <div>
      <h1>Dashboard</h1>
      <AllTodos/>
      
      <ul>
        {/* {todos?.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))} */}
      </ul>
    </div>
  );
}
