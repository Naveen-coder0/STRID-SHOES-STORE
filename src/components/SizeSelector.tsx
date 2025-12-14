interface SizeSelectorProps {
  sizes: number[];
  selected: number | null;
  onSelect: (size: number) => void;
}

const SizeSelector = ({ sizes, selected, onSelect }: SizeSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-display text-lg tracking-wide">SELECT SIZE (UK)</span>
        {selected && (
          <span className="text-sm text-muted-foreground">Selected: UK {selected}</span>
        )}
      </div>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              selected === size
                ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-primary/50 border border-transparent"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
