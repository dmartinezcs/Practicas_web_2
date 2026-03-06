'use client';

import { getAllCountries } from "@/lib/api/country";
import CountryCard from "@/app/components/countryCard";
import { Country } from "@/types/country";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import SearchBar from "@/app/components/searchBar";

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCountries()
      .then((res) => setCountries(res))
      .catch((e: AxiosError) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <main>
      <h3>Introduce el nombre de pais que estés buscando: </h3>
      <SearchBar search={search} setSearch={setSearch} />
      <h1>Lista de paises</h1>
      <div className="grid">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3 || country.name?.common}
            country={country}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;