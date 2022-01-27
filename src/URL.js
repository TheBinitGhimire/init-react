import "./Hyperlink.css";

function URL(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.text}
    </a>
  );
}

export default URL;
