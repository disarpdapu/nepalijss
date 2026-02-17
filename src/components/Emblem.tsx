const Emblem = ({ size = 500 }: { size?: number }) => {
  const cx = 250;
  const cy = 250;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="emblem-seal"
    >
      <defs>
        <clipPath id="nepalClip">
          <path d={nepalMapPath} />
        </clipPath>
      </defs>

      {/* Outer blue ring */}
      <circle cx={cx} cy={cy} r={240} fill="#003070" />
      <circle cx={cx} cy={cy} r={218} fill="#FFFFFF" />

      {/* Spain accent ring (red-yellow-red thin band) */}
      <circle cx={cx} cy={cy} r={195} fill="#AA151B" stroke="none" />
      <circle cx={cx} cy={cy} r={192} fill="#F1BF00" stroke="none" />
      <circle cx={cx} cy={cy} r={189} fill="#AA151B" stroke="none" />
      <circle cx={cx} cy={cy} r={186} fill="#FFFFFF" stroke="none" />

      {/* Nepal map with flag-colored landscape fill */}
      <g clipPath="url(#nepalClip)">
        {/* Red top band */}
        <rect x="130" y="170" width="240" height="55" fill="#FF0000" />
        {/* White middle band */}
        <rect x="130" y="225" width="240" height="40" fill="#FFFFFF" />
        {/* Green lower band */}
        <rect x="130" y="265" width="240" height="55" fill="#0B6623" />
      </g>

      {/* Nepal map outline */}
      <path
        d={nepalMapPath}
        fill="none"
        stroke="#003070"
        strokeWidth="1.5"
      />

      {/* Tree trunk emerging from green zone */}
      <rect x="246" y="260" width="8" height="40" rx="2" fill="#5C3D1A" />

      {/* Tree canopy (simplified) */}
      <ellipse cx="250" cy="248" rx="28" ry="22" fill="#0B6623" />
      <ellipse cx="250" cy="235" rx="22" ry="18" fill="#0D7A2B" />
      <ellipse cx="250" cy="225" rx="15" ry="14" fill="#0B6623" />

      {/* Tree roots (subtle) */}
      <path
        d="M246 300 Q240 310 235 312 M254 300 Q260 310 265 312 M250 300 Q250 314 250 316"
        stroke="#5C3D1A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* 4 Red Stars in the white ring area */}
      {/* Left side stars */}
      <g transform={`translate(${cx - 175}, ${cy - 50})`}>
        <polygon points={starPoints(0, 0, 12, 5)} fill="#FF0000" />
      </g>
      <g transform={`translate(${cx - 175}, ${cy + 50})`}>
        <polygon points={starPoints(0, 0, 12, 5)} fill="#FF0000" />
      </g>
      {/* Right side stars */}
      <g transform={`translate(${cx + 175}, ${cy - 50})`}>
        <polygon points={starPoints(0, 0, 12, 5)} fill="#FF0000" />
      </g>
      <g transform={`translate(${cx + 175}, ${cy + 50})`}>
        <polygon points={starPoints(0, 0, 12, 5)} fill="#FF0000" />
      </g>

      {/* Top Arc Text – Nepali */}
      <path
        id="topArc"
        d={`M ${cx - 170} ${cy} A 170 170 0 0 1 ${cx + 170} ${cy}`}
        fill="none"
        stroke="none"
      />
      <text
        fill="#003070"
        fontSize="18"
        fontWeight="700"
        fontFamily="'Noto Sans Devanagari', sans-serif"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          नेपाली जनसम्पर्क समिति – स्पेन
        </textPath>
      </text>

      {/* Bottom Arc Text – English */}
      <path
        id="bottomArc"
        d={`M ${cx - 175} ${cy + 10} A 175 175 0 0 0 ${cx + 175} ${cy + 10}`}
        fill="none"
        stroke="none"
      />
      <text
        fill="#003070"
        fontSize="13"
        fontWeight="600"
        fontFamily="'Source Sans 3', 'Segoe UI', sans-serif"
        letterSpacing="0.5"
      >
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          Nepalese People Co-ordination Committee, Spain
        </textPath>
      </text>
    </svg>
  );
};

// Simplified Nepal map path (centered around 250,250)
const nepalMapPath =
  "M145 260 C148 255 152 248 158 242 C163 237 170 232 175 228 C180 224 185 220 192 215 C198 210 205 205 212 200 C218 196 224 193 230 190 C236 187 242 185 248 184 C254 183 260 183 266 184 C272 185 278 187 284 190 C290 193 295 197 300 202 C305 207 310 213 315 218 C320 222 325 225 330 230 C335 234 338 237 342 242 C346 247 348 250 350 255 C352 260 353 265 352 270 C351 275 349 280 346 285 C343 290 339 293 334 296 C329 299 323 300 317 301 C311 302 305 302 298 302 C291 302 284 302 277 301 C270 300 263 299 256 298 C249 297 242 297 235 297 C228 297 221 298 214 299 C207 300 200 301 193 301 C186 301 180 300 174 298 C168 296 163 293 159 289 C155 285 152 280 150 275 C148 270 146 265 145 260 Z";

// Star polygon points generator
function starPoints(cx: number, cy: number, outerR: number, innerR: number): string {
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return points.join(" ");
}

export default Emblem;
