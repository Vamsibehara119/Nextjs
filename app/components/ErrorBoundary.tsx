"use client";

import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: (error: Error, reset: () => void) => React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // 🔹 Triggered when a child crashes
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  // 🔹 Good place for logging (Sentry, etc.)
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    const { hasError, error } = this.state;

    if (hasError && error) {
      // Custom fallback UI
      return this.props.fallback ? (
        this.props.fallback(error, this.resetError)
      ) : (
        <div style={{ border: "1px solid red", padding: 16 }}>
          <h3>⚠️ Component Error</h3>
          <p>{error.message}</p>
          <button onClick={this.resetError}>Retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
