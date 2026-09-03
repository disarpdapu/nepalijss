import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "@/App";

beforeEach(() => {
  window.localStorage.clear();
  window.history.pushState({}, "", "/");
});

describe("App", () => {
  it("renders focused community content with no Election navigation entry", () => {
    render(<App />);

    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(within(nav).getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(within(nav).getByRole("link", { name: "About us" })).toBeInTheDocument();
    expect(within(nav).queryByRole("link", { name: /election/i })).not.toBeInTheDocument();

    expect(screen.getByRole("heading", { level: 2, name: "How we bring people together" })).toBeInTheDocument();
    expect(screen.getByText("Organising Dashain, Tihar, Teej, and Nepali New Year celebrations")).toBeInTheDocument();
    expect(screen.getByText("Participating in community meetings hosted by NRNA")).toBeInTheDocument();
    expect(screen.queryByText(/membership drives/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/migrant support/i)).not.toBeInTheDocument();
    expect(document.body).not.toHaveTextContent(/election/i);
    expect(screen.getByRole("main")).toHaveAttribute("tabindex", "-1");
  });

  it("switches to Nepali, persists the choice, and updates document language", () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole("button", { name: "Switch language to Nepali" })[0]);

    expect(document.documentElement).toHaveAttribute("lang", "ne");
    expect(window.localStorage.getItem("njs-language")).toBe("np");
    expect(screen.getByRole("navigation", { name: "मुख्य नेभिगेसन" })).toHaveTextContent("गृहपृष्ठ");
    expect(screen.getByText("एनआरएनएले आयोजना गर्ने सामुदायिक बैठकहरूमा सहभागी हुने")).toBeInTheDocument();
  });

  it("hides the collapsed mobile menu and restores focus after Escape", () => {
    render(<App />);

    const menu = document.getElementById("mobile-menu");
    const trigger = screen.getByRole("button", { name: "Menu" });
    expect(menu).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(trigger);
    expect(menu).toHaveAttribute("aria-hidden", "false");

    const aboutLink = within(menu!).getByRole("link", { name: "About us" });
    aboutLink.focus();
    fireEvent.keyDown(window, { key: "Escape" });

    expect(menu).toHaveAttribute("aria-hidden", "true");
    expect(trigger).toHaveFocus();
  });

  it("treats the removed /election route as not found", () => {
    window.history.pushState({}, "", "/election");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "This page does not exist" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to the home page" })).toHaveAttribute("href", "/");
  });

  it("renders the About sections and the requested activity scope", () => {
    window.history.pushState({}, "", "/about");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "About the committee" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Our community focus" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Community activities in Spain" })).toBeInTheDocument();
    expect(screen.getByText("1951")).toBeInTheDocument();
    expect(screen.getAllByText(/meetings hosted by NRNA/i)).toHaveLength(3);
    expect(screen.queryByText(/coordination with the embassy/i)).not.toBeInTheDocument();
    expect(document.body).not.toHaveTextContent(/election/i);
  });
});
