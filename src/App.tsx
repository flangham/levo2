import { Accordian } from './components/Accordian/Accordian';
import { Carousel } from './components/Carousel/Carousel';
import { Layout } from './components/Layout/Layout';
import { accordianData } from './testData/testData';
import { Hero } from './components/Hero/Hero';
import { GridTile } from './components/QuantumGrid/components/GridTile/GridTile';
import { QuantumGrid } from './components/QuantumGrid/QuantumGrid';
import { StretchedLink } from './components/StretchedLink/StretchedLink';
import { Embed } from './components/Embed/Embed';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  return (
    <div className="App">
      <Hero
        header="Finn's Second Levo Test"
        subheader="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        image="https://source.unsplash.com/random/1200x600"
        CTA="Click here"
        url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
      />
      <Layout>
        <div className="mb-16 md:mb-32">
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
        </div>

        <div className="mb-16 md:mb-32">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
            Carousel
          </h2>
          <Carousel>
            <h1 className="bg-purple-400 h-20">Thing 1</h1>
            <h1 className="bg-red-400">Thing 2</h1>
            <h1 className="bg-green-400 h-96">Thing 3</h1>
            <h1 className="bg-yellow-400 h-40 w-1/2">Thing 4</h1>
            <h1 className="bg-blue-400 h-40">Thing 5</h1>
          </Carousel>
        </div>

        <div className="mb-16 md:mb-32">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
            Carousel of Heros
          </h2>
          <Carousel>
            <Hero
              header="Finn's Second Levo Test"
              subheader="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              image="https://source.unsplash.com/random/1201x600"
              CTA="Click here"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <Hero
              header="Finn's Second Levo Test"
              subheader="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              image="https://source.unsplash.com/random/1202x600"
              CTA="Click here"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <Hero
              header="Finn's Second Levo Test"
              subheader="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              image="https://source.unsplash.com/random/1203x600"
              CTA="Click here"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
          </Carousel>
        </div>

        <div className="mb-16 md:mb-32">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
            Quantum Grid
          </h2>
          <QuantumGrid>
            <GridTile
              closingSoon
              snippet="Snippet text"
              title="Title lorem ipsom"
              description="lorem description text lorem description text lorem description text"
              image="https://source.unsplash.com/random/600x600"
              linkText="Read more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <GridTile
              snippet="Snippet text"
              title="Title lorem ipsom"
              description="lorem description text lorem description text lorem description text"
              image="https://source.unsplash.com/random/601x600"
              linkText="Read more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <GridTile
              snippet="Snippet text"
              title="Title lorem ipsom"
              description="lorem description text lorem description text lorem description text"
              image="https://source.unsplash.com/random/602x600"
              linkText="Read more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <GridTile
              closingSoon
              snippet="Snippet text"
              title="Title lorem ipsom"
              description="lorem description text lorem description text lorem description text"
              image="https://source.unsplash.com/random/603x600"
              linkText="Read more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <GridTile
              snippet="Snippet text"
              title="Title lorem ipsom"
              description="lorem description text lorem description text lorem description text"
              image="https://source.unsplash.com/random/604x600"
              linkText="Read more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <GridTile
              snippet="Snippet text"
              title="Title lorem ipsom"
              description="lorem description text lorem description text lorem description text"
              image="https://source.unsplash.com/random/605x600"
              linkText="Read more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <GridTile
              snippet="Snippet text"
              title="Title lorem ipsom"
              description="lorem description text lorem description text lorem description text"
              image="https://source.unsplash.com/random/606x600"
              linkText="Read more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
          </QuantumGrid>
        </div>

        <div className="mb-16 md:mb-32">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
            Pagination
          </h2>
          <Pagination />
        </div>

        <div className="mb-16 md:mb-32">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
            Stretched Link
          </h2>
          <div className="-m-4">
            <StretchedLink
              image="https://source.unsplash.com/random/600x300"
              title="This is a stretched link"
              blurb="This is some fancy blurb text all about my fancy stretched link component"
              linkText="Learn more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <StretchedLink
              image="https://source.unsplash.com/random/601x300"
              title="This is a stretched link"
              blurb="This is some fancy blurb text all about my fancy stretched link component"
              linkText="Learn more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
            <StretchedLink
              image="https://source.unsplash.com/random/602x300"
              title="This is a stretched link"
              blurb="This is some fancy blurb text all about my fancy stretched link component"
              linkText="Learn more"
              url="https://en.wikipedia.org/wiki/Dishwasher_salmon"
            />
          </div>
        </div>

        <div className="mb-16 md:mb-32">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
            Embed
          </h2>
          <p>Widescreen 16:9</p>
          <Embed widescreen>
            <iframe
              title="YouTube video player for MGMT - When You Die"
              src="https://www.youtube.com/embed/tmozGmGoJuw"
              allowFullScreen
            ></iframe>
          </Embed>
          <p>Fullscreen 4:3</p>
          <Embed fullscreen>
            <iframe
              src="https://www.youtube.com/embed/7w6R4I7I3wA"
              title="YouTube video player for Caroline Polachek - Door (Official Video)"
              allowFullScreen
            ></iframe>
          </Embed>
        </div>
      </Layout>
    </div>
  );
}

export default App;
