
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  

  return (
     <div className="app">
      <h1>To-Do List</h1>
      {/*  Create to components to input data and show data in page  */}
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default App
