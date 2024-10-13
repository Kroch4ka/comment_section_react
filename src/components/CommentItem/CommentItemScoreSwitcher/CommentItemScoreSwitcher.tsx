/// <reference types="vite-plugin-svgr/client" />

import {FC} from "react";
import IconPlus from "../../../assets/images/icon-plus.svg?react"
import IconMinus from "../../../assets/images/icon-minus.svg?react"

interface Props {
    score: number;
}

export const CommentItemScoreSwitcher: FC<Props> = (props: Props) => {
    return (
        <div className="flex flex-col gap-5 items-center p-2 rounded-xl bg-amber-100">
            <IconPlus width="10px" height="10px"/>
            <div>{props.score}</div>
            <IconMinus width="10px" height="10px"/>
        </div>
    )
}
