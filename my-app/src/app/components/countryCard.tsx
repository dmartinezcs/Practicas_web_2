import Link from "next/link";
import { Country } from "@/types/country";
import "./style.css";


interface Props {
  country: Country;
}

export default function CountryCard({ country }: Props) {
  return (
    <Link href={`/country/${country.name?.common || ""}`}>
      <div className="card">
        <img
          src={country.flags?.png || ""}
          alt={country.name?.common || "Country"}
        />
        <h3>{country.name?.common || "Unknown"}</h3>
        <p>Población: {country.population ?? "N/A"}</p>
        <br/>
      </div>
    </Link>
  );
}