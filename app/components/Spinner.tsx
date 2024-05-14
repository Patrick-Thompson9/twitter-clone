"use client";
import ClipLoader from "react-spinners/ClipLoader";
import clsx from "clsx";
import { CSSProperties } from "react";

interface SpinnerProps {
  color?: string;
  size?: number;
  loading?: boolean | undefined;
  cssOverride?: CSSProperties | undefined;
}

function Spinner({
  color = "#bae6fd",
  size = 150,
  loading = true,
  cssOverride = undefined,
}: SpinnerProps) {
  return (
    <section
      className={clsx(
        "flex w-screen h-screen place-items-center justify-center",
        cssOverride
      )}
    >
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={cssOverride}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section>
  );
}

export default Spinner;
