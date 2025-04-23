import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import search from "../../Images/search.png"
import "./SearchBar.css"


const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState(""); // User input
  const [allFunds, setAllFunds] = useState([]); // Store all API results
  const [filteredResults, setFilteredResults] = useState([]); // Filtered results
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch all data once when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://redvisionweb.com/api/all-scheme-portfolio?apikey=351b03c24a79d2f40796037e0d8c2c49"
        );
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        if (!data.data || !Array.isArray(data.data)) throw new Error("Invalid data format");

        setAllFunds(data.data); // Store API response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data when user types
  useEffect(() => {
    if (searchQuery.length < 3) {
      setFilteredResults([]); // Clear results if query is too short
      return;
    }

    const debounceTimer = setTimeout(() => {
      const filtered = allFunds.filter((item) =>
        item.funddes.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(filtered);
    }, 300); // Debounce for performance

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, allFunds]);

  const handleSearch = (item) => {
    const slug = item.funddes
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");
    
    navigate(`/mf-single-fund/${slug}?id=${item.pcode}`);
    setSearchQuery("");
  };

  return (
    <div className="p-4">
      <div className="searchbar">
      <img src={search} alt="Search" />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md w-full"
          placeholder="Search Mutual Funds"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="loader">
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      {/* Display filtered results */}
      {filteredResults.length > 0 && (
        <ul className="search-result-box mt-3 border border-gray-200 rounded-md p-2 max-h-[300px] overflow-y-auto">
          {filteredResults.map((result, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-md mb-2 cursor-pointer" onClick={() => handleSearch(result)}>
              {result.funddes}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
