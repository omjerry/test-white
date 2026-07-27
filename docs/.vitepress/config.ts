import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'A股复盘知识库',
  description: '按周期、日期、板块与个股组织的 A 股复盘研究。',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    siteTitle: 'A股复盘知识库',
    nav: [
      { text: '总览', link: '/' },
      { text: '行情周期', link: '/cycles/' },
      { text: '日期节点', link: '/timeline/' },
      { text: '板块', link: '/sectors/' },
      { text: '个股', link: '/stocks/' }
    ],
    sidebar: {
      '/cycles/': [
        {
          text: '行情周期',
          items: [{ text: '总览', link: '/cycles/' }]
        }
      ],
      '/timeline/': [
        {
          text: '日期节点',
          items: [{ text: '总览', link: '/timeline/' }]
        }
      ],
      '/sectors/': [
        {
          text: '板块',
          items: [{ text: '总览', link: '/sectors/' }]
        }
      ],
      '/stocks/': [
        {
          text: '个股',
          items: [{ text: '总览', link: '/stocks/' }]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    lastUpdated: {
      text: '最后更新'
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换至浅色模式',
    darkModeSwitchTitle: '切换至深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    footer: {
      message: '仅作历史复盘与研究记录，不构成投资建议。',
      copyright: 'Copyright © 2026 A股复盘知识库'
    }
  }
})
