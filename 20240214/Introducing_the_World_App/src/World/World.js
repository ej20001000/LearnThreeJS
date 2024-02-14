import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createScene } from "./components/scene";

import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

let camera;
let renderer;
let scene;

class World {

    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const cube = createCube();
        let cube1 = createCube();

        cube1.position.set(0, -2, 0);

        scene.add(cube);
        scene.add(cube1);

        const resizer = new Resizer(container, camera, renderer);
    }

    // 2. Render the scene
    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }
}

export { World };