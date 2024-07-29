import './dashboard.css';

import Header from '../../components/Header';
import Nav from '../../components/Nav';

function Dashboard(props) {
  return (
    <>
      <Header/>
      <main className="main-container">
        <div className="main-div">
          <Nav/>
          <p>{props.propTest}</p>
        </div>
      </main>
    </>
  );
}

export default Dashboard;