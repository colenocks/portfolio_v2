import hoop from "/public/basketball-hoop.jpg"
import cyob from "/public/cyob.jpg"
import portfolio from "/public/portfolio.png"
import tictactoe from "/public/tictactoe.jpg"
import snakerace from "/public/snakerace.jpg"
import delight from "/public/mindfuel-delight.png"

const db = {
  projects: [
    {
      id: "delight",
      name: "Delight",
      description: "Together with a team of brilliant minds at Mindfuel, we built a Data Product Management SaaS application.",
      stack: "Vue, Typescript, TailwindCSS, PrimeVue, Fastify, PostgreSQL.",
      image: delight,
      imageAlt: "The details page of a data product in a SaaS application by www.mindfuel.ai called 'Delight'.",
      order: 1,
      link: "https://mindfuel.ai/solution/delight",
    },
    {
      id: "personal-portfolio",
      name: "Personal Portfolio",
      description: "A personal portfolio built using Next.js",
      stack: "Next JS (Typescript)",
      image: portfolio,
      imageAlt: "portfolio home page",
      order: 2,
      link: "https://github.com/colenocks/portfolio_v2",
    },
    {
      id: "snakerace",
      name: "Snakerace",
      description: "A real time multiplayer version of the classic snake game using socket.io.",
      stack: "HTML, CSS, JavaScript, Node JS, Express",
      image: snakerace,
      imageAlt: "Snakerace image",
      order: 4,
      link: "https://github.com/colenocks/Multiplayer_Snake_Game_EIS",
    },
    // {
    //   id: "hoops",
    //   name: "Hoops",
    //   description: "This HTML5 canvas based basketball-like game was developed as a little tribute to the Basketball legend, Kobe Bryant as well as his daughter and all who lost their lives on the 26th of january 2020.",
    //   stack: "HTML5, CSS, JavaScript, Node, Express",
    //   image: hoop,
    //   imageAlt: "basket with net for basketball",
    //  order: 6,
    //   link: "https://github.com/colenocks/hoops",
    // },
    {
      id: "cyob",
      name: "Cycle of benefits",
      description: "Prototype of a waste management crowdsourcing platform where environmental projects are made publicly available for anyone to work on and get rewards.",
      stack: "React, Node, Express, MongoDB, Heroku",
      image: cyob,
      imageAlt: "recycle image",
      order: 5,
      link: "https://github.com/colenocks/cycle_of_benefits",
    },
    // {
    //   id: "tictactoe",
    //   name: "Tic-Tac-Toe",
    //   description: "A Simple jQuery based game.",
    //   stack: "HTML, CSS, JQuery, Express.js",
    //   image: tictactoe,
    //   imageAlt: "Tictactoe image",
    //   order: 7,
    //   link: "https://github.com/colenocks/Simple_TicTacToe_Game",
    // },
  ],
}

export default db
