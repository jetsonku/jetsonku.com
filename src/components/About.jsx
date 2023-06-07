import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      style={{paddingTop: "0px", paddingBottom: "120px"}}
      className="w-full bg-[#1f242a] text-[#b48d22]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#b48d22] text-[#1f242a] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#1f242a]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="flex flex-col py-36 sm:text-center h-full text-4xl font-bold">
              <p>
                Hi there! Welcome to my portfolio.
              </p>
            </div>
            <div>
              <p>
                {" "}
                My name is Jetson Ku, and I am recemt graduate from the University of Maryland - College Park with a degree in 
                Computer Science - Data Science and a minor in Mathematics - Statistics. I have diverse interests in data science 
                applications in industry, and am passionate about extracting long-term insights from large datasets and making these 
                findings accessible to multiple audiences. I am currently seeking an exciting and challenging role as a data 
                analyst. My interests that I would be passionate about applying my experience to include: 
                sports, sustainable design, criminal justice, species conservation, finance, environmental science, and 
                analytic intelligence.
                I am eager to synthesize all the knowledge that I’ve gained over the past four years in a challenging new role following my graduation.
              </p>
              <br />
              <p>
                {" "}
                Away from my computer, I love to follow sports - hockey, football, basketball, and soccer. Growing up in New England,
                I also like to get outside and go hiking or paddleboarding. Other things I do in my free time are watch movies or TV
                shows, produce music, work out, and try to get better at cooking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;