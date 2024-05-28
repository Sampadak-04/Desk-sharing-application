import React from 'react'

const BookedDatesDisplay = ({bookedDates}) => {
    const chunkedDates = [];
    for (let i = 0; i < bookedDates.length; i += 3) {
      chunkedDates.push(bookedDates.slice(i, i + 3));
    }
  
    return (
      <div>
        {chunkedDates.map((chunk, index) => (
          <span key={index}>
            {chunk.join(', ')}
            <br />
          </span>
        ))}
      </div>
    );
}

export default BookedDatesDisplay
