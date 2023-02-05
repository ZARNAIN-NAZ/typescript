import Link from "next/link"

const PageNotFound =()=>{
return <div>
    <h1>pAGE nOT fOUND </h1>
    <h3>
        Check to see if u r in correct page.
    </h3>
    <Link href="/">
    Click here to go home page </Link>
</div>
}
export default PageNotFound;