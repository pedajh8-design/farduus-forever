import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "For Farduus Xuseen ❤️ — A Letter From My Heart";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #080B20 0%, #1a0f35 45%, #42183c 80%, #70264b 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(circle at 50% 30%, rgba(255, 107, 154, 0.25) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            fontSize: 70,
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          💌 ❤️ 🌹
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            letterSpacing: "-0.02em",
            marginBottom: 16,
            textShadow: "0 4px 20px rgba(255, 107, 154, 0.6)",
          }}
        >
          For Farduus Xuseen ❤️
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#FFD89A",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          A Letter From My Heart
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#FFD5E2",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          &ldquo;Hal Qalbi, Hal Jacayl, Hal Mustaqbal. ❤️&rdquo;
        </div>
        <div
          style={{
            marginTop: 40,
            padding: "10px 24px",
            borderRadius: 9999,
            background: "rgba(255, 107, 154, 0.2)",
            border: "1px solid rgba(255, 107, 154, 0.4)",
            fontSize: 18,
            color: "#B9A6FF",
          }}
        >
          Farduus Forever • Digital Love Letter
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
