import React, { useState } from "react";

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-screen h-screen selection:bg-primary/50 text-text overflow-hidden fixed">
    </div>
  );
}

export default App;
