interface FilterProps {
  active: string;
  onChange: (category: string) => void;
}

export default function Filter({ active, onChange }: FilterProps) {
  const filters = ["all", "piston", "rod", "wiper"];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={active === filter ? "active" : ""}
          onClick={() => onChange(filter)}
        >
          {filter.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
