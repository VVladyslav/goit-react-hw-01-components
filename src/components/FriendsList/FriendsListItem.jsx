import PropTypes from 'prop-types';
import {
  FriendsListItemStyled,
} from './Friends.styled';
import { BsFillCircleFill } from "react-icons/bs";

export const FriendsListItem = ({id, avatar, name, isOnline}) => (

      <FriendsListItemStyled key={id}>
      <BsFillCircleFill fill = {isOnline ? "green" : "red"}></BsFillCircleFill>
      <img src={avatar} alt="User avatar" width="80" />
      <p>{name}</p>
    </FriendsListItemStyled>)
;

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};