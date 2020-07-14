import React from "react";
import "../styles.css";

const HeaderBar = () => {
  return (
    <div className="headerbar">
      <i class="material-icons v-center-rel" style={{ fontSize: 28 }}>
        analytics
      </i>
      <span className="v-center-rel">Dashboard</span>
    </div>
  );
};

export default HeaderBar;
