import React from "react";
import { connect } from "react-redux";
import Technologies from "./Technologies";
import { getTechnologies } from "../../redux/technologies-reducer";

class TechnologiesContainer extends React.Component {
  componentDidMount() {
    this.props.getTechnologies();
  }

  render() {
    return <Technologies technologies={this.props.technologies} />;
  }
}

const mapStateToProps = (state) => {
  return {
    technologies: state.technologiesPage,
  };
};

export default connect(mapStateToProps, { getTechnologies })(
  TechnologiesContainer
);
