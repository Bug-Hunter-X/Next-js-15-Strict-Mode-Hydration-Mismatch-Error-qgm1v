```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple Next.js app.</p>      <MyComponent />
    </div>
  );
}

import MyComponent from '../components/MyComponent';
```

```javascript
// components/MyComponent.js

export default function MyComponent() {
  return (
    <p>Hello from MyComponent</p> // corrected with explicit JSX return
  );
}
```