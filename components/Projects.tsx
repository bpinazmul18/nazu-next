import {projects} from "@/datas/projects";
import AppLink from "@/components/common/AppLink";
import Image from "next/image";

export default function Projects () {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <svg className="mx-auto inline-block w-10 mb-4" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                              clipRule="evenodd"/>
                    </svg>


                    <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I&apos;ve Built
                    </h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I have builds some web apps using Reactjs, React-Native, next.js, react-router, redux, zustand,
                        react-redux, redux-toolkit, RTK-Query, React-Query, Vuejs, nuxt.js, vuex, bootstrap, react-bootstrap, Vuejs, nuxt.js,
                        vue-router, vuex, bootstrap-vue, tailwindCSS, material ui, shadcn, chart.js, frontend
                        validation, responsive design, and reusable components.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <AppLink
                            destination={project.link}
                            key={project.image}
                            classNames="sm:w-1/2 w-100 p-4"
                            // target='_blank'
                            target={project.link !== '#!' ? '_blank' : ''}
                        >
                            <div className="flex relative h-full">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                    height={200}
                                    width={200}
                                />
                                <div
                                    className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </AppLink>
                    ))}
                </div>
            </div>
        </section>
    )
}