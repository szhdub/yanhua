import {defineConfig} from "vite";

export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 8888, // 自定义端口，默认为5173
        open: true, // 服务启动后，自动在浏览器中打开，默认是不打开的
        hmr: true, // 为开发服务启用热更新，默认是不启用热更新的
    },
});
