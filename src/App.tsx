import React, { useState } from "react";
import {JsonEditor} from "./components/JsonEditor";
import GeneratedForm from "./components/GeneratedForm";
import { defaultSchema } from "./utils/constants";

const App: React.FC = () => {
  const [schema, setSchema] = useState(defaultSchema);
  
  const handleJsonChange = (newJson: any) => {
    try {
      // Safely update the schema
      setSchema(newJson);
    } catch (err) {
      console.error("Invalid JSON", err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/2">
        <JsonEditor value={schema} onChange={handleJsonChange} />
      </div>
      <div className="w-full md:w-1/2">
        <GeneratedForm schema={schema} />
      </div>
    </div>
  );
};

export default App;
