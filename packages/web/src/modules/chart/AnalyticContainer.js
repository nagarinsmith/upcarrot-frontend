import React, { Component } from "react";
import { VictoryPie, VictoryLabel } from "victory";

import { HeroContainer, LoginWrapper, Title } from "src/components/index";
import { PieChart } from "src/components/charts/PieChart";
import { BarChart } from "src/components/charts/BarChart";
import { AreaChart } from "src/components/charts/AreaChart";
import { VoronoiChart } from "src/components/charts/VornoiChart";
import styled from "styled-components";
// one dumb component in which we pass props and actions

const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
`;

const Pie = styled.div`
  /* height: 400px;
  width: 400px; */
`;

export default class AnaylticContainer extends Component {
  render() {
    return (
      <Container>
        <div>
          <Pie>
            <PieChart />
          </Pie>
          <AreaChart />
        </div>
        <div>
          <BarChart />
          <VoronoiChart />
        </div>
      </Container>
    );
  }
}
