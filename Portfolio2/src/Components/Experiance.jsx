import React from 'react';
import html from "/html.png";
import css from "/css.png";
import javascript from "/javascript.png";
import java from "/java.png";
import reactJS from "/react js.png";

function Experiance() {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML"
    },
    {
      id: 2,
      logo: css,
      name: "CSS"
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript"
    },
    {
      id: 4,
      logo: java,
      name: "Java"
    },
    {
      id: 5,
      logo: reactJS,
      name: "ReactJS"
    },
  ];

  return (
    <div name="Experiance" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <p>
          I've more than 2 years of experience in the following technologies.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-3'>
          {cardItems.map(({ id, logo, name }) => (
            <div
              className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300'
              key={id}
            >
              <img src={logo} className='w-[125px] rounded-full' alt={name} />
              <div>
                <div className='text-center'>{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
