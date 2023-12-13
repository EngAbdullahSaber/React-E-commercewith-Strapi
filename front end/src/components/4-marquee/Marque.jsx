import { Box } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
const Marque = () => {
  return (
    <Box>
      <Marquee className="d-flex" style={{ display: "flex" }}>
        <div className="mx-4 w-25" style={{ width: "25%", margin: "2rem 0" }}>
          <img
            src="src\assets\brand-01.png"
            style={{ width: "300%", height: "300%" }}
            alt="brand image"
          />
        </div>
        <div className="mx-4 w-25" style={{ width: "25%", margin: "2rem 0" }}>
          <img
            src="src/assets/brand-02.png"
            style={{ width: "300%", height: "300%" }}
            alt="brand image"
          />
        </div>
        <div className="mx-4 w-25" style={{ width: "25%", margin: "2rem 0" }}>
          <img
            src="src/assets/brand-03.png"
            style={{ width: "300%", height: "300%" }}
            alt="brand image"
          />
        </div>
        <div className="mx-4 w-25" style={{ width: "25%", margin: "2rem 0" }}>
          <img
            src="src/assets/brand-04.png"
            style={{ width: "300%", height: "300%" }}
            alt="brand image"
          />
        </div>
        <div className="mx-4 w-25" style={{ width: "25%", margin: "2rem 0" }}>
          <img
            src="src/assets/brand-05.png"
            style={{ width: "300%", height: "300%" }}
            alt="brand image"
          />
        </div>
        <div className="mx-4 w-25" style={{ width: "25%", margin: "2rem 0" }}>
          <img
            src="src/assets/brand-06.png"
            style={{ width: "300%", height: "300%" }}
            alt="brand image"
          />
        </div>
        <div className="mx-4 w-25" style={{ width: "25%", margin: "2rem 0" }}>
          <img
            src="src/assets/brand-07.png"
            style={{ width: "300%", height: "300%" }}
            alt="brand image"
          />
        </div>
        <div className="mx-4 w-25" style={{ width: "25%", margin: "2rem 0" }}>
          <img
            src="src/assets/brand-08.png"
            style={{ width: "300%", height: "300%" }}
            alt="brand image"
          />
        </div>
      </Marquee>
    </Box>
  );
};

export default Marque;
