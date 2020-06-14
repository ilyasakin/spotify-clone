import * as React from 'react';

function SvgLibrary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13.655 3.833l7.797 17.512-.904.405L12.75 4.238l.905-.405zM3 21.738v-18h1v18H3zm6 0v-18h1v18H9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLibrary;
