import { useState } from 'react';
import './App.css';

function App() {
  const [selectedAnimals, setSelectedAnimals] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setSelectedAnimals(
      selectedAnimals.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSelectAll = () => {
    setSelectedAnimals(
      selectedAnimals.map((item) => ({ ...item, checked: true }))
    );
  };

  return (
    <div>
      <ul>
        {selectedAnimals.map((item, index) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.label}
          </li>
        ))}
      </ul>
      <button onClick={handleSelectAll}>Select All</button>
    </div>
  );
}

export default App;
