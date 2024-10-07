import { blocks } from "@/registry/registry-blocks";
import { ui } from "@/registry/registry-ui";
import { Registry } from "@/registry/schema";

export const registry: Registry = [...ui, ...blocks];
