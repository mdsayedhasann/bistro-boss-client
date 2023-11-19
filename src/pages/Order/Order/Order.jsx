import React, { useState } from "react";
import Cover from "../../shared/Cover/Cover";
import shopBg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import Menu from "../../Menu/Menu";
import Featured from "../../Home/Featured/Featured";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "./OrderTab";
// import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        img={shopBg}
        heading={"Order Now"}
        content={"Order Online Our Food"}
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
