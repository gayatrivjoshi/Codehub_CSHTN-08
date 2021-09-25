import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Map from '../static/CoverSvg/Map.svg';
import Frontendsvg from '../static/CoverSvg/Frontend.svg';
import Backendsvg from '../static/CoverSvg/Backend.svg';
import Databasesvg from '../static/CoverSvg/Database.svg';
import Githubsvg from '../static/CoverSvg/Github.svg';

const RoadmapPage = () => {
  return (
    <div className="flex flex-col bg-primary">
      <Navbar />
      <div className="flex flex-row items-center place-content-between">
        <div className="flex flex-col">
          <div className="text-7xl text-secondary-darkgray font-serif ml-16">
            Roadmap for all
          </div>
          <div className="text-secondary-darkgray text-xl mt-8 ml-16">
            We provide you a detailed roadmap with <br /> personalised and
            exclusive paths.
          </div>
        </div>
        <img src={Map} alt="mapsvg" className="mt-10" />
      </div>
      <div className="font-serif text-secondary-darkgray text-5xl mt-12 ml-16">
        Full Stack Development Roadmap
      </div>

      {/* Frontend dev */}

      <div className="font-serif text-secondary-darkgray text-4xl mt-10 ml-24">
        Frontend Development
      </div>
      <div className="flex flex-row mt-6 items-center place-content-around">
        <div className="flex flex-col ml-24 text-secondary-darkgray font-medium font-sans  w-1/2">
          <div className=" mt-5 text-3xl">HTML</div>
          <p className="text-xl mt-4 mb-6">
            HTML stands for Hyper Text Markup Language. HTML is the standard
            markup language for creating Web pages.It describes the structure of
            a Web page.
          </p>
          <div className="text-3xl">CSS</div>
          <p className=" text-xl mt-4 mb-6">
            CSS stands for Cascading Styling Sheets. CSS is used to add styling
            to webpages to make them look cooler. Learn CSS by doing.
          </p>
          <div className=" text-3xl">Javascript</div>
          <p className=" text-xl mt-4 mb-6">
            JavaScript is a dynamic computer programming language. Javascript
            makes your webpage dynamic and alive. Learn Javascript by doing.
          </p>
        </div>
        <img src={Frontendsvg} alt="frontendsvg" />
      </div>

      {/* Backend dev */}

      <div className="font-serif text-secondary-darkgray text-4xl mt-10 ml-24">
        Backend Development
      </div>
      <div className="flex flex-row mt-6 items-center place-content-around">
        <div className="flex flex-col ml-24 text-secondary-darkgray font-medium font-sans  w-1/2">
          <div className=" mt-5 text-3xl">Nodejs</div>
          <p className="text-xl mt-4 mb-6">
            Node. js is an open source development for executing JavaScript
            code( server side). Node. js makes fast and scalable network
            applications.
          </p>
          <div className="text-3xl">Python</div>
          <p className=" text-xl mt-4 mb-6">
            Python is responsible for writing server side web application logic,
            connecting third party web services and helps frontend developer to
            integrate their work.
          </p>
          <div className=" text-3xl">Expressjs</div>
          <p className=" text-xl mt-4 mb-6">
            Express is a minimal and flexible Node.js web application framework
            that provides a robust set of features for web and mobile
            applications.
          </p>
        </div>
        <img src={Backendsvg} alt="backendsvg" />
      </div>

      {/* Database */}

      <div className="font-serif text-secondary-darkgray text-4xl mt-10 ml-24">
        Database Management
      </div>
      <div className="flex flex-row mt-3 items-center place-content-around">
        <div className="flex flex-col ml-24 text-secondary-darkgray font-medium font-sans  w-1/2">
          <div className="mt-10 text-3xl">MySQL</div>
          <p className="text-xl mt-4 mb-10">
            MySQL is an Oracle-backed open source relational database management
            system (RDBMS) based on Structured Query Language (SQL).
          </p>
          <div className="text-3xl">MongoDB</div>
          <p className=" text-xl mt-4 mb-10">
            MongoDB is an open source NoSQL database management program that can
            manage document-oriented information, store or retrieve information.
          </p>
        </div>
        <img src={Databasesvg} alt="databasesvg" />
      </div>

      {/* Git & Github */}

      <div className="font-serif text-secondary-darkgray text-4xl mt-10 ml-24">
        Git & Github
      </div>
      <div className="flex flex-row mt-6 mb-24 items-center place-content-around">
        <div className="flex flex-col ml-24 text-secondary-darkgray font-medium font-sans  w-1/2">
          <div className=" mt-5 text-3xl">Version Control System</div>
          <p className="text-xl mt-4 mb-6">
            Version control, also known as source control, is the practice of
            tracking and managing changes to software code. Version control
            systems are software tools that help software teams manage changes
            to source code over time.
          </p>
          <div className="text-3xl">Git</div>
          <p className=" text-xl mt-4 mb-6">
            Git is a free and open source distributed version control system
            designed to handle everything from small to very large projects with
            speed and efficiency.
          </p>
          <div className=" text-3xl">Github</div>
          <p className=" text-xl mt-4 mb-6">
            GitHub, Inc. is a provider of Internet hosting for software
            development and version control using Git. It offers the distributed
            version control and source code management functionality of Git,
            plus its own features.
          </p>
        </div>
        <img src={Githubsvg} alt="githubsvg" />
      </div>
      <Footer />
    </div>
  );
};

export default RoadmapPage;
