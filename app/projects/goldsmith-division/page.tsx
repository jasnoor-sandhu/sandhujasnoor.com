import type { Metadata } from "next";
import GoldsmithDivisionProject from "@/components/projects/GoldsmithDivision";

export const metadata: Metadata = {
  title: "Goldsmith Division Algorithm IP | Jasnoor Sandhu",
  description:
    "Designing and implementing an AXI Stream IP block for the Goldschmidt Division Algorithm on a Pynq Z1 FPGA — 6-cycle floating-point division at 99.99% accuracy.",
};

export default function GoldsmithDivisionPage() {
  return <GoldsmithDivisionProject />;
}
