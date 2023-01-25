import React from "react";
const key = process.env.NEXT_PUBLIC_GOOGLE_KEY;
import { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";

type Props = {};

export default function FoodBankCard({
  handleCard,
  element,
  moreInfo,
  cardIndex,
  index
}: any) {
  const cssLightMode = `
    hover:bg-blue-400 
    active:bg-blue-500`;

  const cssDarkMode = `
    dark:hover:bg-blue-800
    dark:active:bg-blue-900 `;

    const selectedCSS = `
    bg-green-400 
    dark:bg-green-800` 


  return (
    <Card
      onClick= {handleCard}
      className={`
      hover:cursor-pointer
      ${cssDarkMode} 
      ${cssLightMode}
      ${cardIndex === index ? selectedCSS : ""}
              `}>
      <h5 className="text-l font-bold tracking-tight text-gray-900  dark:text-white">
        {element.name}
      </h5>
      <p className="font-light text-gray-900 dark:text-gray-300">
        {element.address}
      </p>
      <Button
        onClick={() => {
          moreInfo();
        }}>
        More Info
        <svg
          className="ml-2 -mr-1 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
}
