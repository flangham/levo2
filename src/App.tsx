import { Accordian } from './components/Accordian/Accordian';
import { Layout } from './components/Layout/Layout';
import { accordianData } from './testData/testData';

function App() {
  return (
    <div className="App">
      <Layout>
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
