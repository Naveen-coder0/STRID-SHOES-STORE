import { categories } from "@/data/products";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
            selected === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
