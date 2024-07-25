/* 

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

const fetchUsers = async (query) => {
  const { data } = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return data.items;
};

const fetchUserDetails = async (username) => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`);
  return data;
};

const UserSearch = ({ setSearchQuery }) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users"
      />
      <button type="submit">Search</button>
    </form>
  );
};

const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserDetails = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery(['userDetails', username], () => fetchUserDetails(username));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user details</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
      <button onClick={() => navigate('/')}>Close</button>
    </div>
  );
};

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { data: users, refetch, isLoading, error } = useQuery(['users', searchQuery], () => fetchUsers(searchQuery), {
    enabled: false,
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (searchQuery) {
      refetch();
    }
  }, [searchQuery, refetch]);

  const handleCloseDetails = () => {
    navigate('/');
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <UserSearch setSearchQuery={setSearchQuery} />
        {isLoading && <div>Loading users...</div>}
        {error && <div>Error loading users</div>}
        {users && <UserList users={users} />}
      </div>
      <div style={{ width: '50%' }}>
        <Outlet />
      </div>
    </div>
  );
};



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="user/:username" element={<UserDetails />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
*/