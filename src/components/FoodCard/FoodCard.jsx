import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const handleAddToCart = (food) => {
    console.log(food);
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
