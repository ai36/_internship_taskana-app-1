import { Priority } from "./icons/priority/Priority";
import { XMark } from "./icons/x-mark/XMark";
import { Minus } from "./icons/minus/Minus";
import { Edit } from "./icons/edit/Edit";
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

const fill = "currentColor";

const iconsStore = {
    priority: <Priority fill={fill} />,
    xmark: <XMark fill={fill} />,
    minus: <Minus fill={fill} />,
    edit: <Edit fill={fill} />,
    chevron: <Chevron fill={fill} />,
    check: <Check fill={fill} />,
    arrowtop: <ArrowTop fill={fill} />,
    arrowbottom: <ArrowBottom fill={fill} />,
    inbox: <Inbox fill={fill} />,
    loading: <Loading fill={fill} />,
    moon: <Moon fill={fill} />,
    plus: <Plus fill={fill} />,
    sun: <Sun fill={fill} />,
    logo: <Logo />,
};

export function Icon({ iconName }) {
    return iconsStore[iconName];
}
