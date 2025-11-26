import { loremIpsum } from "lorem-ipsum";
import Highlight from './components/Highlight/Highlight';

import './styles.css';

export default function Documents() {
  const paragraphs = loremIpsum({
    count: 30,
    units: "paragraphs",
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
  });

  return (
    <div className="page">
      <h1>Documents</h1>
      {paragraphs.split("\n").map((paragraph, index) => (
        <p key={index}>
          <Highlight text={paragraph} />
        </p>
      ))}
    </div>
  );
}