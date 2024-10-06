
import { Track } from "@/types/types";
import styles from "./Filter.module.css";
import classNames from "classnames";
import React, { useEffect } from "react";
import { FilterItem } from "../FilterItem/FilterItem";

type FilterProps = {
  tracks: Track[];
};
export const Filter: React.FC<FilterProps> = ({tracks}) => {

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

  // const handleMouseEvent = (e: MouseEvent): void => {
  //   console.log(e.target);
  // };
  // const hadleClick = (e: React.MouseEvent<HTMLElement>): void => {
  //   console.log(e.target);
  // };
  // useEffect(() => {
  //   window.addEventListener("click", handleMouseEvent);
  //   return () => {
  //     window.removeEventListener("click", handleMouseEvent);
  //   };
  // }, []);
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filters.map((item)=>(
        <FilterItem
          key={item.key}
          id={item.key}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          title={item.title}
          list={item.list}
        />
      ))}
    </div>
  );
};
