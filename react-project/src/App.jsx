import Contact from './assets/Hello';
import Hello from './assets/Hello';


function App() {
  console.log('App component');
  const helloData = [
    {name: "Chollathorn", message: "Good morning"},
    {name: "Dog", message: "Good afternoon"},
    {name: "Fish", message: "Good evening"}
  ];
  return (
    <div className='App'>
      <Counter/>
      {helloData.map((data, index) => (
        <Hello key = {index} name = {data.name} message = {data.message}/>
      ))}
      
      <contact phone = "123456789" email="Chollathorn@gmail.com"/>
      </div>
  )
}
export default App
