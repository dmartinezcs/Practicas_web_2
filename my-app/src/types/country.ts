

export type Country = {
    common_name: string,
    population: number,
    flag: string
}

export type CountrySpecific = {
    common_name: string,
    oficial_name:string,
    population: number,
    subregion: string,
    languages: string[],
    currency: string,
    flag: string
}
