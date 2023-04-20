import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

it("should show the correct number of seats.", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);

  expect(seatCountText).toBeInTheDocument();
});

it("should show 'sold out' message because there is no seat available.", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByRole("heading", {
    name: /Show is sold out!/i,
  });

  expect(seatCountText).toBeInTheDocument();

  const purchaseButton = screen.queryByRole("button", {
    name: /purchase/i,
  });
  expect(purchaseButton).not.toBeInTheDocument();
});
