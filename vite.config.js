import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import  {resolve}from'path'

export default defineConfig({
    plugins: [vue()],
    css: {
        // 全局配置 utils.scs，详细配置参考 vue-cli 官网
        loaderOptions: {
            // sass: {
            //     prependData: `@import "@/assets/styles/utils.scss";`,
            // }
        },
        publicPath: "",
        configureWebpack: {
            name: "app name",

        },
    },
    resolve: {
        alias: {
            "@": resolve("src"),
        },
    },
})
