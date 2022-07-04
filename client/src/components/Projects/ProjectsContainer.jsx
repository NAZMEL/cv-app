import React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";
import { getProjects } from "./../../redux/projects-reducer";

class ProjectsContainer extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return <Projects projects={this.props.projects} />;
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectsPage,
  };
};

export default connect(mapStateToProps, { getProjects })(ProjectsContainer);
