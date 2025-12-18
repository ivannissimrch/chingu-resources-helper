import { describe, it, expect } from "vitest";
import getResourceType from "./getResourceType";

describe("getResourceType", () => {
  describe("video detection", () => {
    it("returns 'video' for YouTube URLs", () => {
      expect(getResourceType("https://www.youtube.com/watch?v=abc123")).toBe(
        "video"
      );
      expect(getResourceType("https://youtube.com/watch?v=abc123")).toBe(
        "video"
      );
    });

    it("returns 'video' for Vimeo URLs", () => {
      expect(getResourceType("https://vimeo.com/123456789")).toBe("video");
      expect(getResourceType("https://player.vimeo.com/video/123456")).toBe(
        "video"
      );
    });

    it("handles case-insensitive matching", () => {
      expect(getResourceType("https://YOUTUBE.com/watch?v=abc")).toBe("video");
      expect(getResourceType("https://YouTube.COM/watch?v=abc")).toBe("video");
      expect(getResourceType("https://VIMEO.com/123456")).toBe("video");
    });
  });

  describe("article detection", () => {
    it("returns 'article' for non-video URLs", () => {
      expect(getResourceType("https://dev.to/article/react-hooks")).toBe(
        "article"
      );
      expect(getResourceType("https://medium.com/article")).toBe("article");
      expect(getResourceType("https://github.com/repo")).toBe("article");
    });

    it("returns 'article' for URLs without video keywords", () => {
      expect(getResourceType("https://example.com")).toBe("article");
      expect(getResourceType("https://docs.google.com/document")).toBe(
        "article"
      );
    });
  });
});
