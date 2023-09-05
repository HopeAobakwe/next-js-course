import {useRouter} from 'next/router'


function PortfolioProjectPage (){
const useRouter = useRouter ();
console.log(router.pathname);
console.log(router.query);


    return (
       <div>
        <h1>The portolio project page</h1>
        </div> 
    )
}

export default PortfolioProjectPage;