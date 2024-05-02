import AppLink from "@/components/common/AppLink";
import Image from 'next/image'

export default function AboutMe () {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I&apos;m Nazmul.
                        <br className="hidden lg:inline-block"/>I love to build amazing
                        apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I&apos;m a Software engineer with more than 4 years of professional working experience in
                        this industry, specialized in NodeJS, ExpressJS, ReactJS, React-Native, VueJS and MongoDB. My ambition
                        is improving or writing scalable, secure & maintainable software.
                        I&apos;m constantly looking for interesting and challenging projects to
                        upgrade my skills and share my experience. I can be of great help to
                        you in your business development and improvement.
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
    )
}