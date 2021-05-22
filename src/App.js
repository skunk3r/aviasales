import React, {useState, useEffect} from 'react'
import Loader from './components/Loader.js'
import Logo from './components/Logo.js'
import FilterBar from './components/FilterBar.js'
import SortingBar from './components/SortingBar.js'
import Tickets from './components/Tickets.js'

function App() {

  const [loading, setLoading] = useState(true)
  const [tickets, setTickets] = useState([])
  const [filterNames, setFilter] = useState([
    {id: 4, name: 'Все', checked: false},
    {id: 0, name: "Без пересадок", checked: false},
    {id: 1, name: "1 пересадка", checked: false},
    {id: 2, name: "2 пересадки", checked: false},
    {id: 3, name: "3 пересадки", checked: false}
  ])
  const [sortingItems, setSortingItems] = useState([
    {id: 1, name: 'Самый дешевый', selected: true},
    {id: 2, name: "Самый быстрый", selected: false}
  ])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://front-test.beta.aviasales.ru/search')
    .then(response => response.json())
    .then(
      json => fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${json.searchId}`)
        .then(response => response.json())
        .then(json => {
          setTickets(json.tickets)
          setLoading(false)
          console.log(json)
        })
        .catch(err => {
          console.log(err)
          setError(true)
        })
      )
  }, [])
    
  function onChange(id) {
    
    setFilter(
      filterNames.map(item => {
        if (id === item.id) item.checked = !item.checked

        return item
      })
    )
  }

  function toggleSorting(id) {

    setSortingItems(
      sortingItems.map(item => {
        if (id === item.id && !item.selected) {
          sortingItems.map(item => {
            item.selected = !item.selected

            return item
          })
        }

        return item
      })
    )
  }

  return (
    <div className='wrapper'>

      <Logo />

      <main>

        <FilterBar filters={filterNames} onChange={onChange} />

        <div className='flex-column'>

          <SortingBar sortingItems={sortingItems} onToggle={toggleSorting} />
          
          {loading && <Loader />}

          {tickets.length > 0 ? <Tickets 
            props={tickets} 
            filters={filterNames}
            sorting={sortingItems} /> : 
            loading ? null : <p className='empty-content'>No Tickets</p>}

        </div>
      </main>
    </div>
  );
}

export default App;
