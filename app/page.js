import { redirect } from "next/navigation";

export const metadata = {
  title: "IJ STITCHES Tailor",
  description:
    "Welcome to IJ STITCHES Tailor — your go-to place for custom-made clothing, quality stitching, and personalized tailoring services.",
  referrer: "origin-when-cross-origin",
};

export default function Page() {
  // Immediate redirect to main content
  redirect("/main");
}
