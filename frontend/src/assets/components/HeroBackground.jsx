import React from "react";

const GLYPHS = [
    { text: "</>", top: "14%", left: "7%", delay: "0s", duration: "9s", size: "text-2xl" },
    { text: "{ }", top: "22%", left: "85%", delay: "1.2s", duration: "11s", size: "text-xl" },
    { text: "0101", top: "68%", left: "6%", delay: "0.6s", duration: "10s", size: "text-sm" },
    { text: "=>", top: "78%", left: "88%", delay: "2s", duration: "8s", size: "text-xl" },
    { text: "#", top: "38%", left: "93%", delay: "0.3s", duration: "12s", size: "text-2xl" },
    { text: "( )", top: "60%", left: "14%", delay: "1.6s", duration: "9.5s", size: "text-lg" },
    { text: ";", top: "30%", left: "3%", delay: "2.4s", duration: "10.5s", size: "text-3xl" },
    { text: "< />", top: "84%", left: "45%", delay: "1s", duration: "11.5s", size: "text-lg" },
];

const HeroBackground = () => {
    return (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Fading blueprint grid */}
            <div className="hero-grid absolute inset-0" />

            {/* Soft gradient orbs */}
            <div className="hero-orb-a absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-purple-300/40 dark:bg-purple-600/20 blur-3xl" />
            <div className="hero-orb-b absolute top-1/3 -right-28 w-[32rem] h-[32rem] rounded-full bg-indigo-300/30 dark:bg-indigo-600/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] rounded-full bg-purple-200/40 dark:bg-purple-500/10 blur-3xl" />

            {/* Slow orbit ring */}
            <div className="hero-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] max-w-none rounded-full border border-dashed border-purple-500/25 dark:border-purple-400/20">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400" />
            </div>
            <div className="hero-ring-rev absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] max-w-none rounded-full border border-purple-500/15 dark:border-purple-400/10">
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500/70 dark:bg-indigo-400/70" />
            </div>

            {/* Subtle scanline */}
            <div className="hero-scan absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            {/* Floating code glyphs */}
            {GLYPHS.map((g, i) => (
                <span
                    key={i}
                    className={`hero-glyph absolute font-mono font-semibold text-purple-600/25 dark:text-purple-300/20 select-none ${g.size}`}
                    style={{
                        top: g.top,
                        left: g.left,
                        animationDelay: g.delay,
                        animationDuration: g.duration,
                    }}
                >
                    {g.text}
                </span>
            ))}

            {/* Vignette to blend into page */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
        </div>
    );
};

export default HeroBackground;
