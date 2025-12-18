import { describe, it, expect } from "vitest";
import isValidUrl from "./isValidUrl";
import type { Resources } from "../Types";

const mockResource = (url: string): Resources => ({
  url,
  author: "test",
  name: "test",
  appliedTags: [],
  createdAt: "2024-01-01",
  id: "1",
  resourceType: "article",
  isFavorite: false,
});

describe("isValidUrl", () => {
  it("returns true for valid https URL", () => {
    expect(isValidUrl(mockResource("https://example.com"))).toBe(true);
  });

  it("returns true for URL with path", () => {
    expect(isValidUrl(mockResource("https://example.com/path/to/page"))).toBe(
      true
    );
  });

  it("returns false for invalid URL", () => {
    expect(isValidUrl(mockResource("not-a-url"))).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isValidUrl(mockResource(""))).toBe(false);
  });

  it("returns false for URL without protocol", () => {
    expect(isValidUrl(mockResource("example.com"))).toBe(false);
  });
});
