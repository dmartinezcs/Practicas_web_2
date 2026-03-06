"use client"

import { useState } from "react"
import { Country } from "@/types/country"

interface Props {
  countries: Country[]
  setFiltered: (countries: Country[]) => void
}

export default function SearchBar({ countries, setFiltered }: Props) {
  const [search, setSearch] = useState<string>("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearch(value)

    const filtered = countries.filter((c) =>
      c.name.common.toLowerCase().includes(value.toLowerCase())
    )

    setFiltered(filtered)
  }

  return (
    <input
      type="text"
      placeholder="Buscar país..."
      value={search}
      onChange={handleChange}
    />
  )
}