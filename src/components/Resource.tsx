import { IoIosStarOutline } from "react-icons/io";
import { formatDate } from "../helpers/formatDate";
import type { Resources } from "../Types";
import { IoPersonOutline } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
import { FALLBACK_TAGS } from "../helpers/fallbackData";
import { useStoreContext } from "../context/StoreContext";

export default function Resource({ resource }: { resource: Resources }) {
  const { updateFavorites } = useStoreContext();
  return (
    <div
      key={resource.id}
      className="w-full max-w-md mx-auto bg-[#E5E7Eb] rounded-lg p-6"
    >
      <div className="flex justify-between items-center">
        {resource.isFavorite}
        <span className="text-sm text-gray-500">
          {formatDate(resource.createdAt)}
        </span>
        <IoIosStarOutline
          onClick={() => updateFavorites(resource.id)}
          className={`text-2xl cursor-pointer ${
            resource.isFavorite === true ? "text-yellow-500" : "text-gray-400"
          }`}
        />
      </div>
      <div className="text-xl md:text-2xl underline underline-offset-4 mb-5 break-words">
        {resource.name}
      </div>
      <div className="w-full break-words">
        <a href={resource.url} className="text-blue-900 break-all">
          {resource.url}{" "}
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 pt-4 text-gray-600 text-sm md:text-base">
        <div className="flex items-center gap-1">
          <IoPersonOutline />
          <h4 className="text-sm md:text-base">
            {resource.author === "jdmedlock"
              ? "Jim"
              : resource.author === "andresc1310"
              ? "Andres"
              : resource.author}
          </h4>
        </div>
        <div className="flex items-center gap-1">
          <RiArticleLine />

          <h4>{resource.resourceType}</h4>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4 text-gray-400">
        {resource.appliedTags.map((tagId) => {
          const tagName = FALLBACK_TAGS.find((tag) => tag.id === tagId)?.tag;
          return (
            <div
              className="border px-3 py-1 rounded text-center bg-gray-50 mt-5 shadow-sm"
              key={tagId}
            >
              {tagName}
            </div>
          );
        })}
      </div>
    </div>
  );
}
