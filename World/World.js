import { createCamera } from "../components/camera";
import { createCube } from "../components/cube";
import { createLights } from "../components/lights";
import { createScene } from "../components/scene";
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

        const cube = createCube();
        const light = createLights();

        this.loop.updatableObjs.push(cube);

        this.scene.add(cube, light);

        const resizer = new ReSizer(container, this.camera, this.renderer);

        // not required since loop animation will take care of rerendering (it's fast enough)
        // resizer.onResize = () => {
        //     this.render();
        // }
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