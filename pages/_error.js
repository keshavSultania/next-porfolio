import Layout from '../components/Layout';


export default (props)=>(

    <Layout title="Error!!">
    {
        props.statuscode?`Could not load your user data: Status Code ${props.statuscode}`: `Couldn't get that page, sorry!`
    }
   
    
    </Layout> 

)