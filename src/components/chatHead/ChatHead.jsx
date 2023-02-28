// import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";

import SettingsDropdown from "../settingsDropdown/SettingsDropdown";

function ChatHead() {
  return (
    <div className="head">
          <div className="left-panel">
            <div className="icon_back">
              <BiArrowBack className="icon_back" />
            </div>
            <img src="" alt="" />
            <div className="user_details">
              <div>ANGEL</div>
              <div>online</div>
            </div>
          </div>
          <div className="right-panel">
            <div>
              <BsCameraVideoFill />
            </div>
            <div>
              {" "}
              <IoIosCall />
            </div>
            <div>
           <SettingsDropdown/>
            </div>
          </div>
        </div>
  )
}

export default ChatHead