import type { Metadata } from "next";
import GeometricProbabilityProject from "@/components/projects/GeometricProbability";

export const metadata: Metadata = {
  title: "Geometric Probability: The Equidistant Point Puzzle | Jasnoor Sandhu",
  description:
    "A full geometric derivation of a two-random-points probability puzzle — locus construction, sector/intersection areas, and an 8-fold symmetry reduction to a closed-form integral.",
};

export default function GeometricProbabilityPage() {
  return <GeometricProbabilityProject />;
}
