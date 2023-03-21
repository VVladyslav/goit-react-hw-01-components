import PropTypes from 'prop-types';
import { BsFillCircleFill } from "react-icons/bs";
import {
FriendsListStyled,
FriendsListItem,
HeaderStyled,
} from './Friends.styled'
export const FriendsList = ({title, friends}) => (
<>
<HeaderStyled>{title}</HeaderStyled>
  <FriendsListStyled>
    {friends.map(({id, avatar, name, isOnline}) =>
      <FriendsListItem key={id}>
      <BsFillCircleFill fill = {isOnline ? "green" : "red"}></BsFillCircleFill>
      <img src={avatar} alt="User avatar" width="80" />
      <p>{name}</p>
    </FriendsListItem>)}
</FriendsListStyled>
</>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })).isRequired,
};