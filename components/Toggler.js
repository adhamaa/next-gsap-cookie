import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggler() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-4">
      <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox top-1"
        />
        <label
          htmlFor="toggle"
          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"
        ></label>
      </div>
      <label htmlFor="toggle" className="text-xs text-gray-700">
        Off / On
      </label>
    </div>
  );
}
