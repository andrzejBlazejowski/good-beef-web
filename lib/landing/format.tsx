import { Fragment } from "react";

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function splitTitleLines(title: string): string[] {
  return title.split(/\n/).map((line) => line.trim()).filter(Boolean);
}

/** Renders FAQ answer text with [label](url) markdown links as HTML snippets. */
export function formatFaqAnswerHtml(answer: string): string {
  const withLinks = answer.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a class="btn-one" href="$2"><span class="txt">$1</span></a>'
  );
  const paragraphs = withLinks.split(/\n\n+/);
  return paragraphs.map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`).join("");
}

export function multilineToBr(text: string) {
  const lines = splitTitleLines(text);
  if (lines.length <= 1) return text;
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 ? <br /> : null}
    </Fragment>
  ));
}
