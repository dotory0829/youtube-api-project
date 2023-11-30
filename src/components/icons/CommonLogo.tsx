import { themeState } from '@atom'
import { CommonButtonProps } from '@types'
import { useRecoilValue } from 'recoil'

export const CommonLogo: React.FC<CommonButtonProps> = ({
  width,
  height
}: CommonButtonProps) => {
  const isDark = useRecoilValue(themeState)

  const fillColor = isDark ? 'black' : 'white'
  const strokeColor = isDark ? 'white' : 'black'
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 170 42"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.3636 20.8233V20.7969C11.9384 20.5895 12.3955 20.2585 12.7308 19.8084C13.0705 19.3582 13.2403 18.8154 13.2403 18.18C13.2403 17.5665 13.0792 17.0238 12.7569 16.5516C12.4304 16.0794 11.995 15.7175 11.4507 15.4615C10.902 15.21 10.2925 15.082 9.63061 15.082H5.17188V26.5382H9.63061C10.2925 26.5382 10.902 26.4102 11.4507 26.1587C11.995 25.9027 12.4304 25.5408 12.7569 25.0686C13.0792 24.5965 13.2403 24.0537 13.2403 23.4402C13.2403 22.8048 13.0705 22.262 12.7308 21.8119C12.3955 21.3617 11.9384 21.0308 11.3636 20.8233ZM7.24884 16.9973H9.55223C10.053 16.9973 10.4448 17.1297 10.7279 17.3944C11.0109 17.6592 11.1502 18.0034 11.1502 18.4315C11.1502 18.8551 11.0065 19.2038 10.7192 19.473C10.4318 19.7422 10.0225 19.879 9.49127 19.879H7.24884V16.9973ZM10.7279 24.2258C10.4448 24.4905 10.053 24.6229 9.55223 24.6229H7.24884V21.7412H9.49127C10.0225 21.7412 10.4318 21.878 10.7192 22.1472C11.0065 22.4164 11.1502 22.7651 11.1502 23.1887C11.1502 23.6168 11.0109 23.961 10.7279 24.2258Z"
        fill={strokeColor}
      />
      <path
        d="M14.2188 15.3945H17.9373C19.0824 15.3945 20.0839 15.6284 20.933 16.0962C21.782 16.564 22.4395 17.2171 22.9011 18.06C23.3626 18.9029 23.5934 19.8693 23.5934 20.9726C23.5934 22.0714 23.3626 23.0423 22.9011 23.8851C22.4395 24.728 21.7864 25.3811 20.933 25.8489C20.0839 26.3167 19.0824 26.5506 17.9373 26.5506H14.2188V15.3945ZM17.8458 24.5471C19.0345 24.5471 19.9402 24.2294 20.5629 23.5895C21.1855 22.9496 21.499 22.0758 21.499 20.9681C21.499 19.8561 21.1855 18.9823 20.5629 18.3468C19.9359 17.7069 19.0302 17.3892 17.8458 17.3892H16.2957V24.5515H17.8458V24.5471Z"
        fill={strokeColor}
      />
      <path
        d="M4.31693 1.51184C4.86065 1.51184 5.38562 1.6686 5.82621 1.96789L5.85902 1.98689L5.89183 2.00589L33.9589 18.4188L33.987 18.4378L34.0198 18.4521C35.1495 19.0221 35.3135 20.224 35.3135 20.889C35.3135 22.2809 34.3198 23.1788 33.7058 23.6016L5.88715 40.0002L5.85434 40.0192L5.82621 40.0382C5.36218 40.3518 4.71534 40.4943 4.31693 40.4943C3.91383 40.4943 3.27168 40.3518 2.80764 40.0382L2.74671 39.9955L2.68109 39.9622C1.80458 39.5204 1.1718 38.3993 1.1718 37.302V4.69941C1.1718 3.28377 2.19831 2.38118 2.80764 1.96789C3.25293 1.6686 3.77321 1.51184 4.31693 1.51184ZM4.31693 0.324219C3.56229 0.324219 2.80764 0.542741 2.16081 0.979785C0.862448 1.85387 0 3.16976 0 4.69941V37.302C0 38.8316 0.862448 40.366 2.16081 41.0216C2.80764 41.4586 3.67009 41.6772 4.32162 41.6772C4.97314 41.6772 5.8309 41.4586 6.48242 41.0216L34.3339 24.6087C35.6276 23.7346 36.4947 22.4187 36.4947 20.889C36.4947 19.3594 35.8479 18.0435 34.5495 17.3879L6.47774 0.979785C5.8309 0.542741 5.07626 0.324219 4.31693 0.324219Z"
        fill="url(#paint0_linear_402_1768)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.6252 20.5096C45.6247 19.7247 44.9706 18.8424 44.6676 17.8576C44.3645 16.8729 44.3597 15.9467 44.6531 15.0789C44.9465 14.2112 45.5189 13.4751 46.3751 12.8755C47.2313 12.271 48.3183 11.9688 49.6315 11.9688H60.5646C61.565 11.9688 62.3779 12.7926 62.3779 13.8066V13.8115C62.3779 14.8254 61.565 15.6493 60.5646 15.6493H49.6315C49.2755 15.6493 48.9629 15.6981 48.6935 15.7907C48.4193 15.8882 48.2318 16.0198 48.1307 16.1855C48.0249 16.3562 48.0201 16.556 48.1163 16.79C48.2077 17.024 48.4338 17.2775 48.7897 17.5505L57.4333 24.1853C58.4337 24.9457 59.1168 25.8135 59.4823 26.7885C59.8479 27.7634 59.9104 28.675 59.6699 29.533C59.4294 30.391 58.9051 31.1076 58.0874 31.6926C57.2745 32.2727 56.1971 32.5652 54.8599 32.5652H43.5516C42.5512 32.5652 41.7383 31.7414 41.7383 30.7274V30.7225C41.7383 29.7085 42.5512 28.8847 43.5516 28.8847H54.8599C55.6728 28.8847 56.1249 28.7335 56.2067 28.4264C56.2885 28.1193 55.9855 27.7147 55.2976 27.2028L46.6252 20.5096ZM62.687 16.7793C63.1054 15.819 63.6682 14.9805 64.3801 14.2736C65.092 13.5667 65.9241 13.0061 66.8861 12.5918C67.8481 12.1774 68.8774 11.9727 69.9885 11.9727H77.2227C78.2232 11.9727 79.0361 12.7965 79.0361 13.8105V13.8154C79.0361 14.8293 78.2232 15.6532 77.2227 15.6532H69.9837C69.3777 15.6532 68.8197 15.7653 68.3098 15.9896C67.8 16.2138 67.343 16.5112 66.9486 16.8817C66.5542 17.2522 66.2464 17.6958 66.0251 18.2028C65.8038 18.7098 65.698 19.2509 65.698 19.8261V26.9532C65.698 27.4846 65.8952 27.938 66.2945 28.3231C66.6889 28.7033 67.1699 28.8983 67.7327 28.8983H77.2227C78.2232 28.8983 79.0361 29.7222 79.0361 30.7362V30.741C79.0361 31.755 78.2232 32.5789 77.2227 32.5789H67.7327C66.939 32.5789 66.1983 32.4326 65.5104 32.1352C64.8226 31.8379 64.2214 31.4381 63.7115 30.9311C63.2017 30.4242 62.7976 29.8245 62.5042 29.1372C62.2108 28.4498 62.0665 27.7235 62.0665 26.963V19.8407C62.0617 18.7634 62.2685 17.7445 62.687 16.7793ZM83.0602 14.2395C82.358 14.9707 81.8145 15.8433 81.4297 16.8573C81.0449 17.8762 80.8525 18.9974 80.8477 20.221V30.7264C80.8477 31.7404 81.6605 32.5642 82.661 32.5642H82.6658C83.6663 32.5642 84.4792 31.7404 84.4792 30.7264V20.221C84.4792 18.8658 84.8832 17.7689 85.6865 16.9207C86.4898 16.0773 87.5528 15.6532 88.8659 15.6532H92.281C93.2815 15.6532 94.0944 14.8293 94.0944 13.8154V13.8105C94.0944 12.7965 93.2815 11.9727 92.281 11.9727H88.8659C87.6778 11.9727 86.586 12.1677 85.5951 12.5576C84.6043 12.9476 83.7577 13.5082 83.0602 14.2395ZM99.0035 28.1573C99.7153 28.6448 100.504 28.8886 101.384 28.8886H109.215C110.216 28.8886 111.028 29.7124 111.028 30.7264V30.7313C111.028 31.7453 110.216 32.5691 109.215 32.5691H101.384C100.321 32.5691 99.3161 32.3595 98.3782 31.9354C97.4402 31.5113 96.6129 30.9458 95.9058 30.2389C95.194 29.532 94.636 28.6984 94.232 27.7478C93.8231 26.7972 93.6211 25.7784 93.6211 24.701V19.909C93.6211 18.8316 93.8231 17.8079 94.232 16.8476C94.6408 15.8872 95.1988 15.0438 95.9058 14.3224C96.6129 13.6057 97.4402 13.0305 98.3782 12.6064C99.3161 12.1823 100.321 11.9727 101.384 11.9727H106.175C107.426 11.9727 108.45 12.2651 109.244 12.8453C110.038 13.4254 110.557 14.1469 110.807 15.0048C111.057 15.8628 111.014 16.7696 110.682 17.7348C110.35 18.7 109.701 19.5726 108.739 20.3526L99.0035 28.1573ZM97.2526 24.8229L106.521 17.491C106.772 17.3009 106.969 17.0962 107.118 16.8719C107.262 16.6477 107.33 16.4478 107.32 16.2674C107.31 16.0871 107.214 15.9408 107.036 15.8238C106.858 15.7068 106.57 15.6483 106.175 15.6483H101.384C100.822 15.6483 100.288 15.7605 99.7875 15.9798C99.2873 16.2041 98.8495 16.5014 98.4744 16.8866C98.0992 17.2668 97.801 17.7153 97.5797 18.2369C97.3585 18.7536 97.2526 19.3094 97.2526 19.9041V24.8229ZM120.24 28.8886C119.36 28.8886 118.566 28.6448 117.859 28.1573L127.594 20.3526C128.556 19.5726 129.206 18.6951 129.538 17.7348C129.869 16.7696 129.913 15.8628 129.663 15.0048C129.413 14.1469 128.893 13.4254 128.099 12.8453C127.306 12.2651 126.281 11.9727 125.031 11.9727H120.24C119.177 11.9727 118.172 12.1823 117.234 12.6064C116.296 13.0305 115.473 13.6057 114.761 14.3224C114.054 15.0438 113.496 15.8872 113.087 16.8476C112.679 17.8079 112.477 18.8316 112.477 19.909V24.701C112.477 25.7784 112.679 26.7972 113.087 27.7478C113.491 28.6984 114.049 29.532 114.761 30.2389C115.468 30.9458 116.296 31.5113 117.234 31.9354C118.172 32.3595 119.177 32.5691 120.24 32.5691H128.071C129.071 32.5691 129.884 31.7453 129.884 30.7313V30.7264C129.884 29.7124 129.071 28.8886 128.071 28.8886H120.24ZM125.377 17.491L116.108 24.8229V19.9041C116.108 19.3094 116.214 18.7536 116.435 18.2369C116.656 17.7153 116.955 17.2668 117.33 16.8866C117.705 16.5014 118.143 16.2041 118.643 15.9798C119.143 15.7605 119.677 15.6483 120.24 15.6483H125.031C125.425 15.6483 125.714 15.7068 125.892 15.8238C126.07 15.9408 126.166 16.0871 126.175 16.2674C126.185 16.4478 126.118 16.6477 125.973 16.8719C125.824 17.0962 125.627 17.3009 125.377 17.491ZM140.998 11.9727C142.21 11.9727 143.302 12.1677 144.288 12.5576C145.269 12.9476 146.111 13.5082 146.808 14.2395C147.506 14.9707 148.049 15.8433 148.439 16.8573C148.824 17.8713 149.016 18.9925 149.016 20.221V28.8847H161.528C162.341 28.8847 162.793 28.7335 162.875 28.4264C162.956 28.1193 162.653 27.7147 161.966 27.2028L153.288 20.5096C152.288 19.7247 151.634 18.8424 151.331 17.8576C151.028 16.8729 151.023 15.9467 151.316 15.0789C151.61 14.2112 152.182 13.4751 153.038 12.8755C153.894 12.271 154.982 11.9688 156.295 11.9688H167.228C168.228 11.9688 169.041 12.7926 169.041 13.8066V13.8115C169.041 14.8254 168.228 15.6493 167.228 15.6493H156.295C155.939 15.6493 155.626 15.6981 155.357 15.7907C155.087 15.8882 154.9 16.0198 154.794 16.1855C154.688 16.3562 154.683 16.556 154.779 16.79C154.871 17.024 155.097 17.2775 155.453 17.5505L164.096 24.1853C165.097 24.9457 165.78 25.8135 166.145 26.7885C166.511 27.7634 166.574 28.675 166.333 29.533C166.093 30.391 165.563 31.1076 164.751 31.6926C163.938 32.2727 162.86 32.5652 161.528 32.5652H148.406V32.5642H145.385V20.221C145.385 18.8658 144.981 17.7689 144.177 16.9207C143.374 16.0773 142.316 15.6532 140.998 15.6532H137.333C136.539 15.6532 135.943 15.8872 135.548 16.3503C135.154 16.8134 134.952 17.4715 134.952 18.3198V30.7313C134.952 31.7453 134.139 32.5691 133.138 32.5691H133.134C132.133 32.5691 131.32 31.7453 131.32 30.7313V18.3198C131.32 17.4325 131.46 16.5989 131.744 15.8287C132.027 15.0585 132.427 14.3857 132.951 13.8154C133.47 13.245 134.105 12.7965 134.846 12.465C135.587 12.1384 136.419 11.9727 137.338 11.9727H140.998Z"
        fill="url(#paint1_diamond_402_1768)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_402_1768"
          x1="-10.0337"
          y1="21.0007"
          x2="42.9272"
          y2="21.0006"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F41B3B" />
          <stop
            offset="1"
            stopColor="#1884F7"
          />
        </linearGradient>
        <radialGradient
          id="paint1_diamond_402_1768"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(181.007 32.5788) rotate(-166.4) scale(170.804 3652.9)">
          <stop
            offset="0.0364583"
            stopColor="#F41B3B"
          />
          <stop
            offset="0.369792"
            stopColor="#AE46B9"
          />
          <stop
            offset="0.630208"
            stopColor="#8F76FC"
          />
          <stop
            offset="1"
            stopColor="#1884F7"
          />
        </radialGradient>
      </defs>
    </svg>
  )
}