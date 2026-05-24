"use client";

import { formatFaqAnswerHtml } from "@/lib/landing/format";
import { landingAsset } from "@/lib/strapi/media";
import type { FaqItem } from "@/lib/strapi/types";
import { useState } from "react";

type Props = {
  items: FaqItem[];
};

function getInitialOpenIndex(items: FaqItem[]): number | null {
  const index = items.findIndex((item) => item.defaultOpen);
  return index >= 0 ? index : null;
}

export function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(() =>
    getInitialOpenIndex(items),
  );

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="accordion-box">
      <div className="shape2 float-bob-y">
        <img
          className="paroller-2"
          src={landingAsset("images/shape/shape-2.png")}
          alt="animowana grupa kropek"
        />
      </div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.documentId ?? item.question}
            className="accordion accordion-block"
          >
            <div
              className={`accord-btn${isOpen ? " active" : ""}`}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={(event) => {
                event.stopPropagation();
                toggle(index);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  event.stopPropagation();
                  toggle(index);
                }
              }}
            >
              <h4>{item.question}</h4>
            </div>
            <div
              className={`accord-content${isOpen ? " collapsed" : ""}`}
              dangerouslySetInnerHTML={{
                __html: formatFaqAnswerHtml(item.answer),
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
