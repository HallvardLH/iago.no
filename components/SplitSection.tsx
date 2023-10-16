import React, { ReactNode } from 'react';

type SplitSectionProps = {
    left?: ReactNode;
    right?: ReactNode;
    leftWidth?: string,
    rightWidth?: string,
    containerStyle?: string,
}

export default function SplitSection({ left, right, leftWidth = '50%', rightWidth = '50%', containerStyle }: SplitSectionProps) {
    return (
        <div className={`flex gap-24 ${containerStyle ? containerStyle : undefined}`}>
            <div style={{ width: leftWidth }}>
                {left}
            </div>
            <div style={{ width: rightWidth }}>
                {right}
            </div>
        </div>
    );
}