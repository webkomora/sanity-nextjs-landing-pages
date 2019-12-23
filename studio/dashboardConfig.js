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
                  buildHookId: '5e00a062569533aedcc83e94',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j3jxi75m',
                  apiId: 'a653d61a-bbf6-4866-a73b-012b42b6535a'
                },
                {
                  buildHookId: '5e00a0628bf2646f6a86295f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4okkfmpf',
                  apiId: 'b59b5d8a-21b2-4c9d-9cf1-9f020211fb2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webkomora/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4okkfmpf.netlify.com', category: 'apps'}
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
