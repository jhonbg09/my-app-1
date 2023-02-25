
import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Aca va nuestro componente */ }
        {/*<Greeting name = 'Jhon Betancourth'/>*/}
        <TaskListComponent/>
        
      </header>
    </div>
  );
}

export default App;