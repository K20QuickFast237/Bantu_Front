import backgroundImage from '../assets/images/j1.png';
import backgroundImage2 from '../assets/images/j2.png';
import backgroundImage3 from '../assets/images/j3.png';
import backgroundImage4 from '../assets/images/j4.png';
import backgroundImage5 from '../assets/images/j5.png';
import backgroundImage6 from '../assets/images/j6.png';
import { FileText, Clock, Users } from 'lucide-react';

function JoinV(){
    return(
        <>
        <section>
            <div className="w-full relative flex h-auto justify-center gap-8 mt-[-60px] px-20 z-auto">
               <div style={{ backgroundImage: `url(${backgroundImage})` }} className="w-90 h-70 border-white border-2  bg-center bg-no-repeat bg-cover">
                <p className='pt-35 pl-10 text-white font-semibold text-2xl'>Croissance</p>
                <p className='text-white text-lg pl-10 pt-3'>Demarrer, Construire, Accelerer , Grandir </p>
               </div>
               <div style={{ backgroundImage: `url(${backgroundImage2})` }} className="w-90 h-70 bg-center border-white border-2 bg-no-repeat bg-cover">
                  <p className='pt-35 pl-10 text-white font-semibold text-2xl'>Conception et ingenieurie</p>
                <p className='text-white text-lg pl-10 pt-3'>Ideation / Creation</p>
               </div>
               <div style={{ backgroundImage: `url(${backgroundImage3})` }} className="w-90 h-70 bg-center border-white border-2 bg-no-repeat bg-cover">
                  <p className='pt-35 pl-10 text-white font-semibold text-2xl'>Communaute et engagement</p>
                <p className='text-white text-lg pl-10 pt-3'>Co-créez des solutions. Faites-les connaître.</p>
               </div>  
            </div>
            <div className="w-full relative flex h-auto justify-center gap-8 mt-8 px-20 z-auto">
               <div style={{ backgroundImage: `url(${backgroundImage4})` }} className="w-90 h-70 border-white border-2  bg-center bg-no-repeat bg-cover">
                <p className='pt-35 pl-10 text-white font-semibold text-2xl'>Finances et operations</p>
                <p className='text-white text-lg pl-10 pt-3'>Notre pilier. Créer des processus efficaces. Obtenir des résultats</p>
               </div>
               <div style={{ backgroundImage: `url(${backgroundImage5})` }} className="w-90 h-70 bg-center border-white border-2 bg-no-repeat bg-cover">
                  <p className='pt-35 pl-10 text-white font-semibold text-2xl'>Personnes</p>
                <p className='text-white text-lg pl-10 pt-3'>Trouvez des personnes exceptionnelles. </p>
               </div>
               <div style={{ backgroundImage: `url(${backgroundImage6})` }} className="w-90 h-70 bg-center border-white border-2 bg-no-repeat bg-cover">
                  <p className='pt-35 pl-10 text-white font-semibold text-2xl'>Viier de talents</p>
                <p className='text-white text-lg pl-10 pt-3'>Commencez votre carrière du bon pied. </p>
               </div>   
            </div>

            <div className="bg-green-100 py-16 px-20 mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-800 mb-12 text-left">
          Qu'est ce que vous y gagnez ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/*  benefit1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-25 h-25 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <p className=" text-gray-900 text-lg leading-relaxed">
              Une chance de travailler avec certains des esprits les plus innovants de tous les temps !
            </p>
          </div>

          {/*  benefit2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-25 h-25 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <p className="text-lg text-gray-900 leading-relaxed">
              Travailler et « posséder » des projets importants
            </p>
          </div>

          {/* benefit3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-25 h-25 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <p className="text-lg text-gray-900 leading-relaxed">
              Rencontres mensuelles et trimestrielles
            </p>
          </div>

          {/* benefit 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-25 h-25 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <p className="text-lg text-gray-900 leading-relaxed">
              Une chance de travailler avec certains des esprits les plus innovants de tous les temps !
            </p>
          </div>
        </div>
      </div>
    </div>
        </section>
        </>
    )
}

export default JoinV