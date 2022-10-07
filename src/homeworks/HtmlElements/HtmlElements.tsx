import React from 'react';
import "./HtmlElements.css"

//1 все типы инпута
//2 https://www.csun.edu/science/help/help_docs/html_tags.html
export const HtmlElements = () => {
    return (
        <div className='wrapper'>
            <input type="text"/>
            <input type="checkbox"/>
            <input type="radio"/>
            <input type="range"/>
            <input type="button" value="click!"/>
            <button>
                click!
            </button>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

            <div>
                <table>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </tr>
                    <tr>
                        <td>Row 2</td>
                        <td>Row 2</td>
                        <td>Row 2</td>
                    </tr>
                    <tr>
                        <td>Row 3</td>
                        <td>Row 3</td>
                        <td>Row 3</td>
                    </tr>
                    <tr>
                        <td>Row 4</td>
                        <td>Row 4</td>
                        <td>Row 4</td>
                    </tr>
                    <tr>
                        <td>Row 4</td>
                        <td>Row 4</td>
                        <td>Row 4</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

