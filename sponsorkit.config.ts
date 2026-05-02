import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "bombshell-dev",
    type: "organization",
  },
  opencollective: {
    slug: "bombshell-dev",
    type: "collective",
  },
  width: 800,
  renderer: "tiers",
  formats: ["svg"],
  tiers: [
    {
      title: "Individual (Patch)",
      preset: tierPresets.xs,
    },
    {
      title: "Individual (Minor)",
      monthlyDollars: 10,
      preset: tierPresets.small,
    },
    {
      title: "Individual (Major)",
      monthlyDollars: 50,
      preset: tierPresets.base,
    },
    {
      title: "Organization (Patch)",
      monthlyDollars: 250,
      preset: tierPresets.medium,
    },
    {
      title: "Organization (Minor)",
      monthlyDollars: 1000,
      preset: tierPresets.large,
    },
    {
      title: "Organization (Major)",
      monthlyDollars: 5000,
      preset: tierPresets.xl,
    },
  ],
  outputDir: "./sponsors",
});
