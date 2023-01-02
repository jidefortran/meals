import React from "react";
import styled from "styled-components";
import { View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import  open from '../../../../assets/open';
// import {Text} from './typography/text.component'
import {Text} from 'meals/src/features/restaurants/components/typography/text.component.js'

import star from "../../../../assets/star";
import { Spacer } from "./spacer/spacer.component";
import { Address, Icon, Info, Rating, RestaurantCard, RestaurantCardCover, Section, SectionEnd } from "./restaurant-info-card.styles";






const Open=styled(SvgXml)`
flex-direction: row;
`










export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon ="https://th.bing.com/th/id/R.ea8b0f566fa98bd623838f9c1081654d?rik=OR9L0RqMXk7sCw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fwebalys%2fkameleon.pics%2f512%2fImages-icon.png&ehk=8sC3ytWUMnNsHpNQuWBaHOdnSUS5Llmv%2fTqVPw3XRcI%3d&risl=&pid=ImgRaw&r=0",
    photos = [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27decd29317051.55ed9f08dffbb.jpg",
    ],
    address = "100 James Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray=Array.from(new Array(Math.floor (rating)))
  return (
    <>
    <RestaurantCard elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Info>

      <Text variant="label">{name}</Text>
      <Section>
      <Rating>
      {ratingArray.map(()=> 
        
        (
        <SvgXml xml={star} width={20} height={20}/>
        )
      )}
<SectionEnd>
  {isClosedTemporarily &&(<Text  variant ="error" style={{color:red}}>
    CLOSED TEMPORARILY
  </Text>)}
  <Spacer position="left" size="large">
  {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
  </Spacer>
  <Spacer position="left" size="large">
  <Icon source={{uri:icon}} />
  </Spacer>
</SectionEnd>
        </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
    </>
  );
};
