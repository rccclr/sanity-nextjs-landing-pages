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
                  buildHookId: '5cfbf570ccb6aca3690208a3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6jfhh1ip',
                  apiId: '359ae3f0-6c10-4961-9903-1be14dfc11f5'
                },
                {
                  buildHookId: '5cfbf570d7a4c5d9fe2fedc3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mic4w6t2',
                  apiId: '31d6bd92-46e7-44f9-b233-021b65f637af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rccclr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mic4w6t2.netlify.com', category: 'apps'}
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
