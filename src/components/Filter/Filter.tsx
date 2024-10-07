import { Track } from "@/types/types";
import styles from "./Filter.module.css";
import React, { useEffect } from "react";
import DropMenu from "./DropMenu";

type FilterProps = {
  tracks: Track[];
};
export const Filter: React.FC<FilterProps> = ({ tracks }) => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  //const {tracks} = useAppSelector(state=> state.tracksSlice);

  const getUniqValues = <T, K extends keyof T>(
    items: T[],
    key: K
  ): string[] => {
    const uniqValues = new Set<string>();
    items.forEach((item) => {
      uniqValues.add(String(item[key]));
    });
    return Array.from(uniqValues);
  };

  const filterOptions = ["По умолчанию", "Сначала новые", "Сначала старые"];
  const filters = [
    {
      title: "испольнителю",
      key: "author",
      list: getUniqValues(tracks, "author"),
    },
    {
      title: "жанру",
      key: "genre",
      list: getUniqValues(tracks, "genre"),
    },
    {
      title: "году выпуска",
      key: "year",
      list: filterOptions,
    },
  ];
  const handleFilter = (filter: string): void => {
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
          
          {activeFilter === item.key  && <DropMenu list={item.list} />}
          {/* {activeFilter === item.key  && <div className={styles.dropMenuActiveRound}>
        <p>{item.list.length}</p>
      </div>} */}
        </div>
      ))}

      {/* {filters.map((item) => (
        <FilterItem
          key={item.key}
          title={item.title}
          id={item.key}
          isActive={activeFilter === item.key}
          handleFilter={() => handleFilter(item.key)}
          //setActiveFilter={setActiveFilter}
          list={item.list}
        />
      ))} */}
    </div>
  );
};
