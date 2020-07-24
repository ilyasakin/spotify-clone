import * as React from 'react';

function SvgBack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 11 17" fill="none" {...props}>
      <path d="M9.575 16.353L0 8.177 9.575 0l.595.697-8.758 7.48 8.758 7.48" fill="currentColor" />
    </svg>
  );
}

export default SvgBack;
