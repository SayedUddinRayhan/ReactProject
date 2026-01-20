import { useState } from "react";

function Api() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users from API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data.slice(0, 10));
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Clear users
  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Users List</h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button onClick={fetchUsers} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Get Data</button>
        <button onClick={clearUsers} className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">Clear</button>
      </div>

      {/* Loading */}
      {loading && <p className="text-center text-gray-500 mb-4">Loading users...</p>}

        {/* Users Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
            <div
                key={user.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
                <p className="text-gray-600">
                <span className="font-medium">Username:</span> {user.username}
                </p>
                <p className="text-gray-600">
                <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600">
                <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p className="text-gray-600">
                <span className="font-medium">Website:</span> {user.website}
                </p>
            </div>
            ))}
        </div>

      {/* No users message */}
      {!loading && users.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No users to display. Click "Get Data" to load users.</p>
      )}
    </div>
  );
}

export default Api;
