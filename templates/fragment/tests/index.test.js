import { render, screen } from "@testing-library/react";
import #FUN_FRAGMENT_NAME from "../components/#FUN_FRAGMENT_NAME";

describe("#FUN_FRAGMENT_NAME", () => {
  it("renders without crashing", () => {
    render(<#FUN_FRAGMENT_NAME />);
    expect(screen.getByRole("heading", { name: "#FUN_FRAGMENT_NAME" })).toBeInTheDocument();
  });
});
