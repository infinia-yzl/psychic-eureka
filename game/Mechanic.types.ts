// This file contains types for base game mechanics that aren't currently abstracted to their own classes.
import { ApiField, ApiResource } from "../api/StarRailApi.type.ts";

export enum Path {
  "Warrior" = "The Destruction",
  "Rogue" = "The Hunt",
  "UNKNOWN1" = "The Erudition",
  "UNKNOWN2" = "The Harmony",
  "UNKNOWN3" = "The Nihility",
  "UNKNOWN4" = "The Preservation",
  "UNKNOWN5" = "The Abundance",
}

export enum Element {
  "Physical" = "Physical",
  "Fire" = "Fire",
  "Ice" = "Ice",
  "Thunder" = "Lightning",
  "Wind" = "Wind",
  "Quantum" = "Quantum",
  "Imaginary" = "Imaginary",
}

export type Field = ApiField;

export interface Attribute {
  field: Field;
  name: string;
  icon: string;
  value: number;
  display: string;
  percent: boolean;
  type?: string;
  count?: number;
  step?: number;
}

export interface Resource extends ApiResource {}

export interface PathResource extends Resource {
  id: Path;
}

export interface ElementResource extends Resource {
  id: Element;
}

export enum Effect {
  AoEAttack = "AoEAttack",
  Blast = "Blast",
  Enhance = "Enhance",
  MazeAttack = "MazeAttack", // Maze refers to "overworld", i.e. outside of combat
  SingleAttack = "SingleAttack",
}
