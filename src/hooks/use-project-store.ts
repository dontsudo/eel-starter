import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Anchor, Excavation, Soil, Wall } from "@/app/playground/data/data";

export type Project = {
  soil: Soil[];
  excavation: Excavation[];
  wall: Wall[];
  anchor: Anchor[];
};

export type ProjectStore = {
  soil: Soil[];
  excavation: Excavation[];
  wall: Wall[];
  anchor: Anchor[];
  addSoil: (soil: Soil) => void;
  removeSoil: (id: string) => void;
  addExcavation: (excavation: Excavation) => void;
  removeExcavation: (id: string) => void;
  addWall: (wall: Wall) => void;
  removeWall: (id: string) => void;
  addAnchor: (anchor: Anchor) => void;
  removeAnchor: (id: string) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  soil: [],
  excavation: [],
  wall: [],
  anchor: [],
  addSoil: (soil) => {
    set((state) => ({
      soil: [...state.soil, { ...soil, id: uuidv4() }],
    }));
  },
  removeSoil: (id) => {
    set((state) => ({
      soil: state.soil.filter((soil) => soil.id !== id),
    }));
  },
  addExcavation: (excavation) => {
    set((state) => ({
      excavation: [...state.excavation, { ...excavation, id: uuidv4() }],
    }));
  },
  removeExcavation: (id) => {
    set((state) => ({
      excavation: state.excavation.filter((excavation) => excavation.id !== id),
    }));
  },
  addWall: (wall) => {
    set((state) => ({
      wall: [...state.wall, { ...wall, id: uuidv4() }],
    }));
  },
  removeWall: (id) => {
    set((state) => ({
      wall: state.wall.filter((wall) => wall.id !== id),
    }));
  },
  addAnchor: (anchor) => {
    set((state) => ({
      anchor: [...state.anchor, { ...anchor, id: uuidv4() }],
    }));
  },
  removeAnchor: (id) => {
    set((state) => ({
      anchor: state.anchor.filter((anchor) => anchor.id !== id),
    }));
  },
}));
