"use client";
import { useState, useEffect } from "react";
import { X, Play, MessageCircle } from "lucide-react";

const videosData = [
    {
        id: 1,
        title: "Intriguing native wear",
        videoUrl: "/video12.mp4",
        description: "Watch our master tailors craft a native for your outfit",
        duration: "8:45",
        clothes: ["/5.jpg", "/12.jpg"]
    },
    {
        id: 2,
        title: "Custom native Making Process",
        videoUrl: "/video11.mp4",
        description: "Watch IJ Stitches craft a native from start to finish",
        duration: "8:45",
        clothes: ["/20.jpg", "/13.jpg"]
    },
    {
        id: 3,
        title: "Traditional Native Wear",
        videoUrl: "/video10.mp4",
        description: "The art of creating authentic African attire",
        duration: "6:20",
        clothes: ["/5.jpg", "/6.jpg"]
    },
    {
        id: 4,
        title: "Native Tailoring Mastery",
        videoUrl: "/video9.mp4",
        description: "Precision and attention to detail in every stitch",
        duration: "5:15",
        clothes: ["/7.jpg", "/8.jpg"]
    },
    {
        id: 5,
        title: "Fabric Selection Guide",
        videoUrl: "/video8.mp4",
        description: "How we choose the finest materials",
        duration: "7:30",
        clothes: ["/9.jpg", "/10.jpg"]
    },
    {
        id: 6,
        title: "Fitting Session Behind the Scenes",
        videoUrl: "/video6.mp4",
        description: "Ensuring the perfect fit for every client",
        duration: "4:50",
        clothes: ["/11.jpg", "/12.jpg"]
    },
    {
        id: 7,
        title: "Hand Stitching Techniques",
        videoUrl: "/video5.mp4",
        description: "Traditional craftsmanship meets modern style",
        duration: "9:10",
        clothes: ["/13.jpg", "/14.jpg"]
    }
];

function VideoThumbnail({ videoUrl, hovered }) {
    const [thumb, setThumb] = useState(null);

    useEffect(() => {
        const video = document.createElement("video");
        video.src = videoUrl;
        video.crossOrigin = "anonymous";
        video.muted = true;
        video.currentTime = 1;

        const captureFrame = () => {
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            setThumb(canvas.toDataURL());
        };

        video.addEventListener("loadeddata", captureFrame);
        return () => video.removeEventListener("loadeddata", captureFrame);
    }, [videoUrl]);

    return (
        <div className="relative overflow-hidden aspect-video bg-black flex items-center justify-center">
            {thumb ? (
                <img
                    src={thumb}
                    className={`w-full h-full object-contain transition-all duration-700 ${
                        hovered ? "scale-110 brightness-75" : "scale-100"
                    }`}
                />
            ) : (
                <div className="text-white p-4">Loading video...</div>
            )}

            <div className="absolute top-3 left-3 bg-black/70 px-3 py-1.5 rounded-lg border border-amber-700 backdrop-blur-sm">
                <span className="text-amber-400 text-xs font-bold tracking-widest">
                    IJ STITCHES
                </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        </div>
    );
}

function VideoModal({ video, onClose }) {
    if (!video) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 text-white bg-amber-600 px-4 py-2 rounded-bl-lg shadow-lg flex items-center gap-2"
                >
                    <X size={24} />
                    <span>Close</span>
                </button>

                <div className="bg-black rounded-lg overflow-hidden shadow-2xl border border-amber-700 mt-10">
                    <div className="relative aspect-video">
                        <video className="w-full h-100" controls autoPlay playsInline>
                            <source src={video.videoUrl} type="video/mp4" />
                        </video>

                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded border border-amber-600">
                            <span className="text-amber-400 font-bold tracking-widest text-sm">
                                IJ STITCHES
                            </span>
                        </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 border-t border-amber-700">
                        <h3 className="text-2xl font-bold text-amber-600 mb-3">{video.title}</h3>
                        <p className="text-gray-700 text-sm mb-4">{video.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// MAIN PAGE
export default function VideosPage() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [hoveredVideo, setHoveredVideo] = useState(null);

    return (
        <div className="min-h-screen text-black">

            {/* HERO */}
            <div className="relative h-[500px] overflow-hidden mt-35">
                <img
                    src="/12.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-2xl">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4">
                            <Play size={32} className="text-white" />
                            <img src="ij-logo.png" alt="ij logo" className="h-20 w-20"/>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            The Art of Tailoring
                        </h1>
                        <p className="text-xl text-amber-100">
                            Step into our atelier and witness craftsmanship at its finest
                        </p>
                    </div>
                </div>
            </div>

            {/* GRID */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-black mb-8">Featured Collections</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {videosData.map((video) => (
                        <div
                            key={video.id}
                            onClick={() => setSelectedVideo(video)}
                            onMouseEnter={() => setHoveredVideo(video.id)}
                            onMouseLeave={() => setHoveredVideo(null)}
                            className="cursor-pointer group"
                        >
                            <div className="shadow-2xl hover:shadow-2xl hover:border-amber-700 transition h-120 lg:mt-30 mt-15">

                                <VideoThumbnail
                                    videoUrl={video.videoUrl}
                                    hovered={hoveredVideo === video.id}
                                />

                                <div className="p-6">
                                    <h3 className="text-xl font-bold group-hover:text-amber-600 transition">
                                        {video.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                                        {video.description}
                                    </p>

                                    <div className="flex justify-between mt-4">
                                        <span className="text-gray-600 text-sm">
                                            {video.duration}
                                        </span>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open("https://wa.me/2349050622081", "_blank");
                                            }}
                                            className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-700"
                                        >
                                            <MessageCircle size={16} />
                                            Chat Tailor
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mt-4">
                                        {video.clothes.map((cloth, index) => (
                                            <img
                                                key={index}
                                                src={cloth}
                                                alt={`Design ${index + 1}`}
                                                className="w-full h-28 object-cover"
                                            />
                                        ))}
                                    </div>

                                    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
                                    <a
                                        href="/portfolio" 
                                        className="block mt-4 mb-10 text-center bg-amber-700 hover:bg-amber-800 text-sm text-white py-3 rounded-lg font-semibold shadow-lg transition-all"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Browse Portfolio
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedVideo && (
                <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
            )}
        </div>
    );
}
