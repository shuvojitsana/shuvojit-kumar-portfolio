
import img2 from "../../../assets/screencapture-chef-recipe-hunter-clien-7ba81-web-app-2023-07-01-20_40_14.png"
import img3 from "../../../assets/screencapture-toys-sports-master-web-app-2023-07-01-20_38_41.png"
import img1 from "../../../assets/screencapture-summer-camp-client-8f6ae-web-app-2023-07-01-20_37_51.png"
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div>
            <h1 className="text-3xl mt-20 mb-10 text-white font-bold text-center">My Recent Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">

                <div data-aos="fade-left" data-aos-duration="2000" className="card  bg-transparent text-gray-100 shadow-xl h-full">
                    <figure className="w-[100%] h-[200px]"><img className=" projects-img" src={img1} alt="Shoes" />
                    </figure>
                    <div className="card-body justify-end">
                        <h1 className="text-2xl font-bold">Summer Camp School</h1>
                        <div className="flex gap-4">
                            <span>
                                <Link href="https://github.com/shuvojitsana/summer-camp-client" target="blank">
                                    <button className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  text-white  " >
                                        Client</button></Link></span>
                            <span>
                                <Link href="https://github.com/shuvojitsana/summer-camp-server" target="blank">
                                    <button className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border   text-white ">
                                        Server</button></Link></span><span>
                                <Link href="https://summer-camp-client-8f6ae.web.app/" target="blank"><button className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  e text-white " >Demo</button>
                                </Link>
                            </span>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to="/projectsId3">
                                <button className="btn btn-circle hover:bg-inherit hover:text-white "> <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up-right" data-aos-duration="1000" className="card  bg-transparent text-gray-100 shadow-xl h-full">
                    <figure className="w-[100%] h-[200px]"><img className="hover:scale-125 ease-in duration-500" src={img3} alt="Shoes" />
                    </figure>
                    <div className="card-body justify-end">
                        <h1 className="text-2xl font-bold">Toys Sports Master</h1>
                        <div className="flex gap-4">
                            <span>
                                <Link href="https://github.com/shuvojitsana/toy-sports-master-client" target="blank">
                                    <button className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  text-white  " >
                                        Client</button></Link></span>
                            <span>
                                <Link href="https://github.com/shuvojitsana/toys-sports-master-server" target="blank">
                                    <button className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border   text-white ">
                                        Server</button></Link></span><span>
                                <Link href="https://toys-sports-master.web.app/" target="blank"><button className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  e text-white " >Demo</button>
                                </Link>
                            </span>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to="/projectsId">
                                <button className="btn btn-circle hover:bg-inherit hover:text-white "> <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000" className="card  bg-transparent text-gray-100 shadow-xl h-full">
                    <figure className="w-[100%] h-[200px]"><img className="hover:scale-125 ease-in duration-500" src={img2} alt="Shoes" />
                    </figure>
                    <div className="card-body justify-end">
                        <h1 className="text-2xl font-bold">Master Chef</h1>
                        <div className="flex gap-4">
                            <span>
                                <Link href="https://github.com/shuvojitsana/chef-recipe-hunter-client" target="blank">
                                    <button className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  text-white  " >
                                        Client</button></Link></span>
                            <span>
                                <Link href="https://github.com/shuvojitsana/chef-recipe-hunter-server" target="blank">
                                    <button className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border   text-white ">
                                        Server</button></Link></span><span>
                                <Link href="https://chef-recipe-hunter-clien-7ba81.web.app" target="blank"><button className="p-2 rounded-lg mt-5 bg-purple-800 hover:bg-inherit hover:border  e text-white " >Demo</button>
                                </Link>
                            </span>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to="/projectsId2">
                                <button className="btn btn-circle hover:bg-inherit hover:text-white "> <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Projects;