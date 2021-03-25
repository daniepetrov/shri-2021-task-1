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
    default:
      return ``
  }
}

export default Defs
