import { describe, it, expect } from "vitest";
import { AxiosError, AxiosHeaders } from "axios";
import getErrorMessage from "./getErrorMessage";

function createAxiosError(status: number, statusText: string): AxiosError {
  const headers = new AxiosHeaders();
  return new AxiosError("Request failed", "ERR_BAD_REQUEST", undefined, undefined, {
    status,
    statusText,
    data: {},
    headers,
    config: { headers },
  });
}

describe("getErrorMessage", () => {
  describe("Axios errors", () => {
    it("returns rate limit message for 429 status", () => {
      const error = createAxiosError(429, "Too Many Requests");
      expect(getErrorMessage(error)).toBe(
        "API rate limit reached. Please wait a minute and try again."
      );
    });

    it("returns auth error message for 401 status", () => {
      const error = createAxiosError(401, "Unauthorized");
      expect(getErrorMessage(error)).toBe(
        "API authentication failed. Check your API key."
      );
    });

    it("returns server error message for 500+ status", () => {
      const error = createAxiosError(500, "Internal Server Error");
      expect(getErrorMessage(error)).toBe(
        "Service is temporarily unavailable. Try again later."
      );
    });

    it("returns network error message for ERR_NETWORK", () => {
      const error = new AxiosError("Network Error", "ERR_NETWORK");
      expect(getErrorMessage(error)).toBe(
        "Network error. Check your internet connection."
      );
    });

    it("returns timeout message for ECONNABORTED", () => {
      const error = new AxiosError("Timeout", "ECONNABORTED");
      expect(getErrorMessage(error)).toBe("Request timed out. Please try again.");
    });
  });

  describe("Standard errors", () => {
    it("returns Error message for Error objects", () => {
      const error = new Error("Something went wrong");
      expect(getErrorMessage(error)).toBe("Something went wrong");
    });
  });

  describe("Unknown errors", () => {
    it("returns generic message for unknown types", () => {
      expect(getErrorMessage("string error")).toBe(
        "An unexpected error occurred. Please try again."
      );
      expect(getErrorMessage(null)).toBe(
        "An unexpected error occurred. Please try again."
      );
    });
  });
});
