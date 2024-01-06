import { useState } from "react";
import "./App.css";

const DummyData = [
  {
    projectName: "Project Name",
    projectLink: "https://www.techhub.com",
    projectDescription:
      "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dpflxdsri/image/upload/v1704535980/pexels-elly-fairytale-3823207_1_wcaavb.jpg",
  },
  {
    projectName: "Project Name",
    projectLink: "https://www.greenify-app.com",
    projectDescription:
      "What was your role, your deliverables, if the project was personal, freelancing.",
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dpflxdsri/image/upload/v1704537718/Rectangle_7_k0g5vl.png",
  },
  {
    projectName: "Project Name",
    projectLink: "https://www.artconnect-platform.org",
    projectDescription:
      "You can also add in this description the type of the project, if it was for web, mobile, electron.",
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dpflxdsri/image/upload/v1704537860/Rectangle_7_1_ocnpp0.png",
  },
];

function App() {
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectData, addProject] = useState(DummyData);

  const changeProjectName = (event) => {
    setProjectName(event.target.value);
  };
  const changeProjectLink = (event) => {
    setProjectLink(event.target.value);
  };
  const changeProjectDescription = (event) => {
    setProjectDescription(event.target.value);
  };
  const submitProject = (event) => {
    event.preventDefault();
    if (projectName !== "" && projectLink !== "" && projectDescription !== "") {
      const idOfTheProject = projectData.length + 1;
      const ProjectDetails = {
        id: idOfTheProject,
        projectName: projectName,
        projectLink: projectLink,
        projectDescription: projectDescription,
        imageUrl:
          "https://res.cloudinary.com/dpflxdsri/image/upload/v1704537718/Rectangle_7_k0g5vl.png",
      };
      addProject([...projectData, ProjectDetails]);
      setProjectLink("");
      setProjectDescription("");
      setProjectName("");
    } else {
      alert("Enter all details");
    }
  };

  return (
    <div className="main-container">
      <div className="nav-section">
        <h1 className="company-name-heading">Madelyn Torff</h1>
        <ul className="home-ul-list">
          <li className="about">
            <a href="#aboutSection">About</a>
          </li>
          <li className="about">
            <a href="#projectSection">Projects</a>
          </li>
          <li className="about">
            <a href="#contactSection">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="about-content-container" id="aboutSection">
        <div className="content-container">
          <h1 className="ux-ui-designer">UI/UX DESIGNER</h1>
          <h1 className="hello-my-name-heading">
            Hello, my name is Madelyn Torff
          </h1>
          <p className="description-para">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="buttons-container">
            <a href="#projectSection" className="project-tag">
              <button className="projects-button" type="button">
                Projects
              </button>
            </a>
            <button className="linkedin-button" type="button">
              Linkedin
            </button>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dpflxdsri/image/upload/v1704529441/image_h1fifi.png"
            alt="girl"
            className="girl-image"
          />
        </div>
      </div>
      <div className="add-project-container" id="projectsSection">
        <h1 className="add-project-heading">Add Project</h1>
        <form className="form-container" onSubmit={submitProject}>
          <div className="input-card">
            <label htmlFor="projectName" className="label">
              Project Name
            </label>
            <input
              type="text"
              className="input-field"
              id="projectName"
              value={projectName}
              onChange={changeProjectName}
            />
          </div>
          <div className="input-card">
            <label htmlFor="projectLink" className="label">
              Project Link
            </label>
            <input
              type="text"
              className="input-field"
              id="projectLink"
              value={projectLink}
              onChange={changeProjectLink}
            />
          </div>
          <div className="input-card">
            <label htmlFor="projectDescription" className="label">
              Project Link
            </label>
            <textarea
              className="textarea-input-field"
              id="projectDescription"
              rows="10"
              cols="50"
              value={projectDescription}
              onChange={changeProjectDescription}
            ></textarea>
          </div>
          <div className="form-button-container">
            <button type="submit" className="add-button">
              Add
            </button>
          </div>
        </form>
      </div>
      <img
        src="https://res.cloudinary.com/dpflxdsri/image/upload/v1704535412/Vector_s3n1um.png"
        alt="footer"
        className="footer-image"
      />
      <div className="projects-main-container" id="projectSection">
        <h1 className="projects-heading">Projects</h1>
        <ul className="project-show-case-container">
          {projectData.map((eachProject) => (
            <li className="project-list-ietm" key={eachProject.id}>
              <div className="project-content">
                <h1 className="project-title">{eachProject.projectName}</h1>
                <p className="project-description-para">
                  {eachProject.projectDescription}
                </p>
                <p className="project-link-para">View Project</p>
              </div>
              <img
                src={eachProject.imageUrl}
                alt="project"
                className={`project-image ${
                  parseInt(eachProject.id) % parseInt(2) === 0 && "image-order"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-container" id="contactSection">
        <ul className="contact-ul-list">
          <li className="icon-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </li>
          <li className="icon-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </li>
          <li className="icon-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
          </li>
        </ul>
        <p className="copy-rights">Copyright © 2024. All rights reserved</p>
      </div>
      <img
        src="https://res.cloudinary.com/dpflxdsri/image/upload/v1704535412/Vector_s3n1um.png"
        alt="footer"
        className="footer-image"
      />
    </div>
  );
}

export default App;
