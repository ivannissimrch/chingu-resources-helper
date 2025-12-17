import { useStoreContext } from "../context/StoreContext";
import NotFound from "./NotFound";
import EmptySearchPage from "./EmptySearchPage";
import { useState, useEffect } from "react";
import SortBy from "./SortBy";
import Pagination from "./Paginate";
import Resource from "./Resource";

export default function ResourcesC() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const { store } = useStoreContext();

  const filteredResources = store.filteredResources;
  useEffect(() => {
    setCurrentPage(0);
  }, [store.filteredResources]);
  // Used to calculate the starting index of the items to display
  const offset = currentPage * itemsPerPage;
  const paginatedResources = filteredResources.slice(
    offset,
    offset + itemsPerPage
  );
  const pageCount = Math.ceil(filteredResources.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  if (filteredResources.length === store.resources.length) {
    return (
      <div className="bg-white h-full w-full">
        <EmptySearchPage />
      </div>
    );
  }
  if (filteredResources.length === 0) {
    return (
      <div className="bg-white w-full">
        <NotFound />
      </div>
    );
  } else {
    return (
      <>
        {" "}
        <SortBy />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          {paginatedResources.map((resource) => (
            <Resource resource={resource} key={resource.id} />
          ))}
        </section>
        {pageCount > 1 && (
          <div className="w-full flex justify-center mt-6">
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
        <p className="w-full text-center text-sm text-gray-500 mt-2">
          Page {currentPage + 1} of {pageCount}
        </p>
      </>
    );
  }
}
