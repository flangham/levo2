import { Accordian } from './components/Accordian/Accordian';
import { Carousel } from './components/Carousel/Carousel';
import { Layout } from './components/Layout/Layout';
import { accordianData } from './testData/testData';

function App() {
  return (
    <div className="App">
      <Layout>
        <h1 className="font-bold text-xl sm:text-2xl lg:text-4xl border-b mb-4">
          Finn's Second Levo Test
        </h1>

        {/* Accordians */}
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
          Accordians
        </h2>
        {accordianData.map((accordian, i) => (
          <Accordian
            key={i}
            title={accordian.title}
            content={accordian.content}
          />
        ))}

        {/* Carousel */}
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
          Carousel
        </h2>
        <Carousel>
          <h1 className="bg-purple-400 h-full">Thing 1</h1>
          <h1 className="bg-red-400 h-full">Thing 2</h1>
          <h1 className="bg-green-400 h-full">Thing 3</h1>
          <h1 className="bg-yellow-400 h-full">Thing 4</h1>
          <h1 className="bg-blue-400 h-full">Thing 5</h1>
        </Carousel>
      </Layout>
    </div>
  );
}

export default App;
