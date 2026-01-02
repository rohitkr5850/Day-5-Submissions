import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");
        setUser(null);

        const res = await fetch(
          `https://api.github.com/users/${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("User not found");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    return () => controller.abort(); // cancel old request
  }, [query]);

  return (
    <div>
      <input
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setQuery(username.trim())}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} width="100" />
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <p>Followers: {user.followers}</p>
        </div>
      )}
    </div>
  );
}

export default App;
