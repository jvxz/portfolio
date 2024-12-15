export default function Overlay() {
  return (
    <div
      style={{
        zIndex: 1000,
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        background: `url(https://utfs.io/f/c7CSJBhCYkEGmGimM4dFqzIP0o1HLYDy5aBAxesVRMOZEXUQ)`,
        // opacity: 0.04,
        opacity: 0.027,
        pointerEvents: "none",
        imageRendering: "pixelated",
      }}
    >
      {/* <div className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black)] dark:bg-black" /> */}
    </div>
  );
}
