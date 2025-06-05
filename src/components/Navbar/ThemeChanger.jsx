import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeChanger = () => {
    const [dark, setDark] = useState(true);

    const handleThemeChange = () => {
        setDark(!dark);
        document.querySelector('html').setAttribute('data-theme', dark ? 'dark' : 'light');
    }
    return (
        <div>
            <button onClick={handleThemeChange} className='text-secondary hover:cursor-pointer'>
                {
                    dark ? <FaSun size={32} /> : <FaMoon size={32} />
                }
            </button>
        </div>
    );
};

export default ThemeChanger;