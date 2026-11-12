window.ART = {
  mug: `<svg viewBox="0 0 160 120" role="img" aria-label="Ceramic mug">
    <defs>
      <linearGradient id="mug-body" x1="0" x2="1"><stop offset="0" stop-color="#8fa991"/><stop offset=".42" stop-color="#cfdccd"/><stop offset="1" stop-color="#76917b"/></linearGradient>
      <radialGradient id="mug-shadow"><stop offset="0" stop-color="#2a261f" stop-opacity=".28"/><stop offset="1" stop-color="#2a261f" stop-opacity="0"/></radialGradient>
    </defs>
    <ellipse cx="82" cy="104" rx="46" ry="9" fill="url(#mug-shadow)"/>
    <path d="M104 46h9a15 15 0 0 1 0 30h-9" fill="none" stroke="#7f9a84" stroke-width="8" stroke-linecap="round"/>
    <path d="M52 32h56v60a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12z" fill="url(#mug-body)"/>
    <ellipse cx="80" cy="32" rx="28" ry="6.5" fill="#e6ede3"/>
    <ellipse cx="80" cy="33" rx="23" ry="4.4" fill="#4b3a2b"/>
    <path d="M60 44v44" stroke="#ffffff" stroke-opacity=".45" stroke-width="4" stroke-linecap="round"/>
  </svg>`,
  tote: `<svg viewBox="0 0 160 120" role="img" aria-label="Canvas tote bag">
    <defs>
      <linearGradient id="tote-body" x1="0" x2="1"><stop offset="0" stop-color="#d8c5a3"/><stop offset=".5" stop-color="#ece0c9"/><stop offset="1" stop-color="#cdb790"/></linearGradient>
      <radialGradient id="tote-shadow"><stop offset="0" stop-color="#2a261f" stop-opacity=".26"/><stop offset="1" stop-color="#2a261f" stop-opacity="0"/></radialGradient>
    </defs>
    <ellipse cx="80" cy="106" rx="50" ry="8" fill="url(#tote-shadow)"/>
    <path d="M62 46c0-30 36-30 36 0" fill="none" stroke="#b39770" stroke-width="5" stroke-linecap="round"/>
    <path d="M46 44h68l-5 60H51z" fill="url(#tote-body)"/>
    <path d="M46 44h68l-1 8H47z" fill="#c4ad86"/>
    <rect x="65" y="64" width="30" height="22" rx="3" fill="#1d1c1a" opacity=".86"/>
    <path d="M71 75h18" stroke="#ebe9e4" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`,
  lamp: `<svg viewBox="0 0 160 120" role="img" aria-label="Desk lamp">
    <defs>
      <radialGradient id="lamp-glow" cx=".5" cy=".2"><stop offset="0" stop-color="#ffd977" stop-opacity=".75"/><stop offset="1" stop-color="#ffd977" stop-opacity="0"/></radialGradient>
      <linearGradient id="lamp-shade" x1="0" x2="1"><stop offset="0" stop-color="#e2a92f"/><stop offset="1" stop-color="#f3c85a"/></linearGradient>
      <radialGradient id="lamp-shadow"><stop offset="0" stop-color="#2a261f" stop-opacity=".26"/><stop offset="1" stop-color="#2a261f" stop-opacity="0"/></radialGradient>
    </defs>
    <ellipse cx="78" cy="106" rx="42" ry="7" fill="url(#lamp-shadow)"/>
    <ellipse cx="112" cy="92" rx="34" ry="12" fill="url(#lamp-glow)"/>
    <rect x="56" y="96" width="44" height="9" rx="4.5" fill="#2b2a27"/>
    <path d="M78 98 62 60 96 34" fill="none" stroke="#3a3935" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="62" cy="60" r="5" fill="#2b2a27"/>
    <g transform="rotate(32 104 42)"><path d="M92 28h20l10 26H82z" fill="url(#lamp-shade)"/><ellipse cx="102" cy="54" rx="20" ry="4" fill="#fff3c7"/></g>
  </svg>`,
  notebook: `<svg viewBox="0 0 160 120" role="img" aria-label="Notebook set">
    <defs><radialGradient id="nb-shadow"><stop offset="0" stop-color="#2a261f" stop-opacity=".26"/><stop offset="1" stop-color="#2a261f" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="80" cy="104" rx="54" ry="8" fill="url(#nb-shadow)"/>
    <rect x="34" y="78" width="92" height="20" rx="3" fill="#2f4b7c"/><rect x="34" y="78" width="10" height="20" rx="2" fill="#243b62"/>
    <rect x="40" y="58" width="88" height="20" rx="3" fill="#d4462a"/><rect x="40" y="58" width="10" height="20" rx="2" fill="#b23a22"/>
    <rect x="30" y="38" width="90" height="20" rx="3" fill="#e9b949"/><rect x="30" y="38" width="10" height="20" rx="2" fill="#c99b30"/>
    <path d="M126 80v16M128 60v16M120 40v16" stroke="#f8f7f4" stroke-width="2" opacity=".55"/>
  </svg>`,
  scarf: `<svg viewBox="0 0 160 120" role="img" aria-label="Wool scarf">
    <defs>
      <pattern id="scarf-stripe" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#a8362a"/><rect width="16" height="4" y="10" fill="#e9dccb"/></pattern>
      <radialGradient id="scarf-shadow"><stop offset="0" stop-color="#2a261f" stop-opacity=".26"/><stop offset="1" stop-color="#2a261f" stop-opacity="0"/></radialGradient>
    </defs>
    <ellipse cx="80" cy="104" rx="52" ry="8" fill="url(#scarf-shadow)"/>
    <path d="M34 50c0-12 10-18 22-18h48c12 0 22 6 22 18v34c0 8-6 14-14 14H48c-8 0-14-6-14-14z" fill="url(#scarf-stripe)"/>
    <path d="M34 62h92" stroke="#7e261d" stroke-opacity=".35" stroke-width="3"/>
    <path d="M44 98v8M52 98v8M60 98v8M68 98v8M76 98v8M84 98v8M92 98v8M100 98v8M108 98v8M116 98v8" stroke="#a8362a" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`,
  candle: `<svg viewBox="0 0 160 120" role="img" aria-label="Soy candle">
    <defs>
      <linearGradient id="candle-jar" x1="0" x2="1"><stop offset="0" stop-color="#c98b4a"/><stop offset=".45" stop-color="#e8b779"/><stop offset="1" stop-color="#b9783a"/></linearGradient>
      <radialGradient id="candle-flame" cx=".5" cy=".7"><stop offset="0" stop-color="#fff6d6"/><stop offset=".6" stop-color="#ffc34d"/><stop offset="1" stop-color="#f08a24"/></radialGradient>
      <radialGradient id="candle-shadow"><stop offset="0" stop-color="#2a261f" stop-opacity=".26"/><stop offset="1" stop-color="#2a261f" stop-opacity="0"/></radialGradient>
    </defs>
    <ellipse cx="80" cy="104" rx="40" ry="7" fill="url(#candle-shadow)"/>
    <path d="M56 46h48v50a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8z" fill="url(#candle-jar)"/>
    <ellipse cx="80" cy="46" rx="24" ry="5" fill="#f4ead9"/>
    <rect x="62" y="64" width="36" height="20" rx="3" fill="#f8f7f4" opacity=".9"/>
    <path d="M80 44v-8" stroke="#2b2a27" stroke-width="2" stroke-linecap="round"/>
    <path d="M80 18c6 7 7 12 4 17a5 5 0 0 1-8 0c-3-5-2-10 4-17z" fill="url(#candle-flame)"/>
  </svg>`,
};
