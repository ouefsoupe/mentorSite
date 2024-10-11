// import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";


function App() {
  // Remove 'todos' and 'createTodo' if not needed
  const { signOut } = useAuthenticator();

  return (
    <main>
      <h1>HI ALOE</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;