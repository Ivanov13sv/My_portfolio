import React from 'react';
import ReactDOM from 'react-dom';
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
        // background-blend-mode: hard-light;
        // background-image: url("https://res.cloudinary.com/jrying/image/upload/q_auto:good/v1493223181/mXd5dMn_gqciqp.png");
        background-image: linear-gradient(45deg, #ffffff, #f8f8f8, #f1f1f1, #eaeaea, #e3e3e3);
        // background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        // animation: ${gradient} 5s ease infinite;
        // background-size: 400% 400%;
    }
    
`
// 

// html, body {
//     width: 100%;
//     height:100%;
//   }

//   body {
//       background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
//       background-size: 400% 400%;

//   }


// 

const theme = {
    colors: {
        mainColor: '#4070F4',
        secondaryColor: '#6f8ee4'
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
