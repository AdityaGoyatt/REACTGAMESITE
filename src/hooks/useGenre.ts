import { CanceledError } from "axios";
import apiClient from "../../../apiCLient";
import { useEffect, useState } from "react";
import useHttp from "./useHttp";

export interface genre {
  id: number;
  name: string;
  slug: string;
}

const useGenre = () => useHttp<genre>("/genres");
export default useGenre;
