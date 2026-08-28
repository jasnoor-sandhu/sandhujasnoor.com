import type { Metadata } from "next";
import BubbleSortRtlProject from "@/components/projects/BubbleSortRtl";

export const metadata: Metadata = {
  title: "Bubble Sort in RTL | Jasnoor Sandhu",
  description:
    "A foundational RTL implementation of the Bubble Sort algorithm in Verilog — data flow modeling, state diagram design, and simulation in Vivado.",
};

export default function BubbleSortRtlPage() {
  return <BubbleSortRtlProject />;
}
