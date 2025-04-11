import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <div className="w-full h-screen bg-[#000300]">
      <div className="max-w-[1240px] mx-auto px-4 py-16 flex flex-col justify-center h-full">
        <h1 className="text-[#00df9a] text-5xl md:text-7xl font-bold">
          David Gutierrez
        </h1>
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          <TypeAnimation
            sequence={[
              "Full Stack Developer", // Types 'One'
              1500, // Waits 1s
              "Tech Enthusiast", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              "Backpacker",
              900, // Types 'Three' without deleting 'Two'
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: "inline-block" }}
          />
        </h1>
        <p className="text-white text-2xl py-4 max-w-[700px] font-thin">
          I am a <span className="text-[#00df9a] ">Full Stack Developer </span>
          based in
          <span className="text-[#00df9a] "> Riverside California</span>. I
          specialize in all things web development, from front-end to back-end.
          I am passionate about technology and love learning new things. I am
          also an avid backpacker and love to explore the great outdoors. I am
          always looking for new challenges and opportunities to grow my skills
          and knowledge.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
