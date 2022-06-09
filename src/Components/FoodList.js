import React from "react";
import react, { useEffect, useState } from "react";
import fooddata1 from "./OFF_subset17.json";
import image from "../Image/icon.png";

export default function FoodList() {
  // Display an Food data in a card
  // console.log("Hello");
  // setSate
  const [fooddata] = React.useState(fooddata1);

  return (
    <div>
      {fooddata &&
        Object.values(fooddata).map((item) => (
          <div className="ml-5  p-2 container-fluid">
            {console.log("******", item)}
            <div className="card">
              <div className="card-body">
                <div className="row" key={item.code}>
                  <div className="col-3">
                    <img src={image} alt="icon"></img>
                  </div>
                  <div className="col-9">
                    <div className="row" key={item.code}>
                      <div className="col-6">{item.product_name}</div>
                      <div className="col-6"> {item.generic_name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
