const Contact = () => {
  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-center text-[#00df9a]">
        Contact Me
      </h1>
      <p className="text-center mt-4">
        If you would like to get in touch, feel free to reach out via email or
        connect with me on LinkedIn.
      </p>
      <div className="flex justify-center mt-8 text-center text-2xl gap-7">
        <a
          href="mailto:DavidPenaGutierrez@gmail.com"
          className="text-[#00df9a] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12 m-3.5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
            />
          </svg>
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/davidpenagutierrez/"
          target="_blank"
          className="text-[#00df9a] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white m-3.5"
            fill="currentColor"
            style={{ color: "#FFFFFF" }}
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
};
export default Contact;
