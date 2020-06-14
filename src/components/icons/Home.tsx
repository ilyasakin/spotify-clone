import * as React from 'react';

function SvgHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 1.394L1.263 7.298v15.507h6.803V14.44h7.927v8.365h6.744V7.255L12 1.396zM12 0l12 6.34V24h-9.27v-8.365h-5.4V24H0V6.398L12 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHome;
