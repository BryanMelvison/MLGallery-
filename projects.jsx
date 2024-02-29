export const Project = [
    {
        id: 1,
        title: 'NLI: Entail or Not Entail',
        description: 'Determine whether a hypothesis is entailed by a given premise using Natural Language Inference.',
        imageUrl: '/test.jpg', 
        route: '/nli', 
    },
    {
        id: 2,
        title: 'Name Generator',
        description: 'Generate a list of names based on the users specification.',
        imageUrl: '/test.jpg', 
        route: '/nameGen', 
    },
    {
        id: 2,
        title: 'Name Generator',
        description: 'Generate a list of names based on the users specification.',
        imageUrl: '/test.jpg', 
        route: '/nameGen', 
    },
    {
        id: 2,
        title: 'Name Generator',
        description: 'Generate a list of names based on the users specification.',
        imageUrl: '/test.jpg', 
        route: '/nameGen', 
    }
]

export const Form = {
    "nli" : [
        {name: "Premise", type: "text", placeholder: "Premise..."},
        {name: "Hypothesis", type: "text", placeholder: "Hypothesis..."}
    ],
    "nameGen" : [
        "Sample Size",
        "Initial"
    ]
}
