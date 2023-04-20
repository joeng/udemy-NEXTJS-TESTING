import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

it("should have correct heading", () => {
  render(<Home />);

  const heading = screen.getByRole("heading", {
    name: "Welcome to Popular Concert Venue",
  });

  expect(heading).toBeInTheDocument();
});

it("should have correct image", () => {
  render(<Home />);

  const image = screen.getByRole("img", {
    name: "Concert goer with hands in the shape of a heart",
  });

  expect(image).toBeInTheDocument();
});
