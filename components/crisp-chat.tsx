"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("795704f9-df1b-4a39-a1a3-b71d0661bef0");
  }, []);

  return null;
};
