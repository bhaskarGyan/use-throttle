# useThrottle react hook

Install it with yarn:

```
yarn add use-throttle
```

Or with npm:

```
npm i use-throttle --save
```

## Demo

The simplest way to start playing around with use-throttle is with this CodeSandbox snippet:
https://codesandbox.io/s/18yyn08y7

## Simple Throttle

According to https://twitter.com/dan_abramov/status/1060729512227467264

```javascript
import React, { useState } from 'react';
import { useThrottle } from 'use-throttle';

export default function Input() {
  const [text, setText] = useState('Hello');
  const throttledText = useThrottle(text, 1000);

  return (
    <div>
      <input
        defaultValue={'Hello'}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Throttle value: {throttledText}</p>
    </div>
  );
}
```
