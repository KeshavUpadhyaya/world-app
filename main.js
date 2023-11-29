import { World } from "./World/World";
import './style.css'

// create the main function
function main() {
  const container = document.querySelector('#scene-container');

  const world = new World(container);
  console.log(world)

  world.start();
}

// call main to start the app
main();