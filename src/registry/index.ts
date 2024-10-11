import { Registry } from "@/registry/schema";
const blocks: Registry = [
  {
    name: "connect-wallet",
    description: "Connect wallet block",
    type: "registry:block",
    registryDependencies: ["skeleton", "button"],
    dependencies: [
      "react-use-measure",
      "framer-motion",
      "lucide-react",
      "tooltip",
    ],
    files: [
      "block/connect-wallet.tsx",
      "block/select-account.tsx",
      "block/select-wallet.tsx",
      "block/connect-icons.tsx",
      "block/about-wallets.tsx",
      "ui/multistep.tsx",
      "ui/copy.tsx",
    ],
  },
];

const ui: Registry = [
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
];

export const registry: Registry = [...ui, ...blocks];
