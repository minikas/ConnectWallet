import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "multistep",
    type: "registry:ui",
    dependencies: ["react-use-measure", "framer-motion"],
    files: ["ui/multistep.tsx"],
  },
  {
    name: "copy",
    type: "registry:ui",
    registryDependencies: ["tooltip"],
    files: ["ui/copy.tsx"],
  },

  // Shaicdn Default Components
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    files: ["ui/button.tsx"],
  },
  {
    name: "skeleton",
    type: "registry:ui",
    files: ["ui/skeleton.tsx"],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: ["ui/tooltip.tsx"],
  },
];
