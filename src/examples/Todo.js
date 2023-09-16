import { useState } from 'react';
import '../App.css'

const Todo = () => {

  /**
   * {
   *  task : "Task name",
   *  completed: false
   * }
   */
  const [todoList, setTodoList] = useState([])

  function addTaskToList(e){
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let formDataObj = Object.fromEntries(formData.entries())
    formDataObj.completed = false
    setTodoList([...todoList, formDataObj])
  }

  const removeTask = (e) => {
    let removeIt = e.target.value;
    let newArr = todoList.filter(function(val) {
      if(val.task === removeIt) {
        return false;
      }
      else {
        return true;
      }
    })
    setTodoList(newArr)
  }

  function markDone(e) {
    let markIt = e.target.value;
    todoList.map(function(val) {
      if(val.task === markIt) {
        val.completed = true
      }
    })
    setTodoList([...todoList])
  }

  return (
    <>
      <h1>Todo List</h1>

      <div className='card'>
        <form className='flex-apart' onSubmit={addTaskToList}>
          <input type="text" name="task" placeholder='Add tasks...'/>
          <button type="submit">Add</button>
        </form>
      </div>
      <h3>Your Todo List:</h3>

      <div className=''>
        {
          todoList.map(function(val, index) {
            return(
              <div className={val.completed ? "card flex-apart done" : "card flex-apart"} key={index}>
                <span>{val.task}</span>
                <span>
                  <button className='done' onClick={markDone} value={val.task}>Done</button>
                  &nbsp;
                  <button onClick={removeTask} value={val.task}>x</button>
                </span>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Todo