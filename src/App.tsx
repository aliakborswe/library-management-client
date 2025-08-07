import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <div className='flex min-h-svh flex-col items-center justify-center'>
        <Button>Click me</Button>
      </div>
    </div>
  );
};

export default App;
