import Button from '../components/Button';

const CTA = ({title, description, callToAction, image}) => {
    return (
        <main className="flex flex-col justify-center items-center w-full mb-20 max-md:px-5 max-md:pt-24 max-md:max-w-full" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <section className="flex flex-col justify-center items-center px-20 py-24 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div className="flex relative flex-col max-w-full w-[976px]">
                    <h2 className="text-6xl font-bold text-center text-white leading-snug max-md:max-w-full max-md:text-4xl">
                        {title}
                    </h2>
                    <p className="text-white text-xl mt-7 text-center">
                        {description}
                    </p>
                    <Button variant="bordered" color="white" className='self-center mt-11'>
                        {callToAction}
                    </Button>
                </div>
            </section>

        </main>
    )
}

export default CTA;