import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const [transactions, setTransactions] = useState([
    { id: 1, date: "2023-05-17", name: "Bakery", status: "Success", amount: -450.0 },
    { id: 2, date: "2023-05-16", name: "Relaince Store", status: "Success", amount: -1100.0 },
    { id: 3, date: "2023-05-15", name: "Grocery Store", status: "Failed", amount: 0.0 },
    { id: 4, date: "2023-05-29", name: "Grocery Store", status: "Success", amount: -870.0 }
  ]);

  const history = useHistory();

  const handleLogout = () => {
    // Perform logout actions here
    // For example, clear user session, reset state, etc.
    history.push("/");
  };

  return (
    <section className="navbar-bg">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">PalmPay</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className="navbar-icon">
                <label htmlFor="name">
                  <i className="zmdi zmdi-notifications material-icons-name"></i>
                </label>
              </div>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/"></NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-style btn-style-border" type="button" onClick={handleLogout}>Logout</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container1">
        <div className="dashboard-contents">
          <h1 className="dashboard-title">User Dashboard</h1>
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Previous Debit</h5>
                <p className="card-text">Rs.1500.00</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bank Balance</h5>
                <p className="card-text">Rs.10000.00</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Reward Points</h5>
                <p className="card-text">500</p>
              </div>
            </div>
          </div>

          <div className="transaction-history">
            <h2 className="transaction-history-title">Transaction History</h2>
            <div class="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.name}</td>
                    <td>{transaction.status}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
