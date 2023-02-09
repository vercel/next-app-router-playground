export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: '布局',
    items: [
      {
        name: '嵌套布局',
        slug: 'layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: '分组布局',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
    ],
  },
  {
    name: '文件约定',
    items: [
      {
        name: '加载中',
        slug: 'loading',
        description:
          'Create meaningful loading UI for specific parts of an app',
      },
      {
        name: '错误处理',
        slug: 'error-handling',
        description: 'Create error UI for specific parts of an app',
      },
      // {
      //   name: '404',
      //   slug: 'not-found-handling',
      //   description: 'Create UI to show when the notFound function is thrown within a route segment.',
      // },
      {
        name: 'Head',
        slug: 'head',
        description: 'Configure the <head> tag of a route segment',
      },
    ],
  },
  {
    name: '请求数据',
    items: [
      {
        name: '静态站点',
        slug: 'ssg',
        description: 'Generate static pages(Static-Site Generation)',
      },
      {
        name: '服务端渲染',
        slug: 'ssr',
        description: 'Server-render pages(Server-Side Rendering)',
      },
      {
        name: '服务端渲染-博客',
        slug: 'blog',
        description: '服务端渲染博客demo',
      },
      {
        name: '增量静态再生',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic(Incremental Static Regeneration)',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      // TODO: Re-add this page once hooks have been updated.
      // {
      //   name: 'Hooks',
      //   slug: 'hooks',
      //   description:
      //     'Preview the hooks available for Client and Server Components',
      // },
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Styling',
    items: [
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
    ],
  },
];
