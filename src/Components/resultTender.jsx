import React, { useState, useEffect } from 'react';
import './result.css'; 

const SearchTenders = () => {
  const [filters, setFilters] = useState({
    category: '',
    tender_name: '',
    startDate: '',
    endDate: '',
    participant_name: '',
  });

  const [tenders, setTenders] = useState([]); // State to store fetched tenders
  const [filteredTenders, setFilteredTenders] = useState([]); // State to store filtered tenders
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await fetch('API_ENDPOINT'); // Replace with your API endpoint
        const data = await response.json();
        setTenders(data); // Set the fetched tenders
        setFilteredTenders(data); // Initialize filtered tenders with all fetched tenders
      } catch (error) {
        console.error('Error fetching tenders:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTenders();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    const filtered = tenders.filter(tender => {
      const tenderDate = new Date(tender.date);
      const startDate = new Date(filters.startDate);
      const endDate = new Date(filters.endDate);

      return (
        (filters.category === '' || tender.category.includes(filters.category)) &&
        (filters.tender_name === '' || tender.name.includes(filters.tender_name)) &&
        (filters.startDate === '' || tenderDate >= startDate) && // Check if tender date is after or on the start date
        (filters.endDate === '' || tenderDate <= endDate) && // Check if tender date is before or on the end date
        (filters.participant_name === '' || tender.participant.includes(filters.participant_name))
      );
    });

    setFilteredTenders(filtered);
    setHasSearched(true);
  };

  return (
    <div className="tender-filter-container">
      <h2>חיפוש מכרזים</h2>
      <div className="filter-inputs">
        <div className="input-group">
          <label className="label-category">קטגוריה</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={filters.category}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label className="label-category">שם מכרז</label>
          <input
            type="text"
            name="tender_name"
            placeholder="Enter tender name"
            value={filters.tender_name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label className="label-category">תאריך התחלה</label>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label className="label-category">תאריך סיום</label>
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label className="label-category">שם משתתף</label>
          <input
            type="text"
            name="participant_name"
            placeholder="Enter participant name"
            value={filters.participant_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <button onClick={handleSearch} className="search-button">חיפוש</button>
      <div className="tender-list">
        {loading ? (
          <p>טוען מכרזים...</p> // Loading message
        ) : hasSearched && filteredTenders.length > 0 ? (
          filteredTenders.map((tender) => (
            <div key={tender.id} className="tender-item">
              <p><strong>שם:</strong> {tender.name}</p>
              <p><strong>קטגוריה:</strong> {tender.category}</p>
              <p><strong>תאריך:</strong> {tender.date}</p>
              <p><strong>משתתף:</strong> {tender.participant}</p>
            </div>
          ))
        ) : (
          hasSearched && <p>אין תוצאות להצגה. אנא צמצם את החיפוש שלך.</p>
        )}
      </div>
    </div>
  );
};

export default SearchTenders;




