import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.component";

const isAndroid = Platform.OS === "android";



const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
  backgroundcolor: ${(props) => props.theme.colors.ui.quaternary};
  
  justifycontent: center;
`;
 const RestaurantList = styled(FlatList).attrs({
contentContainerStyle:{padding:16}

 })``
//   padding: ${(props) => props.theme.space[3]};
//   flex: 1;
//   backgroundcolor: ${(props) => props.theme.colors.ui.quaternary};
// `;



export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

     <FlatList 
     data={[{name:1},{name:2}]}
     renderItem={()=>  (
     <Spacer position="bottom"  size="medium">

      <RestaurantInfoCard />
     </Spacer>
     
     )}
     keyExtractor={(item)=> item.name}
     contentContainerStyle={{padding:16}} 
     />
     
       
     
    </SafeArea>
  );
};
