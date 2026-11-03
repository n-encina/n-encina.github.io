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
  /* ---- Robotics ---- */
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
    id: "ftc",
    image: "img/ftc.png",
    title: "FTC DECODE Field Model",
    url: "https://www.desmos.com/3d/1eams3qfut",
    summary: "A 3D model of the FIRST Tech Challenge DECODE field, used to calculate dimensions, plot field trajectories, and interpret data on the accuracy of shooting projectiles.",
    use: "Open the folders in the left panel for the key data.",
    highlights: ["Dimensions and trajectory calculations", "Projectile accuracy data analysis"],
  },
  {
    id: "ftcAccuracy",
    image: "img/ftcAccuracy.png",
    title: "Robotics Shooter Accuracy",
    url: "https://www.desmos.com/calculator/glghyzzlbk",
    summary: "Accuracy analysis of my FTC robot's shooter. I measured the x/y position, in inches, of 43 shots aimed at the middle of a whiteboard, then calculated the average point, each shot's distance from it, and the average error.",
    highlights: ["43 real measured shots", "Mean point and average error"],
  },
  {
    id: "ftcCamera",
    image: "img/ftcCamera.png",
    title: "FTC Camera Distance Model",
    url: "https://www.desmos.com/calculator/atfp2qrnmg",
    summary: "An estimated formula for how the FTC robot's Logitech webcam turns physical distance into a digital reading, used to better plan the robot's autonomous routines.",
    highlights: ["Fitted from measured data", "Used for autonomous design"],
  },

  /* ---- Games ---- */
  {
    id: "aim",
    image: "img/aim.png",
    title: "FPS Aim Trainer",
    url: "https://www.desmos.com/calculator/2mww0yf2eb",
    summary: "An aim trainer for first-person shooter games. It includes a 7-segment digit display system I developed myself, which I later reused in bigger projects like Tetris.",
    highlights: ["Self-built 7-segment digit display", "Groundwork for Tetris"],
  },
  {
    id: "tetrisShapes",
    image: "img/tetrisShapes.png",
    title: "Tetris Piece Builder",
    url: "https://www.desmos.com/calculator/rmvxwx5xft",
    summary: "The separate graph where I designed the Tetris pieces and their rotations. It starts with simple 1x1 and 2x1 rectangles and works up to increasingly complex shapes, showing my modeling process along the way.",
    use: "Use R to rotate each shape and see the point it rotates about. Circle outlines show how I mapped out the points, and the equations at the bottom show my testing.",
    highlights: ["Rotation about a pivot point", "Step-by-step modeling process"],
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

  /* ---- Math & physics ---- */
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
    id: "riemann",
    image: "img/riemann.png",
    title: "Riemann Sum Visualizer",
    url: "https://www.desmos.com/calculator/535df125dd",
    summary: "Visualizes how Left-Hand, Right-Hand, Trapezoidal, and Midpoint sums are calculated for any function you enter.",
    use: "Set a (left bound), b (right bound), and p (number of rectangles). Click the blank circle to the right of each folder name to toggle that sum's rectangles.",
    highlights: ["Four approximation methods", "Works with any input function"],
  },

  /* ---- Add more projects here ---- */
];
