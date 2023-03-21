import styled  from "styled-components";

export const StatStyled = styled.section`
  width: 50vw;
  border-style: solid;
  border-width: 2px;
  border-color:rgb(244, 245, 242);
  border-radius: 7px;
  margin-top: 10px;
`;

export const StatTitleStyled = styled.h2`
  margin: 10px 0;
`;

export const StatListStyled = styled.ul`
  display: flex;
`;

export const StatListItemStyled = styled.li`
  padding: 5px;
  border-top-width: 2px;
  border-top-style: solid;
  border-color:rgb(244, 245, 242);
  border-right-width: 2px;
  border-right-style: solid;
  &:last-child {
    border-right: none;
  }
  `;