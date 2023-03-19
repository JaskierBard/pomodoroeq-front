import React from "react"

interface Props {
    item: string;
}

export const SingleDay = (props: Props) => {

const seedsImages = <img src='./assets/images/seed.png' width={20} height={20} alt='yuo'/>


return <li className='dayCallendar' ><strong>{props.item}</strong><div>{seedsImages}{seedsImages}</div></li>}
