type ResourcesIconProps = {
  height?: number,
  width?: number,
}

const ResourcesIcon = (props: ResourcesIconProps) => {
  const { height = 110, width = 111 } = props

  return (
    <svg width={width} height={height} viewBox="0 0 111 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.4043 5.38764L10.4902 10.7256L6.5543 11.697L2.61836 12.668L1.98393 13.1196L1.34971 13.5712L0.924746 14.404L0.5 15.2367V18.0778V20.9191L0.944941 21.8382L1.38988 22.7573L2.09758 23.1945L2.80506 23.632L3.47881 23.7667L4.15234 23.9014V26.0298V28.1583L4.44689 28.8496L4.74145 29.541L5.30627 30.0618L5.87109 30.5828V61.1604V91.7383H5.43066H4.99045L4.38201 92.0528L3.77379 92.3673L3.21949 93.0263L2.66498 93.6852L2.44305 94.4842L2.22111 95.2832L2.22004 97.4336L2.21875 99.5842L1.794 99.8493L1.36947 100.115L0.934629 100.967L0.5 101.819V104.537V107.256L0.981035 108.112L1.46229 108.968L2.34271 109.484L3.22336 110H55.4315H107.639L108.575 109.505L109.511 109.011L110.005 108.075L110.5 107.139V104.479V101.819L110.065 100.967L109.631 100.115L109.206 99.8493L108.781 99.5842L108.78 97.4336L108.779 95.2832L108.557 94.4842L108.335 93.6852L107.781 93.0263L107.226 92.3673L106.618 92.0528L106.01 91.7383H105.569H105.129V61.1306V30.5229L105.538 30.3041L105.946 30.0854L106.397 29.1545L106.848 28.2238V26.0625V23.9014L107.521 23.7667L108.195 23.632L108.902 23.1945L109.61 22.7573L110.055 21.8382L110.5 20.9191V18.0778V15.2367L110.075 14.404L109.65 13.5712L109.055 13.1585L108.459 12.7456L108.044 12.5952L107.63 12.4448L81.9705 6.2223L56.311 0L55.3146 0.0249219L54.3184 0.0496289L32.4043 5.38764ZM80.3963 9.67506L105.236 15.6976L106.042 15.9137L106.848 16.1298V18.1627V20.1953H55.5H4.15234V18.1584V16.1214L4.74316 15.9696L5.33398 15.8174L30.2559 9.75455L55.1777 3.69145L55.367 3.67189L55.5561 3.65234L80.3963 9.67506ZM18.7617 25.6738V27.5H13.2832H7.80469V25.6738V23.8477H13.2832H18.7617V25.6738ZM88.4141 26.1572L88.512 28.4668L88.867 29.1461L89.2219 29.8253L89.7633 30.2513L90.3047 30.6771V61.2077V91.7383H55.5H20.6953V61.2077V30.6771L21.2367 30.2513L21.7781 29.8253L22.133 29.1461L22.488 28.4668L22.5859 26.1572L22.6841 23.8477H55.5H88.3159L88.4141 26.1572ZM103.195 25.6738V27.5H97.7168H92.2383V25.6738V23.8477H97.7168H103.195V25.6738ZM16.9899 61.3916L16.9355 91.6309L13.3369 91.6897L9.73828 91.7486V61.4505V31.1523H13.3913H17.0445L16.9899 61.3916ZM28.0973 31.4372L27.4427 31.6895L26.677 32.172L25.9113 32.6543L25.3619 33.4611L24.8126 34.2676L24.5694 35.127L24.3262 35.9863L24.3906 57.3633L24.4551 78.7402L24.8424 79.4496L25.2296 80.1593L26.0855 80.9899L26.9415 81.8204L27.9388 82.1601L28.9359 82.5H38.849H48.7619L49.9061 82.8399L51.0504 83.1796L52.0668 84.2233L53.0834 85.2668L53.8083 85.7087L54.5332 86.1508L55.4549 86.1515L56.3766 86.1523L57.1736 85.7454L57.9707 85.3385L58.6363 84.5101L59.3019 83.6816L60.355 83.1445L61.4082 82.6074L72.043 82.5L82.6777 82.3926L83.466 82.0349L84.254 81.6772L85.1134 80.7916L85.9728 79.9062L86.3125 78.9089L86.6523 77.9118V56.8262V35.7405L86.3125 34.7435L85.9728 33.7462L85.1753 32.9246L84.378 32.1028L83.5279 31.6813L82.6777 31.2598L72.1721 31.2L61.6667 31.1405L60.4631 31.4856L59.2598 31.8306L58.3065 32.3834L57.3532 32.9362L56.4307 33.7865L55.5082 34.6371L54.3873 33.6293L53.2665 32.6217L52.5034 32.233L51.7402 31.8444L50.5732 31.4982L49.4064 31.1523L39.0791 31.1687L28.752 31.185L28.0973 31.4372ZM101.262 61.4505V91.7486L97.6631 91.6897L94.0645 91.6309L94.0101 61.3916L93.9555 31.1523H97.6087H101.262V61.4505ZM50.7206 35.5375L51.8496 36.1631L52.3968 36.8805L52.9438 37.5979L53.2551 38.3427L53.5664 39.0878V59.7878V80.488L52.023 79.7214L50.4795 78.9551L39.758 78.8477L29.0366 78.7402L28.5182 78.1374L28 77.5345V56.862V36.1894L28.3453 35.6965L28.6905 35.2034L29.1509 35.0124L29.6113 34.8217L39.6016 34.8668L49.5918 34.9121L50.7206 35.5375ZM82.4816 35.515L83 36.1178V56.8262V77.5345L82.4818 78.1374L81.9634 78.7402L71.242 78.8477L60.5205 78.9551L58.977 79.7214L57.4336 80.488V59.8086V39.1295L57.6605 38.5247L57.8873 37.9199L58.4511 37.1007L59.0148 36.2815L59.9606 35.7272L60.9063 35.1729L61.587 35.0077L62.2676 34.8425L72.1154 34.8773L81.9632 34.9121L82.4816 35.515ZM104.914 97.2168V99.043H55.5H6.08594V97.2168V95.3906H55.5H104.914V97.2168ZM106.848 104.521V106.348H55.5H4.15234V104.521V102.695H55.5H106.848V104.521Z"
        fill="white"
      />
    </svg>
  )
}

export default ResourcesIcon
