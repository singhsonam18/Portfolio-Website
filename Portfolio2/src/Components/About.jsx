import React from 'react'

function About() {
  return (
    <div name="About" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p>
        Hello,I'm Sonam, a passsionate web developer specializing 
        in creating responsive, user-friendly websites with a focus 
        an clean design and efficient code.
      </p>
      <br />
      <h1 className='text-blue-700 font-semibold text-xl'>Education</h1>
      <span>
        [10th],[CBSE],[2016] <br />
        [12th],[BSEB],[2019] <br />
        [B.Sc in Computer Application],[Patna University],[2019-2022] <br />
        [Master of Computer Application],[Chandigarh University],[2023-2025] <br />

      </span>
      <br />
      <h1 className='text-blue-700 font-semibold text-xl'>Skills</h1>
      <span>
          Frontend: React.js | JavaScript (ES6+) | HTML5 | CSS3 | Tailwind CSS | Bootstrap <br />
          Database: MySQL <br />
          Tools & Technologies: VSCode | MySql | Vite | npm <br />
      </span>
      <br />
      <h1 className='text-blue-700 font-semibold text-xl'>Certificates</h1>
      <span>
          REACT JS | INFOSYS <br /> 
          NODE JS | INFOSYS <br />
          PYTHON | COURSERA <br />
      </span>
      <br />
      <h1 className='text-blue-700 font-semibold text-xl'>Mission Statement</h1>
      <p>
      Dedicated to building intuitive and impactful web solutions that enhance user experience and drive digital success. 
      My mission is to merge technical expertise with creative design to deliver exceptional results.
      </p>
      </div>
    </div>
  )
}

export default About
