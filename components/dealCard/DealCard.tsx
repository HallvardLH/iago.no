import React, { ReactNode } from 'react';
import SvgIcon from "@/public/icons/SvgIcon";
import colors from "@/constants/colors";
import {Button} from "@nextui-org/react";
import styles from './DealCard.module.css';

type DealCardProps = {
    icon?: string;
    price?: string;
    title: string;
    description?: string;
    bulletPoints?: Array<string>;
    columns?: number;
    containerClassName?: string;
}

export default function DealCard({ icon, price, title, description, bulletPoints, columns = 1, containerClassName }: DealCardProps) {
    return (
        <div className={`${containerClassName ? containerClassName : undefined}`}>
            <div>
                <SvgIcon name={icon} color={colors.mainColor} height={42} width={42} />
                <div>
                    {price}
                </div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            {bulletPoints && bulletPoints.length > 0 && (
                <ul className={`${styles.customBulletUl} columns-${columns}`}>
                    {bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            )}
            {/* Use column-count property */}
        </div>
    );
}