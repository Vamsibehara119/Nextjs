"use client";

import { createContext, useContext } from "react";

export const ErrorContext = createContext<any>(null);

export function useError() {
  return useContext(ErrorContext);
}
