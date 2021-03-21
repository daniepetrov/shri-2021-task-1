import { html } from '../utils'

const Defs = (alias) => {
  switch (alias) {
    case 'vote':
      return html`
        <div class="defs" style="height: 0;position: absolute;opacity: 0;">
          <svg
            fill="none"
            viewBox="0 0 64 64"
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="arrow-button"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32 62c16.569 0 30-13.431 30-30C62 15.431 48.569 2 32 2 15.431 2 2 15.431 2 32c0 16.569 13.431 30 30 30zm0 2c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32zm27-32c0 14.912-12.088 27-27 27S5 46.912 5 32 17.088 5 32 5s27 12.088 27 27zm-33.94-4.06a1.5 1.5 0 00-2.12 2.12l8 8a1.5 1.5 0 002.12 0l8-8a1.5 1.5 0 00-2.12-2.12L32 34.878l-6.94-6.94z"
                fill="currentColor"
              />
            </defs>
          </svg>
        </div>
      `
    case 'activity':
      return html`
        <div class="defs" style="height: 0;position: absolute;opacity: 0;">
          <svg
            fill="none"
            viewBox="0 0 64 64"
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <g id="extra-dark">
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="34"
                  height="72"
                >
                  <path
                    d="M0 13.9767C0 12.7308 0.580524 11.5561 1.5702 10.7993L14.5702 0.858083C16.0044 -0.238676 17.9956 -0.238675 19.4298 0.858083L32.4298 10.7993C33.4195 11.5561 34 12.7308 34 13.9767V58.0233C34 59.2692 33.4195 60.4439 32.4298 61.2007L19.4298 71.1419C17.9956 72.2387 16.0044 72.2387 14.5702 71.1419L1.5702 61.2007C0.580524 60.4439 0 59.2692 0 58.0233V13.9767Z"
                    fill="url(#paint0_radial)"
                    fill-opacity="0.95"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <g filter="url(#filter0_ii)">
                    <path d="M0 12L17 -1L34 12V60L17 73L0 60V12Z" fill="url(#paint1_radial)" />
                  </g>
                  <g filter="url(#filter1_dif)">
                    <path
                      d="M34 59.0117V12.9883C34 12.3654 33.7097 11.778 33.2149 11.3996L17 -1V73L33.2149 60.6004C33.7097 60.222 34 59.6346 34 59.0117Z"
                      fill="url(#paint2_radial)"
                    />
                  </g>
                  <g filter="url(#filter2_iif)">
                    <path
                      d="M17 -1L0 12L14.5702 23.1419C16.0044 24.2387 17.9956 24.2387 19.4298 23.1419L34 12L17 -1Z"
                      fill="url(#paint3_radial)"
                      fill-opacity="0.8"
                    />
                  </g>
                </g>
              </g>

              <filter
                id="filter0_ii"
                x="-1"
                y="-1"
                width="37"
                height="76"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.95 0 0 0 0 0.623 0 0 0 0 0.05 0 0 0 0.9 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter
                id="filter1_dif"
                x="13"
                y="-5"
                width="25"
                height="86"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="-1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.95 0 0 0 0 0.623 0 0 0 0 0.05 0 0 0 0.9 0"
                />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="2" result="effect3_foregroundBlur" />
              </filter>
              <filter
                id="filter2_iif"
                x="-1"
                y="-2"
                width="37"
                height="27.9645"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="15.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.95 0 0 0 0 0.623 0 0 0 0 0.05 0 0 0 0.9 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="0.5" result="effect3_foregroundBlur" />
              </filter>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(28.3313 64.8204) rotate(-102.092) scale(67.4131 846.864)"
              >
                <stop stop-color="#201502" />
                <stop offset="1" stop-color="#C7830A" />
              </radialGradient>
              <radialGradient
                id="paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(28.3313 64.8204) rotate(-102.092) scale(67.4131 846.864)"
              >
                <stop stop-color="#201502" />
                <stop offset="1" stop-color="#C7830A" />
              </radialGradient>
              <radialGradient
                id="paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(31.9667 61.3557) rotate(-100.534) scale(54.7003 683.353)"
              >
                <stop stop-color="#201502" />
                <stop offset="1" stop-color="#C7830A" />
              </radialGradient>
              <radialGradient
                id="paint3_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(19.1537 23.663) rotate(-102.078) scale(61.741 1819.91)"
              >
                <stop stop-color="#201502" />
                <stop offset="1" stop-color="#C7830A" />
              </radialGradient>

              <g id="extra-light">
                <mask
                  id="mask01"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="34"
                  height="72"
                >
                  <path
                    opacity="0.92"
                    d="M0 13.9767C0 12.7308 0.580524 11.5561 1.5702 10.7993L14.5702 0.858083C16.0044 -0.238676 17.9956 -0.238675 19.4298 0.858083L32.4298 10.7993C33.4195 11.5561 34 12.7308 34 13.9767V58.0233C34 59.2692 33.4195 60.4439 32.4298 61.2007L19.4298 71.1419C17.9956 72.2387 16.0044 72.2387 14.5702 71.1419L1.5702 61.2007C0.580524 60.4439 0 59.2692 0 58.0233V13.9767Z"
                    fill="#261C00"
                  />
                </mask>
                <g mask="url(#mask01)">
                  <g filter="url(#filter0_ii1)">
                    <path
                      d="M0 13.9767C0 12.7308 0.580524 11.5561 1.5702 10.7993L14.5702 0.858083C16.0044 -0.238676 17.9956 -0.238675 19.4298 0.858083L32.4298 10.7993C33.4195 11.5561 34 12.7308 34 13.9767V58.0233C34 59.2692 33.4195 60.4439 32.4298 61.2007L19.4298 71.1419C17.9956 72.2387 16.0044 72.2387 14.5702 71.1419L1.5702 61.2007C0.580524 60.4439 0 59.2692 0 58.0233V13.9767Z"
                      fill="url(#paint0_radial1)"
                    />
                  </g>
                  <g filter="url(#filter1_iif1)">
                    <path
                      d="M34 59.0117V12.9883C34 12.3654 33.7097 11.778 33.2149 11.3996L17 -1V73L33.2149 60.6004C33.7097 60.222 34 59.6346 34 59.0117Z"
                      fill="url(#paint1_radial1)"
                      fill-opacity="0.4"
                    />
                  </g>
                  <g filter="url(#filter2_iif1)">
                    <path
                      d="M14.5702 0.858083L0 12L14.5702 23.1419C16.0044 24.2387 17.9956 24.2387 19.4298 23.1419L34 12L19.4298 0.858083C17.9956 -0.238675 16.0044 -0.238676 14.5702 0.858083Z"
                      fill="url(#paint2_radial1)"
                      fill-opacity="0.8"
                    />
                  </g>
                </g>
              </g>
              <filter
                id="filter0_ii1"
                x="-1"
                y="0.0355225"
                width="35"
                height="72.929"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.4 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter
                id="filter1_iif1"
                x="15"
                y="-3"
                width="21"
                height="78"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.6 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="1" result="effect3_foregroundBlur" />
              </filter>
              <filter
                id="filter2_iif1"
                x="-1"
                y="-0.964478"
                width="37"
                height="26.929"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.72 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="0.5" result="effect3_foregroundBlur" />
              </filter>
              <radialGradient
                id="paint0_radial1"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-5.5 9) rotate(67.5294) scale(103.347 27.7985)"
              >
                <stop stop-color="#FFDD9C" />
                <stop offset="1" stop-color="#FFD363" />
              </radialGradient>
              <radialGradient
                id="paint1_radial1"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25 21) rotate(90) scale(47 10.7977)"
              >
                <stop stop-color="#FFB800" />
                <stop offset="1" stop-color="#FFEF99" stop-opacity="0.87" />
              </radialGradient>
              <radialGradient
                id="paint2_radial1"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.4998 17.9502) rotate(-162.739) scale(102.622 2237.58)"
              >
                <stop stop-color="#FFFAED" />
                <stop offset="1" stop-color="#FFB800" />
              </radialGradient>

              <g id="max-dark">
                <mask
                  id="1mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="34"
                  height="56"
                >
                  <path
                    d="M0 13.9767C0 12.7308 0.580524 11.5561 1.5702 10.7993L14.5702 0.858083C16.0044 -0.238676 17.9956 -0.238675 19.4298 0.858083L32.4298 10.7993C33.4195 11.5561 34 12.7308 34 13.9767V42.0233C34 43.2692 33.4195 44.4439 32.4298 45.2007L19.4298 55.1419C17.9956 56.2387 16.0044 56.2387 14.5702 55.1419L1.5702 45.2007C0.580524 44.4439 0 43.2692 0 42.0233V13.9767Z"
                    fill="url(#1paint0_radial)"
                    fill-opacity="0.95"
                  />
                </mask>
                <g mask="url(#1mask0)">
                  <g filter="url(#1filter0_ii)">
                    <path
                      d="M0 12L17 -1L34 12V44L17 57L0 44V12Z"
                      fill="url(#1paint1_radial)"
                      fill-opacity="0.9"
                    />
                  </g>
                  <g filter="url(#1filter1_dif)">
                    <path
                      d="M34 43.0117V12.9883C34 12.3654 33.7097 11.778 33.2149 11.3996L17 -1V57L33.2149 44.6004C33.7097 44.222 34 43.6346 34 43.0117Z"
                      fill="url(#1paint2_radial)"
                    />
                  </g>
                  <g filter="url(#1filter2_iif)">
                    <path
                      d="M17 -1L0 12L14.5702 23.1419C16.0044 24.2387 17.9956 24.2387 19.4298 23.1419L34 12L17 -1Z"
                      fill="url(#1paint3_radial)"
                      fill-opacity="0.8"
                    />
                  </g>
                </g>
              </g>

              <filter
                id="1filter0_ii"
                x="-1"
                y="-1"
                width="37"
                height="60"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.95 0 0 0 0 0.623 0 0 0 0 0.05 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter
                id="1filter1_dif"
                x="12"
                y="-6"
                width="27"
                height="71"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" dy="-1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="2.5" result="effect3_foregroundBlur" />
              </filter>
              <filter
                id="1filter2_iif"
                x="-1"
                y="-2"
                width="37"
                height="27.9645"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.95 0 0 0 0 0.623 0 0 0 0 0.05 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.922292 0 0 0 0 0.60255 0 0 0 0 0.0485417 0 0 0 0.5 0"
                />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="0.5" result="effect3_foregroundBlur" />
              </filter>
              <radialGradient
                id="1paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.3053 42.989) rotate(-109.233) scale(70.4297 2348.99)"
              >
                <stop />
                <stop offset="0.0001" stop-color="#211602" />
                <stop offset="1" stop-color="#AC7109" />
              </radialGradient>
              <radialGradient
                id="1paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.3053 42.989) rotate(-109.233) scale(70.4297 2348.99)"
              >
                <stop />
                <stop offset="0.0001" stop-color="#211602" />
                <stop offset="1" stop-color="#AC7109" />
              </radialGradient>
              <radialGradient
                id="1paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(31.9667 47.8734) rotate(-106.704) scale(52.0707 812.895)"
              >
                <stop offset="0.0625" stop-color="#201502" />
                <stop offset="1" stop-color="#C7830A" />
              </radialGradient>
              <radialGradient
                id="1paint3_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.4998 17.9502) rotate(-157.423) scale(77.4885 1689.58)"
              >
                <stop />
                <stop offset="0.0001" stop-color="#211602" />
                <stop offset="1" stop-color="#AC7109" />
              </radialGradient>

              <g id="max-light">
                <mask
                  id="2mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="34"
                  height="56"
                >
                  <path
                    opacity="0.92"
                    d="M0 13.9767C0 12.7308 0.580524 11.5561 1.5702 10.7993L14.5702 0.858083C16.0044 -0.238676 17.9956 -0.238675 19.4298 0.858083L32.4298 10.7993C33.4195 11.5561 34 12.7308 34 13.9767V42.0233C34 43.2692 33.4195 44.4439 32.4298 45.2007L19.4298 55.1419C17.9956 56.2387 16.0044 56.2387 14.5702 55.1419L1.5702 45.2007C0.580524 44.4439 0 43.2692 0 42.0233V13.9767Z"
                    fill="#FF8080"
                  />
                </mask>
                <g mask="url(#2mask0)">
                  <g filter="url(#2filter0_ii)">
                    <path
                      d="M0 13.9767C0 12.7308 0.580524 11.5561 1.5702 10.7993L14.5702 0.858083C16.0044 -0.238676 17.9956 -0.238675 19.4298 0.858083L32.4298 10.7993C33.4195 11.5561 34 12.7308 34 13.9767V42.0233C34 43.2692 33.4195 44.4439 32.4298 45.2007L19.4298 55.1419C17.9956 56.2387 16.0044 56.2387 14.5702 55.1419L1.5702 45.2007C0.580524 44.4439 0 43.2692 0 42.0233V13.9767Z"
                      fill="url(#2paint0_radial)"
                    />
                  </g>
                  <g filter="url(#2filter1_iif)">
                    <path
                      d="M34 42.0233V13.9767C34 12.7308 33.4195 11.5561 32.4298 10.7993L23.4298 3.91691C20.7978 1.90416 17 3.78091 17 7.09434V57L32.4298 45.2007C33.4195 44.4439 34 43.2692 34 42.0233Z"
                      fill="url(#2paint1_radial)"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g filter="url(#2filter2_iif)">
                    <path
                      d="M14.5702 0.858083L0 12L14.5702 23.1419C16.0044 24.2387 17.9956 24.2387 19.4298 23.1419L34 12L19.4298 0.858083C17.9956 -0.238675 16.0044 -0.238676 14.5702 0.858083Z"
                      fill="url(#2paint2_radial)"
                      fill-opacity="0.8"
                    />
                  </g>
                </g>
              </g>
              <filter
                id="2filter0_ii"
                x="-1"
                y="0.0355225"
                width="35"
                height="56.929"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.4 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter
                id="2filter1_iif"
                x="15"
                y="1.08698"
                width="21"
                height="57.913"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.4 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="1" result="effect3_foregroundBlur" />
              </filter>
              <filter
                id="2filter2_iif"
                x="-1"
                y="-0.964478"
                width="37"
                height="26.929"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.72 0 0 0 0 3.33786e-08 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="0.5" result="effect3_foregroundBlur" />
              </filter>
              <radialGradient
                id="2paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1.5 17.5) rotate(68.6417) scale(42.4129 24.8627)"
              >
                <stop stop-color="#FFFFFE" />
                <stop offset="1" stop-color="#FFF6E4" />
              </radialGradient>
              <radialGradient
                id="2paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25 6) rotate(90) scale(70.5 20.6638)"
              >
                <stop stop-color="#FFEAB4" />
                <stop offset="1" stop-color="#FFE7B4" />
              </radialGradient>
              <radialGradient
                id="2paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.4998 17.9502) rotate(-168.354) scale(41.8615 912.757)"
              >
                <stop offset="0.0364583" stop-color="#FFFAED" />
                <stop offset="1" stop-color="#FFEDC9" />
              </radialGradient>

              <g id="mid-dark">
                <mask
                  id="4mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="34"
                  height="40"
                >
                  <path
                    opacity="0.95"
                    d="M0 13.9767C0 12.7308 0.580524 11.5561 1.5702 10.7993L14.5702 0.858083C16.0044 -0.238676 17.9956 -0.238675 19.4298 0.858083L32.4298 10.7993C33.4195 11.5561 34 12.7308 34 13.9767V26.0233C34 27.2692 33.4195 28.4439 32.4298 29.2007L19.4298 39.1419C17.9956 40.2387 16.0044 40.2387 14.5702 39.1419L1.5702 29.2007C0.580524 28.4439 0 27.2692 0 26.0233V13.9767Z"
                    fill="url(#4paint0_radial)"
                    fill-opacity="0.95"
                  />
                </mask>
                <g mask="url(#4mask0)">
                  <g filter="url(#4filter0_ii)">
                    <path
                      d="M0 12L17 -1L34 12V28L17 41L0 28V12Z"
                      fill="url(#4paint1_radial)"
                      fill-opacity="0.9"
                    />
                  </g>
                  <g filter="url(#4filter1_iif)">
                    <path
                      d="M34 27.0117V12.9883C34 12.3654 33.7097 11.778 33.2149 11.3996L17 -1V41L33.2149 28.6004C33.7097 28.222 34 27.6346 34 27.0117Z"
                      fill="url(#4paint2_radial)"
                      fill-opacity="0.9"
                    />
                  </g>
                  <g filter="url(#4filter2_iif)">
                    <path
                      d="M17 -1L0 12L14.5702 23.1419C16.0044 24.2387 17.9956 24.2387 19.4298 23.1419L34 12L17 -1Z"
                      fill="url(#4paint3_radial)"
                      fill-opacity="0.9"
                    />
                  </g>
                </g>
              </g>
              <filter
                id="4filter0_ii"
                x="-1"
                y="-1"
                width="37"
                height="44"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.362929 0 0 0 0 0.455371 0 0 0 0 0.554189 0 0 0 0.6 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter
                id="4filter1_iif"
                x="15"
                y="-3"
                width="21"
                height="46"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.362929 0 0 0 0 0.455371 0 0 0 0 0.554189 0 0 0 0.6 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="1" result="effect3_foregroundBlur" />
              </filter>
              <filter
                id="4filter2_iif"
                x="-2"
                y="-2"
                width="38"
                height="27.9645"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.362929 0 0 0 0 0.455371 0 0 0 0 0.554189 0 0 0 0.6 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="0.5" result="effect3_foregroundBlur" />
              </filter>
              <radialGradient
                id="4paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.3048 24.3353) rotate(-113.885) scale(82.2113 2670.94)"
              >
                <stop />
                <stop offset="0.0001" stop-color="#231600" />
                <stop offset="1" stop-color="#705C5E" />
              </radialGradient>
              <radialGradient
                id="4paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.3048 24.3353) rotate(-113.885) scale(82.2113 2670.94)"
              >
                <stop />
                <stop offset="0.0001" stop-color="#231600" />
                <stop offset="1" stop-color="#705C5E" />
              </radialGradient>
              <radialGradient
                id="4paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(37.2501 16.8307) rotate(-115.254) scale(83.8533 1990.08)"
              >
                <stop />
                <stop offset="0.0001" stop-color="#231600" />
                <stop offset="1" stop-color="#705C5E" />
              </radialGradient>
              <radialGradient
                id="4paint3_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.4998 17.9502) rotate(-157.423) scale(77.4885 1689.58)"
              >
                <stop />
                <stop offset="0.0001" stop-color="#231600" />
                <stop offset="1" stop-color="#705C5E" />
              </radialGradient>

              <g id="mid-light">
                <mask
                  id="6mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="34"
                  height="40"
                >
                  <path
                    opacity="0.92"
                    d="M0 13.9767C0 12.7308 0.580524 11.5561 1.5702 10.7993L14.5702 0.858083C16.0044 -0.238676 17.9956 -0.238675 19.4298 0.858083L32.4298 10.7993C33.4195 11.5561 34 12.7308 34 13.9767V26.0233C34 27.2692 33.4195 28.4439 32.4298 29.2007L19.4298 39.1419C17.9956 40.2387 16.0044 40.2387 14.5702 39.1419L1.5702 29.2007C0.580524 28.4439 0 27.2692 0 26.0233V13.9767Z"
                    fill="#171100"
                  />
                </mask>
                <g mask="url(#6mask0)">
                  <g filter="url(#6filter0_ii)">
                    <path
                      d="M0 13.9767C0 12.7308 0.580524 11.5561 1.5702 10.7993L14.5702 0.858083C16.0044 -0.238676 17.9956 -0.238675 19.4298 0.858083L32.4298 10.7993C33.4195 11.5561 34 12.7308 34 13.9767V26.0233C34 27.2692 33.4195 28.4439 32.4298 29.2007L19.4298 39.1419C17.9956 40.2387 16.0044 40.2387 14.5702 39.1419L1.5702 29.2007C0.580524 28.4439 0 27.2692 0 26.0233V13.9767Z"
                      fill="url(#6paint0_radial)"
                      fill-opacity="0.9"
                    />
                  </g>
                  <g filter="url(#6filter1_iif)">
                    <path
                      d="M34 27.0117V12.9883C34 12.3654 33.7097 11.778 33.2149 11.3996L17 -1V41L33.2149 28.6004C33.7097 28.222 34 27.6346 34 27.0117Z"
                      fill="url(#6paint1_radial)"
                      fill-opacity="0.9"
                    />
                  </g>
                  <g filter="url(#6filter2_iif)">
                    <path
                      d="M14.5702 0.858083L0 12L14.5702 23.1419C16.0044 24.2387 17.9956 24.2387 19.4298 23.1419L34 12L19.4298 0.858083C17.9956 -0.238675 16.0044 -0.238676 14.5702 0.858083Z"
                      fill="url(#6paint2_radial)"
                      fill-opacity="0.9"
                    />
                  </g>
                </g>
              </g>
              <filter
                id="6filter0_ii"
                x="-1"
                y="0.0355225"
                width="37"
                height="41.929"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.815479 0 0 0 0 0.82293 0 0 0 0 0.904885 0 0 0 0.6 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.97 0 0 0 0 0.97 0 0 0 0 0.97 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter
                id="6filter1_iif"
                x="15"
                y="-3"
                width="21"
                height="46"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.783083 0 0 0 0 0.767481 0 0 0 0 0.76025 0 0 0 0.3 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.97 0 0 0 0 0.97 0 0 0 0 0.97 0 0 0 0.5 0"
                />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="1" result="effect3_foregroundBlur" />
              </filter>
              <filter
                id="6filter2_iif"
                x="-1"
                y="-0.964478"
                width="37"
                height="26.929"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.858292 0 0 0 0 0.848099 0 0 0 0 0.843375 0 0 0 0.6 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.99 0 0 0 0 0.99 0 0 0 0 0.99 0 0 0 0.8 0"
                />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="0.5" result="effect3_foregroundBlur" />
              </filter>
              <radialGradient
                id="6paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25.3048 24.3353) rotate(-113.885) scale(82.2113 2670.94)"
              >
                <stop stop-color="#EAE8E8" />
                <stop offset="1" stop-color="#EEEDEC" />
              </radialGradient>
              <radialGradient
                id="6paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(37.5 48.5002) rotate(-136.273) scale(63.6554 1510.72)"
              >
                <stop stop-color="#E8E6E6" />
                <stop offset="1" stop-color="#D6D3D1" />
              </radialGradient>
              <radialGradient
                id="6paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.4998 17.9502) rotate(-156.43) scale(43.6405 951.546)"
              >
                <stop stop-color="#F7F7F7" />
                <stop offset="1" stop-color="#EAE8E8" />
              </radialGradient>

              <g id="min-dark">
                <mask
                  id="7mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="1"
                  width="34"
                  height="32"
                >
                  <path
                    d="M0 14.9767C0 13.7308 0.580524 12.5561 1.5702 11.7993L14.5702 1.85808C16.0044 0.761324 17.9956 0.761325 19.4298 1.85808L32.4298 11.7993C33.4195 12.5561 34 13.7308 34 14.9767V19.0233C34 20.2692 33.4195 21.4439 32.4298 22.2007L19.4298 32.1419C17.9956 33.2387 16.0044 33.2387 14.5702 32.1419L1.5702 22.2007C0.580524 21.4439 0 20.2692 0 19.0233V14.9767Z"
                    fill="#151311"
                  />
                </mask>
                <g mask="url(#7mask0)">
                  <g filter="url(#7filter0_ii)">
                    <path
                      d="M0 13L17 0L34 13V21L17 34L0 21V13Z"
                      fill="url(#7paint0_radial)"
                      fill-opacity="0.65"
                    />
                  </g>
                  <g filter="url(#7filter1_iif)">
                    <path
                      d="M34 20.0117V13L17 26V34L33.2149 21.6004C33.7097 21.222 34 20.6346 34 20.0117Z"
                      fill="url(#7paint1_radial)"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g filter="url(#7filter2_if)">
                    <path
                      d="M17 0L0 13L14.5702 24.1419C16.0044 25.2387 17.9956 25.2387 19.4298 24.1419L34 13L17 0Z"
                      fill="url(#7paint2_radial)"
                      fill-opacity="0.7"
                    />
                  </g>
                </g>
              </g>
              <filter
                id="7filter0_ii"
                x="-1"
                y="0"
                width="36"
                height="35"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.440542 0 0 0 0 0.400529 0 0 0 0 0.367792 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter
                id="7filter1_iif"
                x="15"
                y="11"
                width="21"
                height="25"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.440542 0 0 0 0 0.400529 0 0 0 0 0.367792 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="1" result="effect3_foregroundBlur" />
              </filter>
              <filter
                id="7filter2_if"
                x="-2"
                y="-1"
                width="37"
                height="26.9645"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.9272 0 0 0 0 0.91928 0 0 0 0 0.9128 0 0 0 0.15 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feGaussianBlur stdDeviation="0.5" result="effect2_foregroundBlur" />
              </filter>
              <radialGradient
                id="7paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.2818 26.6165) rotate(-156.928) scale(77.2877 1713.92)"
              >
                <stop stop-color="#131110" />
                <stop offset="1" />
              </radialGradient>
              <radialGradient
                id="7paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(23.0802 22.3714) rotate(-101.873) scale(99.4275 2181.5)"
              >
                <stop offset="0.0001" stop-color="#3A3530" />
                <stop offset="1" stop-color="#49423D" />
              </radialGradient>
              <radialGradient
                id="7paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.4998 18.9502) rotate(-163.167) scale(41.2679 899.814)"
              >
                <stop stop-color="#3E3934" />
                <stop offset="1" stop-color="#221F1C" />
              </radialGradient>

              <g id="min-light">
                <mask
                  id="9mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="1"
                  width="34"
                  height="32"
                >
                  <path
                    opacity="0.92"
                    d="M0 14.9767C0 13.7308 0.580524 12.5561 1.5702 11.7993L14.5702 1.85808C16.0044 0.761324 17.9956 0.761325 19.4298 1.85808L32.4298 11.7993C33.4195 12.5561 34 13.7308 34 14.9767V19.0233C34 20.2692 33.4195 21.4439 32.4298 22.2007L19.4298 32.1419C17.9956 33.2387 16.0044 33.2387 14.5702 32.1419L1.5702 22.2007C0.580524 21.4439 0 20.2692 0 19.0233V14.9767Z"
                    fill="#2B1F00"
                  />
                </mask>
                <g mask="url(#9mask0)">
                  <g filter="url(#9filter0_ii)">
                    <path
                      d="M0 13.9883C0 13.3654 0.290262 12.778 0.7851 12.3996L15.7851 0.929041C16.5022 0.380661 17.4978 0.380662 18.2149 0.929041L33.2149 12.3996C33.7097 12.778 34 13.3654 34 13.9883V20.0117C34 20.6346 33.7097 21.222 33.2149 21.6004L18.2149 33.071C17.4978 33.6193 16.5022 33.6193 15.7851 33.071L0.785101 21.6004C0.290263 21.222 0 20.6346 0 20.0117V13.9883Z"
                      fill="url(#9paint0_radial)"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g filter="url(#9filter1_if)">
                    <path
                      d="M34 20.0117V17.0472C34 15.3905 32.1011 14.4521 30.7851 15.4585L17.7851 25.3996C17.2903 25.778 17 26.3654 17 26.9883V34L33.2149 21.6004C33.7097 21.222 34 20.6346 34 20.0117Z"
                      fill="url(#9paint1_radial)"
                      fill-opacity="0.8"
                    />
                  </g>
                  <g filter="url(#9filter2_iif)">
                    <path
                      d="M17 0L0 13L14.5702 24.1419C16.0044 25.2387 17.9956 25.2387 19.4298 24.1419L34 13L17 0Z"
                      fill="url(#9paint2_radial)"
                      fill-opacity="0.9"
                    />
                  </g>
                </g>
              </g>
              <filter
                id="9filter0_ii"
                x="-1"
                y="0.517761"
                width="36"
                height="33.9645"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.414167 0 0 0 0 0.414167 0 0 0 0 0.414167 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.98 0 0 0 0 0.98 0 0 0 0 0.98 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
              <filter
                id="9filter1_if"
                x="15"
                y="13.0435"
                width="21"
                height="22.9565"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.98 0 0 0 0 0.98 0 0 0 0 0.98 0 0 0 0.5 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feGaussianBlur stdDeviation="1" result="effect2_foregroundBlur" />
              </filter>
              <filter
                id="9filter2_iif"
                x="-1"
                y="-1"
                width="37"
                height="27.9645"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.643333 0 0 0 0 0.643333 0 0 0 0 0.643333 0 0 0 0.2 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.98 0 0 0 0 0.98 0 0 0 0 0.98 0 0 0 0.8 0"
                />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                <feGaussianBlur stdDeviation="0.5" result="effect3_foregroundBlur" />
              </filter>
              <radialGradient
                id="9paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.2818 26.6165) rotate(-161.19) scale(51.5342 1142.82)"
              >
                <stop stop-color="#FAFAFA" />
                <stop offset="1" stop-color="#FAFAFA" />
              </radialGradient>
              <radialGradient
                id="9paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(31.5 21.5) rotate(-173.454) scale(30.7002 49.4395)"
              >
                <stop stop-color="#EAEAEA" />
                <stop offset="0.0001" stop-color="#E9E9E9" />
                <stop offset="1" stop-color="#E4E4E4" />
              </radialGradient>
              <radialGradient
                id="9paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(35.5 15) rotate(-165.964) scale(32.9848 19.2259)"
              >
                <stop stop-color="#FAFAFA" />
                <stop offset="1" stop-color="#F8F8F8" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      `
    default:
      return ``
  }
}

export default Defs
