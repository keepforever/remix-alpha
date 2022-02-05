import { useState } from "react";
import { Form, ActionFunction } from "remix";
import RadioExample from "../components/RadioExample";
const buttonStyle =
  "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6";
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

type Color = {
  name: string;
  bgColor: string;
  selectedColor: string;
};

type ActionData = {
  foo: string | null | undefined;
};

export let action: ActionFunction = async ({
  request,
}): Promise<Response | ActionData> => {
  let formData = await request.formData();
  let myRadioValue = formData.get("_my-radio") as string;
  console.log("\n", `myRadioValue = `, myRadioValue, "\n");
  return { foo: myRadioValue };
};

export default function About() {
  const [selectedColor, setSelectedColor] = useState<Color | null>(colors[1]);

  return (
    <div className="bg-blue-200 py-6 px-4">
      <Form method="post">
        <input type="hidden" name="_my-radio" value={selectedColor?.name} />
        <RadioExample
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <button className={buttonStyle} type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
