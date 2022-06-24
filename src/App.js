import "./App.css";
import Card from "./Card";

function App() {
  const data = [
    {
      name: "Sapovalov Alexandru",
      skillBrainPosition: "Mentor",
      actualJob: "Frontend Developer",
      shortDesctioption:
        "Front-End Developer and Tech enthusiast with 4+ years of experience building Web and cross-platform solutions in diverse areas of industry. As a SkillBrain mentor can share the experience, I've gained over these years and my love for programming with others.",
      socialMediaLiks: {
        gitHub: "https://github.com/shapovalov-sasha",
        linkedIn:
          "https://www.linkedin.com/in/%C8%99apovalov-alexandru-762b3b140/",
      },
      avatar: require("./images/sapovalov_alexandru.jpg"),
    },
  ];

  return (
    <div className="app-container">
      <h1>Andromeda Team</h1>
      <div className="content-container">
        <Card cardData={data[0]} />
      </div>
    </div>
  );
}

export default App;
