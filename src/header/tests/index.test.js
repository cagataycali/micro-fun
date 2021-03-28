import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { name: "Header" })).toBeInTheDocument();
  });
});
