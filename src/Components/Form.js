import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addPost} from "../redux/action";

const Form = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState({title: ''});
    const [btnState, setBtnState] = useState(true);

    const handleText = (e) => {
        if(text[e.target.name].length !== 0) {
            setBtnState(false)
        }
        setText({[e.target.name]: e.target.value})
    };
    const handlerPost = () => {
        dispatch(addPost({id: Date.now().toString(), title: text}));
        setText({title: ''});
        setBtnState(true)

    };


    return (
        <form className={'mb-4'} onSubmit={e => e.preventDefault()}>
            <h1>Form post</h1>
            <div className={'form-group'}>
                <label htmlFor="form">Enter text</label>
                <input
                    type="text"
                    onChange={handleText}
                    className={'form-control'}
                    id={'form'}
                    name={'title'}
                    value={text.title}
                />
                <button disabled={btnState} onClick={handlerPost} className={'btn btn-success mt-2'}>Create post</button>
            </div>
        </form>
    );
};

export default Form;