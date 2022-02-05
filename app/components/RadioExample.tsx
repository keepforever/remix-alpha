/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const colors = [
  { name: "Pink", bgColor: "bg-pink-500", selectedColor: "ring-pink-500" },
  {
    name: "Purple",
    bgColor: "bg-purple-500",
    selectedColor: "ring-purple-500",
  },
  { name: "Blue", bgColor: "bg-blue-500", selectedColor: "ring-blue-500" },
  { name: "Green", bgColor: "bg-green-500", selectedColor: "ring-green-500" },
  {
    name: "Yellow",
    bgColor: "bg-yellow-500",
    selectedColor: "ring-yellow-500",
  },
];

export default function RadioExample({ selectedColor, setSelectedColor }: any) {
  return (
    <RadioGroup value={selectedColor} onChange={setSelectedColor}>
      <RadioGroup.Label className="block text-sm font-medium text-gray-700">
        Choose a label color
      </RadioGroup.Label>
      {/* hidden input */}
      <input
        type="radio"
        name="color"
        value=""
        id="color-none"
        className="absolute opacity-0"
      />
      {/* end hidden input */}
      <div className="mt-4 flex items-center space-x-3">
        {colors.map((color) => (
          <RadioGroup.Option
            key={color.name}
            value={color}
            className={({ active, checked }) =>
              classNames(
                color.selectedColor,
                active && checked ? "ring ring-offset-1" : "",
                !active && checked ? "ring-2" : "",
                "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
              )
            }
          >
            <RadioGroup.Label as="p" className="sr-only">
              {color.name}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={classNames(
                color.bgColor,
                "h-8 w-8 border border-black border-opacity-10 rounded-full"
              )}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
