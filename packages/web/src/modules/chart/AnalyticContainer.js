import React, { Component } from "react";
import {VictoryPie, VictoryLabel}  from "victory";

import {
  HeroContainer,
  LoginWrapper,
  Title,
} from "src/components/index";
import { PieChart } from "src/components/charts/PieChart";
import { BarChart } from "src/components/charts/BarChart";
import { AreaChart } from "src/components/charts/AreaChart";
import { VoronoiChart } from "src/components/charts/VornoiChart";
// one dumb component in which we pass props and actions
export default class AnaylticContainer extends Component {
    render() {
    return (
      <HeroContainer>
         <LoginWrapper>
        <Title>Title</Title>
        <PieChart> </PieChart>
        <AreaChart> </AreaChart>
        <BarChart> </BarChart>
        <VoronoiChart> </VoronoiChart>
        </LoginWrapper>
        </HeroContainer>
    );
  }
}


