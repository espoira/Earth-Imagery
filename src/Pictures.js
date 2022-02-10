import React from 'react';
import {Picture} from './Picture';

function Pictures(props) {

    const {pictures} = props;

    return (
        <div className = "pictures">

            {pictures.map((picture) =>
                <Picture key={picture.identifier}{...picture}/>
            )}

        </div>
    );
}

export { Pictures };
