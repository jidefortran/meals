import { Card } from "react-native-paper";
import styled from "styled-components";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
flex-direction:row;
padding-top: ${(props) => props.theme.space[2]}
padding-bottom: ${(props) => props.theme.space[2]}`;


export const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
  marginBottom: ${(props)=> props.theme.space[3]}
  marginTop: ${(props)=> props.theme.space[3]}
`;

export const RestaurantCardCover = styled(Card.Cover)`

padding: ${(props) => props.theme.space[3]},
 backgroundColor: ${(props) => props.theme.colors.bg.primary}`;

export const Address = styled.Text`
 font-size:${(props) => props.theme.fontSizes.caption}
 font-family: ${(props) => props.theme.fonts.body}
 `;
