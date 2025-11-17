export const metadata = {
  title: "IJ STITCHES Tailor",
  description:
    "Welcome to IJ STITCHES Tailor — your go-to place for custom-made clothing, quality stitching, and personalized tailoring services.",
  referrer: "origin-when-cross-origin",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          IJ STITCHES Tailor
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
          Your go-to place for custom-made clothing, quality stitching, and personalized tailoring services.
        </p>
      </div>
    </div>
  );
}
