import React from 'react';

const Post = ({title}) => {
    return (
        <div className={'card'}>
            <div className={'card-body'}>
                <p className={'card-title'}>{title}</p>
            </div>
        </div>
    );
};

export default Post;
