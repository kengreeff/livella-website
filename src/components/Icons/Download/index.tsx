type DownloadIconProps = {
  height?: number,
  width?: number,
}

const DownloadIcon = (props: DownloadIconProps) => {
  const { height = 110, width = 111 } = props

  return (
    <svg width={width} height={height} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.75 10.9375C16.9805 10.9375 18 11.957 18 13.1875V16C18 17.2656 16.9805 18.25 15.75 18.25H2.25C0.984375 18.25 0 17.2656 0 16V13.1875C0 11.957 0.984375 10.9375 2.25 10.9375H4.11328L5.80078 12.625H2.25C1.93359 12.625 1.6875 12.9062 1.6875 13.1875V16C1.6875 16.3164 1.93359 16.5625 2.25 16.5625H15.75C16.0312 16.5625 16.3125 16.3164 16.3125 16V13.1875C16.3125 12.9062 16.0312 12.625 15.75 12.625H12.1641L13.8516 10.9375H15.75ZM15.1875 14.5938C15.1875 15.0859 14.8008 15.4375 14.3438 15.4375C13.8516 15.4375 13.5 15.0859 13.5 14.5938C13.5 14.1367 13.8516 13.75 14.3438 13.75C14.8008 13.75 15.1875 14.1367 15.1875 14.5938ZM8.40234 13.2227L3.58594 8.44141C3.23438 8.125 3.23438 7.59766 3.58594 7.24609C3.90234 6.92969 4.42969 6.92969 4.78125 7.24609L8.15625 10.6211V1.09375C8.15625 0.636719 8.50781 0.25 9 0.25C9.45703 0.25 9.84375 0.636719 9.84375 1.09375V10.6211L13.1836 7.28125C13.5 6.92969 14.0273 6.92969 14.3438 7.28125C14.6953 7.59766 14.6953 8.125 14.3438 8.44141L9.5625 13.2227C9.42188 13.3984 9.21094 13.4688 9 13.4688C8.75391 13.4688 8.54297 13.3984 8.40234 13.2227Z"
        fill="black"
      />
    </svg>
  )
}

export default DownloadIcon