'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


// Define your custom vertex shader
// Built off Rogie's Noise & Texture plugin - https://www.figma.com/community/plugin/1138854718618193875
const vert = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Define your custom fragment shader
const frag = `
uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_color;
uniform vec4 u_background;

mat2 m(float a) {
    float c = cos(a), s = sin(a);
    return mat2(c, -s, s, c);
}

float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
    return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}

float map(vec3 p) {
    p.xz *= m(u_time * 0.4);
    p.xy *= m(u_time * 0.1);
    vec3 q = p * 2.0 + u_time;
    return length(p + vec3(sin(u_time * 0.1))) * log(length(p) + 0.9) + cos(q.x + sin(q.z + cos(q.y))) * 0.5 - 1.0;
}

void main() {
    vec2 a = gl_FragCoord.xy / u_resolution - vec2(0.5, 0.5);
    vec3 cl = vec3(0.0);
    float d = 2.5;

    for (int i = 0; i <= 5; i++) {
        vec3 p = vec3(0.0, 0.0, 4.0) + normalize(vec3(a, -1.0)) * d;
        float rz = map(p);
        float f = clamp((rz - map(p + 0.1)) * 0.5, -0.1, 1.0);
        vec3 l = vec3(0.1, 0.3, 0.4) + vec3(5.0, 2.5, 3.0) * f;
        cl = cl * l + smoothstep(2.5, 0.0, rz) * 0.6 * l;
        d += min(rz, 1.0);
    }

    vec4 color = vec4(min(u_color, cl), 1.0);
    color.r = max(u_background.r, color.r);
    color.g = max(u_background.g, color.g);
    color.b = max(u_background.b, color.b);

    gl_FragColor = color;
}
`;

const Three: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const uniforms = useRef<any>(null);
  const clock = useRef(new THREE.Clock());

  useEffect(() => {
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const scene = new THREE.Scene();
    const init = () => {
    
      const geometry = new THREE.PlaneGeometry(2, 2);
      const backgroundColor = new THREE.Vector4(0, 0, 0, 1);

      uniforms.current = {
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_time: { value: 0 },
        u_color: { value: new THREE.Color(204, 0, 255) }, // Change the color as needed
        u_background: { value: backgroundColor }, // Set the background color here  
      };


      const material = new THREE.ShaderMaterial({
        uniforms: uniforms.current,
        vertexShader: vert,
        fragmentShader: frag,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer.current = new THREE.WebGLRenderer();
      renderer.current.setPixelRatio(window.devicePixelRatio);

      if (containerRef.current) {
        containerRef.current.appendChild(renderer.current.domElement);
      }

      onResize();
      window.addEventListener('resize', onResize, false);
    };

    const onResize = () => {
      if (renderer.current) {
        renderer.current.setSize(window.innerWidth, window.innerHeight);
        if (uniforms.current) {
          uniforms.current.u_resolution.value.x = renderer.current.domElement.width;
          uniforms.current.u_resolution.value.y = renderer.current.domElement.height;
        }
      }
    };

    const animate = () => {      
      // material.uniforms.u_time.value += 0.01;
      // // Render the scene
      // renderer.render(scene, camera);
      // requestAnimationFrame(animate);
      requestAnimationFrame(animate);
      if (uniforms.current) {
        uniforms.current.u_time.value = clock.current.getElapsedTime();
      }
      if (renderer.current && scene && camera) {
        renderer.current.render(scene, camera);
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div 
    className="absolute top-0 left-0 rotate-180"
    ref={containerRef}>
      {/* WebGL canvas will be appended here */}
    </div>
  );
};

export default Three;
