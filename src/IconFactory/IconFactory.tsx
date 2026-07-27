import { FC, SVGProps } from 'react'

// Monocolor Icons
import AddProductIcon from '../../assets/icons/mono-color/add-product.svg'
import BulkProductIcon from '../../assets/icons/mono-color/bulk-product.svg'
import CompositeProductIcon from '../../assets/icons/mono-color/composite-product.svg'
import DocCsvIcon from '../../assets/icons/mono-color/doc-csv.svg'
import DocPdfIcon from '../../assets/icons/mono-color/doc-pdf.svg'
import EmailIcon from '../../assets/icons/mono-color/email.svg'
import InfoCircle from '../../assets/icons/mono-color/info-circle.svg'
import SingleProductIcon from '../../assets/icons/mono-color/single-product.svg'
import TerminalIcon from '../../assets/icons/mono-color/terminal.svg'
// Multi-color Icons
import PrinterIcon from '../../assets/icons/multi-color/printer.svg'
// System Icons
import ArrowRight from '../../assets/icons/system/arrow-right.svg'
import ArrowSplit from '../../assets/icons/system/arrow-split.svg'
import Bank from '../../assets/icons/system/bank.svg'
import CardSolid from '../../assets/icons/system/card-solid.svg'
import Card from '../../assets/icons/system/card.svg'
import Cards from '../../assets/icons/system/cards.svg'
import ChevronDown from '../../assets/icons/system/chevron-down.svg'
import ChevronLeft from '../../assets/icons/system/chevron-left.svg'
import ChevronRight from '../../assets/icons/system/chevron-right.svg'
import ChevronUp from '../../assets/icons/system/chevron-up.svg'
import ClipboardClose from '../../assets/icons/system/clipboard-close.svg'
import Clock from '../../assets/icons/system/clock.svg'
import Close from '../../assets/icons/system/close.svg'
import CloudUpload from '../../assets/icons/system/cloud-upload.svg'
import Data from '../../assets/icons/system/data.svg'
import DollarCircle from '../../assets/icons/system/dollar-circle.svg'
import Download from '../../assets/icons/system/download.svg'
import Edit from '../../assets/icons/system/edit.svg'
import Ellipsis from '../../assets/icons/system/ellipsis.svg'
import Export from '../../assets/icons/system/export.svg'
import EyeClosed from '../../assets/icons/system/eye-closed.svg'
import Eye from '../../assets/icons/system/eye.svg'
import File from '../../assets/icons/system/file.svg'
import Filter from '../../assets/icons/system/filter.svg'
import FolderOpen from '../../assets/icons/system/folder-open.svg'
import GlobalSearch from '../../assets/icons/system/global-search.svg'
import Home from '../../assets/icons/system/home.svg'
import Indicator from '../../assets/icons/system/indicator.svg'
import Lock from '../../assets/icons/system/lock.svg'
import LongArrowRight from '../../assets/icons/system/long-arrow.svg'
import Medal from '../../assets/icons/system/medal.svg'
import MenuBoard from '../../assets/icons/system/menu-board.svg'
import Moneys from '../../assets/icons/system/moneys.svg'
import Naira from '../../assets/icons/system/naira.svg'
import Note from '../../assets/icons/system/note.svg'
import Notification from '../../assets/icons/system/notification.svg'
import People from '../../assets/icons/system/people.svg'
import PercentageCircle from '../../assets/icons/system/percentage-circle.svg'
import PercentageSolid from '../../assets/icons/system/percentage-solid.svg'
import Plus from '../../assets/icons/system/plus.svg'
import Products from '../../assets/icons/system/products.svg'
import Receipt from '../../assets/icons/system/receipt.svg'
import Scan from '../../assets/icons/system/scan.svg'
import Search from '../../assets/icons/system/search.svg'
import Setting from '../../assets/icons/system/setting.svg'
import ShopCart from '../../assets/icons/system/shop-cart.svg'
import Slider from '../../assets/icons/system/slider.svg'
import Star from '../../assets/icons/system/star.svg'
import Strongbox from '../../assets/icons/system/strongbox.svg'
import Trash from '../../assets/icons/system/trash.svg'
import UserCircle from '../../assets/icons/system/user-cirlce-add.svg'
import WalletCheck from '../../assets/icons/system/wallet-check.svg'
import Wallet from '../../assets/icons/system/wallet.svg'

// Define all possible icon names
export type IconName =
  | 'arrow-right'
  | 'arrow-split'
  | 'bank'
  | 'card'
  | 'card-solid'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-right'
  | 'chevron-left'
  | 'close'
  | 'clock'
  | 'data'
  | 'edit'
  | 'eye-closed'
  | 'eye'
  | 'file'
  | 'filter'
  | 'home'
  | 'indicator'
  | 'info-circle'
  | 'medal'
  | 'note'
  | 'notification'
  | 'people'
  | 'plus'
  | 'products'
  | 'receipt'
  | 'search'
  | 'setting'
  | 'shop-cart'
  | 'scan'
  | 'trash'
  | 'user-circle'
  | 'ellipsis'
  | 'export'
  | 'single-product'
  | 'bulk-product'
  | 'composite-product'
  | 'add-product'
  | 'terminal'
  | 'long-arrow-right'
  | 'download'
  | 'cloud-upload'
  | 'dollar-circle'
  | 'percentage-solid'
  | 'percentage-circle'
  | 'email'
  | 'printer'
  | 'star'
  | 'doc-csv'
  | 'doc-pdf'
  | 'cards'
  | 'clipboard-close'
  | 'folder-open'
  | 'global-search'
  | 'menu-board'
  | 'moneys'
  | 'naira'
  | 'slider'
  | 'strongbox'
  | 'wallet'
  | 'wallet-check'
  | 'lock'

// Map icon names to their SVG components
const iconMap: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'arrow-right': ArrowRight,
  'arrow-split': ArrowSplit,
  bank: Bank,
  card: Card,
  'card-solid': CardSolid,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  close: Close,
  clock: Clock,
  data: Data,
  edit: Edit,
  'eye-closed': EyeClosed,
  eye: Eye,
  file: File,
  filter: Filter,
  home: Home,
  indicator: Indicator,
  'info-circle': InfoCircle,
  medal: Medal,
  note: Note,
  notification: Notification,
  people: People,
  plus: Plus,
  products: Products,
  receipt: Receipt,
  search: Search,
  setting: Setting,
  'shop-cart': ShopCart,
  scan: Scan,
  trash: Trash,
  'user-circle': UserCircle,
  ellipsis: Ellipsis,
  export: Export,
  'single-product': SingleProductIcon,
  'composite-product': CompositeProductIcon,
  'bulk-product': BulkProductIcon,
  'add-product': AddProductIcon,
  terminal: TerminalIcon,
  'long-arrow-right': LongArrowRight,
  download: Download,
  'cloud-upload': CloudUpload,
  'dollar-circle': DollarCircle,
  'percentage-solid': PercentageSolid,
  'percentage-circle': PercentageCircle,
  email: EmailIcon,
  printer: PrinterIcon,
  star: Star,
  'doc-csv': DocCsvIcon,
  'doc-pdf': DocPdfIcon,
  cards: Cards,
  'clipboard-close': ClipboardClose,
  'folder-open': FolderOpen,
  'global-search': GlobalSearch,
  'menu-board': MenuBoard,
  moneys: Moneys,
  naira: Naira,
  slider: Slider,
  strongbox: Strongbox,
  wallet: Wallet,
  'wallet-check': WalletCheck,
  lock: Lock,
}

export interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: IconName
}

const IconFactory: FC<IconFactoryProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent {...props} />
}

export default IconFactory
