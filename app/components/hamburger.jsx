import { useEffect, useState } from "react";

export default function Hamburger(props) {
    const { onClick, isInitiallyOpen, showDropDown } = props;
    const [isOpen, setIsOpen] = useState(isInitiallyOpen ?? false);

    useEffect(() => {
        setIsOpen(showDropDown);
    }, [showDropDown])

    const handleClick = () => {
        setIsOpen(prev => !prev);
        onClick();
    }

    return (
        <>
            <button
                onClick={handleClick}
                aria-label="hamburger button"
                type="button"
                className={`w-8 h-8 flex justify-around flex-col flex-wrap z-50 cursor-pointer md:hidden border-none shadow-none hover:shadow-none hover:translate-y-0`}
            >
                <div id="hamb-1" className={`z-40 bg-font block w-8 h-[0.26rem] rounded transition-all origin-[1px] ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
                <div id="hamb-2" className={`z-40 bg-font block w-8 h-[0.26rem] rounded transition-all origin-[1px] ${isOpen ? '!bg-transparent' : 'translate-x-0'}`} />
                <div id="hamb-3" className={`z-40 bg-font block w-8 h-[0.26rem] rounded transition-all origin-[1px] ${isOpen ? 'rotate-[-45deg]' : 'rotate-0'}`} />
            </button>
        </>
    )
}
