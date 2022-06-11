import React from "react";
import fooddata from "./OFF_subset17.json";

export default function FoodDescription(props) {
  console.log("rrr", props);
  return (
    <div>
      {fooddata &&
        Object.values(fooddata).map((item) => (
          <div className="ml-5  p-2 container-fluid">
            {console.log("******", item)}
            <div className="card">
              <div className="card-body">
                <div className="row" key={item.code}>
                  <div className="col-6">{item.product_name}</div>
                  <div className="col-5"> {item.generic_name}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
