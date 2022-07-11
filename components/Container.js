import Head from "next/head";
import Navigation from "./navigation"
const Container = (props)=>(
    <div>
        <Head>
            <title>Next.js Project</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous"/>
        </Head>
        <Navigation/>
        <div className="container p-4">
            {props.children}
        </div>
    </div>
)
export default Container;