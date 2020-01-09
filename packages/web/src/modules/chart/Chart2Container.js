import React, { Component } from "react";
import {VictoryChart, VictoryStack, VictoryArea, VictoryAxis, VictoryTheme}  from "victory";
import {
  HeroContainer,
  LoginWrapper,
  Title,
} from "src/components/index";

// one dumb component in which we pass props and actions
export default class ChartContainer2 extends Component {
    render() {
        return ( 
          <HeroContainer>
          <LoginWrapper>
        <Title>Title</Title>
            <VictoryChart height={500}
            events={[{
            childName: "all",
            target: "data",
            eventHandlers: {
                onClick: () => {
                    return [
            {
            childName: "area-1",
            target: "data",            
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "#F78914" }) })
          },
          {
            childName: "area-2",
            target: "data",
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "#92CD28" }) })
          }, {
            childName: "area-3",
            target: "data",
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "#B6EE56" }) })
          }, {
            childName: "area-4",
            target: "data",
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "#44f804" }) })
          }
        ];
      }
    }
  }]}
>

  <VictoryStack>

    <VictoryArea name="area-1"    
    style={ { labels: { fontSize: 15, fill: "white"}}}  
    data={[
          { x: "January", y: 5, label: "personal" },
          { x: "March", y: 10, label: "personal" },
          { x: "April", y: 7, label: "personal" },
          { x: "May", y: 14, label: "personal" }
      
     
        ]}
        />
    <VictoryArea name="area-2"    
       style={ { labels: { fontSize: 15, fill: "white"} }}       
    data={[
      { x: "January", y: 10, label: "maintenance" },
      { x: "March", y: 5, label: "maintenance" },
      { x: "April", y: 3, label: "maintenance" },
          { x: "May", y: 5, label: "maintenance" }
      

        ]}
        />
    <VictoryArea name="area-3"   
       style={ { labels: { fontSize: 15, fill: "white"} }}        
    data={[
       
          { x: "January", y: 7, label: "group" },  
          { x: "March", y: 2, label: "group" },
          { x: "April", y: 6, label: "group" },
          { x: "May", y: 7, label: "group" }
       

        ]}
        />
      
    
  </VictoryStack>
</VictoryChart>
</LoginWrapper>
</HeroContainer>
        );
      }
    }
    