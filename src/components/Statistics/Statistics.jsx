import Notification from "../Notification/Notification"

function Statistics ({good,neutral,bad,total,positivePercentage}) {
    return (
        <>
            {total ? 
            <ul>
                <li>
                    <p>Good: {good}</p>
                </li>
                <li>
                    <p>Neutral: {neutral}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    <p>Total: {total}</p>
                </li>
                <li>
                    <p>Positive percentage: {positivePercentage} % </p>
                </li>
             </ul>
              : <Notification message="No feedback given"/>
             }
            
      </>
    )
}

export default Statistics;