import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import Favorites from "./pages/Favorites.tsx";
import Discover from "./pages/Discover.tsx";
import BrokenURLPage from "./components/BrokenURLPage.tsx";
import DiscoverSkeleton from "./components/DiscoverSkeleton.tsx";
import { useStoreContext } from "./context/StoreContext.tsx";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import getErrorMessage from "./helpers/getErrorMessage.ts";
import FallbackRender from "./components/FallbackRender.tsx";

export default function App() {
  const { isLoading, error } = useStoreContext();
  const [open, setOpen] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <FallbackRender />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "Discover",
          element: <Discover />,
        },
        {
          path: "Favorites",
          element: <Favorites />,
        },
        {
          path: "*",
          element: <BrokenURLPage />,
        },
      ],
    },
  ]);

  if (isLoading) {
    return <DiscoverSkeleton />;
  }

  return (
    <>
      <RouterProvider router={router} />
      <Snackbar
        open={error !== null && open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setOpen(false)}>
          {getErrorMessage(error)}
        </Alert>
      </Snackbar>
    </>
  );
}
