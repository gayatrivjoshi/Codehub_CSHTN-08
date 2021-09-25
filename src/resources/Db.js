import html from '../static/cardslogo/HTMLLogo.svg';
import css from '../static/cardslogo/CSSLogo.svg';
import Js from '../static/cardslogo/JSLogo.svg';
import react from '../static/cardslogo/ReactlLogo.svg';
import python from '../static/cardslogo/PythonLogo.svg';
import django from '../static/cardslogo/DjangoLogo.svg';
import mysql from '../static/cardslogo/MySQLLogo.svg';
import mongo from '../static/cardslogo/MongodbLogo.svg';
import git from '../static/cardslogo/GithubLogo.svg';

const db = [
  {
    title: 'HTML',
    logo: html,
    description:
      ' HTML, is a programming language used to describe the structure of information on a webpage. ',
    curator: 'Traversey Media',
  },

  {
    title: 'CSS',
    logo: css,
    description:
      'CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.',
    curator: 'Traversey Media',
  },

  {
    title: 'JavaScript',
    logo: Js,
    description:
      'JavaScript helps developers to make pages dynamic by implementing custom client-side scripts.',
    curator: 'freeCodeCamp.org',
  },

  {
    title: 'React',
    logo: react,
    description:
      'React is a library for creating a user interface, offering more flexibility, popularity and reusable components.',
    curator: 'freeCodeCamp.org',
  },

  {
    title: 'Django',
    logo: django,
    description:
      'Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.',
    curator: 'Programming with Mosh',
  },

  {
    title: 'Python',
    logo: python,
    description:
      'Python helps you to achieve more functions with fewer lines of code. It is very beginner friendly.',
    curator: 'Programming with Mosh',
  },

  {
    title: 'MongoDB',
    logo: mongo,
    description:
      'MongoDB NoSQL database gives the fundamentals and the syntax to create, read, update and delete data.',
    curator: 'Traversey Media',
  },

  {
    title: 'MySQL',
    logo: mysql,
    description:
      'MySQL is a database management system for adding, accessing and managing data in a database.',
    curator: 'Programming with Mosh',
  },

  {
    title: 'Git',
    logo: git,
    description:
      'Git is for state-management of code changes, which lets you save snapshots of every step in development',
    curator: 'Programming with Mosh',
  },
];

export default db;
