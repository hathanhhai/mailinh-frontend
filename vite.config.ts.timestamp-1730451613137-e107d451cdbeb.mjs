// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import { defineConfig } from "file:///C:/xampp/htdocs/mailinh_fe/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/xampp/htdocs/mailinh_fe/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/xampp/htdocs/mailinh_fe/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Components from "file:///C:/xampp/htdocs/mailinh_fe/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///C:/xampp/htdocs/mailinh_fe/node_modules/unplugin-auto-import/dist/vite.js";
import { NaiveUiResolver } from "file:///C:/xampp/htdocs/mailinh_fe/node_modules/unplugin-vue-components/dist/resolvers.js";
import VueI18nPlugin from "file:///C:/xampp/htdocs/mailinh_fe/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/xampp/htdocs/mailinh_fe/vite.config.ts";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@api": fileURLToPath(new URL("./src/services/api", __vite_injected_original_import_meta_url)),
      "@locales": fileURLToPath(new URL("./locales", __vite_injected_original_import_meta_url))
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      dts: "types/components.d.ts",
      resolvers: [NaiveUiResolver()]
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
        {
          "@vueuse/core": ["useUrlSearchParams", "useDebounceFn", "useEventBus"]
        },
        {
          "@iconify/vue": ["Icon"]
        },
        {
          "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
        },
        {
          zod: [["z", "zod"]]
        }
      ],
      dts: "types/auto-imports.d.ts",
      dirs: ["src/composables/**", "src/stores/**", "src/services/api/**"],
      vueTemplate: true
    }),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./locales/**")
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          naiveUI: ["naive-ui"],
          lodash: ["lodash", "lodash-es"],
          vue: ["vue"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcbWFpbGluaF9mZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXG1haWxpbmhfZmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3hhbXBwL2h0ZG9jcy9tYWlsaW5oX2ZlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdub2RlOnBhdGgnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCB7IE5haXZlVWlSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgICdAYXBpJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9zZXJ2aWNlcy9hcGknLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgJ0Bsb2NhbGVzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL2xvY2FsZXMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICB2dWVEZXZUb29scygpLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIGR0czogJ3R5cGVzL2NvbXBvbmVudHMuZC50cycsXHJcbiAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpXVxyXG4gICAgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAncGluaWEnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICdAdnVldXNlL2NvcmUnOiBbJ3VzZVVybFNlYXJjaFBhcmFtcycsICd1c2VEZWJvdW5jZUZuJywgJ3VzZUV2ZW50QnVzJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICdAaWNvbmlmeS92dWUnOiBbJ0ljb24nXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJ25haXZlLXVpJzogWyd1c2VEaWFsb2cnLCAndXNlTWVzc2FnZScsICd1c2VOb3RpZmljYXRpb24nLCAndXNlTG9hZGluZ0JhciddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB6b2Q6IFtbJ3onLCAnem9kJ11dXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBkdHM6ICd0eXBlcy9hdXRvLWltcG9ydHMuZC50cycsXHJcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvc2FibGVzLyoqJywgJ3NyYy9zdG9yZXMvKionLCAnc3JjL3NlcnZpY2VzL2FwaS8qKiddLFxyXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgICBWdWVJMThuUGx1Z2luKHtcclxuICAgICAgcnVudGltZU9ubHk6IHRydWUsXHJcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcclxuICAgICAgaW5jbHVkZTogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuL2xvY2FsZXMvKionKVxyXG4gICAgfSlcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgbmFpdmVVSTogWyduYWl2ZS11aSddLFxyXG4gICAgICAgICAgbG9kYXNoOiBbJ2xvZGFzaCcsICdsb2Rhc2gtZXMnXSxcclxuICAgICAgICAgIHZ1ZTogWyd2dWUnXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3USxTQUFTLGVBQWUsV0FBVztBQUMzUyxTQUFTLFNBQVMsZUFBZTtBQUVqQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFFeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTyxtQkFBbUI7QUFWeUksSUFBTSwyQ0FBMkM7QUFhcE4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxRQUFRLGNBQWMsSUFBSSxJQUFJLHNCQUFzQix3Q0FBZSxDQUFDO0FBQUEsTUFDcEUsWUFBWSxjQUFjLElBQUksSUFBSSxhQUFhLHdDQUFlLENBQUM7QUFBQSxJQUNqRTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFBLElBQy9CLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsVUFDRSxnQkFBZ0IsQ0FBQyxzQkFBc0IsaUJBQWlCLGFBQWE7QUFBQSxRQUN2RTtBQUFBLFFBQ0E7QUFBQSxVQUNFLGdCQUFnQixDQUFDLE1BQU07QUFBQSxRQUN6QjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFlBQVksQ0FBQyxhQUFhLGNBQWMsbUJBQW1CLGVBQWU7QUFBQSxRQUM1RTtBQUFBLFFBQ0E7QUFBQSxVQUNFLEtBQUssQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDO0FBQUEsUUFDcEI7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxNQUFNLENBQUMsc0JBQXNCLGlCQUFpQixxQkFBcUI7QUFBQSxNQUNuRSxhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixpQkFBaUI7QUFBQSxNQUNqQixTQUFTLFFBQVEsUUFBUSxjQUFjLHdDQUFlLENBQUMsR0FBRyxjQUFjO0FBQUEsSUFDMUUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFNBQVMsQ0FBQyxVQUFVO0FBQUEsVUFDcEIsUUFBUSxDQUFDLFVBQVUsV0FBVztBQUFBLFVBQzlCLEtBQUssQ0FBQyxLQUFLO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
