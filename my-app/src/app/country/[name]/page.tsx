'use client';
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Country } from "@/types/country"
import Link from "next/link"
import { getCountryByName } from "@/lib/api/country";


const CountryPageNameId = () => {

    const { name } = useParams();
    const [country, setPersonaje] = useState<Country|null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        getCountryByName(String (name)).then((res)=>{
            setPersonaje(res);
        }).catch((e:AxiosError)=>{
            setError(e.message)
        }).finally(()=>{
            setLoading(false);
        })
    },[name]);

    return (
        <div>
            <Link href="/">⬅ Volver</Link>

            if(name!=null){}
            {!country && loading && <h1>Loading...</h1>}
            {country &&
            (<>
                <img src={country.flags.png}/>
                <h2>{country.name.common}</h2>
            </>)}
            {error && <h2>{error}</h2>}

        </div>
    )
};


export default CountryPageNameId;