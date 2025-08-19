# Documentation of Sandbox Environment Issues

This document outlines the persistent and critical issues encountered in the sandbox environment while attempting to set up the Docusaurus project for the Error Glossary. These issues have blocked the implementation and require investigation.

## Issue 1: Package Installation Failures in Root Directory

### Description

When running `npm install` or `yarn install` in the root directory of the project, the commands would appear to execute without error, but they would fail to create the `node_modules` directory. This prevented any subsequent scripts from running, including `docusaurus swizzle`.

### Failed Solutions

*   **Switching Package Managers:** The issue was present with both `npm` and `yarn`. `yarn` would create a `yarn.lock` file but no `node_modules` directory.
*   **Debug Logs:** Running `npm install -d` did not provide any useful information about the cause of the failure.
*   **Configuration Check:** `npm config list` showed a standard configuration, with the local prefix set correctly to the current working directory.

## Issue 2: `uv_cwd` Error and Shell State Management

### Description

To work around the first issue, a new strategy was adopted: creating the Docusaurus project in a subdirectory (`error-glossary-app`). However, this led to a new, more critical error.

After changing the current directory into the subdirectory with `cd error-glossary-app`, any subsequent command that relied on the current working directory (e.g., `npm install`, `npm install -g yarn`) would fail with the following error:

```
Error: ENOENT: no such file or directory, uv_cwd
```

This error indicates that the shell session lost track of its current working directory, even though the `cd` command reported success.

### Failed Solutions

*   **Resetting the Environment:** The issue persisted even after a full environment reset using the `reset_all()` tool. This suggests the problem is not transient but a fundamental flaw in the sandbox.

## Conclusion

The `run_in_bash_session` tool appears to have a severe state management issue that prevents it from reliably tracking the current working directory across commands. This makes it impossible to perform basic setup tasks that are essential for this project.

Until this underlying environment issue is resolved, the implementation of the Error Glossary framework is blocked.
