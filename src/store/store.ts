"use client";
import { Track } from "@/types/types";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

type State = {
  tracks: Track[];
  initialTracks: Track[];
  track: Track | null;
  isPlay: boolean;
  shuffled: boolean;
  isLoop: boolean;
};

const trackSlice = createSlice({
  name: "track",

  initialState: {
    initialTracks: [],
    tracks: [],
    track: null,
    isPlay: false,
    shuffled: false,
    isLoop: false,
  } as State,

  reducers: {
    setTrack: (state, action) => {
      state.track = action.payload;
    },
    setIsPlay: (state, action) => {
      state.isPlay = action.payload;
    },
    setIsLoop: (state, action) => {
      state.isLoop = action.payload;
    },
    setTracks: (state, action) => {
      state.tracks = action.payload;
      state.initialTracks = action.payload;
    },
    setNextTrack: (state) => {
      if (!state.track) return;
      const nextTrack = getNextTrack(state.track, state.tracks);
      if (nextTrack) {
        state.track = nextTrack;
      }
    },
    shuffle: (state) => {
      if (state.shuffled) {
        state.tracks = state.initialTracks;
      } else {
        state.tracks = shuffle(state.tracks);
      }
      state.track = state.tracks[0];
      state.shuffled = !state.shuffled;
    },
    setPrevTrack: (state) => {
      if (!state.track) return;
      const prevTrack = getPrevTrack(state.track, state.tracks);
      if (prevTrack) {
        state.track = prevTrack;
      }
    },
  },
});

function getNextTrack(track: Track, tracks: Track[]) {
  const currentIndex = tracks.findIndex((t) => t._id === track._id);
  const nextIndex = currentIndex + 1;
  const nextTrack = tracks[nextIndex];

  if (!nextTrack) return null;

  return nextTrack;
}

function getPrevTrack(track: Track, tracks: Track[]) {
  const currentIndex = tracks.findIndex((t) => t._id === track._id);
  const prevIndex = currentIndex - 1;
  const prevTrack = tracks[prevIndex];

  if (!prevTrack) return null;

  return prevTrack;
}

export function shuffle<T>(_array: T[]): T[] {
  const array = [..._array];

  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const trackActions = trackSlice.actions;

export const store = configureStore({
  reducer: {
    trackSlice: trackSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
