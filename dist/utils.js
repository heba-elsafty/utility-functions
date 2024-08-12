"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clx = clx;
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
function clx() {
    var classnames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classnames[_i] = arguments[_i];
    }
    var className = classnames.reduce(function (prev, current) {
        if (!current) {
            return prev;
        }
        if (typeof current === "string") {
            return "".concat(prev, " ").concat(current);
        }
        if (Array.isArray(current)) {
            return "".concat(prev, " ").concat(clx.apply(void 0, current));
        }
        if (typeof current === "object") {
            var result = Object.entries(current)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return value ? key : null;
            })
                .filter(Boolean)
                .join(" ");
            return "".concat(prev, " ").concat(result);
        }
        throw new Error("error: not allowed, please provide either string, array, or object");
    }, "");
    // trim extra spaces
    return className.replace(/\s+/g, " ").trim();
}
