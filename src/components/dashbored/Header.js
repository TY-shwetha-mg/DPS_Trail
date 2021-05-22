//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import {FiLogOut } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai"


import {BsHouseDoorFill,
        BsServer,
    BsFileEarmarkText,
    BsFillDisplayFill,
    BsFillGearFill
} from "react-icons/bs";
import { FaStaylinked } from "react-icons/fa";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";



const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "" : ""}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <AiFillCaretRight/>
              ) : (
                <AiFillCaretRight/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<BsHouseDoorFill />}>
                Home
              </MenuItem>
              <MenuItem icon={<BsServer />}>Data</MenuItem>
              <MenuItem icon={<BsFileEarmarkText/>}>Develope</MenuItem>
              <MenuItem icon={<BsFillDisplayFill />}>Monitor</MenuItem>
              <MenuItem icon={<FaStaylinked />}>Integration</MenuItem>
              <MenuItem icon={<BsFillGearFill />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;