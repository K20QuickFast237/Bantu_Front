function NosContacts(){
    return(
        <>
        <section className="flex w-full pl-20  pr-20 mt-15">
            <div className="border-blue-500 w-90 pt-5 pl-10 block rounded-lg h-40 border-solid border-1">
                   <i class="fas fa-phone text-green-600 text-3xl"></i>                
               <p className="text-gray-600 mt-5">Appeler a tout moment</p>
               <p className="text-2xl text-blue-600 font-medium ml-[-5px] mt-2">+ 880 1234-456789</p>
            </div>

            <div className="border-blue-500 w-90 ml-10 rounded-lg pl-10  pt-5 h-40 border-solid border-1">
               <i class="fas fa-envelope text-3xl text-green-600 "></i>
               <p className="text-gray-600 mt-5">Ecrire un e-mail</p>
               <p className="text-2xl text-blue-600 font-medium ml-[-5px] mt-2">adresse@gmail.com</p>
            </div>

            <div className="border-blue-500 w-90 ml-10 rounded-lg pl-10  pt-5 h-40 border-solid border-1">
               <i class="fas fa-location text-3xl text-green-600 "></i>
               <p className="text-gray-600 mt-5">visiter le bureau</p>
               <p className="text-2xl text-blue-600 font-medium ml-[-5px] mt-2">Location, Streep</p>
            </div>
        </section>

        </>
    )
}
 export default NosContacts