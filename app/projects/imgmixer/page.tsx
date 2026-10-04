import type { Metadata } from "next";
import ImgMixerProject from "@/components/projects/ImgMixer";

export const metadata: Metadata = {
  title: "ImgMixer | Jasnoor Sandhu",
  description:
    "A real-time image convolution playground built with C++17 and SDL3 — applying blur, edge detection, emboss, sharpen, and more, live.",
};

export default function ImgMixerPage() {
  return <ImgMixerProject />;
}
