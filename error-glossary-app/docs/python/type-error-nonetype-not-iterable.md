---
title: "TypeError: 'NoneType' object is not iterable"
tags:
  - python
  - type-error
  - iterable
---

# TypeError: 'NoneType' object is not iterable

## Simple Explanation

This error happens when you try to loop over (iterate) something that is `None`. Python expects a list, tuple, string, or dictionary, but instead, it found `None`. This often happens when a function returns `None` (implicitly or explicitly) and you try to use that result in a `for` loop.

## "Bad Code" Example

```python
def get_users(db_connected):
    if not db_connected:
        return  # Returns None implicitly

    return ["Alice", "Bob"]

users = get_users(db_connected=False)

# This line causes the error because 'users' is None
for user in users:
    print(user)
```

**Annotation:**
- `return`: When `db_connected` is False, the function returns nothing, which Python treats as `None`.
- `for user in users:`: The loop tries to iterate over `users`, which is `None`. Since `None` is not a collection, Python raises `TypeError: 'NoneType' object is not iterable`.

## "Good Code" Example

```python
def get_users(db_connected):
    if not db_connected:
        return []  # Return an empty list instead of None

    return ["Alice", "Bob"]

users = get_users(db_connected=False)

# Now 'users' is an empty list, so the loop just does nothing (no error)
for user in users:
    print(user)
```

**Annotation:**
- `return []`: By returning an empty list, we ensure the function always returns an iterable.
- `for user in users:`: If `users` is empty, the loop body is simply skipped.

## Key Takeaway

Always ensure that functions expected to return a list (or other iterable) *always* return a list, even if it's empty. Avoid returning `None` if the result will be iterated over.
