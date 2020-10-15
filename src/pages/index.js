import Head from 'next/head'

//Components
import Hero from 'src/components/Hero';
import Program from 'src/components/Program';
import Footer from 'src/components/Footer'



export default function Home() {

  return (
    <>
      <Head>
        <title>HayuBerbagi | Lembaga Sosial Edukatif yang mengedepankan nilai kreatifitas</title>
      </Head>
      <main>
        <section className="header pt-10"
        >
          <Hero bgImage="images/HeroImage.jpg">
            <div className="herotext pt-20 container text-center">
              <h2 className="font-semibold text-white text-4xl">HayuBerbagi <br /> bertransformasi sebagai <br /> lembaga sosial edukatif.</h2>
              <p className="mx-auto text-base font-light text-white leading-relaxed">
                memiliki semangat untuk membuat masa depan yang lebih kaya dan bahagia melalui management berkualitas tinggi serta program-program unggul
            </p>
            </div>
          </Hero>
        </section>
        <section>
          <div className="flex" style={{ height: 636 }}>
            <Program backgroundImage="images/berbagi-nasi.jpg" programName="Berbagi Nasi" />
            <Program backgroundImage="images/kelas-yatim.jpeg" programName="Kelas Yatim" />
            <Program backgroundImage="images/wisata-yatim.jpg" programName="Wisata Yatim" />
          </div>
        </section>
        <section className="kamar-inspirasi relative">
          <div className="absolute z-0 inset-0 w-full h-full" style={{ backgroundImage: "url('images/kamar-inspirasi.jpg')", backgroundRepeat: "no-repeat" }}></div>
          <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
          <div className="pt-24 container mx-auto relative text-white flex">
            <div className="item-ki w-1/2 ml-6" data-aos="fade-up">
              <h2 className="font-bold text-4xl">Kamar <br /> Inspirasi</h2>
              <hr className="mt-2 border-2" />
              <p className="font-light mt-2">Mengajak anak-anak yatim berkegiatan fun games/ team building bersama di area hotel yang dilanjutkan menginap semalam di hotel berbintang untuk bisa menikmati fasilitas hotel serta melihat demo masak yang diperagakan oleh Chef hotel tersebut.</p>
            </div>
            <div className="item-ki w-1/2" data-aos="fade-right">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/0m6E-iJntJ0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded"></iframe>
            </div>
          </div>
        </section>
        <section className="informasi bg-orange-400" style={{ height: 630 }}>
          <div className=" flex container mx-auto pt-20 text-center">
            <div className="w-1/3 px-4" data-aos="fade-up">
              <div className="info-item bg-white">
                <img src="images/relawan.png" alt="" />
              </div>
              <div className="mt-2">
                <h5 className="text-xl text-white font-light">Relawan</h5>
                <hr className="w-10 mx-auto border" />
                <h4 className="text-xl mt-4 text-white font-bold">500</h4>
              </div>
            </div>
            <div className="w-1/3 px-4" data-aos="fade-down">
              <div className="info-item bg-white">
                <img src="images/donatur.png" alt="" />
              </div>
              <div className="mt-2">
                <h5 className="text-xl text-white font-light">Donatur</h5>
                <hr className="w-10 mx-auto border" />
                <h4 className="text-xl mt-4 text-white font-bold">1.500</h4>
              </div>
            </div>
            <div className="w-1/3 px-4" data-aos="fade-up">
              <div className="info-item bg-white">
                <img src="images/penerima-manfaat.png" alt="" />
              </div>
              <div className="mt-2">
                <h5 className="text-xl text-white font-light">Penerima Manfaat</h5>
                <hr className="w-10 mx-auto border" />
                <h4 className="text-xl mt-4 text-white font-bold">12.453.00</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="news-doc container pt-10 flex mx-auto">
          <div className="w-6/12 mr-8">
            <div className="flex items-center">
              <img src="images/logosmall.png" style={{ width: 42 }} alt="logo small HayuBerbagi" className="mr-4" />
              <h2 className="font-bold text-2xl">Dokumentasi</h2>
            </div>
            <div className="mt-10" data-aos="fade-down-right">
              <iframe height="540" src="https://www.youtube.com/embed/0m6E-iJntJ0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded w-full"></iframe>
            </div>
          </div>
          <div className=" w-6/12">
            <div className="flex items-center">
              <img src="images/logosmall.png" style={{ width: 42 }} alt="logo small HayuBerbagi" className="mr-4" />
              <h2 className="font-bold text-2xl">News</h2>
            </div>
            <div className="mt-10 flex" data-aos="fade-down-left">
              <iframe height="215" src="https://www.youtube.com/embed/0m6E-iJntJ0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded mr-2 w-full"></iframe>
              <iframe height="215" src="https://www.youtube.com/embed/0m6E-iJntJ0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded w-full"></iframe>
            </div>
            <div className="mt-2" data-aos="fade-down-left">
              <iframe height="315" src="https://www.youtube.com/embed/0m6E-iJntJ0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded w-full"></iframe>
            </div>
          </div>
        </section>

        <section className="hubungi-kami mt-20 pb-20 bg-orange-400">
          <div className="container mx-auto pt-20 flex">
            <div className="w-1/2">
              <h2 className="text-4xl text-white font-semibold">Hubungi Kami :</h2>
              <div className="flex mt-8">
                <div className="mr-4">
                  <h5 className="text-2xl text-white font-light">Instagram</h5>
                  <hr />
                  <p className="text-lg font-bold text-white mt-4">hayuberbagi.id</p>
                </div>
                <div className="mr-4">
                  <h5 className="text-2xl text-white font-light">Whatsapp</h5>
                  <hr />
                  <p className="text-lg font-bold text-white mt-4">(+62) 812-2008-2240</p>
                </div>
              </div>
              <div className="flex-col mt-8">
                <div className="mr-4">
                  <h5 className="text-2xl text-white font-light">Alamat</h5>
                  <hr />
                  <p className="text-lg font-bold text-white mt-4">Jl. Teladan No.25a, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat 40153</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.204439095135!2d107.58302651414424!3d-6.866087769084312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6a2b809e2d3%3A0xdfe4091c36436fd7!2sJl.%20Teladan%20No.25a%2C%20Gegerkalong%2C%20Kec.%20Sukasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040153!5e0!3m2!1sid!2sid!4v1602000358523!5m2!1sid!2sid" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" className="rounded-lg"></iframe>
            </div>
          </div>
        </section>

        <section className="mt-10 container mx-auto pb-10">
          <Footer></Footer>
        </section>
      </main>
    </>
  )
}
