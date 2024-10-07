import { Registry } from "@/registry/schema";

export const blocks: Registry = [
  {
    name: "connect-wallet",
    description: "Connect wallet block",
    type: "registry:block",
    registryDependencies: [
      "about-wallets",
      "connect-icons",
      "select-wallet",
      "select-account",
    ],
    files: ["block/connect-wallet.tsx"],
  },
  {
    name: "about-wallets",
    type: "registry:block",
    registryDependencies: ["button"],
    dependencies: ["react-use-measure", "framer-motion", "lucide-react"],
    files: ["block/about-wallets.tsx"],
  },
  {
    name: "select-account",
    type: "registry:block",
    registryDependencies: ["button", "copy", "skeleton", "connect-icons"],
    dependencies: ["react-use-measure", "framer-motion", "lucide-react"],
    files: ["block/select-account.tsx"],
  },
  {
    name: "select-wallet",
    type: "registry:block",
    registryDependencies: ["button", "skeleton", "connect-icons"],
    dependencies: ["lucide-react"],
    files: ["block/select-wallet.tsx"],
  },
  {
    name: "connect-icons",
    type: "registry:block",
    files: ["block/connect-icons.tsx"],
  },
];
