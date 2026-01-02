import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (signal) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        { signal }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch user");
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

  useEffect(() => {
    const controller = new AbortController();
    fetchUser(controller.signal);

    return () => controller.abort(); // cleanup
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => fetchUser(new AbortController().signal)}>
          Retry
        </button>
      </div>
    );

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Company: {user?.company?.name}</p>
    </div>
  );
}

export default App;
