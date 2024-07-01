import { Box } from "@mui/material";
import MagaIcon from "common/assets/MagaLogo.png"; // Asegúrate de que la ruta sea correcta
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const WIDTH: number = 480;
const HEIGHT: number = 480;

const AnimatedMalaCoin: React.FC = () => {
  const threeJsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene | null = null as THREE.Scene | null;
    let camera: THREE.PerspectiveCamera | null =
      null as THREE.PerspectiveCamera | null;
    let renderer: THREE.WebGLRenderer | null =
      null as THREE.WebGLRenderer | null;

    const initializeScene = () => {
      // Limpiar el contenedor antes de agregar un nuevo canvas
      if (threeJsContainer.current) {
        while (threeJsContainer.current.firstChild) {
          threeJsContainer.current.removeChild(
            threeJsContainer.current.firstChild
          );
        }
      }
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(WIDTH, HEIGHT);
      if (threeJsContainer.current) {
        threeJsContainer.current.appendChild(renderer.domElement);
      }
      renderer.render(scene, camera);
    };

    initializeScene();

    if (scene && camera && renderer) {
      // Adding ambient lighting
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      // Left point light
      const pointLightLeft = new THREE.PointLight(0xffffff, 1);
      pointLightLeft.position.set(-1, -1, 3);
      scene.add(pointLightLeft);

      // Right point light
      const pointLightRight = new THREE.PointLight(0x5b5f97, 1);
      pointLightRight.position.set(1, 2, 3);
      scene.add(pointLightRight);

      // Top point light
      const pointLightTop = new THREE.PointLight(0xffffff, 1);
      pointLightTop.position.set(0, 3, 2);
      scene.add(pointLightTop);

      const texture = new THREE.TextureLoader().load(MagaIcon);

      const material = new THREE.MeshStandardMaterial({
        map: texture,
        bumpScale: 0.1,
        metalness: 0.4,
        roughness: 0.2,
      });

      const geometry = new THREE.CylinderGeometry(3, 3, 0.4, 100);
      const mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);
      camera.position.set(0, 0, 7);

      mesh.rotation.x = 2;
      mesh.rotation.y = 1.5;

      const animate = () => {
        mesh.rotation.x += 0.01;
        requestAnimationFrame(animate);
        renderer?.render(scene!, camera!);
      };

      animate();

      const handleResize = () => {
        if (camera && renderer) {
          camera.aspect = WIDTH / HEIGHT;
          camera.updateProjectionMatrix();
          renderer.setSize(WIDTH, HEIGHT);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <Box
      ref={threeJsContainer}
      sx={{
        height: 1,
        maxHeight: 480,
        width: 1,
        maxWidth: 480,
        transform: "scale(1.5)",
      }}
    />
  );
};

export default AnimatedMalaCoin;
