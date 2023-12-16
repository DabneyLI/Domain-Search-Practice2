// pages/index.js
import React from 'react';

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    const response = await fetch(`/api/whois?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    console.log(data); // 或其他方式显示数据
  };

  return (
    <div>
      <h1>WHOIS Query</h1>
      <form onSubmit={handleSubmit}>
        <input name="query" type="search" placeholder="Enter domain (e.g., example.com)" required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
