 type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechType[]
}

type AddressType = {
    street: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type TechType = {
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    "name": "Dmitriy",
    age: 32,
    isActive: false,
    address: {
        street: "Suharevskaya 38",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.technologies[2].title)

