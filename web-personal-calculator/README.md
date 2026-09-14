# Web Calculator

A beginner-friendly calculator made with plain HTML, CSS, and JavaScript. It has no dependencies, build step, backend, or server requirement.

## Run

Open `index.html` directly in a web browser. Use the visible buttons to enter numbers, choose one operation, and press `=`.

## Files

- `AGENTS.md` - project purpose, constraints, and verification guidance.
- `index.html` - accessible calculator display and controls.
- `style.css` - layout and visual styling.
- `script.js` - number entry, arithmetic, chaining, reset, and error handling.
- `README.md` - this project guide.

## Supported behavior

The calculator supports digits `0` through `9`, decimal numbers, addition, subtraction, multiplication, division, equals, and clear/reset. It displays the current input or result, supports continued calculations such as `5 + 3 = 8` followed by `x 2 = 16`, and shows `Cannot divide by zero` without crashing. A new digit or Clear recovers from that error.

Complex expressions, parentheses, scientific functions, percentages, memory, history, keyboard input, saved data, accounts, and integrations are intentionally outside the project scope.

## Manual checks

After opening the page, check:

- `2 + 3 =` displays `5`.
- `10 - 4 =` displays `6`, `5 x 6 =` displays `30`, and `20 / 4 =` displays `5`.
- `1.5 + 2.25 =` displays `3.75`, and a repeated decimal point is ignored.
- `0 + 5 =` displays `5`.
- `5 + 3 =`, then `x 2 =` without clearing, displays `16`.
- Clear resets the display to `0` during or after a calculation.
- `5 / 0 =` shows the clear error message, then a new digit or Clear allows another calculation.
