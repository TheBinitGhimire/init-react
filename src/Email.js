import { Component } from "react";
import "./Hyperlink.css";

export class PersonalEmail extends Component {
  constructor(props) {
    super(props);
    let { username, provider, text } = this.props;
    this.domain = "whoisbinit.me";
    this.username = username;
    this.text = text;
    switch (provider) {
      case "Google":
        this.domain = "gmail.com";
        break;
      case "Yahoo":
        this.domain = "yahoo.com";
        break;
      case "Outlook":
        this.domain = "outlook.com";
        break;
      case "ProtonMail":
        this.domain = "protonmail.ch";
        break;
      default:
        this.domain = "whoisbinit.me";
        break;
    }
  }
  render() {
    let email = `mailto:${this.username}@${this.domain}`;
    return <a href={email}>{this.text}</a>;
  }
}

export default function Email({ username, domain, text }) {
  let email = `mailto:${username}@${domain}`;
  return <a href={email}>{text}</a>;
}
