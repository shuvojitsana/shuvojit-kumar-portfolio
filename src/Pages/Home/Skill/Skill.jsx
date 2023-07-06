

const Skill = () => {
    return (

        <div>
            <div>   <h1 className="text-center pt-16 pb-8 text-4xl  text-white font-bold uppercase ">Skills </h1>
            </div>
            <div data-aos="zoom-in"
                data-aos-duration="3000" className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-20 gap-8 ">
                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://rayhanuddinfarhad.netlify.app/assets/html-5-d02742a7.png" alt="" /><h2 className="card-title text-2xl">HTML</h2></div></div></div>

                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://rayhanuddinfarhad.netlify.app/assets/css-3-5a2f1d9c.png" alt="" /><h2 className="card-title text-2xl">CSS</h2></div></div></div>

                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://rayhanuddinfarhad.netlify.app/assets/tailwind-a31bf4bd.png" alt="" /><h2 className="card-title text-2xl">Tailwind</h2></div></div></div>

                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://rayhanuddinfarhad.netlify.app/assets/js-30558d7e.png" alt="" /><h2 className="card-title text-2xl">JavaScript</h2></div></div></div>

                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://rayhanuddinfarhad.netlify.app/assets/bootstrap-bbf89c7d.png" alt="" /><h2 className="card-title text-2xl">Bootstrap</h2></div></div></div>

                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://rayhanuddinfarhad.netlify.app/assets/react-35ef61ed.svg" alt="" /><h2 className="card-title text-2xl">React</h2></div></div></div>

                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://649d20e3c665d139aad58c3c--taupe-crumble-81aacf.netlify.app/assets/mongodb-fedbcc5f.png" alt="" /><h2 className="card-title text-2xl">MongoDB</h2></div></div></div>
                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://rayhanuddinfarhad.netlify.app/assets/css-3-5a2f1d9c.png" alt="" /><h2 className="card-title text-2xl">Express Js</h2></div></div></div>

                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="	https://rayhanuddinfarhad.netlify.app/assets/firebase-9e853b34.png" alt="" /><h2 className="card-title text-2xl">Firebase</h2></div></div></div>
                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 496 512" className="text-4xl hover-img h-20 w-20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg><h2 className="card-title text-2xl">GitHub</h2></div></div></div>
                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://rayhanuddinfarhad.netlify.app/assets/android-fa3c6503.png" alt="" /><h2 className="card-title text-2xl">Android</h2></div></div></div>

                <div className="card w-full bg-[#202a86] bg-opacity-80  text-primary-content skills-card"><div className="card-body"><div className="flex gap-2"><img className="h-20 w-20 hover-img" src="https://649d20e3c665d139aad58c3c--taupe-crumble-81aacf.netlify.app/assets/node-8852d2b9.png" alt="" /><h2 className="card-title text-2xl">Node Js</h2></div></div></div>

            </div>

        </div>
    );
};

export default Skill;