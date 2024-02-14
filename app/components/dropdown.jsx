import React, { forwardRef } from 'react';
import { pagesArray } from '../utilities/pages-array';
import Link from 'next/link';

const DropDown = forwardRef((props, ref) => {
    const { className } = props;

    return (
        <div className={`transition-all ${className}`} ref={ref}>
            {pagesArray.map(page => (
                <Link
                    className="m-[1.1rem] text-2xl transition-all ease-in-out hover:duration-300 active:duration-200"
                    key={page.title}
                    href={page.link}
                >
                    {page.title}
                </Link>
            ))}
        </div>
    );
});

DropDown.displayName = "DropDown";

export default DropDown;