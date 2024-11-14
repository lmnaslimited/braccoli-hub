import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content" | "theme"> = {
  content: ["./src/**/*.tsx"],
  // prefix:'lmnas-',
  presets: [sharedConfig],
};

export default config;