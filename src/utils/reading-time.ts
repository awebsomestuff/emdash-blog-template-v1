import type { PortableTextBlock } from "emdash";

function extractText(blocks: PortableTextBlock[]): string {
	let text = "";
	for (const block of blocks) {
		if (block._type === "block" && Array.isArray(block.children)) {
			for (const child of block.children) {
				if (child._type === "span" && typeof child.text === "string") {
					text += child.text + " ";
				}
			}
		}
	}
	return text;
}

export function getReadingTime(content?: PortableTextBlock[]): number {
	if (!content || content.length === 0) return 1;
	const text = extractText(content);
	const words = text.trim().split(/\s+/).length;
	return Math.max(1, Math.round(words / 230));
}
