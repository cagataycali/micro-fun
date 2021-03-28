import { render, screen } from "@testing-library/react";
import Avatar from "../components/Avatar";

describe("Avatar", () => {
  it("renders without crashing", () => {
    render(<Avatar />);
    expect(screen.getByRole("heading", { name: "Avatar" })).toBeInTheDocument();
  });
});
