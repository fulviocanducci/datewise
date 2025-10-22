# Datewise - DateTime Validation && Formatted

## Overview

Datewise is a TypeScript library for date and time validation, formatting, and comparison using Luxon.

## Installation

Assuming npm: `npm install datewise`

## Usage

Import the main class:

```typescript
import { Datewise } from 'datewise';
```

## API Documentation

### Datewise

The main class that provides access to validation and formatting utilities.

#### Methods

- `validation(): Validation` - Returns a Validation instance.
- `formatted(): Formatted` - Returns a Formatted instance.
- `static createValidation(options?: IOptions): Validation` - Creates a new Validation instance.
- `static createFormatted(options?: IOptions): Formatted` - Creates a new Formatted instance.

#### Example

```typescript
const datewise = new Datewise();
const validator = datewise.validation();
const formatter = datewise.formatted();
```

### Validation

Handles date, time, and datetime validation and comparisons.

#### Methods

- `isValidDate(value: string, format = "yyyy-MM-dd"): boolean` - Checks if a string is a valid date.
- `isValidTime(value: string, format = "HH:mm"): boolean` - Checks if a string is a valid time.
- `isValidDateTime(value: string, format = "yyyy-MM-dd HH:mm:ss"): boolean` - Checks if a string is a valid datetime.
- `isBefore(date1: string, date2: string, format = "yyyy-MM-dd"): boolean` - Checks if date1 is before date2.
- `isAfter(date1: string, date2: string, format = "yyyy-MM-dd"): boolean` - Checks if date1 is after date2.

#### Examples

```typescript
const validation = new Validation();

console.log(validation.isValidDate("2023-12-25")); // true
console.log(validation.isValidTime("14:30")); // true
console.log(validation.isBefore("2023-01-01", "2023-12-31")); // true
```

### Formatted

Formats dates, times, and datetimes.

#### Methods

- `formatDate(value: string, format = "yyyy-MM-dd"): string | null` - Formats a date string.
- `formatTime(value: string, format = "HH:mm:ss"): string | null` - Formats a time string.
- `formatDateTime(value: string, format = "yyyy-MM-dd HH:mm:ss"): string | null` - Formats a datetime string.

#### Examples

```typescript
const formatted = new Formatted();

console.log(formatted.formatDate("2023-12-25")); // "12/25/2023" (depending on locale)
console.log(formatted.formatTime("14:30:00")); // "2:30 PM"
```

### DateFormatBuilder

A builder for creating custom date format strings.

#### Methods

- `day(): DateFormatBuilder` - Adds day to the format.
- `month(): DateFormatBuilder` - Adds month.
- `year(): DateFormatBuilder` - Adds year.
- `hours(): DateFormatBuilder` - Adds hours.
- `minutes(): DateFormatBuilder` - Adds minutes.
- `seconds(): DateFormatBuilder` - Adds seconds.
- `dash(): DateFormatBuilder` - Adds dash separator.
- `slash(): DateFormatBuilder` - Adds slash separator.
- `space(): DateFormatBuilder` - Adds space separator.
- `colon(): DateFormatBuilder` - Adds colon separator.
- `build(): string` - Builds and returns the format string.

#### Example

```typescript
const format = new DateFormatBuilder()
  .day()
  .slash()
  .month()
  .slash()
  .year()
  .space()
  .hours()
  .colon()
  .minutes()
  .build(); // "dd/MM/yyyy HH:mm"
```