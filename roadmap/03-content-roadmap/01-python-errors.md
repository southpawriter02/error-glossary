# Content Roadmap: Python Errors

## 1. Overview

This document outlines the initial set of Python error messages that will be included in the Error Glossary. The focus is on common, often confusing errors that are frequently encountered by both beginners and experienced developers.

## 2. Phase 1: Core Errors

This initial phase will cover the most fundamental and common errors in Python.

*   **`TypeError: 'NoneType' object is not iterable`**
    *   **Reasoning:** A very common error when a function that is expected to return a list returns `None` instead.
*   **`AttributeError: 'NoneType' object has no attribute '...'`**
    *   **Reasoning:** Similar to the above, but for object attributes. Highlights issues with unhandled `None` values.
*   **`IndentationError: expected an indented block`**
    *   **Reasoning:** A classic Python error that trips up beginners. A good opportunity to explain Python's significant whitespace.
*   **`SyntaxError: invalid syntax`**
    *   **Reasoning:** A very general but common error. The explanation can provide a checklist of things to look for (e.g., missing colons, mismatched parentheses).
*   **`KeyError: '...'`**
    *   **Reasoning:** A common error when working with dictionaries. Explains the difference between accessing keys with `[]` vs. `.get()`.
*   **`IndexError: list index out of range`**
    *   **Reasoning:** A fundamental error when working with lists. Explains zero-based indexing and how to check list bounds.
*   **`NameError: name '...' is not defined`**
    *   **Reasoning:** A common error related to variable scope and typos.
*   **`ModuleNotFoundError: No module named '...'`**
    *   **Reasoning:** A frequent issue when managing dependencies and virtual environments.
*   **`FileNotFoundError: [Errno 2] No such file or directory: '...'`**
    *   **Reasoning:** A common error when working with files. Explains relative vs. absolute paths.
*   **`ValueError: too many values to unpack (expected ...)`**
    *   **Reasoning:** A frequent error when using tuple unpacking.

## 3. Phase 2: Intermediate Errors

This phase will cover more complex errors related to specific libraries or advanced language features.

*   **`UnboundLocalError: local variable '...' referenced before assignment`**
*   **`RecursionError: maximum recursion depth exceeded in comparison`**
*   **`StopIteration`** (in the context of generators)
*   **Pandas: `SettingWithCopyWarning`**
*   **Requests: `requests.exceptions.ConnectionError`**

## 4. Contribution Priorities

New contributions for Python errors are welcome! Priority will be given to errors that are:

*   **Common:** Frequently encountered by a large number of developers.
*   **Cryptic:** The error message itself is not very helpful.
*   **Actionable:** The explanation can provide clear, actionable steps to fix the problem.
