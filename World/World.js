import { createCamera } from "../components/camera";
import { createLights } from "../components/lights";
import { createMeshGroup } from "../components/meshGroup";
import { createScene } from "../components/scene";
import { createControls } from "../systems/controls";
import { Loop } from "../systems/Loop";
import { createRenderer } from "../systems/renderer";
import { ReSizer } from "../systems/Resizer";

class World {
  // 1. Create an instance of the World app

  // ideally these should be private... maybe typescript is better?
  constructor(container) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.scene, this.renderer);

    container.append(this.renderer.domElement);

    const controls = createControls(this.camera, this.renderer.domElement);

    const meshGroup = createMeshGroup();
    const { ambientLight, light } = createLights();

    // controls.target.copy(cube.position);

    controls.addEventListener("change", () => {
      this.render();
    });

    this.loop.updatableObjs.push(controls, meshGroup);
    // this.loop.updatableObjs.push(cube);

    this.scene.add(meshGroup, light, ambientLight);

    const resizer = new ReSizer(container, this.camera, this.renderer);

    // not required since loop animation will take care of rerendering (it's fast enough)
    resizer.onResize = () => {
      this.render();
    };
  }

  // 2. Render the scene
  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { World };
