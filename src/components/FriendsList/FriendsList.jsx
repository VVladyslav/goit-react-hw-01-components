import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import {
FriendsListStyled,
HeaderStyled,
} from './Friends.styled'
export const FriendsList = ({title, friends}) => (
<>
<HeaderStyled>{title}</HeaderStyled>
  <FriendsListStyled>{friends.map(({id, avatar, name, isOnline}) =>
  <FriendsListItem id={id} avatar={avatar} name={name} isOnline={isOnline}/>)}
  </FriendsListStyled>
</>
);

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
  };