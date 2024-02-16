import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  // Switch the old "basic" material to
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'purple' });

  const cube = new Mesh(geometry, material);

  cube.position.set(-1, -0.5, 8);

  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };
