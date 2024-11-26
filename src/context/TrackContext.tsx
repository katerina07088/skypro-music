import { Track } from "@/types/types";
import { useState } from "react";
import { createContext } from "vm";

type TrackProviderProps = {
  children: React.ReactNode;
};

type TrackContextData = {
  track: Track;
  isPlay: boolean;
  isLoop: boolean;
  setIsPlay: (prevState: boolean) => void;
  setIsLoop: (prevState: boolean) => void;
};

export const TrackContext = createContext<TrackContextData | null>();

export default function TrackProvider({ children }: TrackProviderProps) {
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState(false);


  return (
    <TrackContext.Provider value={{ isLoop, setIsLoop, isPlay, setIsPlay }}>
      {children}
    </TrackContext.Provider>
  );
}
