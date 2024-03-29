export default {
    name: 'project',
    title: 'Project',
    type:'document',
    fields: [
        {
            name:'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Overview of Project'
        },
        {
            name: 'skills',
            type: 'string',
            title: 'Skill set'
        },
        {
            name: 'Image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'link',
            type: 'string',
            title: 'URL'
        }
    ]
}