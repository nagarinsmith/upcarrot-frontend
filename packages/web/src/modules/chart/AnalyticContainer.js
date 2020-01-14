import React, { Component } from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { observer } from "mobx-react";

import { HeroContainer, LoginWrapper, Title } from "src/components/index";
import { PieChart } from "src/components/charts/PieChart";
import { BarChart } from "src/components/charts/BarChart";
import { AreaChart } from "src/components/charts/AreaChart";
import { VoronoiChart } from "src/components/charts/VornoiChart";
import styled from "styled-components";
// one dumb component in which we pass props and actions

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ pie }) => pie && "align-items: center"};
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const PieContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AnaylticContainer = observer(({ expenses }) => {
  // console.log("aici", expenses);
  return (
    <Container>
      <ChartContainer pie>
        <PieContainer>
          <PieChart expenses={expenses} />
        </PieContainer>
        <AreaChart expenses={expenses} />
      </ChartContainer>
      <ChartContainer>
        <BarChart />
        <VoronoiChart />
      </ChartContainer>
    </Container>
  );
});

export default AnaylticContainer;
