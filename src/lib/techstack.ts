
export type StackCategory = {
    title: string,
    items: {
        name: string,
        icon: string,
        description?: string
    }[];
}

export const techstacks: StackCategory[] = [
    {
        title: 'Programming Languages',
        items:[
            {name: 'Javascript', icon: '/Icons/javascript.svg'},
            {name: 'Typescript', icon: '/Icons/typescript.svg'},
            {name: 'Swift', icon: '/Icons/swift.svg'},
            {name: 'Dart', icon: '/Icons/dart.svg'},
            {name: 'Python', icon: '/Icons/python.svg'},
        ]
    },
    {
        title: 'Frameworks',
        items:[
            {name: 'React', icon: '/Icons/react.svg', description: "A JavaScript library for building user interfaces"},
            {name: 'Expo', icon: '/Icons/expo.svg'},
            {name: 'Next.js', icon: '/Icons/nextjs.svg'},
            {name: 'Flutter', icon: '/Icons/flutter.svg'},
            {name: 'SwiftUI', icon: '/Icons/swiftui.svg'},
            {name: 'Tailwind CSS', icon: '/Icons/tailwind.svg'},
            {name: 'Redux', icon: '/Icons/redux.svg'},
            {name: 'Firebase', icon: '/Icons/firebase.svg'},
        ]
    }
]