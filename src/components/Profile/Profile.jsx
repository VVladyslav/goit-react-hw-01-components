import PropTypes from "prop-types";
import { 
  ProfileStyled, 
  DescriptionStyled,
  ImageStyled,
  NameStyled,
  TagStyled,
  LocationStyled,
  StatsList,
  StatsItemStyled,
  ItemQuantityStyled,
} from "./Profile.styled";

export const Profile = ({user: {avatar, username, tag, location, stats}}) => (
<ProfileStyled>
  <DescriptionStyled>
    <ImageStyled
      src={avatar}
      alt="User avatar"
      className="user-avatar"
      width= '50%'
    />
    <NameStyled>{username}</NameStyled>
    <TagStyled>@{tag}</TagStyled>
    <LocationStyled>{location}</LocationStyled>
  </DescriptionStyled>

  <StatsList>
    <StatsItemStyled>
      <p>Followers</p>
      <ItemQuantityStyled>{stats.followers}</ItemQuantityStyled>
    </StatsItemStyled>
    <StatsItemStyled>
      <p>Views</p>
      <ItemQuantityStyled>{stats.views}</ItemQuantityStyled>
    </StatsItemStyled>
    <StatsItemStyled>
      <p>Likes</p>
      <ItemQuantityStyled>{stats.likes}</ItemQuantityStyled>
    </StatsItemStyled>
  </StatsList>
</ProfileStyled>
);

Profile.propTypes = {
user: PropTypes.shape({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
})
};