import useCustomhookApi from "../customhooks/CustomhookApi";

function ApiCall() {
  const { data, loading, error } = useCustomhookApi(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h1>Loading.....</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div>
      <h1>Users List</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiCall;