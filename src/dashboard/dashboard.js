import Nav from "../nav/nav";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Books from "../Books/Books";
import Members from "../Members/Members";
import Transaction from "../Transaction/Transaction";
import "./dashboard.css"

export default function Dashboard() {
  return (
    <div className="dashboard-main-container">
      <div className="nav-container">
        <Nav />
      </div>
      <div className="right_container">
          <Outlet/>
      </div>
    </div>
  );
} 
