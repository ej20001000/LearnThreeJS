import { DirectionalLight } from "three";

function createLights() {
    const light = new DirectionalLight('white', 7);

    light.position.set(-10, -10, 10);

    return light;
}

export { createLights };