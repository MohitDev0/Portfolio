import React from 'react'

const Skills = () => {
  const skill = ([
    {
      name: "MERN Stack web Developer",
      image_path: "images/mern.jpg",
      link: "https://www.geeksforgeeks.org/mern-stack/"
    },
    {
      name: "HTML",
      image_path: "images/html5.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      name: "Css",
      image_path: "images/css.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      name: "JavaScript",
      image_path: "images/javascript.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "React",
      image_path: "images/React.png",
      link: "https://legacy.reactjs.org/"
    },
    {
      name: "Node.js",
      image_path: "images/nodejs.png",
      link: "https://nodejs.org/docs/latest/api/"
    },
    {
      name: "Express.js",
      image_path: "images/express.png",
      link: "https://expressjs.com/"
    },
    {
      name: "MongoDB",
      image_path: "images/MongoDB.png",
      link: "https://www.mongodb.com/"
    }
  ])

  setTimeout(() => {
    const selAfter = document.querySelectorAll(".progress");
    if (selAfter) {
      selAfter.forEach((af, index) => {
        af.style.setProperty("--perc", `"${skill[index].percentage}"`);
      })
    }
  }, 500);

  return (
    <>
      <h2>Skills</h2>
      <div className='skl'>
        {skill.map((s, index) => {
          return (
            <div className='prog' key={index}>
              <a className='skill_link' href={s.link} target="_blank" rel="noreferrer">
                <img className='skill_img' src={s.image_path} alt='skill logo'></img>
                <h5>{s.name}</h5>
                {/* <div className='progress_bar'>
                <div className='progress' style={{ width: `${s.percentage}` }}></div>
              </div> */}
              </a>
            </div>
          );
        })}

      </div>
    </>
  )
}

export default Skills;