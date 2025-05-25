import Button from '../components/Button';

const CTAa = ({title, callToAction, image}) => {
    return (
        <section className="mt-15 flex flex-col justify-center items-center px-20 py-24 mb-18 w-full min-h-[453px] max-md:px-5 max-md:pt-24 max-md:max-w-full" style={{ backgroundImage: `url(${image})`}}>
            <div className="flex relative flex-col max-w-full w-[976px]">
            <h2 className="text-6xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
                {title}
            </h2>
            <h1 className='text-white text-xl mt-7 text-center'>Rejoignez TNK Synergies pour construire des solutions utiles et locales.</h1>
            <Button variant="bordered" color="green" className='self-center mt-11'>
                {callToAction}
            </Button>
            </div>
        </section>
    )
}

export default CTAa;