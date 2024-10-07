import { notFound } from "next/navigation";

import { getAllBlockIds, getBlock } from "@/lib/blocks";
import { cn } from "@/lib/utils";
import { Style, styles } from "@/registry/registry-styles";

import "@/styles/mdx.css";

export async function generateStaticParams() {
  const blockIds = await getAllBlockIds();
  return styles
    .map((style) =>
      blockIds.map((name) => ({
        style: style.name,
        name,
      }))
    )
    .flat();
}

export default async function BlockPage({
  params,
}: {
  params: {
    style: Style["name"];
    name: string;
  };
}) {
  const { name, style } = params;
  const block = await getBlock(name, style);

  if (!block) {
    return notFound();
  }

  const Component = block.component;

  const chunks = block.chunks?.map((chunk) => ({ ...chunk }));
  delete block.component;
  block.chunks?.map((chunk) => delete chunk.component);

  return (
    <>
      <div
        className={cn(
          "themes-wrapper bg-background",
          block.container?.className
        )}
      >
        <Component />
      </div>
    </>
  );
}
