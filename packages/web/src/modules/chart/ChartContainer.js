import React, { Component } from "react";
import {VictoryPie, VictoryLabel}  from "victory";

import {
  HeroContainer,
  LoginWrapper,
  Title,
} from "src/components/index";
// one dumb component in which we pass props and actions
export default class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  getData(){
  const json = '[{ "x": "January", "y": 2, "label":  "group" }, { "x": "January", "y": 3, "label":  "personal"}, { "x":"January", "y": 4, "label": "group" }, { "x": "January", "y": 5, "label": "maintenance" }, {"x": "January", "y": 6, "label": "personal" }]';
   const obj = JSON.parse(json);
    return obj;
  
  }
  
  render() {
    return (
      <HeroContainer>
         <LoginWrapper>
        <Title>Title</Title>
        <svg viewBox = "-60 10 800 800"> 
      <VictoryPie
        standalone={false}
         colorScale={["#92CD28", "#B6EE56", "#44f804", "#FFA33F", "#F78914" ]}
        padAngle={({ datum }) => datum.y}
        style={ { labels: { fontSize: 25, fill: "white"} }}
        labelRadius={170}
        innerRadius={150}
        width={600} height={600} 
        data={this.state.data}
/>
          <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 50, fill: "white"}}
          x={300} y={300}
          text="Ceva!"
        />
        </svg>
        </LoginWrapper>
        </HeroContainer>
    );
  }
}


