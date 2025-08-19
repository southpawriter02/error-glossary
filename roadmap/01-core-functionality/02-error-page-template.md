# Core Feature: Error Page Template

## 1. Feature Description

To ensure consistency and clarity across all error message explanations, a standardized template will be used for each error page. This template will provide a structured format for presenting information, making it easy for users to find what they need.

## 2. Intended Functionality

Each error page will contain the following sections:

*   **Error Message:** The canonical error message as the title of the page.
*   **Simple Explanation:** A brief, high-level explanation of what the error means, written in plain, empathetic language.
*   **"Bad Code" Example:** A code snippet that reproduces the error. The problematic lines should be clearly annotated to explain *why* they cause the error.
*   **"Good Code" Example:** A corrected version of the code that runs without errors. This section should also be annotated to explain the fix.
*   **Key Takeaway:** A concise summary of the main lesson to be learned from the error. This section should offer preventative advice to help developers avoid the error in the future.
*   **Related Errors (Stretch Goal):** A section that links to other, related error messages that might be relevant.

## 3. Technical Requirements

*   **Markdown Structure:** The template will be defined as a Markdown structure that contributors can easily follow.
*   **Static Site Generator Layout:** A custom layout will be created in the chosen static site generator to render the Markdown content into a well-designed HTML page.
*   **Code Highlighting:** The static site generator must support syntax highlighting for various programming languages.
*   **Annotation Styling:** Custom CSS will be required to style the code annotations to make them stand out.

## 4. Dependencies

*   **Static Site Generator:** The implementation of the page layout will depend on the features of the chosen static site generator (e.g., Docusaurus, Jekyll).
*   **Markdown Parser:** The Markdown parser used by the static site generator must be able to handle code blocks and other formatting.

## 5. Limitations

*   **Rigidity:** A standardized template might not be suitable for every single error message. Some flexibility may be required for more complex or unusual errors.
*   **Contributor Onboarding:** Contributors will need to be educated on how to use the template correctly. Clear documentation and examples will be essential.
