import * as React from 'react';

function SvgPlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M12.8 23.2l9.6-7.2-9.6-7.2v14.4zM16 0C7.168 0 0 7.168 0 16s7.168 16 16 16 16-7.168 16-16S24.832 0 16 0zm0 30.3C8.944 30.3 1.5 23.056 1.5 16 1.5 8.944 8.944 1.5 16 1.5S30.3 8.944 30.3 16 23.056 30.3 16 30.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlayIcon;
