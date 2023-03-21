import styled from "styled-components";

export const ProfileStyled = styled.div`
  width: 50vw;
  border-style: solid;
  border-width: 2px;
  border-color:rgb(244, 245, 242);
  border-radius: 7px;
  margin-top: 40px;
`;

export const DescriptionStyled = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgb(235, 235, 235);
`;

export const ImageStyled = styled.img`
  border-radius: 50%;
`;

export const NameStyled = styled.p`
  font-size: 50px;
  font-weight: 550;
  margin-bottom: 20px;
`;

export const TagStyled = styled.p`
  font-size: 30px; 
  color: darkgray;
  margin-bottom: 20px;
`;

export const LocationStyled = styled.p`
  font-size: 30px;
  color:darkgray;
`;

export const StatsList = styled.ul`
  display:flex;
  justify-content: space-between;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color:darkgray;
`;

export const StatsItemStyled = styled.li`
  font-size: 30px;
  padding: 20px 0 ;
  width: calc((100%) / 3);
  background-color: rgb(186, 211, 211);
  border-style: solid;
  border-color:darkgray;
  border-width: 2px;
`;

export const ItemQuantityStyled = styled.p`
  font-weight: 700;
`;