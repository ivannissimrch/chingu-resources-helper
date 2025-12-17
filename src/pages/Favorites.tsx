import { useStoreContext } from "../context/StoreContext";
import EmptyFavorites from "../components/EmptyFavorites";
import Resource from "../components/Resource";

export default function Favorites() {
  const { store } = useStoreContext();
  const favorites = store.resources.filter(
    (resource) => resource.isFavorite === true
  );
  if (favorites.length === 0) {
    return (
      <div className="w-full">
        <EmptyFavorites />
      </div>
    );
  } else {
    return (
      <div className="w-full flex justify-center mt-6">
        <div>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
            {favorites.map((resource) => (
              <Resource resource={resource} key={resource.id} />
            ))}
          </section>
        </div>
      </div>
    );
  }
}
