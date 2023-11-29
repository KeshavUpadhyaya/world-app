import { Clock } from "three";

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatableObjs = []
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera);
        })

    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {

        // when we tell an object to .tick forward a frame, we’ll scale the size of the movement by how long the previous frame took.
        const delta = clock.getDelta();

        for (const obj of this.updatableObjs) {
            obj.tick(delta);
        }
    }
}

export { Loop }