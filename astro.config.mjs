import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      sidebar: [
        {
          label: "Sobre o Sistema",
          autogenerate: { directory: "sistema" },
        },
        {
          label: "Guias de Utilização por Perfil", 
          autogenerate: { directory: "guia" },
        },
        {
          label: 'Funcionalidades',
          items: [
            {
              label: 'Solicitação',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/solicitacao"},
            },
            {
              label: 'Movimentação',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/movimentacao"},
            },
            {
              label: 'Veículos',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/veiculos"},
            },
            {
              label: 'Multas',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/multas"},
            },
            {
              label: 'Central de Execução',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/central_execucao"},
            },
            {
              label: 'Localidades',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/localidades"},
            },
            {
              label: 'Finalidades',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/finalidades"},
            },
            {
              label: 'Natureza Diligência',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/natureza_diligencia"},
            },
            {
              label: 'Modelos',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/modelos"},
            },
            {
              label: 'Condutor Externo',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/condutor_externo"},
            },
            {
              label: 'Painéis',
              collapsed: true,
              autogenerate: { directory: "funcionalidade/painel"},
            },
          ],
        },
        {
          label: "Links Importantes",
          autogenerate: { directory: "recursos" },
        },
    ],
      defaultLocale: 'root', 
      locales: {
        root: {
          label: 'Português - Brasil',
          lang: 'pt-BR',
        },     
        //   'en': {
        //   label: 'English',
        //   lang: 'en',
        //   translations: { 'en-US': 'English' },
        // },        
        //   'es': {
        //   label: 'Español',
        //   lang: 'es',
        // },    
      },
      plugins: [starlightImageZoom()],
      title: "Frota 2.0 ",
      logo: {
        src: "./src/assets/JT_Icone.svg",
      },
      social: {
        gitlab: "https://gitlab.trt8.jus.br/desenvolvimento/frota",
      },
      favicon: "./src/assets/JT_Icone.svg",
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href:'./src/assets/JT_Icone.ico',
            sizes: '32x32',
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: true,
    }),
    
  ],
  base: "/docs",
  trailingSlash: "always",
});
