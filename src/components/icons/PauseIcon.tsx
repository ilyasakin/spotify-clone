import * as React from 'react';

function SvgPauseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 33 32" fill="none" {...props}>
      <path
        d="M11.7 22.4h3.2V9.6h-3.2v12.8zM16.5 0C7.668 0 .5 7.168.5 16s7.168 16 16 16 16-7.168 16-16-7.168-16-16-16zm0 30.3C9.444 30.3 2.2 23.056 2.2 16c0-7.056 7.244-14.3 14.3-14.3 7.056 0 14.3 7.244 14.3 14.3 0 7.056-7.244 14.3-14.3 14.3zm1.6-7.9h3.2V9.6h-3.2v12.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPauseIcon;
