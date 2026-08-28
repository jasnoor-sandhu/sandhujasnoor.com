import type { Metadata } from "next";
import OtfsWaveformDesignProject from "@/components/projects/OtfsWaveformDesign";

export const metadata: Metadata = {
  title: "OTFS Waveform Design | Jasnoor Sandhu",
  description:
    "Investigating the transition from OFDM to OTFS for next-generation wireless communication — improving spectral efficiency and BER performance under low-SNR conditions.",
};

export default function OtfsWaveformDesignPage() {
  return <OtfsWaveformDesignProject />;
}
