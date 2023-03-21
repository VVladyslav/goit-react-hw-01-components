import styled from "styled-components";

export const TableStyled = styled.table`
width: 80%;
table-layout: fixed;
border: 3px solid wheat;
margin-bottom: 40px;
`;

export const TableHeadStyled = styled.thead`
background-color: beige;
`;

export const TableRowStyled = styled.tr`
&:nth-child(odd) {
  background-color: wheat;
}
&:nth-child(even) {
  background-color: white; 
}
`;