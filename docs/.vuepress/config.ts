import type { UserConfig, DefaultThemeOptions } from 'vuepress'

const config: UserConfig<DefaultThemeOptions> = {
  base: '/Blog/',
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}

export = config