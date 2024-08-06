import React from "react";
import medium from "../assets/medium.png";
import ecommerce from "../assets/ecommerce.png";


const Projects = () => {
  const projects = [
    {
      img: medium,
      title: "Medium Clone",
      desc: " A Blog sharing application. Built with React, Tailwind CSS, Node.JS, PostgreSQL, Prisma, and cloudflare ",
      live: "https://medium-clone-dl3tzl4vb-bilal1khans-projects.vercel.app/",
      code: "https://github.com/bilal1khan/medium-clone",
    },
    {
      img: ecommerce,
      title: "Ecommerce Application",
      desc: "An ecommerce application. Built with React, Spring Boot, Hibernate, MySQL and Azure",
      live: "https://ecommerce-frontend-one-ruby.vercel.app/",
      code: "https://github.com/bilal1khan/Ecommerce-Web-App",
    },
  ];

  return (
    <section
      className="bg-[#FBBC04] text-white px-16 py-32 mt-28"
      id="projects"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[160px] border-white pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my projects. I have built these with React,
            Spring Boot, Node.JS, Tailwind CSS, Prisma ORM and Hibernate. Check
            them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="h-80" />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
