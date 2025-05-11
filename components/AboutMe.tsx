import AppLink from "@/components/common/AppLink";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Nazmul Haque
            <span className="block title-font sm:text-2xl text-xl mb-4 font-medium text-white">
              A passionate Engineer
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a results-driven Full Stack JavaScript Engineer with over 5
            years of experience building scalable web applications using modern
            technologies like React, Next.js, Node.js, Express, and TypeScript.
            I specialize in crafting responsive UIs, developing RESTful and
            GraphQL APIs, and integrating robust backend services with MongoDB,
            PostgreSQL, and third-party APIs. I focus on clean code, performance
            optimization, and seamless user experiences. Whether it's building
            from scratch, refactoring legacy code, or contributing to fast-paced
            startups, I'm ready to bring value and efficiency to your project.
            Let's build something impactful!
          </p>
          <div className="flex justify-center">
            <AppLink
              destination="#contact"
              classNames="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </AppLink>

            <AppLink
              destination="#projects"
              classNames="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </AppLink>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
