import React from 'react';
import './Papantulis.css';
import Papan from './Papan tulis.svg';
import './asal.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import {Navbar} from 'react-bootstrap';


function Body() {
  return (
    <div className="mx-2 my-8 flex flex-wrap justify-center">
                <img
                    alt="risa"
                    className=""
                    src ={Papan}
                    width = "600px"></img>
            <div className="mt-36 w-full md:w-5/12 py-6 px-6 bg-white my-8 md:mx-4">
            
            <h1 className="ml-36 font-bold text-4xl mt-4 text-green-900 text-center ...">Bimbingan Belajar</h1>
            <h1 className="ml-40 font-bold text-4xl mt-1 text-green-900 text-center ...">Tanpa Biaya</h1>

            <p className="ml-36 text-center ...">
            BETIS (Bimbingan Belajar Gratis) Fasilkom UI adalah program kerja Departemen Pengabdian Masyarakat BEM Fasilkom UI 
            yang bertujuan untuk menyediakan bimbingan belajar tanpa biaya kepada siswa kelas 12 SMA atau alumni yang kurang mampu secara finansial untuk 
            persiapan menghadapi SBMPTN.
            </p>
            </div>
                       
        </div> 
    
);
}

export default Body;
