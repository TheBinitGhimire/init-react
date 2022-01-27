import { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import URL from "./URL";

const elements = {
  marginTop: "24px",
};

class Handle extends Component {
  render() {
    let platform = <FaGithub />;
    if (this.props.icon === "FaLinkedin") {
      platform = <FaLinkedin />;
    }
    return (
      <section style={elements}>
        {platform}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          You can check out my <strong>{this.props.name}</strong> profile.
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <URL url={this.props.url} text="Click Here!" />
      </section>
    );
  }
}

export default Handle;
