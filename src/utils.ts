import { Clx } from "../types";

/**
 * a utility for conditionally joining classNames together
 * @returns string
 * @example
 * ```
 * // prints "foo bar"
 * console.log(clx("foo", "bar"))
 * ```
 * @example
 * ```
 * // prints "foo bar"
 * console.log(clx(["foo", "bar"]))
 * ```
 * @example
 * ```
 * // prints "foo bar"
 * console.log(clx({ foo: true, bar: true }))
 * ```
 * @example
 * ```
 * // prints "foo"
 * console.log(clx({ foo: true, bar: false }))
 * ```
 */
export function clx(...classnames: Clx[]): string {
    const className: string = classnames.reduce<string>((prev, current) => {
      if (!current) {
        return prev;
      }
  
      if (typeof current === "string") {
        return `${prev} ${current}`;
      }
  
      if (Array.isArray(current)) {
        return `${prev} ${clx(...current)}`;
      }
  
      if (typeof current === "object") {
        const result = Object.entries(current)
          .map(([key, value]) => {
            return value ? key : null;
          })
          .filter(Boolean)
          .join(" ");
  
        return `${prev} ${result}`;
      }
  
      throw new Error(
        "error: not allowed, please provide either string, array, or object"
      );
    }, "");
  
    // trim extra spaces
    return className.replace(/\s+/g, " ").trim();
  }
  