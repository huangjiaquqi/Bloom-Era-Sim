import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface BackgroundRendererProps {
  uiStyle?: string;
}

const BackgroundRenderer: React.FC<BackgroundRendererProps> = ({ uiStyle = 'default' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const geometriesRef = useRef<THREE.Mesh[]>([]);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // 清理之前的渲染器
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    if (rendererRef.current) {
      rendererRef.current.dispose();
    }
    
    if (geometriesRef.current.length > 0) {
      geometriesRef.current.forEach(mesh => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material instanceof THREE.Material) {
          mesh.material.dispose();
        } else if (Array.isArray(mesh.material)) {
          mesh.material.forEach(material => material.dispose());
        }
      });
      geometriesRef.current = [];
    }
    
    // 场景设置
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    containerRef.current.appendChild(renderer.domElement);
    
    // 保存引用
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    // 相机位置
    camera.position.z = 1000;
    
    // 创建背景几何体
    const createGeometries = () => {
      const geometries: THREE.Mesh[] = [];
      
      // 圆形
      const circleGeometry = new THREE.CircleGeometry(150, 32);
      const circleMaterial = new THREE.MeshBasicMaterial({ color: 0x667eea, transparent: true, opacity: 0.15 });
      const circle = new THREE.Mesh(circleGeometry, circleMaterial);
      circle.position.set(-window.innerWidth * 0.45, window.innerHeight * 0.4, 0);
      scene.add(circle);
      geometries.push(circle);
      
      // 三角形
      const triangleGeometry = new THREE.BufferGeometry();
      const triangleVertices = new Float32Array([
        0, 190, 0,
        -110, -190, 0,
        110, -190, 0
      ]);
      triangleGeometry.setAttribute('position', new THREE.BufferAttribute(triangleVertices, 3));
      const triangleMaterial = new THREE.MeshBasicMaterial({ color: 0x764ba2, transparent: true, opacity: 0.15 });
      const triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
      triangle.position.set(window.innerWidth * 0.4, -window.innerHeight * 0.1, 0);
      triangle.rotation.z = Math.PI * 0.25;
      scene.add(triangle);
      geometries.push(triangle);
      
      // 方形
      const squareGeometry = new THREE.PlaneGeometry(280, 280);
      const squareMaterial = new THREE.MeshBasicMaterial({ color: 0xf093fb, transparent: true, opacity: 0.15 });
      const square = new THREE.Mesh(squareGeometry, squareMaterial);
      square.position.set(-window.innerWidth * 0.35, -window.innerHeight * 0.4, 0);
      square.rotation.z = -Math.PI * 0.174;
      scene.add(square);
      geometries.push(square);
      
      // 六边形
      const hexagonGeometry = new THREE.CircleGeometry(100, 6);
      const hexagonMaterial = new THREE.MeshBasicMaterial({ color: 0x4facfe, transparent: true, opacity: 0.15 });
      const hexagon = new THREE.Mesh(hexagonGeometry, hexagonMaterial);
      hexagon.position.set(window.innerWidth * 0.2, window.innerHeight * 0.3, 0);
      hexagon.rotation.z = Math.PI * 0.416;
      scene.add(hexagon);
      geometries.push(hexagon);
      
      geometriesRef.current = geometries;
    };
    
    createGeometries();
    
    // 动画循环
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const elapsedTime = (Date.now() - startTimeRef.current) * 0.001;
      
      // 旋转几何体
      geometriesRef.current.forEach((mesh, index) => {
        if (mesh) {
          mesh.rotation.z += 0.001 * (index + 1);
          
          // 添加微妙的上下浮动效果
          const floatOffset = Math.sin(elapsedTime + index) * 0.5;
          mesh.position.y += floatOffset * 0.1;
        }
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // 响应式调整
    const handleResize = () => {
      if (!camera || !renderer || !containerRef.current) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      // 重新定位几何体
      if (geometriesRef.current.length > 0) {
        geometriesRef.current[0]?.position.set(-window.innerWidth * 0.45, window.innerHeight * 0.4, 0); // 圆形
        geometriesRef.current[1]?.position.set(window.innerWidth * 0.4, -window.innerHeight * 0.1, 0); // 三角形
        geometriesRef.current[2]?.position.set(-window.innerWidth * 0.35, -window.innerHeight * 0.4, 0); // 方形
        geometriesRef.current[3]?.position.set(window.innerWidth * 0.2, window.innerHeight * 0.3, 0); // 六边形
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // 清理
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      
      if (geometriesRef.current.length > 0) {
        geometriesRef.current.forEach(mesh => {
          if (sceneRef.current) {
            sceneRef.current.remove(mesh);
          }
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material instanceof THREE.Material) {
            mesh.material.dispose();
          } else if (Array.isArray(mesh.material)) {
            mesh.material.forEach(material => material.dispose());
          }
        });
        geometriesRef.current = [];
      }
      
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
    };
  }, [uiStyle]);
  
  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default BackgroundRenderer;