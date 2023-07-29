import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as LinkRoute, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error;
  console.error(error);

  return (
    <div className="flex w-screen h-screen" id="error-page">
      <div className="text-center flex-col m-auto leading-9">
        <h1 className="font-bold text-w-bold text-7xl text-green-800">Oops!</h1>
        <p className="text-gray-400 mt-2">Maaf, terjadi kesalahan yang tidak terduga.</p>
        <p>
          <i>{error ? error.statusText || error.message : "Kesalahan tidak dikenal"}</i>
        </p>
        <p className="text-green-800">
          Kembali ke halaman utama <LinkRoute to={'/'}><Link><ExternalLinkIcon /></Link></LinkRoute>
        </p>
      </div>
    </div>
  );
}
