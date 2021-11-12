import React from "react";
import './footer.css';
import Youtube from './Youtube.svg'

function Footer(){
    return (
        <div className="Footer">
        <div className="mx-1 my-8 flex flex-wrap justify-around">
            <div className="w-full md:w-auto py-6 px-6 bg-white my-8 md:mx-4">
                <h2>FOLLOW US ON SOCIAL MEDIA</h2>
            <img
                    alt="risa"
                    className="mt-4"
                    src ={Youtube}
                    width = "40px"></img>
            </div>
            <div className="w-full md:w-auto py-6 px-6 bg-white my-8 md:mx-4">
                <h2>EMAIL US AT</h2>
            <p className="mt-4">
            betisfasilkom@gmail.com
            </p>
            </div>
            <div className="w-full md:w-auto py-6 px-6 bg-white my-8 md:mx-4">
                <h2>Location</h2>
            <p className="mt-4 text-left ...">
            <p> Fakultas Ilmu Komputer Universitas Indonesia</p>
            <p> Kampus UI Depok, Pondok Cina, Kec. Beji,</p>
            <p>Kota Depok, Jawa Barat 16424</p>
           </p>
            </div>
        </div>   
        </div> 
    );
}

export default Footer;