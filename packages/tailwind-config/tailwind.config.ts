import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors:{
        'th-primary': 'var(--color-primary)',
          'th-secondary': 'var(--color-secondary)',
          'th-tertiary': 'var(--color-tertiary)',
          'th-quaternary':'var(--color-quaternary)',
          'th-quinary':'var(--color-quinary)',
          'th-backgroundPrimary':'var(--color-backgroundPrimary)',
          'th-backgroundSecondary':'var(--color-backgroundSecondary)',
          'th-borderPrimary':'var(--color-borderPrimary)',
          'th-borderSecondary':'var(--color-borderSecondary)',
          'th-colormode':'var(--color-mode)',
          'th-textPrimary':'var(--color-textPrimary)',
          'th-textSecondary':'var(--color-textSecondary)',
          'th-textTertiary':'var(--color-textTertiary)',
          'th-textQuaternary':'var(--color-textQuaternary)',
          'th-textQuinary':'var(--color-textQuinary)',
          'th-textSenary':'var(--color-textSenary)',
          'th-pink':'var(--color-pink)',
          'th-yellow':'var(--color-yellow)',
          'th-green':'var(--color-green)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        // roboto: ['Roboto', 'sans-serif'],
        // inter: ['Inter', 'sans-serif'],
        // cals:[ 'Cal Sans,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'],
      },
    },
    
  },
  plugins: [],
};
export default config;
