import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'artitsy',
  description: '这是artitsy的文档',

  theme: defaultTheme({
    logo: '/img/artitsy.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
