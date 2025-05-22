import { Priority } from "./icons/priority/Priority";
import { XMark } from "./icons/x-mark/XMark";
import { Minus } from "./icons/minus/Minus";
import { Chevron } from "./icons/chevron/Chevron";
import { Check } from "./icons/check/Check";
import { ArrowTop } from "./icons/arrow-top/ArrowTop";
import { ArrowBottom } from "./icons/arrow-bottom/ArrowBottom";
import { Inbox } from "./icons/inbox/Inbox";
import { Loading } from "./icons/loading/Loading";
import { Moon } from "./icons/moon/Moon";
import { Plus } from "./icons/plus/Plus";
import { Sun } from "./icons/sun/Sun";
import { Logo } from "./icons/logo/Logo";
import { Edit } from './icons/edit/Edit.jsx';
import { ChevronBottom } from './icons/chevron-bottom/ChevronBottom.jsx';
import { Filter } from './icons/filter/Filter.jsx';
import { ArrowTwo } from './icons/arrow-two/ArrowTwo.jsx';
import { ChevronTop } from './icons/chevron-top/ChevronTop.jsx';
import { NewOld } from './icons/new-old/NewOld.jsx';
import { OldNew } from './icons/old-new/OldNew.jsx';
import { Descending } from './icons/descending/Descending.jsx';
import { Ascending } from './icons/ascending/Ascending.jsx';
import { OfImportance } from './icons/of-importance/OfImportance.jsx';
import { FromUnimportant } from './icons/from-unimportant/FromUnimportant.jsx';
import { AZ } from './icons/a-z/AZ.jsx';
import { ZA } from './icons/z-a/ZA.jsx';
import { Trash } from './icons/trash/Trash.jsx';

const iconsStore = {
  priority: Priority,
  xmark: XMark,
  minus: Minus,
  chevron: Chevron,
  check: Check,
  arrowtop: ArrowTop,
  arrowbottom: ArrowBottom,
  inbox: Inbox,
  loading: Loading,
  moon: Moon,
  plus: Plus,
  sun: Sun,
  logo: Logo,
  edit: Edit,
  chevronbottom: ChevronBottom,
  filter: Filter,
  arrowtwo: ArrowTwo,
  chevrontop: ChevronTop,
  newold: NewOld,
  oldnew: OldNew,
  descending: Descending,
  ascending: Ascending,
  ofimportance: OfImportance,
  fromunimportant: FromUnimportant,
  az: AZ,
  za: ZA,
  trash: Trash,
};

export function Icon ({ iconName, ...props }) {
  const IconComponent = iconsStore[iconName];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
