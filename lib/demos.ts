export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Лаборатория',
    items: [
      {
        name: 'Лабаратория № 1',
        slug: 'layouts',
        description:
          'Через некоторое время общий расход газа по станции значительно снизился. Входной давления на рабочих ГПА увеличился. Соответственно и входное температура газа на рабочих ГПА.',
      },
      {
        name: 'Лабаратория № 2',
        slug: 'route-groups',
        description:
          'Через некоторое время выходное температура после АВО газа резко значительно повысилось. Чтобы предвратить  аварию станции быстро найдите причину повышения температуры после АВО газа',
      },
      {
        name: 'Лабаратория № 3',
        slug: 'parallel-routes',
        description:
          ' Произошло ошибка в системе SCADA, Прошу выяснить причину и дать свои комментарии ниже.',
      },
    ],
  },
  {
    name: ' Состояние серверов SCADA',
    items: [
      {
        name: 'SCADA Server A',
        slug: 'loading',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'SCADA Server B',
        slug: 'error-handling',
        description: 'Create Error UI for specific parts of an app',
      },
      {
        name: 'PHD Server',
        slug: 'not-found',
        description: 'Create Not Found UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'Static Data',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Dynamic Data',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Misc',
    items: [
      {
        name: 'Client Component Hooks',
        slug: 'hooks',
        description: 'Preview the routing hooks available in Client Components',
      },
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
      {
        name: 'Code Snippets',
        slug: 'snippets',
        description: 'A collection of useful App Router code snippets',
      },
    ],
  },
];
