import { loremIpsum } from "lorem-ipsum";
import Highlight from './components/Highlight/Highlight';

export default function Home() {
  const paragraphs = loremIpsum({
    count: 40,
    units: "paragraphs",
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
  });

  return (
    <div className="page">
      <h1>App</h1>
      {paragraphs.split("\n").map((paragraph, index) => (
        <p key={index}>
          <Highlight text={paragraph} />
        </p>
      ))}
    </div>
  );
}