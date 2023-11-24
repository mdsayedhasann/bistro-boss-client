import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';



const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const location = useLocation()
  // const {user} = useContext(AuthContext)
  const { user } = useAuth();
  const navigate = useNavigate()
  const handleAddToCart = (food) => {
    if (user && user.email) {
      // Send Item to the database
      const cartItem = {
        menuId: _id, 
        email: user.email,
        name, 
        image, 
        price
      }
      axios.post('http://localhost:5000/carts', cartItem)
      .then(res => {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: `${name} has added to your Cart`,
          showConfirmButton: false,
          timer: 1500
        });
      })
    } else {
      Swal.fire({
        title: "You Are not Logged In",
        text: 'Please login to add to cart',
        icon: 'warning', 
        showDenyButton: true,
        showCancelButton: true,
        denyButtonText: `Don't save`,
        confirmButtonText: "Yes, login",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
