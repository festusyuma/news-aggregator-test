import type {ChangeEvent} from "react";

type Props = {
    label: string
    value: string[]
    onChange: (value: string[]) => void
    items: string[]
}

export function CheckFilter(props: Props) {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) return;
        const selected = e.currentTarget.value
        let newValue: string[];

        if (e.currentTarget.checked) newValue = [...props.value, selected]
        else {
            const selectedIndex = props.value.findIndex(i => i === selected);
            if (selectedIndex != 0) return;
            newValue = [...props.value.slice(0, selectedIndex), ...props.value.slice(selectedIndex + 1)]
        }

        props.onChange(newValue)
        console.log("prev :: ", props.value, "next  :: ", newValue)
    }

    return (
        <div>
            <p className={""}>{props.label}</p>
            <div className={"flex flex-wrap gap-3"}>
                {
                    props.items.map((i, id) => (
                        <div className={"flex gap-1 items-center"} key={`${props.label}-${id}`}>
                            <input type={"checkbox"} value={i} onChange={onChange}/>
                            <p>{i}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}