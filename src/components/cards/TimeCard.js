export default function TimeCard({number, title}) {
    return (
        <div className="time-card">
            <p className="number-time-card">{number}</p>
            <p className="title-time-card">{title}</p>
        </div>
    )
}