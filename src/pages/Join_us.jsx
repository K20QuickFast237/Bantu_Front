import Join_usHero from "../components/Join_usHero"
import Header from "../components/Header"
import JoinV from "../components/JoinV"
import JoinC from "../components/JoinC"
import ServicesFooter from "../components/Footer";
import PageLayout from "../components/PageLayout";

function Join_us() {
    return (
        <PageLayout>
            <Header />
            <Join_usHero />
            <JoinV />
            <JoinC />
            <ServicesFooter />
        </PageLayout>
    )
}

export default Join_us