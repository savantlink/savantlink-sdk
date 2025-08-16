import React from 'react'

import Card from '../../icons/system/card.svg'
import ChevronDown from '../../icons/system/chevron-down.svg'
import ChevronLeft from '../../icons/system/chevron-left.svg'
import ChevronRight from '../../icons/system/chevron-right.svg'
import ChevronUp from '../../icons/system/chevron-up.svg'
import Close from '../../icons/system/close.svg'
import Data from '../../icons/system/data.svg'
import Edit from '../../icons/system/edit.svg'
import EyeClosed from '../../icons/system/eye-closed.svg'
import Eye from '../../icons/system/eye.svg'
import Home from '../../icons/system/home.svg'
import InfoCircle from '../../icons/system/info-circle.svg'
import Medal from '../../icons/system/medal.svg'
import Note from '../../icons/system/note.svg'
import Notification from '../../icons/system/notification.svg'
import People from '../../icons/system/people.svg'
import Plus from '../../icons/system/plus.svg'
import Receipt from '../../icons/system/receipt.svg'
import Search from '../../icons/system/search.svg'
import Setting from '../../icons/system/setting.svg'
import ShopCart from '../../icons/system/shop-cart.svg'
import Trash from '../../icons/system/trash.svg'
import UserCircle from '../../icons/system/user-circle-add.svg'

// Define all possible icon names
export type IconName =
  | 'card'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-right'
  | 'chevron-left'
  | 'close'
  | 'data'
  | 'edit'
  | 'eye-closed'
  | 'eye'
  | 'home'
  | 'info-circle'
  | 'medal'
  | 'note'
  | 'notification'
  | 'people'
  | 'plus'
  | 'receipt'
  | 'search'
  | 'setting'
  | 'shop-cart'
  | 'trash'
  | 'user-circle'

// Map icon names to their SVG components
const iconMap: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  card: Card,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  close: Close,
  data: Data,
  edit: Edit,
  'eye-closed': EyeClosed,
  eye: Eye,
  home: Home,
  'info-circle': InfoCircle,
  medal: Medal,
  note: Note,
  notification: Notification,
  people: People,
  plus: Plus,
  receipt: Receipt,
  search: Search,
  setting: Setting,
  'shop-cart': ShopCart,
  trash: Trash,
  'user-circle': UserCircle,
}

interface IconFactoryProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
}

const IconFactory: React.FC<IconFactoryProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent {...props} />
}

export default IconFactory
