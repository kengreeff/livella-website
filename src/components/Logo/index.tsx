type LogoProps = {
  fill?: string,
  height?: number,
  width?: number
}

const Logo = (props: LogoProps) => {
  const { fill = 'white', height = 23, width = 231 } = props

  return (
    <svg width={width} height={height} viewBox="0 0 258 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.740723 23.5C0.560059 23.5 0.415527 23.494 0.307129 23.4819C0.210775 23.4699 0.138509 23.4458 0.090332 23.4097C0.0421549 23.3615 0.0120443 23.2952 0 23.2109C0 23.1146 0 22.9881 0 22.8315V4.54834C0 4.23519 0.0541992 3.96419 0.162598 3.73535C0.270996 3.49447 0.499837 3.37402 0.849121 3.37402C1.13818 3.37402 1.32487 3.50049 1.40918 3.75342C1.49349 3.9943 1.53564 4.25928 1.53564 4.54834V22.3076H17.0547C17.2956 22.3076 17.4762 22.3739 17.5967 22.5063C17.7292 22.6268 17.7954 22.7593 17.7954 22.9038C17.7954 23.0604 17.7292 23.1989 17.5967 23.3193C17.4762 23.4398 17.2956 23.5 17.0547 23.5H0.740723Z" fill={fill}/>
      <path d="M44.1189 4.56641H37.6692C37.5126 4.56641 37.356 4.56641 37.1995 4.56641C37.0429 4.56641 36.8983 4.54834 36.7659 4.51221C36.6454 4.47607 36.543 4.42188 36.4587 4.34961C36.3865 4.2653 36.3503 4.15088 36.3503 4.00635C36.3503 3.82568 36.3925 3.6932 36.4768 3.60889C36.5611 3.52458 36.6635 3.46436 36.7839 3.42822C36.9164 3.39209 37.0609 3.37402 37.2175 3.37402C37.3741 3.37402 37.5247 3.37402 37.6692 3.37402H52.1042C52.2849 3.37402 52.4535 3.37402 52.6101 3.37402C52.7667 3.37402 52.8992 3.39209 53.0076 3.42822C53.128 3.46436 53.2244 3.52458 53.2966 3.60889C53.3689 3.6932 53.405 3.81364 53.405 3.97021C53.405 4.13883 53.3689 4.2653 53.2966 4.34961C53.2244 4.42188 53.128 4.47607 53.0076 4.51221C52.8992 4.54834 52.7667 4.56641 52.6101 4.56641C52.4535 4.56641 52.2849 4.56641 52.1042 4.56641H45.6545V22.3076H52.1042C52.2849 22.3076 52.4535 22.3076 52.6101 22.3076C52.7667 22.3076 52.8992 22.3257 53.0076 22.3618C53.128 22.3979 53.2244 22.4582 53.2966 22.5425C53.3689 22.6268 53.405 22.7472 53.405 22.9038C53.405 23.0724 53.3689 23.1989 53.2966 23.2832C53.2244 23.3555 53.128 23.4097 53.0076 23.4458C52.8992 23.4819 52.7667 23.5 52.6101 23.5C52.4535 23.5 52.2849 23.5 52.1042 23.5H37.6692C37.5247 23.5 37.3741 23.5 37.2175 23.5C37.0609 23.5 36.9164 23.4819 36.7839 23.4458C36.6635 23.4097 36.5611 23.3494 36.4768 23.2651C36.3925 23.1808 36.3503 23.0483 36.3503 22.8677C36.3503 22.7231 36.3865 22.6147 36.4587 22.5425C36.543 22.4582 36.6454 22.3979 36.7659 22.3618C36.8983 22.3257 37.0429 22.3076 37.1995 22.3076C37.356 22.3076 37.5126 22.3076 37.6692 22.3076H44.1189V4.56641Z" fill={fill}/>
      <path d="M84.8774 21.874L95.1933 4.27734C95.3258 4.0485 95.4643 3.84977 95.6089 3.68115C95.7534 3.51253 95.91 3.41618 96.0786 3.39209C96.3074 3.39209 96.47 3.46436 96.5664 3.60889C96.6627 3.75342 96.7109 3.89193 96.7109 4.02441C96.7109 4.1569 96.6688 4.30143 96.5845 4.45801C96.5122 4.60254 96.4279 4.75309 96.3315 4.90967L85.7988 22.8677C85.6663 23.0845 85.5158 23.2471 85.3472 23.3555C85.1906 23.4518 85.028 23.5 84.8594 23.5C84.498 23.5 84.1909 23.2892 83.938 22.8677L73.3691 4.90967C73.2728 4.74105 73.1885 4.58447 73.1162 4.43994C73.056 4.28337 73.0259 4.13281 73.0259 3.98828C73.0259 3.89193 73.074 3.77148 73.1704 3.62695C73.2667 3.47038 73.4173 3.39209 73.6221 3.39209C73.8268 3.41618 73.9954 3.51253 74.1279 3.68115C74.2724 3.84977 74.411 4.0485 74.5434 4.27734L84.8774 21.874Z" fill={fill}/>
      <path d="M160.451 23.5C160.27 23.5 160.125 23.494 160.017 23.4819C159.921 23.4699 159.848 23.4458 159.8 23.4097C159.752 23.3615 159.722 23.2952 159.71 23.2109C159.71 23.1146 159.71 22.9881 159.71 22.8315V4.54834C159.71 4.23519 159.764 3.96419 159.873 3.73535C159.981 3.49447 160.21 3.37402 160.559 3.37402C160.848 3.37402 161.035 3.50049 161.119 3.75342C161.203 3.9943 161.246 4.25928 161.246 4.54834V22.3076H176.765C177.006 22.3076 177.186 22.3739 177.307 22.5063C177.439 22.6268 177.505 22.7593 177.505 22.9038C177.505 23.0604 177.439 23.1989 177.307 23.3193C177.186 23.4398 177.006 23.5 176.765 23.5H160.451Z" fill={fill}/>
      <path d="M198.915 23.5C198.734 23.5 198.59 23.494 198.481 23.4819C198.385 23.4699 198.313 23.4458 198.264 23.4097C198.216 23.3615 198.186 23.2952 198.174 23.2109C198.174 23.1146 198.174 22.9881 198.174 22.8315V4.54834C198.174 4.23519 198.228 3.96419 198.337 3.73535C198.445 3.49447 198.674 3.37402 199.023 3.37402C199.312 3.37402 199.499 3.50049 199.583 3.75342C199.668 3.9943 199.71 4.25928 199.71 4.54834V22.3076H215.229C215.47 22.3076 215.65 22.3739 215.771 22.5063C215.903 22.6268 215.969 22.7593 215.969 22.9038C215.969 23.0604 215.903 23.1989 215.771 23.3193C215.65 23.4398 215.47 23.5 215.229 23.5H198.915Z" fill={fill}/>
      <path d="M244.985 4.29541C245.178 3.94613 245.328 3.70524 245.436 3.57275C245.545 3.44027 245.707 3.37402 245.924 3.37402C246.093 3.37402 246.237 3.44027 246.358 3.57275C246.49 3.6932 246.659 3.93408 246.864 4.29541L256.836 22.2896C256.969 22.5304 257.035 22.7653 257.035 22.9941C257.035 23.2109 256.975 23.3796 256.854 23.5C256.734 23.6204 256.589 23.6807 256.421 23.6807C256.252 23.6807 256.084 23.6204 255.915 23.5C255.758 23.3916 255.596 23.1868 255.427 22.8857L252.356 17.3213H239.493L236.385 22.958C236.253 23.2109 236.096 23.3916 235.915 23.5C235.747 23.6204 235.578 23.6807 235.41 23.6807C235.205 23.6807 235.054 23.6084 234.958 23.4639C234.862 23.3193 234.813 23.1266 234.813 22.8857C234.813 22.7894 234.831 22.693 234.868 22.5967C234.916 22.5003 234.97 22.3919 235.03 22.2715L244.985 4.29541ZM251.832 16.2554L245.924 5.46973L240.017 16.2554H251.832Z" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M117 0.65C117 0.291015 117.286 0 117.639 0H138.083C139.142 0 140 0.873045 140 1.95V4.29C140 5.36696 139.142 6.24 138.083 6.24H119.556C119.203 6.24 118.917 6.53101 118.917 6.89V9.23C118.917 9.58898 119.203 9.88 119.556 9.88H138.083C139.142 9.88 140 10.753 140 11.83V14.17C140 15.247 139.142 16.12 138.083 16.12H119.556C119.203 16.12 118.917 16.411 118.917 16.77V19.11C118.917 19.469 119.203 19.76 119.556 19.76H138.083C139.142 19.76 140 20.633 140 21.71V24.05C140 25.127 139.142 26 138.083 26H117.639C117.286 26 117 25.709 117 25.35C117 24.991 117.286 24.7 117.639 24.7H138.083C138.436 24.7 138.722 24.409 138.722 24.05V21.71C138.722 21.351 138.436 21.06 138.083 21.06H119.556C118.497 21.06 117.639 20.187 117.639 19.11V16.77C117.639 15.693 118.497 14.82 119.556 14.82H138.083C138.436 14.82 138.722 14.529 138.722 14.17V11.83C138.722 11.471 138.436 11.18 138.083 11.18H119.556C118.497 11.18 117.639 10.307 117.639 9.23V6.89C117.639 5.81304 118.497 4.94 119.556 4.94H138.083C138.436 4.94 138.722 4.64899 138.722 4.29V1.95C138.722 1.59101 138.436 1.3 138.083 1.3H117.639C117.286 1.3 117 1.00899 117 0.65Z" fill={fill}/>
    </svg>
  )
}

export default Logo
