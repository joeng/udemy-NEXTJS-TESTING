import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandComponent from "@/pages/bands/[bandId]";

it("should display correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent error={null} band={fakeBands[0]} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });

  expect(heading).toBeInTheDocument();
});

it("should get an error message if no band is available", async () => {
  const noBandErrorMessage = "No band available";

  render(<BandComponent error={noBandErrorMessage} band={null} />);

  const error = screen.getByRole("heading", {
    name: /No band available/i,
  });

  expect(error).toBeInTheDocument();
});
