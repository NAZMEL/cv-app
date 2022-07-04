import React from "react";
import Education from "./Education";
import { connect } from "react-redux";
import { getEducation } from "./../../redux/education-reducer";

class EducationContainer extends React.Component {
  componentDidMount() {
    this.props.getEducation();
  }

  render() {
    return <Education education={this.props.educationPage} />;
  }
}

const mapStateToProps = (state) => {
  return {
    educationPage: state.educationPage,
  };
};

export default connect(mapStateToProps, { getEducation })(EducationContainer);
