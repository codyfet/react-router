import React from 'react';

export const Movie = ({match}) => {
    return (
        <div>
            Здесь будет информация о фильме с id {match.params.id}
        </div>
    )
}