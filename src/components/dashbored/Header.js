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

import { FiLogOut } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai"


import {
  BsHouseDoorFill,
  BsServer,
  BsFileEarmarkText,
  BsFillDisplayFill,
  BsFillGearFill
} from "react-icons/bs";
import { FaStaylinked } from "react-icons/fa";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import Modal from "./Modal";
import {Dropdown} from 'react-bootstrap'




const Header = () => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [modal, setmodal] = useState(false)
  const [show, setshow] = useState(false)



  return (
    <>
      <Modal show={modal}>
        <div className="card col-md-3 " id="modal">
          <span>
            <span className="font-weight-blod" style={{ fontSize: '30px' }}>Data Sources</span>

           <span>
          
            
           <Dropdown style={{display:'inline'}}>
              <Dropdown.Toggle className="btn  " cssClass='e-caret-hide' style={{marginLeft:'30%'}}  >
                <i className="fas fa-plus addbtn"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {setshow(true)}} > MySql </Dropdown.Item>
                <Dropdown.Item >Sqlserver</Dropdown.Item>
                <Dropdown.Item >SnowFlake </Dropdown.Item>
                <Dropdown.Item >awsredshift </Dropdown.Item>
                <Dropdown.Item >flatfile </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
           
           </span>

            <i onClick={() => { setmodal(false) }} class="fas fa-times-circle ml-3"></i>
          </span>
          <div class="mt-3"> 
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="filter resources by name" aria-label="Reference"
                            aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="referenceButton btn btn-outline-secondary" 
                                ><span><i className="fas fa-search"></i></span></button>
                        </div>
                    </div>
                </div>

        </div>

      </Modal>


      <Modal show={show}>
      <div className="card  col-sm-6 offset-4 mt-5" id="formCard">
        <div className="card-header ml-2 mt-3" id="formHead">
          Enter Connection Details
        </div>
        <form className="sqlform  col-sm-12 mt-3">
          <div className="form-group row">
            <label
              htmlFor="datasource"
              className="col-sm-3 col-form-label"
              id="sqlLable">
              Name of Datasource
            </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="sqlinput" placeholder="Enter Name of database" defaultValue ="" />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="url"
              className="col-sm-3 col-form-label"
              id="sqlLable">
              Url
            </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="sqlinput" placeholder="Enter Url" defaultValue ="" />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="port"
              className="col-sm-3 col-form-label"
              id="sqlLable">
              Port
            </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="sqlinput" placeholder="Enter Port No" defaultValue =""  />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="username"
              className="col-sm-3 col-form-label"
              id="sqlLable">
              UserName
            </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="sqlinput" placeholder="Enter Username" defaultValue ="" />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="password"
              className="col-sm-3 col-form-label"
              id="sqlLable" >
              Password
            </label>
            <div className="col-sm-8">
              <input type="password" className="form-control" id="sqlinput" placeholder="Enter Password" defaultValue =""  />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" id="linkbtn"  >
            Link
          </button>
        </form>
      </div>
      </Modal>
 


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
                <AiFillCaretRight />
              ) : (
                <AiFillCaretRight />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<BsHouseDoorFill />}>
                Home
              </MenuItem>
              <MenuItem onClick={() => { setmodal(true) }} icon={<BsServer />}>Data</MenuItem>
              <MenuItem icon={<BsFileEarmarkText />}>Develope</MenuItem>
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