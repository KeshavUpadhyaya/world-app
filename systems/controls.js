import { Camera } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**
 * 
 * @param {Camera} camera 
 * @param {HTMLCanvasElement} canvas 
 */
function createControls(camera, canvas) {

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    controls.tick = () => controls.update();

    return controls;
}

export { createControls };
