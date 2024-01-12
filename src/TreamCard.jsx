import "./TreamCard.css"

export const TreamCard = ({title, description, onDelete, id}) => {

    const hendelDelete = () => {
        onDelete(id)
    }

    return (
        <div className="wrapper-list">
                    <h2 className="reset">{title}</h2>
                    { description && <p className="reset">{description}</p>}

                    <button type="button" className="button" onClick={hendelDelete}>Удалить</button>
        </div>
    )
}