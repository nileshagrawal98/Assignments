function staticCard({ heading, list }) {
    return (
        <div style={{
            textAlign: 'left'
        }}>
            <h1>{heading}</h1>
            <ul>
                {list.map(e => 
                    <li>{e}</li>
                )}
            </ul>
        </div>
    );
}

export default staticCard;