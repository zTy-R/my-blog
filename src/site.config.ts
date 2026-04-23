import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // [Basic]
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: 'Lukas Space-卢克斯场域',
  /** Will be used in index page & copyright declaration */
  author: 'Lukas L.',
  /** Description metadata for your website. Can be used in page metadata. */
  description: 'Lukas 场域 — 记录技术探索、哲学思考与竞赛学习',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon.ico',
  /** The default social card image for your site which should be a path to an image in the `public/` directory. */
  socialCard: '/images/social-card.png',
  /** Specify the default language for this site. */
  locale: {
    lang: 'zh-CN',
    attrs: 'en_US',
    // Date locale
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: '/src/assets/avatar.png',
    alt: 'Avatar'
  },

  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // Still in test
  head: [],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: 'Daily', link: '/daily' },
      { title: 'Notes', link: '/notes' },
      { title: 'Study', link: '/study' },
      { title: 'Projects', link: '/projects' },
      { title: 'Links', link: '/links' },
      { title: 'About', link: '/about' }
    ]
  },

  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© ${new Date().getFullYear()}`,
    links: [
      // 没有备案信息就先注释掉，等有真实备案再加
      // {
      //   title: '备案号',
      //   link: 'https://beian.miit.gov.cn/',
      //   style: 'text-sm'
      // },
      {
        title: 'Site Policy',
        link: '/terms',
        pos: 2
      }
    ],
    /** Enable displaying a "Astro & Pure theme powered" link in your site's footer. */
    credits: true,
    /** Optional details about the social media accounts for this site. */
    social: { github: 'https://github.com/zTy-R' }
  },

  // [Content]
  content: {
    /** External links configuration */
    externalLinks: {
      content: ' ↗',
      /** Properties for the external links element */
      properties: { style: 'user-select:none' }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    /** Share buttons to show */
    // Currently support weibo, x, bluesky
    share: ['weibo', 'x', 'bluesky']
  }
}

export const integ: IntegrationUserConfig = {
  // [Links]
  // https://astro-pure.js.org/docs/integrations/links
  links: {
    // Friend logbook
    logbook: [],
    // Yourself link info
    applyTip: [
      { name: 'Name', val: theme.title },
      { name: 'Desc', val: theme.description || 'Null' },
      { name: 'Link', val: 'https://my-blog-pure.vercel.app/' },
      { name: 'Avatar', val: 'https://my-blog-pure.vercel.app/favicon/favicon.ico' }
    ],
    // Cache avatars in `public/avatars/` to improve user experience.
    cacheAvatar: false
  },
  // [Search]
  pagefind: true,
  // Add a random quote to the footer (default on homepage footer)
  // [Quote]
  quote: {
    server: 'https://dummyjson.com/quotes/random',
    target: `(data) => (data.quote.length > 80 ? \`\${data.quote.slice(0, 80)}...\` : data.quote || 'Error')`
  },
  // [Typography]
  // https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base',
    blockquoteStyle: 'italic',
    inlineCodeBlockStyle: 'modern'
  },
  // [Lightbox]
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // Comment system
  // ⚠️ 当前已关闭评论。如需开启，请部署自己的 Waline 服务并修改 server 地址。
  waline: {
    enable: false,
    server: '',
    showMeta: false,
    emoji: ['bmoji', 'weibo'],
    additionalConfigs: {
      pageview: false,
      comment: false,
      locale: {
        reaction0: 'Like',
        placeholder: 'Welcome to comment. (Email to receive replies. Login is unnecessary)'
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: 'Terms content',
  list: [
    {
      title: 'Privacy Policy',
      link: '/terms/privacy-policy'
    },
    {
      title: 'Terms and Conditions',
      link: '/terms/terms-and-conditions'
    },
    {
      title: 'Copyright',
      link: '/terms/copyright'
    },
    {
      title: 'Disclaimer',
      link: '/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config