import './SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a character..."
        value={value}
        onChange={onChange}
        className="search-bar"
      />
    </div>
  )
}

export default SearchBar
