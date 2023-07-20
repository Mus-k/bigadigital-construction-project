import React, { useState } from "react";
import AnimateRoute from "./pages/animateRoute/AnimateRoutes";
import { Loader } from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <Loader loading={loading} setLoading={setLoading} />
      ) : (
        <AnimateRoute />
      )}
    </div>
  );
}
