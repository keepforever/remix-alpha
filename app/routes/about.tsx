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
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Boost your productivity.</span>
            <span className="block">Start using Workflow today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  );
}
