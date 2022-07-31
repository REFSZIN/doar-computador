/* 	
//font-family: 'Righteous', cursive;
//font-family: 'Roboto', sans-serif; 
//font-family: 'Recursive', sans-serif;
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
*/

import type { AppProps } from "next/app";
import "animate.css"
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&display=swap');

*, *:before, *::after{
  box-sizing: border-box;
  scroll-behavior: smooth;
  word-wrap: break-word;
  word-break: break-all;
}
a{
  text-decoration: under;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body,html {
	display: flex;
	margin:0px;
  height: 100vh;
  width: 100vw;
	} 
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
select{
  width: 100%; 
  @media (max-width: 614px) {
    width: 80%;
    }
}
button:hover{
	cursor: pointer;
    filter: brightness(1.1);
    box-shadow: 1px 1px 2px 2px #aaaaaa;
}
#__next{
	width: 100vw;
  background-color: black;
	height: 100vh;
}
#tsparticles {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
}
`;
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}