import PropTypes from 'prop-types'
import {
  StatListItemStyled,
  StatListStyled,
  StatStyled,
  StatTitleStyled,
} from './Statistics.styled';
// const setBG = () => {
// return  Math.floor(Math.random()*16777215).toString(16);
// }

export const Statistics = ({title, data}) => (
<StatStyled>
{title && <StatTitleStyled>{title}</StatTitleStyled>}
  <StatListStyled>
    {data.map(stat => (
    <StatListItemStyled key={stat.id} 
    style={{
      width: `calc(50vw / ${data.length})`,
    }}
    >
      <span>{stat.label}</span> <br/>
      <span>{stat.percentage}</span>
    </StatListItemStyled>))}
   </StatListStyled>
  </StatStyled>
);

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired, 
  })).isRequired
};