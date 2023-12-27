import FilterBar from './components/FilterBar'
import InfoBarList from './components/InfoBarList'
import Background from './components/Background'
import './App.css'
import data from '../data.json'
import { useEffect, useState } from 'react'

function App() {
  const [arr, setArr] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if(filter.length == 0) {
      setArr(data);
      return;
    }

    const filterInfo = ({ role, level, languages, tools }) => {
      const arrSet = [ role, level, ...languages, ...tools ];
      return filter.every(prop => Object.values(arrSet).includes(prop));
    }

    setArr(data.filter(info => filterInfo(info)));
  }, [filter]);

  return (
    <div className="wrapper">
      <Background></Background>

      <div className="container">
        {
          filter.length > 0 && <FilterBar filter={filter} setFilter={setFilter} ></FilterBar>
        }
        <InfoBarList filter={filter} arr={arr} setFilter={setFilter} ></InfoBarList>
      </div>
    </div>
  )
}

export default App
