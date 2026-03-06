type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search country..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
}