import React from 'react'

import Card from '../../assets/icons/system/card.svg'
import ChevronDown from '../../assets/icons/system/chevron-down.svg'
import ChevronLeft from '../../assets/icons/system/chevron-left.svg'
import ChevronRight from '../../assets/icons/system/chevron-right.svg'
import ChevronUp from '../../assets/icons/system/chevron-up.svg'
import Close from '../../assets/icons/system/close.svg'
import Data from '../../assets/icons/system/data.svg'
import Edit from '../../assets/icons/system/edit.svg'
import Ellipsis from '../../assets/icons/system/ellipsis.svg'
import Export from '../../assets/icons/system/export.svg'
import EyeClosed from '../../assets/icons/system/eye-closed.svg'
import Eye from '../../assets/icons/system/eye.svg'
import Home from '../../assets/icons/system/home.svg'
import InfoCircle from '../../assets/icons/system/info-circle.svg'
import Medal from '../../assets/icons/system/medal.svg'
import Note from '../../assets/icons/system/note.svg'
import Notification from '../../assets/icons/system/notification.svg'
import People from '../../assets/icons/system/people.svg'
import Plus from '../../assets/icons/system/plus.svg'
import Receipt from '../../assets/icons/system/receipt.svg'
import Search from '../../assets/icons/system/search.svg'
import Setting from '../../assets/icons/system/setting.svg'
import ShopCart from '../../assets/icons/system/shop-cart.svg'
import Trash from '../../assets/icons/system/trash.svg'
import UserCircle from '../../assets/icons/system/user-cirlce-add.svg'

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
  | 'ellipsis'
  | 'export'

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
  ellipsis: Ellipsis,
  export: Export,
}

export interface IconFactoryProps extends React.SVGProps<SVGSVGElement> {
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
