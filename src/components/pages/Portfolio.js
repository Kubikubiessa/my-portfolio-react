import React from "react";
import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      name: "Social-Network API",
      description:
        "This project entails a social network API using Express.js for routing, a MongoDB database, and the Mongoose ODM.",
      image: "/assets/me.png",
      technologies: ["JavaScript", "Node.js", "Express & NoSQL"],
      github: "https://github.com/Kubikubiessa/Social-Network-API",
    },
    {
      name: "Beerfinder",
      description:
        "This is a web application that allows the user search to put in their current location and will find the 6 nearest breweries!",
      image: "/assets/results-page.png",
      technologies: ["HTML/CSS", "JavaScript", "Heroku"],
      github: "https://github.com/Kubikubiessa/beer-finder",
      deployed: "https://canadianfaller7.github.io/beer-finder/",
    },
    {
      name: "twYtter",
      description:
        "Given the uncertainty regarding the the future of the popular social media platform Twitter, we decided to create a clone, with which users can send posts, make comments on posts, and follow other users.",
      image: "/assets/211238373-9af48208-628f-4986-a048-1eecc8b68d9e.png",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Node.js",
        "Handlebars.js",
        "Express & Sequelize",
        "Heroku",
      ],
      github: "https://github.com/Kubikubiessa/twytter",
      deployed: "https://twytter-redo.herokuapp.com/",
    },
    // https://github.com/Kubikubiessa/Social-Network-API

    {
      name: "Tech-Blog ",
      description:
        "This project entails a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
      image: "/assets/Creating-a-blog.png",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Node.js",
        "Handlebars.js",
        "Express & Sequelize",
        "Heroku",
      ],
      github: "https://github.com/Kubikubiessa/tech-blog",
      deployed: "https://obscure-spire-39495.herokuapp.com/",
    },

    {
      name: "Weather Dashboard",
      description:
        "A weather dashboard that shows current weather and five-day weather forecast for any city.",
      image: "/assets/Weather4.png",
      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com/Kubikubiessa/weather-dashboard",
    },
    {
      name: "Password Generator",
      description:
        "This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.",
      image: "/assets/pw-generator-2.png",
      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com/Kubikubiessa/password-generator",
    },
    {
      name: "Note Taker",
      description:
        "This application allows the user to enter notes and as they save. Notes can be deleted by clicking the trash can next to the corresponding note.",
      image: "/assets/mockup.png",
      technologies: ["HTML/CSS", "JavaScript", "Express.js"],
      github: "https://github.com/Kubikubiessa/note-taker",
    },
  ];

  return (
    <section className="portfolio">
      <div className="page-center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
