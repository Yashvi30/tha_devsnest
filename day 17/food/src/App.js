import './App.css';
import List from './components/list';

function App() {
  const data = [
    { name: 'Pizza', cal: 80 },
    { name: 'Burger', cal: 63 },
    { name: 'Coke', cal: 54},
    { name: 'Brownie', cal: 140},
    { name: 'Fried Rice', cal: 84},
    { name: 'Momos', cal: 97},
    { name: 'Cake', cal: 60}
  ]
  return (
    <div className='container'>
      <h1 className='list'>Calorie List</h1>
      <div className='cal-list'>
        <List data={ data } />
      </div>
    </div>
  );
}


export default App;
