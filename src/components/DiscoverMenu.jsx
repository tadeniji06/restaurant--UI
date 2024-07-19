import React from "react";
import Card from "./Card";
import round from "../../public/asset/images/soup.jpg";
import chic from "../../public/asset/images/chic.jpeg";
import cocktail from "../../public/asset/images/cocktail.jpeg";
import picnic from "../../public/asset/images/picnic.jpeg";
import steak from "../../public/asset/images/steak.jpeg";
import rice from "../../public/asset/images/rice.jpeg";
import Button from "./Button";

const DiscoverMenu = () => {
  return (
    <section className='bg-yellow-100 h-auto w-full rounded-md p-2'>
      <div className='flex justify-center text-center p-3'>
        <span className='text-primaryRed text-4xl font-light'>
          <i>Discover</i>
          <br />
          <h2 className='text-4xl text-black font-bold'>
            Our Menu
          </h2>
        </span>
      </div>
      <div className='flex flex-col grid-cols-3  shadow-md md:grid gap-3 p-3 h-[75%] top-2 bottom-3'>
        <Card className={"h-[350px] relative"}>
          <img
            className='w-full h-full object-cover'
            src={round}
          />
          <Button
            className={
              "absolute inset-0 w-[80px] h-[50px] m-auto"
            }
            title={"BreakFast"}
          />
        </Card>
        <Card className={"h-[350px] relative"}>
          <img
            className='w-full h-full object-cover'
            src={chic}
          />
          <Button
            className={
              "absolute inset-0 w-[80px] h-[50px] m-auto"
            }
            title={"Classic"}
          />
        </Card>
        <Card className={"h-[350px] relative"}>
          <img
            className='w-full h-full object-cover'
            src={cocktail}
          />
          <Button
            className={
              "absolute inset-0 w-[80px] h-[50px] m-auto"
            }
            title={"CockTails"}
          />
        </Card>
        <Card className={"h-[350px] relative"}>
          <img
            className='w-full h-full object-cover'
            src={steak}
          />
          <Button
            className={
              "absolute inset-0 w-[80px] h-[50px] m-auto"
            }
            title={"Steak"}
          />
        </Card>
        <Card className={"h-[350px] relative"}>
          <img
            className='w-full h-full object-cover'
            src={picnic}
          />
          <Button
            className={
              "absolute inset-0 w-[80px] h-[50px] m-auto"
            }
            title={"Picnic"}
          />
        </Card>
        <Card className={"h-[350px] relative"}>
          <img
            className='w-full h-full object-cover'
            src={rice}
          />
          <Button
            className={
              "absolute inset-0 w-[80px] h-[50px] m-auto"
            }
            title={"Dinner"}
          />
        </Card>
      </div>
    </section>
  );
};

export default DiscoverMenu;
