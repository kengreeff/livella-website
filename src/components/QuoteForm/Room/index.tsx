import type { Room } from '@/hooks/useQuoteForm'

import Button from '@/components/Button'

type RoomProps = {
  callbacks: {
    removeRoom: (room: Room) => void,
  },
  room: Room,
}

const Room = (props: RoomProps) => {
  const {
    callbacks: {
      removeRoom,
    },
    room,
    room: {
      installType,
      floorCovering,
      title,
    }
  } = props

  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        border-b
        border-dashed
        py-4
        items-start
        lg:items-center
        justify-start
        lg:justify-center
      "
    >
      <h4 className="font-bold">{title}</h4>

      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:ml-auto
          items-start
          lg:items-center
        "
      >
        <div>
          <span>{floorCovering}</span> / <span>{installType}</span>
        </div>

        <Button
          buttonStyle="secondaryBlack"
          className="mt-1 lg:mt-0 lg:ml-4 inline-flex py-1 rounded-md justify-center"
          onClick={() => removeRoom(room)}
        >
          Remove
        </Button>
      </div>
    </div>
  )
}

export default Room;
