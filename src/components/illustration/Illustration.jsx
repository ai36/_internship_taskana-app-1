import { Notebook } from "@components/illustration/illustrations/notebook/Notebook";
import { EmptyTask } from "@components/illustration/illustrations/emptytask/EmptyTask";

const illustrationStore = {
    emptytask: <EmptyTask />,
    notebook: <Notebook />,
};

export function Illustration({ picName }) {

    return illustrationStore[picName];
}
