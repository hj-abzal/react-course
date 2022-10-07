import React from 'react';
import "./Flex.css"

export const Flex = () => {
    return (
        <div className='wrapper'>
            <div>
                <h2>flex-start</h2>
                <div className="element-wrapper">
                    <div className="flex-element"></div>
                    <div className="flex-element flex-element-middle"></div>
                    <div className="flex-element"></div>
                </div>
            </div>

            <div>
                <h2>flex-end</h2>
                <div className="element-wrapper flex-end">
                    <div className="flex-element"></div>
                    <div className="flex-element flex-element-middle"></div>
                    <div className="flex-element"></div>
                </div>
            </div>

            <div>
                <h2>center</h2>
                <div className="element-wrapper flex-center">
                    <div className="flex-element"></div>
                    <div className="flex-element flex-element-middle"></div>
                    <div className="flex-element"></div>
                </div>
            </div>

            <div>
                <h2>space-between</h2>
                <div className="element-wrapper space-between">
                    <div className="flex-element"></div>
                    <div className="flex-element flex-element-middle"></div>
                    <div className="flex-element"></div>
                </div>
            </div>

            <div>
                <h2>space-around</h2>
                <div className="element-wrapper space-around">
                    <div className="flex-element"></div>
                    <div className="flex-element flex-element-middle"></div>
                    <div className="flex-element"></div>
                </div>
            </div>

            <div>
                <h2>space-evenly</h2>
                <div className="element-wrapper space-evenly">
                    <div className="flex-element"></div>
                    <div className="flex-element flex-element-middle"></div>
                    <div className="flex-element"></div>
                </div>
            </div>



        </div>
    );
};

