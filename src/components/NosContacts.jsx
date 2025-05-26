import { motion } from "framer-motion";

function NosContacts() {
    return (
        <motion.section
            className="flex flex-wrap justify-center w-full px-4 md:px-20 mt-15 gap-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="border-blue-500 w-full md:w-[30%] pt-5 pl-10 block rounded-lg h-40 border-solid border border-1">
                <i className="fas fa-phone text-green-600 text-3xl"></i>
                <p className="text-gray-600 mt-5">Appeler à tout moment</p>
                <p className="text-2xl text-blue-600 font-medium ml-[-5px] mt-2">+ 880 1234-456789</p>
            </div>

            <div className="border-blue-500 w-full md:w-[30%] rounded-lg pl-10 pt-5 h-40 border-solid border border-1">
                <i className="fas fa-envelope text-3xl text-green-600"></i>
                <p className="text-gray-600 mt-5">Écrire un e-mail</p>
                <p className="text-2xl text-blue-600 font-medium ml-[-5px] mt-2">adresse@gmail.com</p>
            </div>

            <div className="border-blue-500 w-full md:w-[30%] rounded-lg pl-10 pt-5 h-40 border-solid border border-1">
                <i className="fas fa-location text-3xl text-green-600"></i>
                <p className="text-gray-600 mt-5">Visiter le bureau</p>
                <p className="text-2xl text-blue-600 font-medium ml-[-5px] mt-2">Location, Streep</p>
            </div>
        </motion.section>
    );
}

export default NosContacts;
