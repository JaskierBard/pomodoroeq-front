import React from "react"

interface Props {
    item: string;
    index: number;
}

export const SingleDay = (props: Props) => {

const seedsImages = <img src='./assets/images/seed.png' width={20} height={20}/>


return <li className='dayCallendar' key={props.index}><strong>{props.item}</strong><div>{seedsImages}{seedsImages}</div></li>}
