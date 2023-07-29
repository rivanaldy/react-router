import React from "react";
import { Button } from "@chakra-ui/react";
import {
  createBrowserRouter,
  Link as LinkRoute,
  RouterProvider,
} from "react-router-dom";
import { Link } from "@chakra-ui/react";
function Navbar() {
  return (
    <nav className="w-full h-14 flex justify-around items-center bg-gray-400">
      <div>
        <h1 className="font-bold">Riv San</h1>
      </div>
      <div>
        <LinkRoute to={"/"} >
          <Link className="mr-4 font-bold">Home</Link>
        </LinkRoute>
        <LinkRoute to={"/post"}>
          <Link className="mr-4 font-bold">Post</Link>
        </LinkRoute>
        <LinkRoute to={"/about"}>
          <Link className="mr-4 font-bold">About</Link>
        </LinkRoute>
        <LinkRoute to={'/login'}>
          <Button>
            <Link className="font-bold">Login</Link>
          </Button>
        </LinkRoute>
      </div>
      
    </nav>
  );
}

export default Navbar;
