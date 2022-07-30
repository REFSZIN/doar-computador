import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
	background-color: black;
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
button:hover{
	cursor: pointer;
    filter: brightness(1.1);
    box-shadow: 1px 1px 2px 2px #aaaaaa;
}
#__next{
	width: 100vw;
	height: 100vh;
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