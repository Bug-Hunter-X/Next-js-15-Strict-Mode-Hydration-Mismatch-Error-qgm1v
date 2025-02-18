```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple Next.js app.</p>
    </div>
  );
}
```

```javascript
// components/MyComponent.js

export default function MyComponent() {
  // This will cause an error in Next.js 15 strict mode
  return <p>Hello from MyComponent</p>;
}
```