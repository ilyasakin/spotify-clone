import * as React from 'react';

function SvgPauseFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M6 2H3.333v12H6V2zM12.667 2H10v12h2.667V2z" fill="currentColor" />
    </svg>
  );
}

export default SvgPauseFill;
