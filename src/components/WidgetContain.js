import React from "react";
import "../styles.css";

import {HeadWidget, LineChartWidget, PieChartWidget} from "./Widgets";

const WidgetContain = () => {
  return (
    <div className="widget-contain">
      <div className="widget-container">
        <HeadWidget title="Earnings" bodyText="$4,574.75" />
        <HeadWidget title="Orders" bodyText="192" />
        <HeadWidget title="Clicks" bodyText="4,215" />
        <HeadWidget title="In Stock" bodyText="218 Units" />
      </div>
      <div className="widget-container body-container">
        <LineChartWidget />
        <PieChartWidget />
      </div>
    </div>
  );
};

export default WidgetContain;
