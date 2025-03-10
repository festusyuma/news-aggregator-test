import type {PropsWithChildren} from "react";

type Props = {
    url: string
}

export function LinkCard(props: PropsWithChildren<Props>) {
    return (
        <a href={props.url} target={"_blank"} className={"bg-white rounded-lg drop-shadow-md"}>
            {props.children}
        </a>
    )
}