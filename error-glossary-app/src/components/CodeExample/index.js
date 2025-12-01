import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * CodeExample component for displaying bad/good code comparisons
 *
 * Usage in MDX:
 * <CodeExample type="bad" title="Bad Code">
 *   ```python
 *   your code here
 *   ```
 * </CodeExample>
 *
 * <CodeExample type="good" title="Good Code">
 *   ```python
 *   your code here
 *   ```
 * </CodeExample>
 */
export function CodeExample({ type = 'default', title, children }) {
  const isBad = type === 'bad' || type === 'error';
  const isGood = type === 'good' || type === 'success';

  return (
    <div
      className={clsx(
        styles.codeExample,
        isBad && styles.bad,
        isGood && styles.good
      )}
    >
      {title && (
        <div className={styles.header}>
          <span className={styles.icon}>
            {isBad && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            )}
            {isGood && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            )}
          </span>
          <span className={styles.title}>{title}</span>
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

/**
 * Annotation component for explaining code
 *
 * Usage in MDX:
 * <Annotation>
 *   - `return`: When `db_connected` is False...
 * </Annotation>
 */
export function Annotation({ children }) {
  return (
    <div className={styles.annotation}>
      <div className={styles.annotationHeader}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.annotationIcon}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>Annotation</span>
      </div>
      <div className={styles.annotationContent}>{children}</div>
    </div>
  );
}

/**
 * KeyTakeaway component for highlighting important lessons
 *
 * Usage in MDX:
 * <KeyTakeaway>
 *   Always ensure functions return the expected type...
 * </KeyTakeaway>
 */
export function KeyTakeaway({ children }) {
  return (
    <div className={styles.keyTakeaway}>
      <div className={styles.keyTakeawayHeader}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.keyTakeawayIcon}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span>Key Takeaway</span>
      </div>
      <div className={styles.keyTakeawayContent}>{children}</div>
    </div>
  );
}

/**
 * ErrorMessage component for displaying the actual error
 *
 * Usage in MDX:
 * <ErrorMessage>
 *   TypeError: 'NoneType' object is not iterable
 * </ErrorMessage>
 */
export function ErrorMessage({ children }) {
  return (
    <div className={styles.errorMessage}>
      <div className={styles.errorMessageHeader}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.errorMessageIcon}>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span>Error Message</span>
      </div>
      <code className={styles.errorMessageCode}>{children}</code>
    </div>
  );
}

export default {
  CodeExample,
  Annotation,
  KeyTakeaway,
  ErrorMessage,
};
