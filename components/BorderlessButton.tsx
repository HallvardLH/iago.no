import { FaChevronRight } from "react-icons/fa6";

interface BorderlessButtonProps {
    label: string;
}

export default function BorderlessButton({label}: BorderlessButtonProps) {
    return(
        <button className="flex items-center gap-2">
            <div className="text-font-color font-bold">{label}</div>
            <FaChevronRight color="#08605F"/>
        </button>
    )
}