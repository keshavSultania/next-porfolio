import { Children } from "react";
import Link from "next/link";
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';


Router.onRouteChangeStart = url => {
    console.log(url)
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default (props) => (

    <div className="root">

        <Head>
            {
                //just like an html head tag
            }

            <title>NextPortfolio</title>
        </Head>
        <header>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>HireMe</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
        </header>

        <h1>{props.title}</h1>
        {props.children}


        <footer>&copy;{new Date().getFullYear()}</footer>
        <style jsx>{
            `
        .root {

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

        }

        header {

            width:100%;
            display: flex;
            justify-content: space-around;
            padding:1em;
            font-size: 1.2rem;
            background: indigo;
        }

        header a{
            color: darkgrey;
            text-decoration: none;
        }

        header a:hover{
            font-weight: bold;
            color: lightgrey;
        }

        footer{
            padding: 1em;
        }

        `
        }</style>


        <style global jsx>
            {
                `
        body {
            margin: 0;
            font-size: 110%;
            background: #f0f0f0;
        }
        
        `
            }

        </style>
    </div>

)