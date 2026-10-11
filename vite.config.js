import { defineConfig } from 'vite';
export default defineConfig({
 // Serve os módulos diretamente: evita o scanner do esbuild em diretórios
 // restritos do Windows. O build de produção continua empacotado pelo Vite.
 optimizeDeps: { noDiscovery: true, exclude: ['gsap','gsap/ScrollTrigger','lenis'] },
});
