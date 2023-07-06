import img1 from "../../../assets/Alltoys.png"
import img2 from "../../../assets/addatoy.png"
import img3 from "../../../assets/MyDetails.png"
import img4 from "../../../assets/toysCreate.png"
import img5 from "../../../assets/toysLogin.png"
import { Link } from "react-router-dom"

const ProjectsId = () => {
    return (
        <div className="pb-20">
            <div className="carousel  w-full h-[680px] mt-10">
                <div id="slide1" className="carousel-item relative mx-auto w-full">
                    <img src={img1} className="w-[680px] h-[660px] mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-[780px]  h-[560px] mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-[780px]  h-[560px] mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-[780px] h-[560px] mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-[780px] h-[560px] mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-bold text-white mx-20">Toy Sports Master : </h1>
                <div className="flex gap-4 pt-8">
                           <div>
                            <Link className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  text-white  " to="https://github.com/shuvojitsana/toy-sports-master-client/" target="_blank">Client</Link>
                           </div>
                           <div>
                            <Link className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  text-white  " to="https://github.com/shuvojitsana/toys-sports-master-server/" target="_blank">Server</Link>
                           </div>
                           <div>
                            <Link className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  text-white  " to="https://toys-sports-master.web.app/" target="_blank">Demo</Link>
                           </div>
                            
                                
                        </div>

            </div>
            <div className="text-white mx-40 mt-10">
                <h3 className="text-2xl font-semibold">Frontend:</h3>
                <p> This site basically, mada by react, tailwind, react router dom,firebase Authentication,toast.React Tab category by filter data of database.</p>
                <h3 className="text-2xl mt-3 font-semibold">Backend:</h3>
                <p>
                    This backend site basically, mada by express JS, Node JS, MongoDB, JWT.
                    Created Restful api and all frontend data comes by database.And price sorting by show frontend and implements Search option.
                </p>
                <h3 className="text-2xl font-semibold mt-3">Details:</h3>
                <p>
                    This is Toy sports Master website.The frontend site all toy show and an user crud operation toys and see the my toys page added the toys. Implements the sorting system by toy price and search system implements in all toys page.In Home page one section is React tap uses and category wish filter toy system implements.
                </p>
            </div>

        </div>
    );
};

// style="transform: translate3d(0px, 0px, 0px); transition-duration: 350ms;"

export default ProjectsId;