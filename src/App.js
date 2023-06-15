import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import './style.css';
import {useState, useEffect} from "react";
import React from 'react'



function App() {
  const[data, setData] = useState ([]);
  const[todoList, setTodoList] = useState ([]);

  useEffect(()=>{
    setTodoList(data.filter(item =>{
      return !item.deleted
    }))
  }, [data])
  return (
    <div className="todo">

      <Header data={data} setData={setData}/>
      <Main todoList={todoList}/>
      <Footer />
 
    </div>
  );
}

export default App;
