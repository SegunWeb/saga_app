import React from 'react';

const Post = ({title, click}) => {




    return (
        <div className={'card'}>
            <div className={'d-flex justify-content-between card-body'}>
                <p className={'card-title'}>{title}</p>
                <button onClick={click} className={'btn btn-danger'}>x</button>
            </div>
        </div>
    );
};

export default Post;
