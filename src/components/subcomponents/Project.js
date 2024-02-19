import React from 'react'

const Project = () => {
  const project = [
    {
      "title": "NSCF",
      "github_link": "https://github.com/MohitDev0/Nscf-Ecommerce-website-frontend ",
      "live": "https://nscf-ecommerce.vercel.app/",
      "duration": "Sep 2023 - Feb 2024",
      "desc": ["NSCF is a web application developed using the MERN stack", "Developed RESTful APIs using Node.js and Express.js to handle server-side logic and interact with the MongoDB database."],
      "tech": ["Front-end: React, HTML, CSS", "Back-end: Node.js, Express.js", "Database: MongoDB"]
    },
    {
      "title": "Facebook Clone",
      "github_link": "https://github.com/MohitDev0/Social-Media-website-Frontend",
      "live": "https://social-media-website-mauve.vercel.app/",
      "duration": "Feb 2023 - Mar 2023",
      "desc": ["Facebook clone is a web application developed using the MERN stack", "Developed RESTful APIs using Node.js and Express.js to handle server-side logic and interact with the MongoDB database."],
      "tech": ["Front-end: React, HTML, CSS", "Back-end: Node.js, Express.js", "Database: MongoDB"]
    },
    {
      "title": "DashBoard",
      "github_link": "https://github.com/MohitDev0/Dashboard",
      "live": "https://dashboard-two-brown-66.vercel.app/",
      "duration": "Feb 2023 - Feb 2023",
      "desc": ["This is a Dashboard website used to manage the Employee track"],
      "tech": ["Front-end: React, HTML, CSS"]
    }
  ]

  return (
    <div className='proj'>
      {project.map((p, i) => {
        return (
          <div className='project1 project' key={i}>
            <div className='project_name'>
              <h2>{p.title}</h2>
              <div className='links'>
                <button >
                  <a href={p.github_link}>Github</a>
                </button>
                <button>
                  <a href={p.live}>Live</a>
                </button>
              </div>
            </div>
            <div className='project_duration'>
              <h4>Duration: {p.duration}</h4>
            </div>
            <div className='project_desc'>
              <ul>
                {p.desc.map((descElm, i) => {
                  return (
                    <li key={i}>{descElm}</li>
                  );
                })}
              </ul>
            </div>
            <div className='tech'>
              <ul>
                <h3>
                  Tech Stack:
                </h3>
                {p.tech.map((techElm, i) => {
                  return (
                    <li key={i}>{techElm}</li>
                  );
                })}
              </ul>
            </div>
            {/* <button className='btn'>Show Sample</button> */}
          </div>
        );
      })}

    </div>
  )
}

export default Project;