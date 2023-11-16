import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import img from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Cover
        img={img}
        heading={"OUR MENU"}
        content={
          "Would you like to try a dish?."
        }
      ></Cover>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <PopularMenu></PopularMenu>
      <Cover
        img={img}
        heading={"OUR MENU"}
        content={
          "Would you like to try a dish?."
        }
      ></Cover>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <PopularMenu></PopularMenu>
      <Cover
        img={img}
        heading={"OUR MENU"}
        content={
          "Would you like to try a dish?."
        }
      ></Cover>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
