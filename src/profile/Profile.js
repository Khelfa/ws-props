import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { fullName, bio, profession } = props;

  return (
    <div>
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      {props.children}
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func,
};

Profile.defaultProps = {
  bio: "This user has not added a bio yet.",
};

export default Profile;
