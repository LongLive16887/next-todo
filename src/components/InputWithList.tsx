"use client"

import { useState } from "react";

const InputWithList: React.FC = () => {
  const [text, setText] = useState<string>(""); 
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = () => {
    if (text.trim() !== "") {
      setItems([...items, text]);
      setText(""); 
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Text Input and List</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text"
          className="flex-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddItem}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputWithList;
