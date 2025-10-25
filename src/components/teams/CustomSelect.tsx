import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Seleccionar...",
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Find selected option directly
  const selectedOption = options.find((opt) => opt.value === value) || null;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div
      ref={selectRef}
      className={clsx("relative z-10 w-full cursor-pointer", className)}
    >
      <div
        className={clsx(
          "hover:border-blue/50 focus:border-blue focus:ring-blue/10 w-full appearance-none rounded-xl border-2 border-gray-300 bg-white px-4 py-3 pr-10 text-[15px] text-gray-700 shadow-sm transition-all focus:shadow-lg focus:ring-4 focus:outline-none",
          isOpen && "border-blue ring-blue/10 ring-4",
        )}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className="block cursor-pointer truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center gap-1 pr-2">
          {selectedOption && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
                setIsOpen(false);
              }}
              className="pointer-events-auto rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Clear selection"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <svg
            className={clsx(
              "h-5 w-5 text-gray-400 transition-transform duration-200",
              isOpen && "rotate-180",
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 left-0 z-[9999] mt-1 max-h-60 overflow-auto rounded-xl border border-gray-200 bg-white shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={clsx(
                "relative cursor-pointer px-4 py-3 text-[15px] text-gray-700 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                option.value === value && "bg-blue/5 text-blue font-medium",
              )}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOptionClick(option);
                }
              }}
              onMouseEnter={(e) => {
                const indicator =
                  e.currentTarget.querySelector(".hover-indicator");
                if (indicator) {
                  indicator.classList.remove("opacity-0");
                  indicator.classList.add("opacity-100");
                }
              }}
              onMouseLeave={(e) => {
                const indicator =
                  e.currentTarget.querySelector(".hover-indicator");
                if (indicator) {
                  indicator.classList.remove("opacity-100");
                  indicator.classList.add("opacity-0");
                }
              }}
              role="option"
              tabIndex={0}
              aria-selected={option.value === value}
            >
              <div className="hover-indicator opacity-0" />
              <span className="block truncate">{option.label}</span>
            </div>
          ))}
          {options.length === 0 ? (
            <div className="px-4 py-3 text-center text-gray-500">
              No hay opciones disponibles
            </div>
          )    : (
            options.map((option) => (
              <div
                key={option.value}
                className={`hover:bg-blue/10 focus:bg-blue/10 relative cursor-pointer px-4 py-3 text-[15px] transition-all duration-150 first:rounded-t-xl last:rounded-b-xl focus:outline-none ${
                  option.value === value
                    ? "bg-blue/10 text-blue font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => handleOptionClick(option)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOptionClick(option);
                  }
                }}
                role="option"
                tabIndex={0}
                aria-selected={option.value === value}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="block flex-1 truncate">{option.label}</span>
                  {option.value === value && (
                    <svg
                      className="text-blue h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
