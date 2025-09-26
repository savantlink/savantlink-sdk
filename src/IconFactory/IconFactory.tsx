import React from 'react'

// Monocolor Icons
import AddProductIcon from '../../assets/icons/mono-color/add-product.svg'
import BulkProductIcon from '../../assets/icons/mono-color/bulk-product.svg'
import CompositeProductIcon from '../../assets/icons/mono-color/composite-product.svg'
import SingleProductIcon from '../../assets/icons/mono-color/single-product.svg'
// System Icons
import ArrowRight from '../../assets/icons/system/arrow-right.svg'
import Card from '../../assets/icons/system/card.svg'
import ChevronDown from '../../assets/icons/system/chevron-down.svg'
import ChevronLeft from '../../assets/icons/system/chevron-left.svg'
import ChevronRight from '../../assets/icons/system/chevron-right.svg'
import ChevronUp from '../../assets/icons/system/chevron-up.svg'
import Close from '../../assets/icons/system/close.svg'
import Data from '../../assets/icons/system/data.svg'
import Download from '../../assets/icons/system/download.svg'
import Edit from '../../assets/icons/system/edit.svg'
import Ellipsis from '../../assets/icons/system/ellipsis.svg'
import Export from '../../assets/icons/system/export.svg'
import EyeClosed from '../../assets/icons/system/eye-closed.svg'
import Eye from '../../assets/icons/system/eye.svg'
import File from '../../assets/icons/system/file.svg'
import Filter from '../../assets/icons/system/filter.svg'
import Home from '../../assets/icons/system/home.svg'
import InfoCircle from '../../assets/icons/system/info-circle.svg'
import LongArrowRight from '../../assets/icons/system/long-arrow.svg'
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
  | 'arrow-right'
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
  | 'file'
  | 'filter'
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
  | 'single-product'
  | 'bulk-product'
  | 'composite-product'
  | 'add-product'
  | 'long-arrow-right'
  | 'download'

// Map icon names to their SVG components
const iconMap: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  'arrow-right': ArrowRight,
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
  file: File,
  filter: Filter,
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
  'single-product': SingleProductIcon,
  'composite-product': CompositeProductIcon,
  'bulk-product': BulkProductIcon,
  'add-product': AddProductIcon,
  'long-arrow-right': LongArrowRight,
  download: Download,
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
