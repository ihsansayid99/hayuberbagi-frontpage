import React from 'react'
import Link from 'next/link'

import propTypes from 'prop-types'

const Program = ({ backgroundImage, programName }) => {
    return (

        <div className="program w-1/3 relative">
            <div className="absolute z-0 inset-0 w-full h-full" style={{ backgroundImage: `url("${backgroundImage}")`, backgroundRepeat: "no-repeat", }}></div>
            <div className="bg-overflow absolute z-0 inset-0 w-full bg-black opacity-50"></div>
            <div className="program-item m-0 absolute centered text-center">
                <h2 className="text-3xl mb-6 text-white font-bold" data-aos="fade-up">{programName}</h2>
                <Link href={`${process.env.NEXT_PUBLIC_DONATUR_URL}/donasi`}>
                    <a className="link-wraper border-2 border-orange-400 hover:border-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-200 text-white px-10 py-3 text-lg">Donasi</a>
                </Link>
            </div>

        </div>

    )
}

Program.propTypes = {
    backgroundImage: propTypes.string,
    programName: propTypes.string,
}

export default Program;
