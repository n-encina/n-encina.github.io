/* ==========================================================
   SITE CONFIG + PROJECT DATA
   Edit this file to update the site. No other code changes needed.
   ========================================================== */

window.SITE = {
  name: "Nicholas Encina",

  // Contact info. Leave a field empty ("") to hide it.
  // The Contact section only appears if at least one item is filled in.
  email: "",
  links: [
    // { label: "GitHub",   url: "https://github.com/your-username" },
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/your-name" },
  ],
};

/* ----------------------------------------------------------
   PROJECTS
   To add a project, copy one block, change the fields, and
   add it to the array. Cards
   are generated automatically.

   Fields
     id        unique short name (letters, no spaces)
     title     card title
     url       the normal Desmos link
     summary   1-2 sentence description
     use       (optional) how to interact with it
     highlights(optional) short bullet points
     image     (optional) screenshot path, e.g. "img/orbit.png". Cards without one show no image.
   ---------------------------------------------------------- */

window.PROJECTS = [
  {
    id: "hand",
    image: "img/hand.png",
    title: "Robotic Hand",
    url: "https://www.desmos.com/calculator/gqm3z5dkuw",
    summary: "A robotic hand modeled and driven entirely by math, controlled with a single slider. It uses the same gear system featured in my application essay.",
    use: "Move the slider to actuate the hand.",
    highlights: ["Gear-driven mechanism", "Fully parametric, built from scratch"],
  },
  {
    id: "arm",
    image: "img/arm.png",
    title: "Robotic Arm",
    url: "https://www.desmos.com/calculator/afctdn7dyi",
    summary: "A robotic arm that carries the robotic hand above, controlled with on-screen buttons.",
    use: "Use the buttons to move the arm. Make sure the ticker is on to run the simulation.",
    highlights: ["Builds on the Robotic Hand project", "Ticker-driven simulation loop"],
  },
  {
    id: "orbit",
    image: "img/orbit.png",
    title: "Planetary Orbit Simulation",
    url: "https://www.desmos.com/calculator/morrax3pg5",
    summary: "A gravitational orbit simulator. The center planet's size is adjustable, and its mass scales with that size. Trajectory dots are generated with Euler's method using recursive functions.",
    use: "Drag the points to set the orbiting planet's starting position and trajectory. Resize the center planet to change the pull.",
    highlights: ["Euler's method + recursive functions", "Mass scales with planet size"],
  },
  {
    id: "ftc",
    image: "img/ftc.png",
    title: "FTC DECODE Field Model",
    url: "https://www.desmos.com/3d/1eams3qfut",
    summary: "A 3D model of the FIRST Tech Challenge DECODE field, used to calculate dimensions, plot field trajectories, and interpret data on the accuracy of shooting projectiles.",
    use: "Open the folders in the left panel for the key data.",
    highlights: ["Dimensions and trajectory calculations", "Projectile accuracy data analysis"],
  },
  {
    id: "tetris",
    image: "img/tetris.png",
    title: "Tetris",
    url: "https://www.desmos.com/calculator/bq2qrpvzye",
    summary: "A playable Tetris game running inside a graphing calculator.",
    use: "Instructions are in the folder's text box inside the calculator.",
    highlights: ["Fully playable in Desmos"],
  },

  /* ---- Add more projects here ---- */
];

