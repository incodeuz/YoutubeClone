/** @format */

import React from 'react';
import Body from './Components/Body';
import FootNav from './Components/FootNav';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { DisplayFlexColumn, DisplayFlexContent } from './rootStyle';



const Root = () => {

  return (
    <div>
      <Navbar />
      <DisplayFlexContent>
        <Sidebar />
        <DisplayFlexColumn>
          <FootNav />
          <Body />
        </DisplayFlexColumn>
      </DisplayFlexContent>
    </div>
  )
};

export default Root;
