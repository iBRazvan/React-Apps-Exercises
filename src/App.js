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
    {
      name: "Eladie Bumbar",
      skillBrainPosition: "Mentorul mentorului",
      actualJob: "Sclav",
      shortDesctioption:
        "Junior Front-End Developer enthusiast, seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
      socialMediaLiks: {
        gitHub: "https://github.com/Eladie",
        linkedIn:
          "https://www.linkedin.com/in/eladie-bumbar-b53857b6/",
      },
      avatar: require("./images/Eladie.jpg"),
    },
  ];

  return (
    <div className="app-container">
      <h1>Andromeda Team</h1>
      <div className="content-container">
        {
          data.map((item) => (
              <Card 
                name={item.name} 
                skillBrainPosition={item.skillBrainPosition} 
                actualJob={item.actualJob} 
                shortDesctioption={item.shortDesctioption} 
                socialMediaLiks={item.socialMediaLiks} 
                gitHub={item.gitHub} 
                linkedIn={item.linkedIn} 
                avatar={item.avatar} />
          ))
        }
        
      </div>
    </div>
  );
}

export default App;
