// import './styles/card.css';
import React from 'react';
import logo1 from './Group 330.svg';
import logo2 from './Group 331.svg';
import logo3 from './Group 332.svg';
import logo4 from './Ellipse 333.svg'
import './layout.css'

function Home(){
    return (
        <div className="Home">
        <div className="mx-2 my-8 flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 py-6 px-6 bg-white my-8 md:mx-4">
                <img
                    alt="risa"
                    className="rounded-full"
                    src ={logo1}
                    width = "40px"></img>
            <h1 className="font-bold text-2xl mt-4">Kemudahan Akses</h1>
            <p>
            Memberikan kemudahan akses belajar bagi masyarakat.
            </p>
            </div>
            <div className="w-full md:w-5/12 py-6 px-6 bg-white my-8 md:mx-4">
                <img
                    alt="risa"
                    className="rounded-full"
                    src ={logo2}
                    width = "40px"></img>
            <h1 className="font-bold text-2xl mt-4">Sarana Pengabdian Masyarakat</h1>
            <p>
            Menjadikan BETIS sebagai sarana pengabdian masyarakat bagi mahasiswa UI dalam bidang pendidikan.

            </p>
            </div>
            <div className="w-full md:w-5/12 py-6 px-6 bg-white my-8 md:mx-4">
                <img
                    alt="risa"
                    className="rounded-full"
                    src ={logo4}
                    width = "40px"></img>
            <h1 className="font-bold text-2xl mt-4">Optimalkan Potensi</h1>
            <p>
            Mengoptimalkan potensi untuk mengadakan bimbingan belajar gratis.
            </p>
            </div>
            <div className="w-full md:w-5/12 py-6 px-6 bg-white my-8 md:mx-4">
                <img
                    alt="risa"
                    className="rounded-full"
                    src ={logo3}
                    width = "40px"></img>
            <h1 className="font-bold text-2xl mt-4">Suasana Bersahabat</h1>
            <p>
            Menciptakan suasana yang bersahabat selama berjalannya BETIS 2021.
            </p>
            </div>            
        </div> 
        </div>
    );
}
export default Home;