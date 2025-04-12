const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-xl text-center border-2 border-[#012301]">
      <div className="footer-content">
        <p>&copy; 2025 David Gutierrez. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2 text-sm">
          <li>
            <a
              href="https://github.com/DavidDontKnow"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/davidpenagutierrez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#">Back to Top</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
