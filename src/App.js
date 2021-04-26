import './App.css';

const tasks = ['Acordar', 'Escovar os dentes',  'Tomar Banho', 'Estudar'];
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>

      <main className="App-main">
        <ol className="App-list">
          {tasks.map((theTask) => task(theTask))}
        </ol>
      </main>
    </div>
  );
}

export default App;
