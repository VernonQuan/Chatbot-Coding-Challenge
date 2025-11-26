import { Fragment, ReactNode, useMemo } from 'react';
import { useSearch } from '../../context/SearchContext';

import './Highlight.css';

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function Highlight({
  text
}: {
  text: string;
}) {
  const { term } = useSearch();

  const parts: ReactNode[] = useMemo(() => {
    if (!term) return [text];
    const pattern = new RegExp(escapeRegExp(term), "gi");

    const result: ReactNode[] = [];
    let lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = pattern.exec(text)) !== null) {
      const start = m.index;
      if (start > lastIndex) {
        result.push(<Fragment key={lastIndex}>{text.slice(lastIndex, start)}</Fragment>);
      }
      result.push(
        <mark key={start} className="highlight-mark">
          {text.slice(start, start + m[0].length)}
        </mark>
      );
      lastIndex = start + m[0].length;
    }
    if (lastIndex < text.length) {
      result.push(<Fragment key={lastIndex}>{text.slice(lastIndex)}</Fragment>);
    }
    return result;
  }, [text, term]);

  return <>{parts}</>;
}