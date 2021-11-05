import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { keyframes } from 'styled-components';




const gradient = keyframes`
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

    
    body {
        // background-color: #000;
        // background-color: #262626;
        // background-blend-mode: hard-light;
        //  background-image: url("https://res.cloudinary.com/jrying/image/upload/q_auto:good/v1493223181/mXd5dMn_gqciqp.png");
        background-image: linear-gradient(45deg, #ffffff, #f8f8f8, #f1f1f1, #eaeaea, #e3e3e3);
        // background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        // animation: ${gradient} 5s ease infinite;
        // background-size: 400% 400%;
        font-size: 16px;
        
    }
    
`

const theme = {
    colors: {
        mainBlue: '#4070F4',
        secondaryBlue: '#6f8ee4',
        darkBrown: '#150b02',
        normalBrown: '#5e2127',
        neonBlue: '#0088FF',
        darkBackground: '#262626'
    },
    media: {
        xs: '(max-width: 375px)',
        sm: '(min-width: 567px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 992px)',
        xl: '(min-width: 1200px)'
    },
    fontSize: {
        mainTitleXl: '2.5rem',
        mainTitleLg: '2rem',
        mainTitleMd: '1.8rem',
        titleSize: '1.5rem',
        normalSize: '1rem',
        iconSize: '.7rem'
    }

}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
    ,
    document.getElementById('root')
);
