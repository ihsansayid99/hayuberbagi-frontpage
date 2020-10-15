import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useForm from 'src/helpers/hooks/useForm'
import fieldErrors from 'src/helpers/fieldErrors'
import { ToastContainer, toast } from 'react-toastify';


import relawans from 'src/constant/api/relawan'
import Hero from 'src/components/Hero';
import Footer from 'src/components/Footer';

const Donasi = () => {
    const router = useRouter();
    const [{ full_name, email, no_phone, nickname, j_identity, no_identity, address, j_sex
        , born_city, date_born, religion, marital_status, worked, last_study,
        cluster_specialization, address_domisil, checkwni, indo_area }, setstate] = useForm({
            email: "",
            full_name: "",
            no_phone: "",
            nickname: "",
            j_identity: "",
            no_identity: "",
            address: "",
            born_city: "",
            indo_area: "+62",
            date_born: "",
            religion: "",
            marital_status: "",
            worked: "",
            last_study: "",
            cluster_specialization: "",
            address_domisil: "",
            checkwni: false,
        })
    const [errors, seterrors] = useState(null)
    const finalPhoneNumber = indo_area + no_phone
    const submit = (e) => {
        e.preventDefault();
        if (checkwni) {
            relawans.register({
                email,
                full_name,
                no_phone: finalPhoneNumber,
                nickname,
                j_identity,
                no_identity,
                address,
                born_city,
                j_sex,
                date_born,
                religion,
                marital_status,
                worked,
                last_study,
                cluster_specialization,
                address_domisil
            }).then((res) => {
                toast.success("Berhasil Menjadi Relawan, Silahkan Check Email Anda.")
                setTimeout(() => {
                    router.push("/")
                }, 3000);
            }).catch(err => {
                toast.warning("Uppps Ada error nih")
                seterrors(err?.response?.data?.message)
            })
            console.log(full_name, email, finalPhoneNumber, nickname, j_identity, no_identity, address, j_sex, born_city, date_born,
                religion, marital_status, worked, last_study, cluster_specialization, address_domisil, checkwni)
        } else {
            return null
        }
    }

    const ERRORS = fieldErrors(errors)
    console.log(errors)
    return (
        <>
            <Head>
                <title>HayuBerbagi | Menjadi Relawan</title>
            </Head>
            <ToastContainer position="top-center" />
            <section className="relative py-10">
                <Hero bgImage="images/donasi-bg.jpg">

                    <div className="w-full mx-auto bg-white py-10 px-10 rounded-lg mt-20">
                        <div className="px-20 py-10">
                            <h2 className="text-2xl font-semibold text-center">Pendaftaran Relawan</h2>
                            <form onSubmit={submit}>
                                <h5 className="text-red-600 mt-5 font-semibold text-xl">Biodata :</h5>
                                <div className="flex-col mt-5">
                                    <label htmlFor="full_name" className={["text-lg mb-2", ERRORS?.full_name?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Nama Lengkap</label>
                                    <input type="text" value={full_name} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.full_name?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: Donald Trump" name="full_name" />
                                    <span className="text-sm text-gray-600">*Harap isi sesuai dengan di KTP</span>
                                </div>
                                <div className="flex-col mt-5">
                                    <label htmlFor="nicknames" className={["text-lg mb-2", ERRORS?.nickname?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Nama Panggilan</label>
                                    <input type="text" value={nickname} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.nickname?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: Sule" name="nickname" />
                                    <span className="text-sm text-gray-600">*Harap isi sesuai dengan nama panggilan anda.</span>
                                </div>
                                <div className="flex w-full">
                                    <div className="flex mt-5 w-1/2 pr-5">
                                        <div className="flex-col">
                                            <label htmlFor="no_phone" className={["text-lg mb-2", ERRORS?.no_phone?.message ? "text-red-500" : "text-gray-900"].join(" ")}>No Handphone</label>
                                            <div className="w-full flex">
                                                <input type="text" value={indo_area} disabled className={["w-2/12 bg-white focus:outline-none border mt-4 px-6 py-3 focus:border-orange-400 ", ERRORS?.no_phone?.message ? "border-red-500" : "border-gray-700"].join(" ")} name="no_phone" />
                                                <input type="tel" value={no_phone} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.no_phone?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: 812*******" name="no_phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-5 w-1/2">
                                        <div className="flex-col w-full">
                                            <label htmlFor="email" className={["text-lg mb-2", ERRORS?.email?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Email</label>
                                            <input type="email" value={email} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.email?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: emailanda@gmail.com" name="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="flex mt-5 w-1/2 pr-5">
                                        <div className="flex-col w-full">
                                            <label htmlFor="j_identity" className={["text-lg mb-2", ERRORS?.j_identity?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Jenis Identitas</label>
                                            <input type="text" value={j_identity} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.j_identity?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: KTP/SIM/PASPOR" name="j_identity" />
                                            <span className="text-sm text-gray-600">*isi PELAJAR jika anda belum punya identitas.</span>
                                        </div>
                                    </div>
                                    <div className="flex mt-5 w-1/2">
                                        <div className="flex-col w-full">
                                            <label htmlFor="no_identity" className={["text-lg mb-2", ERRORS?.no_identity?.message ? "text-red-500" : "text-gray-900"].join(" ")}>No Identitas</label>
                                            <input type="text" value={no_identity} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.no_identity?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: 124567******" name="no_identity" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-col mt-5">
                                    <label htmlFor="address" className={["text-lg mb-2", ERRORS?.address?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Alamat sesuai kartu Identitas</label>
                                    <textarea type="text" value={address} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.address?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Jl. xxxx Kecamatan xxx Desa xxxx Kab/Kota Provinsi" name="address" />
                                    <span className="text-sm text-gray-600">*Harap isi sesuai dengan di KTP</span>
                                </div>
                                <div className="flex-col mt-5">
                                    <label htmlFor="j_sex" className={["text-lg mb-2", ERRORS?.j_sex?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Jenis Kelamin</label>
                                    <div className="flex mt-5 w-full">
                                        <div className="mr-4">
                                            <input type="radio" onChange={setstate} value="Laki-Laki" name="j_sex" /> Laki Laki
                                        </div>
                                        <div className="mr-4">
                                            <input type="radio" onChange={setstate} value="Perempuan" name="j_sex" /> Perempuan
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="flex mt-5 w-1/2 pr-5">
                                        <div className="flex-col w-full">
                                            <label htmlFor="born_city" className={["text-lg mb-2", ERRORS?.born_city?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Kota Kelahiran</label>
                                            <input type="text" value={born_city} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.born_city?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: Bandung/Cimahi/Jakarta" name="born_city" />
                                        </div>
                                    </div>
                                    <div className="flex mt-5 w-1/2">
                                        <div className="flex-col w-full">
                                            <label htmlFor="date_born" className={["text-lg mb-2", ERRORS?.date_born?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Tanggal Lahir</label>
                                            <input type="date" value={date_born} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.date_born?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: 124567******" name="date_born" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="flex mt-5 w-1/3 pr-5">
                                        <div className="flex-col w-full">
                                            <label htmlFor="religion" className={["text-lg mb-2", ERRORS?.religion?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Agama</label>
                                            <input type="text" value={religion} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.religion?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: Islam" name="religion" />
                                        </div>
                                    </div>
                                    <div className="flex mt-5 w-1/3 pr-5">
                                        <div className="flex-col w-full">
                                            <label htmlFor="marital_status" className={["text-lg mb-2", ERRORS?.marital_status?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Status Perkawinan</label>
                                            <input type="text" value={marital_status} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.marital_status?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: Belum Menikah/Kawin/Cerai Hidup dll" name="marital_status" />
                                        </div>
                                    </div>
                                    <div className="flex mt-5 w-1/3">
                                        <div className="flex-col w-full">
                                            <label htmlFor="worked" className={["text-lg mb-2", ERRORS?.worked?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Pekerjaan</label>
                                            <input type="text" value={worked} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.worked?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: Pelajar/Mahasiswa/TNI dll" name="worked" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="flex mt-5 w-1/2 pr-5">
                                        <div className="flex-col w-full">
                                            <label htmlFor="last_study" className={["text-lg mb-2", ERRORS?.last_study?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Pendidikan Terakhir</label>
                                            <input type="text" value={last_study} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.last_study?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: SLTA/S1/S2" name="last_study" />
                                        </div>
                                    </div>
                                    <div className="flex mt-5 w-1/2">
                                        <div className="flex-col w-full">
                                            <label htmlFor="cluster_specialization" className={["text-lg mb-2", ERRORS?.cluster_specialization?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Cluster Peminatan</label>
                                            <select name="cluster_specialization" onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.cluster_specialization?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")}>
                                                <option value="">Silahkan Pilih...</option>
                                                <option value="relawan jurnalis">Relawan Jurnalis</option>
                                                <option value="relawan Pendidikan">Relawan Pendidikan</option>
                                                <option value="relawan akademik">Relawan Akademik</option>
                                                <option value="relawan nonakademik">Relawan Nonakademik</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <h5 className="text-red-600 mt-5 font-semibold text-xl">Lokasi</h5>
                                <div className="flex-col mt-5">
                                    <label htmlFor="address_domisil" className={["text-lg mb-2", ERRORS?.address_domisil?.message ? "text-red-500" : "text-gray-900"].join(" ")}>Alamat Domisili</label>
                                    <textarea value={address_domisil} onChange={setstate} className={["bg-white focus:outline-none border mt-4 px-6 py-3 w-full ", ERRORS?.address_domisil?.message ? "border-red-500 text-red-500" : " border-gray-700 focus:border-orange-400"].join(" ")} placeholder="Contoh: Jl.xxxx RT/RT xxx Desa/Kelurahan Kecamatan Kab/Kota Provinsi Kode Pos" name="address_domisil" />
                                    <span className="text-sm text-gray-600">*Harap isi sesuai dengan alamat anda tinggal sekarang</span>
                                </div>
                                <div className="flex-col mt-5 mb-5">
                                    <div className="mr-4 text-sm">
                                        <input type="checkbox" onChange={setstate} name="checkwni" /> Saya Menyutujui Term and Rules di HayuBerbagi
                                    </div>
                                </div>
                                <button type="submit" className={["bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white py-3 px-6 mt-4 w-full", !checkwni ? "cursor-not-allowed" : null].join(" ")}>Menjadi Relawan!</button>
                            </form>
                        </div>
                    </div>
                </Hero>
            </section>
            <section className="py-10">
                <Footer />
            </section>
        </>
    )
}

export default Donasi;
