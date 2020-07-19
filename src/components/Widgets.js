import React from "react";
import "../styles.css";
import {BarC, LineC2} from "./Chart";

const HeadWidget = props => {
  return (
    <div className="head-widget">
      <div className="title">{props.title}</div>
      <hr class="rounded" />
      <div className="body">{props.bodyText}</div>
    </div>
  );
};

const LineChartWidget = props => {
  return (
    <div className="widget-container child-container">
      <h1>Units Sold - March 2020</h1>
      <LineC2 />
    </div>
  );
};

const PieChartWidget = props => {
  return (
    <div className="widget-container child-container">
      <h1>Inventory Level</h1>
      <BarC />
    </div>
  );
};

export { HeadWidget, LineChartWidget, PieChartWidget };
