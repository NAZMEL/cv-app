import React from "react";
import { connect } from "react-redux";
import Experience from "./Experience";
import { getExperience } from "./../../redux/experience-reducer";

class ExperienceContainer extends React.Component {
  componentDidMount() {
    this.props.getExperience();
  }

  render() {
    return <Experience experience={this.props.experiencePage} />;
  }
}

const mapStateToProps = (state) => ({ experiencePage: state.experiencePage });

export default connect(mapStateToProps, {getExperience})(ExperienceContainer);