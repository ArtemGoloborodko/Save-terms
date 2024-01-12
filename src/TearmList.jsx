import { TreamCard } from "./TreamCard"
import "./TearmList.css"


export const TearmList = ({terms, onDelete}) => {
    return (
        <ul className="ul">

            {terms.map((item) => 
            <li className="li" key={item.id}>
                <TreamCard
                    title={item.title}
                    description={item.description}
                    onDelete={onDelete}
                    id={item.id}
                />
            </li>
            )}


        </ul>
    )
}