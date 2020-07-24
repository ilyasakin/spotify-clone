import * as React from 'react';

function SvgDevices(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 22 17" fill="none" {...props}>
      <path
        d="M2 2.027h18V0H2C.9 0 0 .912 0 2.027v12.166c0 1.115.9 2.027 2 2.027h4v-2.027H2V2.028zM12 8.11H8v1.804c-.61.558-1 1.349-1 2.251 0 .902.39 1.693 1 2.25v1.805h4v-1.804c.61-.558 1-1.359 1-2.251 0-.892-.39-1.693-1-2.25V8.11zm-2 5.576c-.83 0-1.5-.68-1.5-1.521 0-.841.67-1.52 1.5-1.52s1.5.679 1.5 1.52-.67 1.52-1.5 1.52zm11-9.631h-6c-.5 0-1 .507-1 1.014v10.137c0 .507.5 1.014 1 1.014h6c.5 0 1-.507 1-1.014V5.07c0-.507-.5-1.014-1-1.014zm-1 10.138h-4v-8.11h4v8.11z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDevices;
