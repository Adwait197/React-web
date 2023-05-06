import Recipe from './Recipe'
import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const APP_ID = ""
  const APP_KEY = ""

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState("ice cream")

  useEffect(() => {
    getRecipe()
  }, [query])

  const getRecipe = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await res.json()
    setRecipes(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <h1 className='my'>Recipe App</h1>
        <hr />
        <input className="search-bar"
          type="text"
          placeholder='Looking for some recipe...'
          values={search}
          onChange={updateSearch} />
        <button className="search-button"
          type="submit"
        >Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={Math.random() * 1000000}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  )
}

export default App