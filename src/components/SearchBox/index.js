import { useState } from "react"

export default function SearchBox({ requestSearch }) {
  const [value, setValue] = useState('');

  return (
    <div>
      <input type="text" placeholder='Search' value={value} onChange={e => setValue(e.target.value)} />
      <button data-testid='search-button' onClick={() => !!value && requestSearch(value)}>
        Search button
      </button>
    </div>
  )
}