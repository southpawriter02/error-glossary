import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
// Import custom components
import {
  CodeExample,
  Annotation,
  KeyTakeaway,
  ErrorMessage,
} from '@site/src/components/CodeExample';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add custom components
  CodeExample,
  Annotation,
  KeyTakeaway,
  ErrorMessage,
};
