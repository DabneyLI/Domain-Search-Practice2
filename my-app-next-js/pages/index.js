// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>WHOIS Query</h1>
      <form method="GET" action="/results">
        <input name="query" type="search" placeholder="Enter domain (e.g., example.com)" required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
