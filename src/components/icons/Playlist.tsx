function SvgPlaylist(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 4h12v2H0V4zm0-4h12v2H0V0zm0 8h8v2H0V8zm10 0v6l5-3-5-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgPlaylist;
