import axios from "axios";

export default function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;

    if (status === 429) {
      return "API rate limit reached. Please wait a minute and try again.";
    }

    if (status === 401 || status === 403) {
      return "API authentication failed. Check your API key.";
    }

    if (status && status >= 500) {
      return "Service is temporarily unavailable. Try again later.";
    }

    if (error.code === "ERR_NETWORK") {
      return "Network error. Check your internet connection.";
    }

    if (error.code === "ECONNABORTED") {
      return "Request timed out. Please try again.";
    }

    if (error.message) {
      return `Failed to fetch data: ${error.message}`;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An unexpected error occurred. Please try again.";
}
