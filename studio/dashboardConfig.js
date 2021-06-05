export default {
  widgets: [
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
                  buildHookId: '60bbee4d5c3a87a15870deba',
                  title: 'Sanity Studio',
                  name: 'sagor-mainul-studio',
                  apiId: '22140d76-1e86-409b-8bdd-4044a8cfe099'
                },
                {
                  buildHookId: '60bbee4dc588493fe4dff5ec',
                  title: 'Blog Website',
                  name: 'sagor-mainul',
                  apiId: 'c5d0ed23-02b1-4a7c-b73b-133b10afa91c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SagorMainul/Sagor-Mainul',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sagor-mainul.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
