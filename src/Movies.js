import React from 'react';
import {Link, Route} from 'react-router-dom';

import {Movie} from './Movie';

const MOVIES = [
    {
        id: 100
    },
    {
        id: 200
    },
    {
        id: 300
    }
]

export const Movies = ({match}) => {
    return (
        <div>
            Список фильмов:
            <ul>
                {
                    MOVIES.map(
                        (item) => (
                            <li key={item.id}>
                                <Link to={`${match.url}/${item.id}`}>Фильм с id {item.id}</Link>
                            </li>
                        )
                    )
                }
            </ul>
            <Route path={`${match.url}/:id`} component={Movie} />
        </div>
    )
}