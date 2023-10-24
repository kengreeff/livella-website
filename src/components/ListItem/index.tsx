import { FaCheck } from 'react-icons/fa'

type ListItemProps = {
  children: React.ReactNode,
}

const ListItem = (props: ListItemProps) => {
  const { children } = props

  return (
    <li className="flex items-center mb-2">
      <FaCheck style={{ flexShrink: 0, marginRight: 8 }} />
      {children}
    </li>
  )
}

export default ListItem
