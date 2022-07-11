//import React from "react";//no es necesario importarlo

import Head from "next/head"
import Container from "../components/Container"
import fetch from "isomorphic-fetch"
import Users from "../components/Users"
//import Navigation from "../components/navigation"
Container
const Index = (props)=>{
    console.log(props);
    return (
        <div>
            <Head>
                <title>Next.js Project - home</title>
            </Head>
            <Container>
                <h1>Next</h1>
                <Users users={props.users}/>
            </Container>
        </div>

    )
}
Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const resJSON  = await res.json();
    return {users: resJSON.data}
}
export default Index