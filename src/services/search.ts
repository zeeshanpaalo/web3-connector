"use server";
import { API_BASE_URL } from "../constants/index";
import axios from "axios";

export const getSearchResults = async (searchTerm: string) => {
  return new Promise((res, rej) => {
    axios
      .get(`${API_BASE_URL}/api/search?query=${searchTerm}`)
      .then((r) => {
        // console.log(r.data.results);
        return res(r.data.results);
      })
      .catch((err) => {
        console.log(err);
        return rej(null);
      });
  });
  //   const res = await fetch(`${API_BASE_URL}/api/search`, {
  //     credentials: "include",
  //     headers: {
  //       Cookie: `session=${"session"};session.sig=${"sessionSign"}`,
  //     },
  //   });

  //   if (!res.ok) return null;
  //   const data = await res.json();
  //   console.log(data);
  //   return data.results;
};
