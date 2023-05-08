import {fetchWeather} from './api/fetchWeather'

const App = () => {
  const [query, setQuery] = useState('')
  return (
    <div className='main-container'>
      <input
        type='text'
        className='search'
        placeholder='Search ...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default App
