import { useState } from 'react';

import Dropdown from './components/Dropdown'
import Counter from './Counter/Counter'

function App() {
  const [selectPokemon, setSelectPokemon] = useState(null)

  return (
    <div className='App'>
      <Counter />

      <h1 style={{ marginTop: '24px' }}>Dropdown abaixo:</h1>
      {!!selectPokemon && <pre>Yout pokemon: {selectPokemon}</pre>}
      <Dropdown  
        title='Selecione seu pokemon inicial'
        options={[
          'Bulbarsour',
          'Squirtle',
          'Charizard'
        ]}
        onSelect={setSelectPokemon}
      />
    </div>
  );
}

export default App;
