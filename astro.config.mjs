// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: "https://docs.khaxy.net",
    integrations: [starlight({
        title: {
            "en": "Khaxy Documentation",
            "tr": "Khaxy Belgeleri"
        },
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: "Resources",
                translations: {
                    "tr": "Kaynaklar"
                },
                items: [
                    { label: "Terms of Service", slug: "resources/tos", translations: {tr: "Hizmet Şartları"}},
                    {label: "Privacy Policy", slug: "resources/privacy", translations: {tr: "Gizlilik Politikası"}}
                ]
            }
        ],
        defaultLocale: 'root',
        locales: {
            root: {
                label: 'English',
                lang: 'en',
            },
            tr: {
                label: 'Türkçe',
                lang: 'tr',
            }
        },
		})],
});