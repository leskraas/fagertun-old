export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f83120f9559f981ff1b5f2f',
                  title: 'Sanity Studio',
                  name: 'fagertun-studio',
                  apiId: '0601f10a-da8d-4a4b-8054-391794fecc0f'
                },
                {
                  buildHookId: '5f83120fd8f8afdcd6e2bc46',
                  title: 'Landing pages Website',
                  name: 'fagertun',
                  apiId: 'bb04f469-9060-42ed-9e98-aed53e04295a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leskraas/fagertun',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fagertun.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
