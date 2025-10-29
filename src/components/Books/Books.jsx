import React, { useRef, useEffect, useState } from "react";
import "./books.css";

const Books = ({ pageName }) => {
    const videoRef = useRef(null);
    const [videoHeight, setVideoHeight] = useState(0);

    useEffect(() => {
        function updateHeight() {
            if (videoRef.current) {
                setVideoHeight(videoRef.current.offsetHeight);
            }
        }
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <div className="w-screen flex flex-col">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="block top-12 sm:top-0 absolute w-full"
            >
                <source src="../images/sketchbook-video.MP4" type="video/mp4" />
            </video>

            <div style={{ paddingTop: videoHeight, position: "relative", zIndex: 1 }}>
                {pageName === "page by page" && (
                    <h1 className="text-[60px] text-pageName text-center relative">{pageName}</h1>
                )}
                {pageName === "ode to a lighter world" && (
                    <h1 className="text-[70px] text-pageName text-center relative">{pageName}</h1>
                )}
            </div>
        </div>
    );
};

export default Books;