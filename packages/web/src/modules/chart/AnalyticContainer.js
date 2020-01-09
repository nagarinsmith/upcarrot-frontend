import React, { Component } from "react";
import {VictoryPie, VictoryLabel}  from "victory";

import {
  HeroContainer,
  LoginWrapper,
  Title,
} from "src/components/index";
import { PieChart } from "src/components/charts/PieChart";
import { AreaChart } from "src/components/charts/AreaChart";
// one dumb component in which we pass props and actions
export default class AnaylticContainer extends Component {
    render() {
    return (
      <HeroContainer>
         <LoginWrapper>
        <Title>Title</Title>
        <PieChart> </PieChart>
        <AreaChart> </AreaChart>
        </LoginWrapper>
        </HeroContainer>
    );
  }
}


