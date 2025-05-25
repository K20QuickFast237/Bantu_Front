
import { ChartBar, ChartPie, ChartLine } from 'lucide-react';
import about2 from '../assets/images/about2.png';
import about3 from '../assets/images/about3.png';
import about4 from '../assets/images/about4.png';




function Valeurs (){
    
    return (
        <>

    {/* section des valeurs */}

        <section className="bg-gray-50 w-full h-150 p-20 mt-15" >
           <h1 className="text-6xl font-bold text-center text-blue-600">Valeurs fondementales</h1>
           <h1 className="text-3xl mt-10 font-bold  text-center text-green-600">Nos principes pour un impact durable </h1>
        
           <div className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* bordure verte avec coins */}
          <div className="absolute inset-0 border-2 border-green-500 rounded-lg">
            {/* petit carré vert en bas à gauche */}
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-500"></div>
            {/* petit carré vert en bas à droite */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500"></div>
          </div>

          {/* card Innovation */}
          <div className="bg-white p-8 text-center relative z-10">
            <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ChartBar className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              Trouver continuellement des solutions créatives et efficaces aux problèmes réels
            </p>
          </div>

          {/* Card Communauté */}
          <div className="bg-white p-8 text-center relative z-10">
            <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ChartPie className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Communaute</h3>
            <p className="text-gray-600 leading-relaxed">
              Mettre les personnes au centre de nos actions avec une approche inclusive et culturelle.
            </p>
          </div>

          {/* Card Excellence */}
          <div className="bg-white p-8 text-center relative z-10">
            <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ChartLine className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              S'engager à atteindre les plus hauts standards dans tous nos projets
            </p>
          </div>
        </div>
      </div>
    </div>
   </section>



   {/* section des impacts */}

   <p className='text-green-600 font-extrabold mt-10 text-5xl ml-20'>Notre impact</p>

 <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Première image - Innovation */}
          <div className="relative group mt-30 overflow-hidden rounded-lg cursor-pointer h-80">
            <img 
              src={about4}
              alt="Innovation" 
              className="w-full h-full object-cover inset-0 size-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl text-center font-bold mb-3">Innovation</h3>
                <p className="text-gray-200 text-center leading-relaxed">
                  Trouver continuellement des solutions créatives et efficaces aux problèmes réels
                </p>
              </div>
            </div>
          </div>

          {/* Deuxième image - Communauté */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer h-110">
            <img 
              src={about2} 
              alt="Communauté" 
              className="w-full h-full object-cover inset-0 size-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl text-center font-bold mb-3">Communauté</h3>
                <p className="text-gray-200 text-center leading-relaxed">
                  Mettre les personnes au centre de nos actions avec une approche inclusive et culturelle.
                </p>
              </div>
            </div>
          </div>

          {/* Troisième image - Environnemental */}
          <div className="relative group overflow-hidden mt-30 rounded-lg cursor-pointer h-80">
            <img 
              src={about3} 
              alt="Environnemental" 
              className="w-full h-full object-cover inset-0 size-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl text-center font-bold mb-3">Environnemental</h3>
                <p className="text-gray-200 text-center leading-relaxed">
                  Formation des jeunes et soutien à l'innovation locale par des incubateurs et des programmes de mentorat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        </>
    )
}

export default Valeurs