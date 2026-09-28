import { test, expect } from "@playwright/test";

test("Criar uma nova reserva", async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: {
        firstname: "Rodrigo",
        lastname: "Teles",
        totalprice: 252,
        depositpaid: true,
        bookingdates: {
          checkin: "2026-01-01",
          checkout: "2026-01-02",
        },
        additionalneeds: "missless",
      },
    },
  );

  const responseBody = await response.json();
  console.log("Resposta da API:", responseBody);

  expect(response.ok()).toBeTruthy();
  expect(responseBody.bookingid).toBeDefined();
  expect(responseBody.booking.firstname).toBe("Rodrigo");
  expect(responseBody.booking.lastname).toBe("Teles");
  expect(responseBody.booking.totalprice).toBe(252);
  expect(responseBody.booking.depositpaid).toBe(true);
  expect(responseBody.booking.bookingdates.checkin).toBe("2026-01-01");
  expect(responseBody.booking.bookingdates.checkout).toBe("2026-01-02");
  expect(responseBody.booking.additionalneeds).toBe("missless");
});
