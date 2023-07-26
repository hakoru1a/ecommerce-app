import { useRoutes } from "react-router-dom";

import { routers } from "./routes";

function App() {
  const element = useRoutes(routers);

  return <>{element}</>;
}

export default App;
