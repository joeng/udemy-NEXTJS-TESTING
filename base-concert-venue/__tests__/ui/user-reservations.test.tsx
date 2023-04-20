import { UserReservations } from "@/components/user/UserReservations";
import { render, screen } from "@testing-library/react";

it("should display reservations and 'purchase more' button when reservations exists", async () => {
  render(<UserReservations userId={1} />);

  const purchaseButton = await screen.findByRole("button", {
    name: /Purchase more tickets/i,
  });

  expect(purchaseButton).toBeInTheDocument();
});

it("should display reservations and 'purchase ticket' button if user has no show purchased yet", async () => {
  render(<UserReservations userId={2} />);

  const purchaseButton = await screen.findByRole("button", {
    name: /Purchase tickets/i,
  });
  expect(purchaseButton).toBeInTheDocument();

  const yourTicketHeading = screen.queryByRole("heading", {
    name: /your ticket/i,
  });
  expect(yourTicketHeading).not.toBeInTheDocument();
});
