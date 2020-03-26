# ts-military-to-standard-time

This is a small package that can help assist with converting a military time string to civilian time.

<h3>Usage:</h3>

```typescript
import convertMilitaryToStandardTime from 'ts-military-to-standard-time';

const standardTime = convertMilitaryToStandardTime('1159'); // returns 11:59 AM
const standardTime = convertMilitaryToStandardTime('1200'); // returns 12:00 PM
const standardTime = convertMilitaryToStandardTime('2400'); // returns 12:00 AM
const standardTime = convertMilitaryToStandardTime('1330'); // returns 1:30 PM
```
