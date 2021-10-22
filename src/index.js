import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';


const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: monospace, sans-serif;
    };
    html {
        scroll-behavior: smooth;
    };
    ul{
        list-style: none;
    };
    a {
        text-decoration: none;
    };
    // body {
    //     background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    //     background-size: 400% 400%;
    //     animation: gradient 15s ease infinite;
    //     height: 100vh;

        
    // }

    body {
        background-image: linear-gradient(to right, #ffffff, #f8f8f8, #f1f1f1, #eaeaea, #e3e3e3);
    }
    
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    
    
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    

`

const theme = {
    colors: {
        primary: 'green',
        secondary: 'red'
    },
    media: {
        phone: '(max-width: 425px)',
        tablet: '(max-width: 768px) and (min-width: 425px)',
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global />
        <App />
    </ThemeProvider>
    ,
    document.getElementById('root')
);
