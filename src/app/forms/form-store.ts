import { create } from "zustand";
import { SoilFormValues } from "./soil-form";
import { ExcavationFormValues } from "./excavation/excavation-form";
import { WallFormValues } from "./wall/wall-form";
import { AnchorFormValues } from "./anchor/anchor-form";

type FormStore = {
  soilArray: SoilFormValues[];
  excavationArray: ExcavationFormValues[];
  wallArray: WallFormValues[];
  anchorArray: AnchorFormValues[];
  addSoil: (soil: SoilFormValues) => void;
  addExcavation: (excavation: ExcavationFormValues) => void;
  addWall: (wall: WallFormValues) => void;
  addAnchor: (anchor: AnchorFormValues) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  soilArray: [],
  excavationArray: [],
  wallArray: [],
  anchorArray: [],
  addSoil: (soil: SoilFormValues) =>
    set((state) => ({
      soilArray: [...state.soilArray, soil],
    })),
  addExcavation: (excavation: ExcavationFormValues) =>
    set((state) => ({
      excavationArray: [...state.excavationArray, excavation],
    })),
  addWall: (wall: WallFormValues) =>
    set((state) => ({
      wallArray: [...state.wallArray, wall],
    })),
  addAnchor: (anchor: AnchorFormValues) =>
    set((state) => ({
      anchorArray: [...state.anchorArray, anchor],
    })),
}));
