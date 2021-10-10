import { Accordian } from './components/Accordian/Accordian';
import { Layout } from './components/Layout/Layout';
import { accordianData } from './testData/testData';

function App() {
  return (
    <div className="App">
      <Layout>
        <h1 className="font-bold text-xl sm:text-2xl lg:text-4xl border-b mb-4">
          Finn's Second Levo Test
        </h1>
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
      </Layout>
    </div>
  );
}

export default App;
