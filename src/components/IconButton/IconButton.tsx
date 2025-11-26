import { ReactNode } from 'react';

import './IconButton.css';

export default function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="icon-btn">
      {children}
    </button>
  );
}
