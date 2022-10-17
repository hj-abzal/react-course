import React, {useRef, useState} from 'react';
import "./HtmlElements.css"

//1 все типы инпута
//2 https://www.csun.edu/science/help/help_docs/html_tags.html
export const HtmlElements = () => {

    const inputs = [
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(true)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
        {ref: useRef<any>(), state: useState(''), focus: useState(false)},
    ]
    const onFocus = (inputNumber: number) => {
        const prev = inputs.find((el) => {
            const [focus] = el.focus;
            return focus

        })
        if (prev) {
            const next = inputs[inputNumber];
            const [prevValue, setPrevValue] = prev.state;
            const [prevFocus, setPrevFocus] = prev.focus;

            const [nextValue, setNextValue] = next.state;
            const [nextFocus, setNextFocus] = next.focus;
            setPrevValue('')
            setNextValue(prevValue)

            inputs[inputNumber].ref.current.focus();

            setPrevFocus(false)
            setNextFocus(true)
        }
    }

    return (
        <div className='wrapper'>
            <div>
                {
                    inputs.map((el, i) => {
                        const [value, setValue] = el.state;
                        const [focus] = el.focus;
                        return <input
                            key={i}
                            value={value}
                            onChange={(e) => setValue(e.currentTarget.value)}
                            ref={el.ref}
                            type="text"
                            autoFocus={focus}
                        />
                    })
                }
            </div>
            <div>
                {
                    inputs.map((el, index) => {
                        return <button key={index}  onClick={() => onFocus(index)}>{index}</button>
                    })
                }
            </div>
        </div>
    );
};

