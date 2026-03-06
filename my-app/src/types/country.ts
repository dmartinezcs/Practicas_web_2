export type Country = {
    name: {
        common: string
        official: string
    }

    flags: {
        png: string
        svg: string
    }

    population: number

    capital?: string[]

    subregion?: string

    languages?: {
        [key: string]: string
    }

    currencies?: {
        [key: string]: {
            name: string
            symbol: string
        }
    }

    cca3: string
}