/* @flow */

/**
 * Primitive Types
 */

// Boolean
function acceptsBoolean(value: boolean) { /* ... */ }
// Number
function acceptsNumber(value: number) { /* ... */ }
// String
function acceptsString(value: string) { /* ... */ }
// null
function acceptsNull(value: null) { /* ... */ }
// void
function acceptsUndefined(value: void) { /* ... */ }
// Maybe types, can also be null or void.
function acceptsMaybeString(value: ?string) { /* ... */ }
function acceptsMaybeNumber(value: ?number) { /* ... */ }
function acceptsMaybeBoolean(value: ?boolean) { /* ... */ }
// Optional object properties, cannot be null
function acceptsObject(value: { optionalProp?: string }) { /* ... */ }
// Optional function parameters
function acceptsOptionalString(value?: string) { /* ... */ }
// Function parameters with defaults
function acceptsOptionalString(value: string = "foo") { /* ... */ }

/**
 * Literal Types
 */

// Booleans: like true or false
// Numbers: like 42 or 3.14
// Strings: like "foo" or "bar"
function acceptsTwo(value: 2) { /* ... */ }

/**
 * Mixed Types
 */

// Anything goes in, Nothing comes out 
// mixed will accept any type of value. Strings, numbers, objects, functions– anything will work.
function stringify(value: mixed) { /* ... */ }
