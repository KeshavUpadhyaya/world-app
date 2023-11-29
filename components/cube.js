import { BoxGeometry, MathUtils, Mesh, MeshBasicMaterial, MeshLambertMaterial, MeshStandardMaterial, MeshToonMaterial } from "three";

function createCube() {

    const geometry = new BoxGeometry(2, 2, 2)

    // basic white material
    const material = new MeshStandardMaterial({
        color: "purple"
    });


    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.1, 0.8)

    const radiansPerSecond = MathUtils.degToRad(30);

    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;

    }

    return cube;

}

export { createCube }
