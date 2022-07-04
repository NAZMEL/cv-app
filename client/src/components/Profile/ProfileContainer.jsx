import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "./../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    return <Profile {...this.props.profilePage} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

export default connect(mapStateToProps, { getProfile })(ProfileContainer);
