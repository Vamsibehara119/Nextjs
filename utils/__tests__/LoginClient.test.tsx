/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginClient from "../../app/login/LoginClient";

// mock the server action
jest.mock("../../app/login/actions", () => ({
  loginAction: jest.fn(),
}));

import { loginAction } from "../../app/login/actions";

describe("LoginClient", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders login form fields", () => {
    render(<LoginClient />);

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });

  test("calls loginAction on submit with FormData", async () => {
    (loginAction as jest.Mock).mockResolvedValue(undefined);

    render(<LoginClient />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "admin@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "admin123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(loginAction).toHaveBeenCalledTimes(1);
    });

    // ✅ assert FormData was passed
    const formData = (loginAction as jest.Mock).mock.calls[0][0] as FormData;

    expect(formData.get("email")).toBe("admin@test.com");
    expect(formData.get("password")).toBe("admin123");
  });

  test("shows error message when login fails", async () => {
    (loginAction as jest.Mock).mockResolvedValue({
      error: "Invalid email or password",
    });

    render(<LoginClient />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "wrong@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "wrongpass" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(
      await screen.findByText("Invalid email or password")
    ).toBeInTheDocument();
  });
});
