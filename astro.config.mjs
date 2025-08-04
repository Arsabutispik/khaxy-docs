// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    redirects: {
        "/": "/en"
    },
    site: "https://docs.khaxy.net",
    image: {
        service: passthroughImageService()
    },
    integrations: [starlight({
        title: {
            "en": "Khaxy Documentation",
            "tr": "Khaxy Belgeleri"
        },
        favicon: "/images/khaxy-favicon.svg",
        logo: {
            light: './src/assets/khaxy-mini-logo-black.svg',
            dark: './src/assets/khaxy-mini-logo-white.svg',
        },
        social: {
            github: 'https://github.com/Arsabutispik/Khaxy',
        },
        sidebar: [
            {
                label: "Resources",
                translations: {
                    "tr": "Kaynaklar"
                },
                items: [
                    { label: "Terms of Service", slug: "resources/tos", translations: {"tr": "Hizmet Şartları"}},
                    {label: "Privacy Policy", slug: "resources/privacy", translations: {"tr": "Gizlilik Politikası"}}
                ]
            },
            {
                label: "Configuration",
                translations: {
                    "tr": "Ayarlar"
                },
                items: [
                    {label: "Variables", slug: "configuration/variables", translations: {"tr": "Değişkenler"}},
                    {label: "Register Settings", slug: "configuration/register-settings", translations: {"tr": "Kayıt Ayarları"}},
                    {label: "Welcome & Leave Settings", slug: "configuration/welcome-leave-settings", translations: {"tr": "Giriş & Çıkış Ayarları"} },
                    {label: "Moderation Settings", slug: "configuration/moderation-settings", translations: {"tr": "Moderasyon Ayarları"}},
                    {label: "Role Settings", slug: "configuration/role-settings", translations: {"tr": "Rol Ayarları"}},
                    {label: "Miscellaneous Settings", slug: "configuration/miscellaneous-settings", translations: {"tr": "Çeşitli Ayarlar"}},
                    {label: "Log Settings", slug: "configuration/log-settings", translations: {"tr": "Günlük Ayarları"}},
                ]
            },
            {
                label: "Self Hosting",
                translations: {
                    "tr": "Kendi Kendine Barındırma"
                },
                items: [
                    {label: "Prerequisites", slug: "self-hosting/prerequisites", translations: {"tr": "Ön Gereksinimler"}},
                    {label: "Installation", slug: "self-hosting/installation", translations: {"tr": "Kurulum"}}
                ]

            }
        ],
        defaultLocale: 'en',
        locales: {
            "en": {
                label: 'English',
                lang: 'en',
            },
            tr: {
                label: 'Türkçe',
                lang: "tr",
            }
        },
		})],
});