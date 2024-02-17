"use client";

import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoriesProps {
  data: Category[];
}

const Categories = ({ data }: CategoriesProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };
  return (
    <div className="flex flex-col w-full space-y-2">
      <div className="w-full flex justify-end">
        <div
          onClick={() => router.push("/companion/new")}
          className="flex items-center justify-center bg-gray-600 rounded-md px-4 py-2 w-fit text-white text-sm"
        >
          Create Character
        </div>
      </div>
      <div className="w-full flex overflow-x-auto space-x-2 p-1">
        <button
          onClick={() => onClick(undefined)}
          className={cn(
            "flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition",
            !categoryId ? "bg-primary/25" : "bg-primary/10"
          )}
        >
          Newest
        </button>
        {data.map((item) => (
          <button
            onClick={() => onClick(item.id)}
            key={item.id}
            className={cn(
              "flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition",
              item.id === categoryId ? "bg-primary/25" : "bg-primary/10"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
