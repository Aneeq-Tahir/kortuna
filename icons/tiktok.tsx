import React from 'react';

const TikTok = (props: React.ComponentProps<'svg'>) => {
   return (
      <svg
         width="22"
         height="24"
         viewBox="0 0 22 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={props.className}
      >
         <path
            d="M15.8148 0H11.5942V16.3478C11.5942 18.2957 9.97094 19.8957 7.95084 19.8957C5.93074 19.8957 4.30746 18.2957 4.30746 16.3478C4.30746 14.4348 5.89467 12.8695 7.84264 12.8V8.69567C3.54992 8.7652 0.0869141 12.1391 0.0869141 16.3478C0.0869141 20.5913 3.62207 24 7.98693 24C12.3517 24 15.8869 20.5565 15.8869 16.3478V7.9652C17.4741 9.07827 19.422 9.73913 21.4782 9.77393V5.66957C18.3038 5.56522 15.8148 3.06087 15.8148 0Z"
            fill="white"
         />
      </svg>
   );
};

export default TikTok;
