export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovBuildingsType[]
    citizensNumber: number
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GovBuildingsType = {
    type: "HOSPITAL" | "FIRE STATION"
    budget: number
    staffCount: number
    address: AddressType
}

