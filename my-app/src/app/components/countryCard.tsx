import Link from "next/link"
import { Country } from "@/types/country"

interface Props {
  country: Country
}

export default function CountryCard({ country }: Props) {
  return (
    <Link href={`/country/${country.name.common}`}>
      <div className="card">
        <img src={country.flags.png} alt={country.name.common} />

        <h3>{country.name.common}</h3>
        <p>Población: {country.population}</p>
      </div>
    </Link>
  )
}