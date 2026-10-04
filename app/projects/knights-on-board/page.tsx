import type { Metadata } from "next";
import KnightsOnBoardProject from "@/components/projects/KnightsOnBoard";

export const metadata: Metadata = {
  title: "Knights on a Board | Jasnoor Sandhu",
  description:
    "An SDL3 framebuffer simulation inspired by Numberphile's 'Red & Black Knights' puzzle — rendering a native C/C++ pattern-formation visualization.",
};

export default function KnightsOnBoardPage() {
  return <KnightsOnBoardProject />;
}
