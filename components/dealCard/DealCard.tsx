import React, { ReactNode } from 'react';
import SvgIcon from "@/public/icons/SvgIcon";
import colors from "@/constants/colors";
import {Button} from "@nextui-org/react";
import styles from './DealCard.module.css';
import { TbNeedleThread, TbTemplate } from 'react-icons/tb';

type DealCardProps = {
    icon?: string;
    price?: string;
    title: string;
    description?: string;
    bulletPoints?: Array<string>;
    columns?: string;
    containerClassName?: string;
    cardType?: "basic" | "premium"
}

type IconType = typeof TbNeedleThread | typeof TbTemplate;

const icons: { [key: string]: IconType } = {
    tailored: TbNeedleThread,
    template: TbTemplate,
};

const themes = {
    basic: {
        // The names of these colors are their names in the Tailwind config, they are custom colors
        textColor: "text-main-color",
        background: "bg-background-color",
        buttonBackground: "bg-main-color",
        buttonText: "text-secondary-color",
        bulletList: styles.customBulletUl
    },
    premium: {
        textColor: "text-secondary-color",
        background: "bg-main-color",
        buttonBackground: "bg-secondary-color",
        buttonText: "text-main-color",
        bulletList: styles.customBulletUlPremium
    }
}

export default function DealCard({ icon, price, title, description, bulletPoints, columns = "columns-1", containerClassName, cardType = "basic" }: DealCardProps) {

    let IconTag: IconType | undefined = undefined;
    if (icon && icons[icon]) {
        IconTag = icons[icon as keyof typeof icons];
    }

    const textColor = themes[cardType].textColor;
    const backgroundColor = themes[cardType].background;
    const buttonBackgroundColor = themes[cardType].buttonBackground;
    const buttonText = themes[cardType].buttonText;
    const bulletListName = themes[cardType].bulletList;

    return (
        <div className={
            `max-w-2xl p-12 rounded-2xl space-y-5 border-light-color border-1 ${backgroundColor} ${containerClassName ? containerClassName : ""}`
        }>
            <div className="flex flex-row justify-between">
                <IconTag className={`text-[50px] ${textColor}`} />
                <Button className={`bg-white border-light-color border-1 font-semibold text-black rounded-full`}>
                    {price}
                </Button>
            </div>
            <h3 className={`text-3xl font-semibold ${textColor}`}>{title}</h3>
            <p className={`${textColor}`}>{description}</p>
            {bulletPoints && bulletPoints.length > 0 && (
                <ul className={`${bulletListName} ${columns} ${textColor} space-y-5`}>
                    {bulletPoints.map((point, index) => (
                        <li className="font-bold" key={index}>{point}</li>
                    ))}
                </ul>
            )}
            <Button className={`${buttonBackgroundColor} ${buttonText} text-base font-semibold rounded-full px-12 py-7`}>
                Lær mer
            </Button>
        </div>
    );
}