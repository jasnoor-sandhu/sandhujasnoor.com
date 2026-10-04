import type { Metadata } from "next";
import VpnoorProject from "@/components/projects/Vpnoor";

export const metadata: Metadata = {
  title: "VPNOOR | Jasnoor Sandhu",
  description:
    "A Python/FFmpeg CLI for turning clean footage into deliberately lo-fi, degraded video with three distinct retro/glitch presets.",
};

export default function VpnoorPage() {
  return <VpnoorProject />;
}
