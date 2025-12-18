import { describe, it, expect } from "vitest";
import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("formats ISO date string correctly", () => {
    expect(formatDate("2024-06-15")).toBe("Jun 15, 2024");
  });

  it("formats full ISO datetime string", () => {
    expect(formatDate("2024-01-01T12:00:00Z")).toBe("Jan 1, 2024");
  });

  it("formats different months correctly", () => {
    expect(formatDate("2024-03-20")).toBe("Mar 20, 2024");
    expect(formatDate("2024-12-25")).toBe("Dec 25, 2024");
  });

  it("handles end of year dates", () => {
    expect(formatDate("2023-12-31")).toBe("Dec 31, 2023");
  });

  it("handles start of year dates", () => {
    expect(formatDate("2024-01-01")).toBe("Jan 1, 2024");
  });
});
