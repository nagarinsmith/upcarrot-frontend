import React, { Component } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  background: rgba(0,0,0,0.9);
  z-index: 99999;
`;

@inject("routing", "store")
@observer
export default class SpinnerLoader extends Component {
  render() {
    const {
      store: {
        auth: { isLoading: isLoadingAuth},
        expense: { isLoading: isLoadingExpense },
        events: { isLoading: isLoadingEvents },
      }
    } = this.props;

    return (isLoadingAuth || isLoadingEvents || isLoadingExpense) ? (
      <SpinnerContainer>
        <Loader type="BallTriangle" color="#44f804" height={200} width={200} />
      </SpinnerContainer>
    ) : null;
  }
}
