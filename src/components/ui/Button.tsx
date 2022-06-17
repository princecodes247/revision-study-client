import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  override?: boolean;
  outline?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

type Variant = "primary" | "auth";

export const Button: React.FC<Props> = ({
  children,
  variant,
  override,
  outline,
  className,
}) => {
  return (
    <button className={styles(variant, override, outline, className)}>
      {children}
    </button>
  );
};

const styles = (
  variant: Variant = "primary",
  override?: boolean,
  outline?: boolean,
  className?: string
) =>
  clsx([
    !override && [
      "py-3 px-4 rounded-md font-medium transition-all duration-200",
    ],
    variant == "auth"
      ? [
          outline
            ? [
                "bg-transparent text-gray-800 border border-gray-300",
                "hover:border-gray-800",
              ]
            : [
                "bg-gray-800 text-white border border-gray-800",
                "hover:bg-transparent hover:text-gray-800",
              ],
        ]
      : [
          outline
            ? [
                "bg-transparent text-gray-600 border border-gray-300",
                "hover:border-blue-400 hover:bg-blue-100 hover:text-blue-600",
              ]
            : ["bg-blue-700 text-white", "hover:bg-blue-600"],
        ],
    className,
  ]);
