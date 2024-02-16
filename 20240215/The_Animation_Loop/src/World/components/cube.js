import { BoxGeometry, MathUtils, Mesh, MeshStandardMaterial } from 'three';

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({ color: 'purple' });
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.x = -10;
  let cubeLocation = cube.position.x;

  cube.tick = (delta) => {
    const radiansPerSec = MathUtils.degToRad(30);

    const increaseVal = radiansPerSec * delta;

    // increase the cube's rotation each frame
    cube.rotation.z += increaseVal;
    cube.rotation.y += increaseVal;
    cube.rotation.x += increaseVal;


  }

  return cube;
}

export { createCube };
