import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import img from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../shared/MenuItem/MenuItem";

const Menu = () => {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')
  const offered = menu.filter(item => item.category === 'offered')
  const drinks = menu.filter(item => item.category === 'drinks')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={img}
        heading={"OUR MENU"}
        content={
          "Would you like to try a dish?."
        }
      ></Cover>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                {
                dessert.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                
                }
      </div>

      {/* Pizza */}
      <Cover
        img={img}
        heading={"OUR Pizza"}
        content={
          "Would you like to try a dish?."
        }
      ></Cover>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                {
                pizza.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                
                }
      </div>


    </div>
  );
};

export default Menu;
