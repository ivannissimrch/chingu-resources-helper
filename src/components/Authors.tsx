import FormGroup from "@mui/material/FormGroup";
import { useStoreContext } from "../context/StoreContext";
import Author from "./Author";

export default function Authors() {
  const { store } = useStoreContext();
  const allAuthors = [
    ...new Set(store.resources.map((resource) => resource.author)),
  ];

  const authorsToDisplay = allAuthors.filter((autor) =>
    ["jdmedlock", "andresc1310", "Chingu", "Josh Comeau"].includes(autor)
  );

  return (
    <section className="flex flex-col mt-5">
      <h4 className=" mb-2">Author</h4>
      <FormGroup className="ml-2">
        {authorsToDisplay.map((author) => (
          <Author key={author} author={author} />
        ))}
      </FormGroup>
    </section>
  );
}
