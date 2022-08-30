import React from "react";
import { Rating } from "@mui/material";


import blogs from "../Common/BlogApi";

export default function Blogs() {
  return (
    <div
      className="container-fluid "
      
    >
        
      <div className="container text-start">
        <div className="row">
          {blogs.map((value, i) => {
            const index = i;
            const key = value.key;
            const myStyle = {
              backgroundImage: `url(${value.image})`,
            };
            return (
              <div className="my-5 blog-block col-md-6 col-sm-12" key={i}>
                <div className="col-12 blog-image my-2" style={myStyle}></div>
                <h3 className="h3 mt-3" index={index} key={key}>
                  {value.title}
                </h3>
                <Rating />
                <p className="text-muted my-2">{value.date}</p>
                <p className="text-truncate my-2">{value.context}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
