'use client';

import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Country } from "@/types/country"
import Link from "next/link"
import { getCountryByName } from "@/lib/api/country";

const CountryPageNameId = () => {

    const { name } = useParams();

    const [country, setCountry] = useState<Country | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getCountryByName(String(name))
            .then((res) => {
                setCountry(res[0]);
            })
            .catch((e: AxiosError) => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [name]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <div>
            <Link href="/">⬅ Volver</Link>

            {country && (
                <>
                <br/>
                    <img src={country.flags.png } />
                    <h1>Nombre oficial: {country.name.official}</h1>
                    <h2>Capital: {country.capital}</h2>
                    <h2>Subregion: {country.subregion}</h2>
                    <h2>Lenguajes: {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</h2>
                    <h2>Monedas: {country.currencies ? Object.values(country.currencies).map(c =>`${c.name}(${c.symbol})`).join(", ") : "N/A"}</h2>
                </>
            )}
        </div>
    )
};

export default CountryPageNameId;