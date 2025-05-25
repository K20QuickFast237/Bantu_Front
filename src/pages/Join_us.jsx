import Join_usHero from "../components/Join_usHero"
import Header from "../components/Header"
import JoinV from "../components/JoinV"
import JoinC from "../components/JoinC"
import  NewsletterSection from '../components/NewLetter'
import Footerc from '../components/Footerc';

function Join_us (){
    return (
        <>
        <Header />
        <Join_usHero />
        <JoinV />
        <JoinC />

        <div className='pl-20 pr-20 '>
                < NewsletterSection />
            </div>
            <Footerc />
        </>
    )
}

export default Join_us