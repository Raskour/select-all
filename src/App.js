import { useState } from 'react';
import './App.css';

function App() {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleSelectAll = () => {
    setCheckboxes(
      checkboxes.map((checkbox) => ({ ...checkbox, checked: true }))
    );
  };

  return (
    <div>
      <ul>
        {checkboxes.map((checkbox, index) => (
          <li key={checkbox.id}>
            <input
              data-testid={`checkbox-${index + 1}`}
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            {checkbox.label}
          </li>
        ))}
      </ul>
      <button data-testid="button" onClick={handleSelectAll}>
        Select All
      </button>
    </div>
  );
}

export default App;
