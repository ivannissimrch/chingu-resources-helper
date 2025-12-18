import { describe, it, expect } from "vitest";
import { expandSearch } from "./expandSearch";

describe("expandSearch", () => {
  it("returns empty array for empty input", () => {
    expect(expandSearch([])).toEqual([]);
  });

  it("expands 'js' to include 'javascript'", () => {
    const result = expandSearch(["js"]);
    expect(result).toContain("js");
    expect(result).toContain("javascript");
  });

  it("expands 'ts' to include 'typescript'", () => {
    const result = expandSearch(["ts"]);
    expect(result).toContain("ts");
    expect(result).toContain("typescript");
  });

  it("expands 'frontend' to include related terms", () => {
    const result = expandSearch(["frontend"]);
    expect(result).toContain("frontend");
    expect(result).toContain("html");
    expect(result).toContain("css");
    expect(result).toContain("javascript");
    expect(result).toContain("react");
  });

  it("removes duplicates", () => {
    const result = expandSearch(["js", "frontend"]);
    // Both 'js' and 'frontend' map to 'javascript'
    const javascriptCount = result.filter((w) => w === "javascript").length;
    expect(javascriptCount).toBe(1);
  });
});
