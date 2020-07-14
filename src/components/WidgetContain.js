import React from "react";
import Wid from "./Widgets";
import "../styles.css";

const WidgetContain = () => {
  return (
    <div className="widget-contain">
      <div className="widget-container">
        <Wid.HeadWidget title="Earnings" bodyText="$4,574.75" />
        <Wid.HeadWidget title="Orders" bodyText="192" />
        <Wid.HeadWidget title="Clicks" bodyText="4,215" />
        <Wid.HeadWidget title="In Stock" bodyText="218 Units" />
      </div>
      <div className="widget-container body-container">
        <Wid.LineChartWidget />
        <Wid.PieChartWidget />
      </div>
    </div>
  );
};

export default WidgetContain;
