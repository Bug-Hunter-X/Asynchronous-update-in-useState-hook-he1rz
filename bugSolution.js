```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    console.log(count); // Still shows previous count
  };

  const handleClickCorrect = () => {
    setCount(prevCount => prevCount + 1);
    // Correct way to access updated count
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment (Incorrect)</button>
      <button onClick={handleClickCorrect}>Increment (Correct)</button>
    </div>
  );
}
```