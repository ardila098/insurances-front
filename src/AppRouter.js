import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesApp } from "./routes/RoutesApp";

const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {RoutesApp.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
