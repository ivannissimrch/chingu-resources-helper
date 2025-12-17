import { Checkbox, FormControlLabel } from "@mui/material";
import { useStoreContext } from "../context/StoreContext";

export default function Author({ author }: { author: string }) {
  const { store, handleAuthorSelected } = useStoreContext();
  return (
    <FormControlLabel
      key={author}
      control={
        <Checkbox
          checked={store.authors ? store.authors.includes(author) : false}
          onChange={() => handleAuthorSelected(author)}
        />
      }
      label={
        author === "jdmedlock"
          ? "Jim"
          : author === "andresc1310"
          ? "Andres"
          : author
      }
    />
  );
}
