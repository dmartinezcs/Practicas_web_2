'use client';

import { getAllCountries } from "@/lib/api/country";
import CountryCard from "@/app/components/countryCard";
import { Country } from "@/types/country";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllCountries()
      .then((res) => setCountries(res))
      .catch((e: AxiosError) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <main>
      <h1>Countries</h1>
      <div className="grid">
        {countries.map((country) => (
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