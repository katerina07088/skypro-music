import { Track } from "@/types/types";
import styles from "./Filter.module.css";
import React, { useEffect } from "react";
import DropMenu from "./DropMenu";
import { getUniqueValues } from "@/utils/uniqueValues";


type FilterProps = {
  tracks: Track[];
};
export const Filter: React.FC<FilterProps> = ({ tracks }) => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  // const getUniqValues = <T, K extends keyof T>(
  //   items: T[],
  //   key: K
  // ): string[] => {
  //   const uniqValues = new Set<string>();
  //   items.forEach((item) => {
  //     uniqValues.add(String(item[key]));
  //   });
  //   return Array.from(uniqValues);
  // };

  const filterOptions = ["По умолчанию", "Сначала новые", "Сначала старые"];
  const filters = [
    {
      title: "испольнителю",
      key: "author",
      list: getUniqueValues(tracks, "author"),
    },
    {
      title: "жанру",
      key: "genre",
      list: getUniqueValues(tracks, "genre"),
    },
    {
      title: "году выпуска",
      key: "year",
      list: filterOptions,
    },
  ];
  const handleFilter = (filter: string) => {
    setActiveFilter((prev: string | null) => (prev === filter ? null : filter));
  };

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>

      {filters.map((item) => (
        <div
          key={item.key}
          className={
            item.key === activeFilter
              ? styles.filterActive
              : styles.filterButton
          }
          onClick={() => handleFilter(item.key)}
        >
          {item.title}

          {activeFilter === item.key && <DropMenu list={item.list} />}
        </div>
      ))}
    </div>
  );
};
