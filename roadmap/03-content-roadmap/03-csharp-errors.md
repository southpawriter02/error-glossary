# Content Roadmap: C# Errors

## 1. Overview

This document outlines the initial set of C# error messages to be included in the Error Glossary. The focus is on common compile-time and runtime errors encountered in .NET development, including issues related to null references, type casting, and dependency injection.

## 2. Phase 1: Core Errors

This initial phase will cover the most fundamental and common errors in C#.

*   **`CS0103: The name '...' does not exist in the current context`**
    *   **Reasoning:** A basic compilation error, often due to a typo or a missing `using` directive.
*   **`CS0246: The type or namespace name '...' could not be found`**
    *   **Reasoning:** A very common error related to missing assemblies or `using` directives.
*   **`System.NullReferenceException: Object reference not set to an instance of an object.`**
    *   **Reasoning:** The most infamous C# error. The explanation can introduce nullable reference types and defensive coding practices.
*   **`System.InvalidCastException: Unable to cast object of type '...' to type '...'`**
    *   **Reasoning:** A common runtime error when working with inheritance and interfaces. Explains safe casting with `as` and `is`.
*   **`System.FormatException: Input string was not in a correct format.`**
    *   **Reasoning:** A frequent error when parsing strings to numbers or dates.
*   **`CS1503: Argument ...: cannot convert from '...' to '...'`**
    *   **Reasoning:** A common compile-time error related to method signatures and type mismatches.
*   **`CS0120: An object reference is required for the non-static field, method, or property '...'`**
    *   **Reasoning:** A key concept for beginners to understand: the difference between static and instance members.
*   **`System.IO.FileNotFoundException: Could not find file '...'`**
    *   **Reasoning:** Similar to other languages, but can be explained in the context of .NET's file APIs.
*   **`System.InvalidOperationException: Sequence contains no elements`**
    *   **Reasoning:** A common LINQ error when using methods like `.First()` on an empty collection. Explains the difference between `First()` and `FirstOrDefault()`.

## 3. Phase 2: Intermediate/Framework Errors

This phase will cover errors related to popular .NET frameworks and more advanced language features.

*   **ASP.NET Core: `InvalidOperationException: Unable to resolve service for type '...'`**
    *   **Reasoning:** A very common error when setting up dependency injection.
*   **Entity Framework: `InvalidOperationException: The instance of entity type '...' cannot be tracked`**
*   **Entity Framework: Migrations errors**
*   **`System.AggregateException: One or more errors occurred.`** (in the context of async/await)
*   **`CS4033: The 'await' operator can only be used within an async method.`**

## 4. Contribution Priorities

New contributions for C# errors are welcome! Priority will be given to errors that are:

*   **Common:** Frequently encountered in web development (ASP.NET Core), desktop (WPF), and other .NET workloads.
*   **Specific to .NET:** Errors that are unique to the .NET ecosystem and its libraries.
*   **Related to modern C# features:** Errors related to async/await, LINQ, and dependency injection.
