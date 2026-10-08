import { visit } from "unist-util-visit";

// Ported from mom-home (src/utils/callouts.ts). Usage: :::fact[Title | right | small]
const POSITIONS = ["left", "center", "right"];
const SIZES = ["small", "medium", "large", "full"];

function parseLabel(label) {
  let position = "center";
  let size = "medium";
  const titleParts = [];

  for (const part of label
    .split("|")
    .map((p) => p.trim())
    .filter(Boolean)) {
    const lower = part.toLowerCase();
    if (POSITIONS.includes(lower)) position = lower;
    else if (SIZES.includes(lower)) size = lower;
    else titleParts.push(part);
  }

  return { title: titleParts.join(" | "), position, size };
}

export default function remarkFactDirective() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "containerDirective" || node.name !== "fact") return;

      const first = node.children?.[0];
      const hasLabelParagraph =
        first?.type === "paragraph" && first.data?.directiveLabel;
      const rawLabel = hasLabelParagraph
        ? first.children.map((c) => (c.type === "text" ? c.value : "")).join("")
        : "";

      const { title, position, size } = parseLabel(rawLabel);
      if (hasLabelParagraph) node.children.shift();

      node.data ??= {};
      node.data.hName = "aside";
      node.data.hProperties = {
        className: [
          "callout",
          "callout--fact",
          "mom-fact",
          `mom-fact--position-${position}`,
          `mom-fact--size-${size}`,
        ],
      };

      if (title) {
        node.children.unshift({
          type: "paragraph",
          children: [{ type: "text", value: title }],
          data: { hProperties: { className: ["mom-fact__title"] } },
        });
      }
    });
  };
}
