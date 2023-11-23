import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  // const {user} = useContext(AuthContext)
  const {user} = useAuth()

  const handleAddToCart = (food) => {
    console.log(food);
    if(user && user.email){
      // Send Item to the database
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must log in first before adding any product to your cart",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
          onClick={() => handleAddToCart(item)}
          className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
