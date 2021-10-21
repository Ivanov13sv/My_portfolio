import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider, createGlobalStyle } from 'styled-components';


const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
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
    body{
        background: #ecffff;
    }

`

const theme = {
    color: {
        firstColor: 'hsl(174, 55%, 42%)',
        secondColor: 'hsl(297, 61%, 62%)'
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
