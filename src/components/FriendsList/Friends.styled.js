import styled from "styled-components";

export const  FriendsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 200px;
`;

export const HeaderStyled = styled.h2`
margin-bottom: 10; 
`;

export const FriendsListItemStyled = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items:center;
  border-style: solid;
  border-radius: 10px;
  background-color: white;
  padding: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
  &:first-child {
    margin-top: 10;
  }
  font-weight: 1000;
`;
