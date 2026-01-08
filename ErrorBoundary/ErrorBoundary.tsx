"use client";

import React from "react";
import { ErrorContext } from "./ErrorContext";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback: React.ReactNode;  // <-- MUST be here
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    const { hasError, error } = this.state;

    if (hasError && error) {
      return (
        <ErrorContext.Provider value={{ error, reset: this.reset }}>
          {this.props.fallback}
        </ErrorContext.Provider>
      );
    }

    return this.props.children;
  }
}
