import './dashboard.css';

import Header from '../../components/Header';
import Nav from '../../components/Nav';

function Dashboard() {
  return (
    <>
      <Header/>
      <main className="main-container">
        <div className="main-div">
          <Nav/>
          <h1>Dashboard</h1>
        </div>
      </main>
    </>
  );
}

export default Dashboard;