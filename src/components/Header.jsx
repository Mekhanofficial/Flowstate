// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faSearch,
    faShoppingBag
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderPage() {
return (
  <>
    <nav className="bg-zinc-950">
      <div className="text-white ml-4 mr-4 top-4 relative flex  justify-between items-center">
        <FontAwesomeIcon className="h-6" icon={faBars} />
        <h2 className="font-semibold text-2xl relative left-3">AnOther</h2>
        <div className="flex gap-2 relative right-3">
          <div className="flex gap-1">
            <FontAwesomeIcon className="h-4" icon={faShoppingBag} />
            <h2 className="rounded-full w-3 h-4 text-center relative bottom-1 text-xs bg-zinc-700">
              0
            </h2>
          </div>
          <FontAwesomeIcon className="h-4 text-white" icon={faSearch} />
        </div>
      </div>
      <hr className="relative top-6 border-t-1 border-zinc-800" />
    </nav>
  </>
);
}
