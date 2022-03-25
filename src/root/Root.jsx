import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import FootNav from "../Components/FootNav";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { ButtonContext } from "../context/sidebarContext";
import { elementData } from "../mock/routeElements";
import { DisplayFlexColumn, DisplayFlexContent } from "./rootStyle";

const Root = () => {
  const [logo] = useContext(ButtonContext);
  return (
    <div
      style={{
        background: "#171717",
        height: "100%",
      }}
    >
      <Navbar />

         <Routes>
           {
             elementData.map(({element, path}) => {
               return <Route  path={path} element={element} />
             })
           }
         </Routes>



      <DisplayFlexContent>
        {logo && <Sidebar />}
        <DisplayFlexColumn>
          <FootNav />
        </DisplayFlexColumn>
      </DisplayFlexContent>
    </div>
  );
};

export default Root;
