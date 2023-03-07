import React, { useEffect, useState } from 'react';

export function SearchComponent() {
  const [storageSearch, setStorageSearch] = useState<string>(
    localStorage.getItem('jikSearch') ?? ''
  );

  useEffect(() => {
    if (storageSearch || storageSearch === '') {
      localStorage.setItem('jikSearch', storageSearch);
    }
  }, [storageSearch]);

  const handleSaveInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStorageSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" value={storageSearch} onChange={handleSaveInput}></input>
      <button>Search</button>
    </div>
  );
}
