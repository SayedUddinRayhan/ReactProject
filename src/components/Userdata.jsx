import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Userdata() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      {user && (
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
          <p className="text-gray-600">Website: {user.website}</p>
        </div>
      )}
    </div>
  );
}

export default Userdata;
