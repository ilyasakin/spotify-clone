import * as React from 'react';

function SvgVolumeUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M0 5.77v6h4l5 5v-16l-5 5H0zm13.5 3A4.5 4.5 0 0011 4.74v8.05c1.48-.73 2.5-2.25 2.5-4.02zM11 0v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77C18 4.49 15.01.91 11 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVolumeUp;
