function App(props) {
  document.title = 'Dashboard';

  const onLogout = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default App;
