import { Input } from "@/components/ui/input";
import { Check, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";

// List of technologies
export const technologies = [
  "React",
  "Tailwind CSS",
  "NodeJs",
  "ExpressJs",
  "Mongodb",
  "Firebase",
  "Mongoose",
  "Redux",
  "JWT",
  "Zod",
  "Next.js",
  "TypeScript",
  "ShadCN",
  "Ant Design",
];

const MultiSelect = ({
  setTechnologies,
}: {
  setTechnologies: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  // Mapping technologies to options with id
  const options = technologies.map((tech, index) => ({
    id: index + 1, // Auto incrementing id starting from 1
    name: tech,
  }));

  // Filtering options based on search
  const filteredItems = options.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Checking if a technology is selected
  const isSelected = (item: any) => {
    return selectedOptions.some((selectedItem) => selectedItem.id === item.id);
  };

  // Toggling the selection of a technology
  const toggleSelectItem = (item: any) => {
    let updatedSelectedOptions;
    if (isSelected(item)) {
      updatedSelectedOptions = selectedOptions.filter(
        (selectedItem) => selectedItem.id !== item.id
      );
    } else {
      updatedSelectedOptions = [...selectedOptions, item];
    }

    // Update selected options and parent state
    setSelectedOptions(updatedSelectedOptions);
    setTechnologies(updatedSelectedOptions.map((option) => option.name)); // Pass selected technologies to parent state
  };

  // Removing selected technology
  const removeItem = (option: any) => {
    const updatedSelectedOptions = selectedOptions.filter(
      (selectedItem) => selectedItem.id !== option.id
    );

    // Update selected options and parent state
    setSelectedOptions(updatedSelectedOptions);
    setTechnologies(updatedSelectedOptions.map((option) => option.name)); // Pass selected technologies to parent state
  };

  useEffect(() => {
    // Close the dropdown when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      // Cast event.target to HTMLElement to access the `closest` method
      const target = event.target as HTMLElement;

      if (!target.closest(".custom-select")) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpenDropdown]);

  return (
    <div className="relative custom-select w-full mt-2">
      {/* Input field with search functionality */}
      <Input
        type="text"
        placeholder="Search.."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsOpenDropdown(true)}
        // className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
      />

      <ChevronDown
        className={`${
          isOpenDropdown ? "rotate-[180deg]" : "rotate-0"
        } transition-all duration-300 text-[1.3rem] absolute top-1.5 right-3 text-gray-500`}
      />

      {/* Dropdown menu */}
      {isOpenDropdown && (
        <div className="absolute left-0 w-full mt-1 border border-gray-200 rounded-md bg-white shadow-lg z-20 max-h-[300px] overflow-y-auto">
          <div className="w-full overflow-auto">
            {filteredItems.map((item) => (
              <p
                key={item.id}
                onClick={() => toggleSelectItem(item)}
                className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
              >
                <Check
                  className={`${
                    isSelected(item)
                      ? "scale-[1] opacity-100"
                      : "scale-[0.5] opacity-0"
                  } mr-2 transition-all text-[1.3rem] duration-300`}
                />
                {item.name}
              </p>
            ))}

            {filteredItems.length === 0 && (
              <p className="text-center text-[0.9rem] text-[#424242] py-8">
                No search found!
              </p>
            )}
          </div>
        </div>
      )}

      {/* Selected items */}
      {selectedOptions.length > 0 && (
        <div className="flex items-center gap-[5px] flex-wrap">
          {selectedOptions.map((item) => (
            <div
              key={item.id}
              className="bg-blue-100 min-w-fit text-blue-800 px-3 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"
            >
              {item.name}
              <button
                onClick={() => removeItem(item)}
                className="ml-2 text-blue-800 text-[1.2rem]"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
