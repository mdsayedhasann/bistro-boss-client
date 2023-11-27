import React from "react";
import {
  FaBed,
  FaCalendar,
  FaCartShopping,
  FaEnvelope,
  FaHouse,
  FaList,
  FaSearchengin,
  FaStar,
  FaUser,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-56 bg-yellow-600 min-h-screen">
        <ul className="py-3 menu px-4">
          {isAdmin ? (
            <>
              <li className="flex justify-evenly items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHouse className="text-white"></FaHouse> Admin Home{" "}
                </NavLink>{" "}
              </li>
              <li className="flex justify-start items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/addItems">
                  {" "}
                  <FaUtensils className="text-white"></FaUtensils> Add Items{" "}
                </NavLink>{" "}
              </li>
              <li className="flex justify-start items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/manageItems">
                  <FaList className="text-white"></FaList> Manage Itens{" "}
                </NavLink>{" "}
              </li>
              <li className="flex justify-start items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/manageBookings  ">
                  {" "}
                  <FaBed className="text-white"></FaBed> Manage Bookings
                </NavLink>{" "}
              </li>
              <li className="flex justify-start items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/users">
                  {" "}
                  <FaUsers className="text-white"></FaUsers> All Users{" "}
                </NavLink>{" "}
              </li>
            </>
          ) : (
            <>
              <li className="flex justify-evenly items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHouse className="text-white"></FaHouse> User Home{" "}
                </NavLink>{" "}
              </li>
              <li className="flex justify-start items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/reservation">
                  {" "}
                  <FaCalendar className="text-white"></FaCalendar> Reservation{" "}
                </NavLink>{" "}
              </li>
              <li className="flex justify-start items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/cart">
                  <FaCartShopping className="text-white"></FaCartShopping> Cart{" "}
                </NavLink>{" "}
              </li>
              <li className="flex justify-start items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/review">
                  {" "}
                  <FaStar className="text-white"></FaStar> Add A Review{" "}
                </NavLink>{" "}
              </li>
              <li className="flex justify-start items-center space-x-2">
                {" "}
                <NavLink to="/dashboard/bookings">
                  {" "}
                  <FaList className="text-white"></FaList> My Bookings{" "}
                </NavLink>{" "}
              </li>
            </>
          )}

          <div className="divider"></div>

          <li className="flex justify-start items-center space-x-2">
            <NavLink to="/">
              {" "}
              <FaHouse className="text-white"></FaHouse> Home{" "}
            </NavLink>{" "}
          </li>
          <li className="flex justify-start items-center space-x-2">
            <NavLink to="/order/salad">
              {" "}
              <FaSearchengin className="text-white"></FaSearchengin> Menu{" "}
            </NavLink>{" "}
          </li>
          <li className="flex justify-start items-center space-x-2">
            <NavLink to="/dashboard/contact">
              {" "}
              <FaEnvelope className="text-white"></FaEnvelope> Contact{" "}
            </NavLink>{" "}
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
