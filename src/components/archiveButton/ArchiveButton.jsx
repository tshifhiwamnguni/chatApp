import React from "react";
import classes from "./ArchiveButton.module.scss";
import { BiArchiveIn } from "react-icons/bi";
function ArchiveButton() {
  return (
    <div className={classes.archive}>
      <div className={classes.left_panel}>
        <div>
          <BiArchiveIn className={classes.icon} />
        </div>
        <div>Archive</div>
      </div>

      <div className={classes.count}>2</div>
    </div>
  );
}

export default ArchiveButton;
