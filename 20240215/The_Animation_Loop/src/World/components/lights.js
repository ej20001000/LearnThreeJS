import { DirectionalLight } from 'three';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 8);

  // move the light right, up, and towards us
  light.position.set(10, 10, 10);

  light.tick = (delta) => {
    // light.position.x += 100000;
    // light.position.y += 100000;
    // light.position.z += 100000;
  }

  return light;
}

export { createLights };
