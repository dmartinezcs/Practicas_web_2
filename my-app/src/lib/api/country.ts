import { Country } from "@/types";
import { api } from "./axios";



export async function getAllCountries() {
  const response = await api.get<Country>(`/all?fields=name`);
  return response.data;
}

export async function getCountryByName(name: string) {
  const response = await api.get<Country>(`/name/${name}`);
  return response.data;
}

export async function getCountriesByRegion(region: string) {
  const response = await api.get<Country>(`/region/${region}`);
  return response.data;
}