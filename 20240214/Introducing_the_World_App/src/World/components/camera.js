import { PerspectiveCamera } from "three";

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov
        1, // aspect ratio
        0.1,
        100,
    );

    camera.position.set(0, 0, 10);

    return camera;
}

export { createCamera };