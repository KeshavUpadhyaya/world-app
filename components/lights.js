import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
  const ambientLight = new HemisphereLight("white", "darkslategrey", 10);
  // new AmbientLight('white', 2);

  const light = new DirectionalLight("white", 5);

  light.position.set(10, 10, 10);
  return { ambientLight, light };
}

export { createLights };
