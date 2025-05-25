import Button from './Button';
import about2 from '../assets/images/about2.png';
import about3 from '../assets/images/about3.png';
import about4 from '../assets/images/about4.png';
import about5 from '../assets/images/about5.png';


function Mission (){
    return (
         <>
           <section className="px-20 w-full mt-10 flex justify-between">
              <div className="w-[45%]">
                <h1 className="text-6xl font-bold text-blue-500 ">Notre mission</h1>
                <p className="text-gray-500 text- mt-10 font-medium">
                    L’initiative vise à innover pour créer un impact concret à travers le développement de solutions technologiques (web et mobiles) répondant aux besoins quotidiens des individus, entreprises et communautés. Elle repose sur une approche multisectorielle, couvrant des domaines tels que la santé, l’éducation, l’agriculture, 
                    l’énergie, l’emploi, etc., avec des projets utiles, évolutifs et mesurables.
                </p>
                <p className="text-gray-500 text-justify mt-10 font-medium">
                    Autonomiser les communautés africaines grâce à des projets innovants, des technologies de pointe et des initiatives inclusives 
                </p>
                <Button 
          variant="filled" 
          color="blue" 
          className=' font-semibold mt-10 rounded-lg'
        >
         Decouvrir nos projets
        </Button>
              </div>

              {/* block des imahes */}
              <div className="flex justify-between w-[50%]">
                <div className=" w-1/2">
                    <div className="w-full  relative h-30">
                      <img
                                            src={about2}
                                            alt="Header background"
                                            className="object-cover rounded-xl  absolute inset-0 size-full"
                                          />
                    </div>
                    <div className="w-full mt-6  h-70 ">
                      <img
                                            src={about3}
                                            alt="Header background"
                                            className="object-cover rounded-xl inset-0 size-full"
                                          />
                    </div>

                    {/* deuxieme section du bloc des images */}
                </div>
                <div className="w-1/2 ml-6">
                  <div className="w-full   h-70 ">
                      <img
                                            src={about4}
                                            alt="Header background"
                                            className="object-cover rounded-xl  inset-0 size-full"
                                          />
                    </div>
                    <div className="w-full mt-6  h-30">
                      <img
                                            src={about5}
                                            alt="Header background"
                                            className="object-cover rounded-xl inset-0 size-full"
                                          />
                    </div>
                </div>
                
              </div>
           </section>
        
         </>
    )
}

export default Mission