import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faEye } from "@fortawesome/free-solid-svg-icons";

 const SliderCard = ({ product }) => (
   <div className="relative mb-6 mt-24 w-[350px] mx-auto">
     <img
       className="h-[400px] w-full object-cover"
       src={product.image}
       alt={product.title}
     />

     <div className="absolute inset-0 flex items-center justify-center z-10 p-5">
       <div className="text-center text-zinc-300 p-4 rounded-lg">
         <h3 className="font-semibold text-sm mb-2">{product.category}</h3>
         <h1 className="text-xl font-bold mb-3">{product.title}</h1>

         <div className="flex justify-center items-center gap-3 text-xs mb-4">
           <div className="flex items-center gap-1">
             <FontAwesomeIcon className="h-3" icon={faMessage} />
             <span>{product.comments}</span>
           </div>
           <div className="flex items-center gap-1">
             <FontAwesomeIcon className="h-3" icon={faEye} />
             <span>{product.views}</span>
           </div>
         </div>

         <button className="bg-zinc-700 hover:bg-zinc-600 transition-colors py-2 px-4 text-xs font-bold rounded">
           VIEW POST
         </button>
       </div>
     </div>
   </div>
 );


export default SliderCard;
