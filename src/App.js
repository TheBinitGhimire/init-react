import "./App.css";

import Timer from "./Timer";
import Handle from "./Handle";
import Email, { PersonalEmail } from "./Email";

function App() {
  return (
    <div className="App">
      <main className="mainContainer">
        <section id="timer">
          <Timer />
        </section>
        <section id="handles">
          <Handle
            icon="FaGithub"
            name="GitHub"
            url="https://github.com/TheBinitGhimire/"
          />
          <Handle
            icon="FaLinkedin"
            name="LinkedIn"
            url="https://www.linkedin.com/in/thebinitghimire/"
          />
        </section>
        <section id="email">
          <PersonalEmail
            username="thebinitghimire"
            provider="Google"
            text="My Personal E-mail"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Email
            username="binitghimire"
            domain="lftechnology.com"
            text="My Corporate E-mail"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
