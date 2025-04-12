const About = () => {
  return (
    <div className="w-full bg-black text-white h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16 my-auto">
        <h1 className="text-3xl font-bold text-center text-[#00df9a]">
          About Me
        </h1>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="font-semibold text-xl">Education</h3>
          {/* GradCap */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-12 w-12 m-3.5"
          >
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
          </svg>
          <p className="text-lg font-thin text-[#00df9a]">
            A.S. Computer Information Systems
          </p>
          <p className="text-lg font-thin">
            Mt. San Jacinto College, Menifee California
          </p>
          <p className="text-lg font-thin">Graduated: May 2025</p>
          <h3 className="font-semibold text-xl mt-8">Certifications</h3>
          {/* Briefcase */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-12 w-12 m-3.5"
          >
            <path
              fillRule="evenodd"
              d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
          </svg>
          <p className="text-lg font-thin text-[#00df9a]">
            Full Stack Web Development Certification
          </p>
          <p className="text-lg font-thin">
            UCR Extension, Riverside California
          </p>
          <p className="text-lg font-thin">Graduated: May 2023</p>
          <h3 className="mt-6 font-semibold text-xl">Skills</h3>
          <div className="inline-flex mt-4 gap-6 w-3/4 flex-wrap justify-center">
            {/* Languages */}
            <ul className=" gap-3 list-inside">
              <li className="text-md text-[#00df9a]">Languages</li>
              <li className="text-sm">Python</li>
              <li className="text-sm">C++</li>
              <li className="text-sm">JavaScript</li>
              <li className="text-sm">TypeScript</li>
              <li className="text-sm">HTML</li>
              <li className="text-sm">CSS</li>
              <li className="text-sm">SQL</li>
              <li className="text-sm">Dart</li>
            </ul>
            {/* Frameworks */}
            <ul className="gap-3 list-inside">
              <li className="text-md text-[#00df9a]">Frameworks</li>
              <li className="text-sm">React</li>
              <li className="text-sm">Node.js</li>
              <li className="text-sm">Express</li>
              <li className="text-sm">Flask</li>
              <li className="text-sm">Tailwind CSS</li>
              <li className="text-sm">Flutter</li>
            </ul>
            {/* Tools */}
            <ul className="gap-3 list-inside ">
              <li className="text-md text-[#00df9a]">Tools</li>
              <li className="text-sm">Git</li>
              <li className="text-sm">GitHub</li>
              <li className="text-sm">Jira</li>
              <li className="text-sm">Slack</li>
              <li className="text-sm">Visual Studio</li>
              <li className="text-sm">Xcode</li>
            </ul>
            {/* Databases */}
            <ul className=" gap-3 list-inside">
              <li className="text-md text-[#00df9a]">Databases</li>
              <li className="text-sm">MongoDB</li>
              <li className="text-sm">MySQL</li>
              <li className="text-sm">SQLite</li>
              <li className="text-sm">Firebase</li>
            </ul>
            {/* Cloud */}
            <ul className=" gap-3 list-inside">
              <li className="text-md text-[#00df9a]">Cloud</li>
              <li className="text-sm">AWS</li>
              <li className="text-sm">Google Cloud</li>
              <li className="text-sm">Azure</li>
              <li className="text-sm">Heroku</li>
              <li className="text-sm">Netlify</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
