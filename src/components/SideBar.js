import React from "react";
import "../styles.css";

const SideBar = () => {
  return (
    <div className="sidebar shadow">
      <i class="material-icons">analytics</i>
      <i class="material-icons">receipt</i>
      <i class="material-icons">shopping_bag</i>
      <i class="material-icons">feedback</i>
      <i class="material-icons">account_balance_wallet</i>
      <i
        class="material-icons"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        settings
      </i>
    </div>
  );
};

export default SideBar;
