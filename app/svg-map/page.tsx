"use client";
import { plots, PlotStatus } from "../../data/plots";

const statusColor: Record<PlotStatus, string> = {
  available: "#b2ffb2", // light green
  sold: "#ffb2b2",      // light red
  reserved: "#ffe7b2",  // light yellow
};

export default function SvgMapPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <svg width="400" height="400" viewBox="0 0 400 400">
        {plots.map((plot) => (
          <g key={plot.id}>
            <polygon
              points={plot.points}
              fill={statusColor[plot.status]}
              stroke="black"
              strokeWidth="2"
            />
            <text x={plot.label.x} y={plot.label.y} fontSize="14" fill="red">
              {plot.number}
            </text>
            <text x={plot.label.x - 20} y={plot.label.y + 20} fontSize="12" fill="blue">
              {plot.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
