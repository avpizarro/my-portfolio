//schema/project.js
export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'github',
            title: 'GitHub',
            type: 'url',
        },
        {
            name: 'altText',
            title: 'altText',
            type: 'string',
        }
    ]
}