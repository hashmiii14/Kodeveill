import React from "react";

/**
 * OwnClip-inspired section heading.
 * Pattern: MONOSPACED OVERLINE → Massive black-weight heading → Muted description
 * The titleAccent gets a softer color to create visual hierarchy (like OwnClip's "for Mac." treatment)
 */
export const SectionHeading = ({
  overline,
  title,
  titleAccent,
  description,
  align = "center",
  className = "",
  breakAccent = true,
}) => {
  const alignClass = align === "center" ? "text-center mx-auto max-w-4xl" : "text-left max-w-2xl";

  return (
    <div className={`${alignClass} ${className}`}>
      {overline && (
        <span className="section-overline">{overline}</span>
      )}

      <h2 className="mt-5 section-title">
        {title}
        {titleAccent && (
          <>
            {breakAccent && <br className="hidden sm:block" />}
            {!breakAccent && " "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {titleAccent}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p className="mt-6 section-desc max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
