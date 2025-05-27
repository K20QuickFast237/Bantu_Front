import Join_usHero from "../components/Join_usHero"
import Header from "../components/Header"
import JoinV from "../components/JoinV"
import JoinC from "../components/JoinC"
import ServicesFooter from "../components/Footer";
import PageLayout from "../components/PageLayout";

function Join_us (){
    return (
        <PageLayout>
            <main className="flex overflow-hidden flex-col bg-white">
                <Header />
                <Join_usHero />
                <JoinV />
                <JoinC />
                <ServicesFooter/>
            </main>
        </PageLayout>
    )
}

export default Join_us