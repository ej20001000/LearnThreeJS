import { 
  AmbientLight,
  DirectionalLight,
  HemisphereLight
 } from 'three';

function createLights() {
  const mainLight = new DirectionalLight('white', 8);

  const ambientLight = new HemisphereLight(
    'white',
    'darklategrey',
    5,
  );

  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
