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
                  buildHookId: '60747eeffdce5e00a4781443',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-oi58bc9u',
                  apiId: 'e7bff085-77f4-40e0-8504-1b5d2b3e1b6f'
                },
                {
                  buildHookId: '60747ef0014aaf00c2a99308',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iyn6ewmb',
                  apiId: '2c87f8d0-3bbd-4342-93d2-352eb6b9f30c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrishnguyen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iyn6ewmb.netlify.app', category: 'apps'}
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
