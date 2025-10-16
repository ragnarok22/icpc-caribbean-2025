import { useState, useRef, useEffect } from "react";

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
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
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
    <div ref={selectRef} className={`relative w-full cursor-pointer z-10 ${className}`}>
      
      <div
        className={`w-full appearance-none rounded-xl border-2 border-gray-300 bg-white px-4 py-3 pr-10 text-[15px] text-gray-700 shadow-sm transition-all hover:border-blue/50 focus:border-blue focus:ring-blue/10 focus:shadow-lg focus:ring-4 focus:outline-none ${
          isOpen ? 'border-blue ring-4 ring-blue/10' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className="block truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
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
        </span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-[9999] mt-1 max-h-60 overflow-auto rounded-xl border border-gray-200 bg-white shadow-lg">
          {options.map((option) => (
             <div
               key={option.value}
               className={`relative px-4 py-3 text-[15px] text-gray-700 cursor-pointer transition-all duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none first:rounded-t-xl last:rounded-b-xl ${
                 option.value === value ? 'bg-blue/5 text-blue font-medium' : ''
               }`}
               onClick={() => handleOptionClick(option)}
               onKeyDown={(e) => {
                 if (e.key === 'Enter' || e.key === ' ') {
                   e.preventDefault();
                   handleOptionClick(option);
                 }
               }}
               onMouseEnter={(e) => {
                 const indicator = e.currentTarget.querySelector('.hover-indicator');
                 if (indicator) {
                   indicator.classList.remove('opacity-0');
                   indicator.classList.add('opacity-100');
                 }
               }}
               onMouseLeave={(e) => {
                 const indicator = e.currentTarget.querySelector('.hover-indicator');
                 if (indicator) {
                   indicator.classList.remove('opacity-100');
                   indicator.classList.add('opacity-0');
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
        </div>
      )}
    </div>
  );
}
