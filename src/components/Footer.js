import React, { useContext } from 'react';
import DisLogo from '../static/social-icons/Discord.svg';
import InstLogo from '../static/social-icons/Instagram.svg';
import FbLogo from '../static/social-icons/Facebook.svg';
import LinLogo from '../static/social-icons/Linkedin.svg';
import TwitterLogo from '../static/social-icons/Twitter.svg';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="w-screen min-h shadow-2xl font-sans bg-primary p-6">
      <div className="flex flex-row-3 place-content-between">
        <div className="flex text-2xl items-start flex-col ml-16">
          <div>Follow us on:</div>
          <div className="flex flex-row mt-5 mb-8">
            <a href="https://www.instagram.com/dribbble/">
              <img src={InstLogo} alt="instlogo" className="w-7 h-7" />
            </a>
            <a href="https://www.facebook.com/MicrosoftIndia">
              <img src={FbLogo} alt="fblogo" className="w-7 h-7 ml-3" />
            </a>
            <a href="https://www.linkedin.com/company/figma/">
              <img src={LinLogo} alt="linlogo" className="w-7 h-7 ml-3" />
            </a>
            <a href="https://twitter.com/VisualStudio">
              <img
                src={TwitterLogo}
                alt="twitterlogo"
                className="w-7 h-7 ml-3"
              />
            </a>
          </div>
          <div className="mb-5">Join our community at:</div>
          <div>
            <img src={DisLogo} alt="dislogo" className="w-9 h-9 inline-block" />
            <a href="https://discord.gg/HDwq7WeQ">
              <span className="text-xl uppercase ml-3">Discord</span>
            </a>
          </div>
        </div>
        <div className="flex text-xl items-start flex-col mr-20">
          <div className="text-2xl">Courses</div>
          {user ? (
            <Link to="/courses">
              <div>
                <div className="mt-3">Learn Frontend</div>
                <div className="mt-2">Learn Backend</div>
                <div className="mt-2">Learn Database</div>
                <div className="mt-2">Learn Git & Github</div>
              </div>
            </Link>
          ) : (
            <Link to="/signup">
              <div>
                <div className="mt-3">Learn Frontend</div>
                <div className="mt-2">Learn Backend</div>
                <div className="mt-2">Learn Database</div>
                <div className="mt-2">Learn Git & Github</div>
              </div>
            </Link>
          )}
        </div>
        <div className="flex flex-col text-xl items-start mr-16">
          <div className="text-2xl">Resources</div>
          {user ? (
            <Link to="/books">
              <div className="mt-3">Reference Books</div>
            </Link>
          ) : (
            <Link to="/signup">
              <div className="mt-3">Reference Books</div>
            </Link>
          )}
          {user ? (
            <Link to="/quiz">
              <div className="mt-2">Fun Quizzes</div>
            </Link>
          ) : (
            <Link to="/signup">
              <div className="mt-2">Fun Quizzes</div>
            </Link>
          )}
          {user ? (
            <Link to="/roadmap">
              <div className="mt-2">Roadmap for Full-Stack</div>
            </Link>
          ) : (
            <Link to="/signup">
              <div className="mt-2">Roadmap for Full-Stack</div>
            </Link>
          )}
          {user ? (
            <Link to="/courses">
              <div className="mt-2">Projects</div>
            </Link>
          ) : (
            <Link to="/signup">
              <div className="mt-2">Projects</div>
            </Link>
          )}
        </div>
      </div>
      <div className="flex justify-center text-xl mt-4">
        © 2021 CodeHub Technologies Pvt. Ltd.
      </div>
    </div>
  );
};

export default Footer;
