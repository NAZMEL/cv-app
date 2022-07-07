import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "./../../redux/profile-reducer";
import userIcon from "./../../assets/profile.jpg";
import {
  getEmail,
  getFullName,
  getLanguages,
  getLinkedIn,
  getPosition,
  getTelegram,
  getPhone,
} from "../../selectors/profile-selector";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    return <Profile {...this.props} imgPath={userIcon} />;
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: getFullName(state),
    position: getPosition(state),
    phone: getPhone(state),
    email: getEmail(state),
    telegram: getTelegram(state),
    linkedIn: getLinkedIn(state),
    languages: getLanguages(state),
  };
};

export default connect(mapStateToProps, { getProfile })(ProfileContainer);
