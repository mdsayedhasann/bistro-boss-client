import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import img from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../shared/MenuItem/MenuItem";
import SectionHeading from "../../components/SectionHeading";
import MenuCategory from "./MenuCategory/MenuCategory";
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladbg from '../../assets/menu/salad-bg.jpg'
import soupdbg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={img}
        heading={"OUR MENU"}
        content={"Would you like to try a dish?."}
      ></Cover>
      <SectionHeading
        subheading={"Don't Miss Today's offer"}
        heading={"Our Special Desert"}
      ></SectionHeading>
    <MenuCategory items={dessert}></MenuCategory>

      {/* Pizza */}
      <Cover
        img={img}
        heading={"OUR Pizza"}
        content={"Would you like to try a dish?."}
      ></Cover>
      <SectionHeading
        subheading={"Don't Miss Today's offer"}
        heading={"Our Special Pizzas"}
      ></SectionHeading>

      {/* Pizza Again */}
      <MenuCategory items={pizza} title={'pizza'} coverImage={pizzaBg}></MenuCategory>

      {/* Salad */}
      <MenuCategory items={salad} title={'salad'} coverImage={saladbg} ></MenuCategory>

      {/* Soup */}
      <MenuCategory items={soup} title={'soup'} coverImage={soupdbg} ></MenuCategory>

    </div>
  );
};

export default Menu;
