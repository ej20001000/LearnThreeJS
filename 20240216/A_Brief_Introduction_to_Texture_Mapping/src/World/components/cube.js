import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshPhysicalMaterial,
  TextureLoader,
} from 'three';

const createCube = () => {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

const createMaterial = () => {
  // create a texture loader
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    '/assets/textures/uv-test-col.png',
  );

  console.log(texture);

  // create a "standard" material
  const material = new MeshPhysicalMaterial({ 
    map: texture,
    // color: 'yellow'
  });

  // material.map = texture;

  return material;
}

export { createCube };
