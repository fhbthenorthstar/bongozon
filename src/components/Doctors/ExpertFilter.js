"use client";
import { useState } from "react";
import { SearchIcon } from "../Icons";

const FindDoctor = () => {
  const [virtual, setVirtual] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [treatment, setTreatment] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const info = {
      virtual,
      specialty,
      treatment,
    };
    alert("FEATURE COMING SOON");
    console.log(info);
  };

  return (
    <div className="container mx-auto">
      <div className=" p-6 xl:translate-y-[-60%] bg-accent dark:bg-accentDark text-light dark:text-dark rounded-sm sm:mt-4 xs:mt-5">
        <div className=" flex  flex-col md:flex-row items-center">
          <div className="flex gap-3 md:gap-6 xs:items-center sm:items-center lg:items-center w-full max-sm:text-center flex-col lg:flex-row lg:w-[35%]">
            <div className="text-base xs:flex xs:justify-center">
              <SearchIcon className="w-10 h-10 fill-white dark:fill-dark" />
            </div>
            <div className="">
              <h3 className="text-xl font-bold ">Find A Doctor</h3>
              <p className="text-sm">Find a "Top Beauty Doctor" Near you</p>
            </div>
          </div>
          <div className="w-full lg:w-[65%]">
            <form onSubmit={handleSearch}>
              <div className="grid gap-2.5 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <select
                  onChange={(e) => setVirtual(e.target.value)}
                  name="virtual"
                  className="w-full text-sm p-2 md:p-3 border border-black  focus:outline-black text-dark"
                  type="text"
                >
                  <option value="" selected="">
                    State
                  </option>
                  <option value="21954">Virtual</option>
                  <option value="121">AL</option>
                  <option value="79">AR</option>
                  <option value="33">AZ</option>
                  <option value="2">CA</option>
                  <option value="31">CO</option>
                  <option value="102">CT</option>
                  <option value="47">DC</option>
                  <option value="7">FL</option>
                  <option value="5">GA</option>
                  <option value="111">HI</option>
                  <option value="86">IA</option>
                  <option value="9">IL</option>
                  <option value="65">IN</option>
                  <option value="20">KY</option>
                  <option value="21">LA</option>
                  <option value="15">MA</option>
                  <option value="6">MD</option>
                  <option value="64">MI</option>
                  <option value="69">MN</option>
                  <option value="154">MO</option>
                  <option value="18">NC</option>
                  <option value="125">NE</option>
                  <option value="23849">NH</option>
                  <option value="12">NJ</option>
                  <option value="37">NV</option>
                  <option value="4">NY</option>
                  <option value="54">OH</option>
                  <option value="32">OR</option>
                  <option value="40">PA</option>
                  <option value="24">SC</option>
                  <option value="67">TN</option>
                  <option value="16">TX</option>
                  <option value="20354">UT</option>
                  <option value="29">VA</option>
                  <option value="39">WA</option>
                  <option value="41">WI</option>
                </select>
                <select
                  onChange={(e) => setSpecialty(e.target.value)}
                  name="specialty"
                  className="w-full text-sm p-2 md:p-3 border border-black focus:outline-black text-dark"
                  type="text"
                  placeholder="Specialty"
                >
                  <option value="" selected="">
                    Specialty
                  </option>
                  <option value="191">Cosmetic Dentist</option>
                  <option value="193">Dermatologist</option>
                  <option value="194">Facial Plastic Surgeon</option>
                  <option value="196">Hair Restoration Specialist</option>
                  <option value="195">Oculoplastic Surgeon</option>
                  <option value="197">Periodontist</option>
                  <option value="192">Plastic Surgeon</option>
                  <option value="199">Prosthodontist</option>
                  <option value="198">Vein Specialist</option>
                </select>
                <select
                  onChange={(e) => setTreatment(e.target.value)}
                  name="treatment"
                  className="w-full text-sm py-2 md:py-3 border border-black focus:outline-black text-dark"
                  type="text"
                  placeholder="Treatment"
                >
                  <option>Treatment</option>
                  <option value="" selected="">
                    Treatment
                  </option>
                  <option value="17319">Abdominal thread lifts</option>
                  <option value="16987">Accent your Body</option>
                  <option value="16988">Acne Treatments</option>
                  <option value="17071">Alexandrite Laser</option>
                  <option value="17003">Arm Lift</option>
                  <option value="16989">Asclera</option>
                  <option value="17063">Bellafill</option>
                  <option value="17118">Belotero</option>
                  <option value="17054">Blue Light</option>
                  <option value="16956">Body</option>
                  <option value="17004">Body Lift</option>
                  <option value="16990">Botox</option>
                  <option value="16968">Botox Browlift</option>
                  <option value="17360">Brachioplasty</option>
                  <option value="17006">Brazilian Butt Lift</option>
                  <option value="16965">Breast Augmentation</option>
                  <option value="17080">
                    Breast Augmentation with Fat Grafting
                  </option>
                  <option value="17007">Breast Implants</option>
                  <option value="17082">Breast Implants with Saline</option>
                  <option value="17081">Breast Implants with Silicone</option>
                  <option value="17033">Breast Lift</option>
                  <option value="17083">Breast Lift with Implants</option>
                  <option value="17732">Breast Reconstruction</option>
                  <option value="17038">Breast Reduction</option>
                  <option value="16967">Browlift</option>
                  <option value="17005">Butt Enhancement</option>
                  <option value="17316">Carboxytherapy</option>
                  <option value="17008">Cellulite Treatment</option>
                  <option value="16969">Cheek Augmentation</option>
                  <option value="17040">
                    Cheek Augmentation with Fat Grafting
                  </option>
                  <option value="17041">Cheek Implants</option>
                  <option value="17042">Cheek Lift</option>
                  <option value="16991">Chemical Peels</option>
                  <option value="16970">Chin Augmentation</option>
                  <option value="17077">CO2 lasers</option>
                  <option value="17010">Cool Lipo</option>
                  <option value="17096">CoolSculpting</option>
                  <option value="17119">CoolTone</option>
                  <option value="17023">Crowns</option>
                  <option value="17021">Dental Bonding</option>
                  <option value="17024">Dental Implants</option>
                  <option value="17104">Dimpleplasty</option>
                  <option value="17072">Diode Laser</option>
                  <option value="17059">Dysport</option>
                  <option value="17107">embrace Active Scar Defense</option>
                  <option value="17108">Emsculpt</option>
                  <option value="17011">Endermologie</option>
                  <option value="16971">Endoscopic Browlift</option>
                  <option value="16973">Endoscopic Facelift</option>
                  <option value="17091">Endoscopic Tummy Tuck</option>
                  <option value="17076">Erbium Lasers</option>
                  <option value="17109">Exilis Ultra 360</option>
                  <option value="16974">Eyelift</option>
                  <option value="17043">Eyelift with Fat Grafting</option>
                  <option value="16957">Face</option>
                  <option value="16972">Facelift</option>
                  <option value="17047">Facelift with Fat Grafting</option>
                  <option value="17110">FaceTite</option>
                  <option value="17012">Fat Melters and Fat Reducers</option>
                  <option value="20432">Fat Transfer</option>
                  <option value="17111">Forma</option>
                  <option value="17078">Fractional CO2 lasers</option>
                  <option value="17074">Fractional Resurfacing Lasers</option>
                  <option value="17112">Fractora</option>
                  <option value="16992">Glycolic Peels</option>
                  <option value="17113">
                    Glytone Enhanced Brightening Cream
                  </option>
                  <option value="17025">Gum Dermabrasion</option>
                  <option value="17026">Gum Lift</option>
                  <option value="16960">Hair</option>
                  <option value="17031">Hair Removal</option>
                  <option value="17032">Hair Transplant</option>
                  <option value="17030">Hair-Loss Treatment</option>
                  <option value="17039">
                    Injectables &amp; Fillers for Cheek Augmentation
                  </option>
                  <option value="17044">
                    Injectables &amp; Fillers for Eyelift
                  </option>
                  <option value="17050">
                    Injectables &amp; Fillers for Lip Enhancement
                  </option>
                  <option value="16961">Injectables And Fillers</option>
                  <option value="17065">
                    Injectables and Fillers with Fat Grafting
                  </option>
                  <option value="17067">Intense Pulsed Light (IPL)</option>
                  <option value="17027">Invisalign</option>
                  <option value="17052">Isolaz</option>
                  <option value="16993">Juvéderm</option>
                  <option value="17100">Juvéderm Volbella</option>
                  <option value="17094">Juvéderm Voluma</option>
                  <option value="17092">Kybella</option>
                  <option value="17055">Lactic Acid Peels</option>
                  <option value="17009">Laser Liposuction</option>
                  <option value="16994">Lasers</option>
                  <option value="17090">Lateral Tension Tummy Tuck</option>
                  <option value="17048">Limited Incision Facelift</option>
                  <option value="16976">Lip Enhancement</option>
                  <option value="17049">
                    Lip Enhancement with Fat Grafting
                  </option>
                  <option value="16977">Lip Implant</option>
                  <option value="16978">Lip Lift</option>
                  <option value="17085">Liposculpture</option>
                  <option value="16966">Liposuction</option>
                  <option value="16975">Liquid Facelift</option>
                  <option value="17079">Long Pulsed N: Yag laser</option>
                  <option value="16979">Lower Blepharoplasty</option>
                  <option value="17037">Lower Body Lift</option>
                  <option value="17325">Lower eyelid surgery</option>
                  <option value="16980">Lower Facelift</option>
                  <option value="17045">MACS Lift</option>
                  <option value="17056">Mandelic Peels</option>
                  <option value="16995">Microdermabrasion</option>
                  <option value="17315">Microinjection</option>
                  <option value="17095">Microneedling</option>
                  <option value="17073">Microwave Laser Treatment</option>
                  <option value="17014">Mini Tummy Tuck</option>
                  <option value="16981">Mini-Facelift</option>
                  <option value="17013">Mommy Makeover</option>
                  <option value="17070">Nd: Yag</option>
                  <option value="17051">Neck Liposuction</option>
                  <option value="16982">Necklift</option>
                  <option value="17098">Nonsurgical Facelift</option>
                  <option value="16983">Nonsurgical Rhinoplasty</option>
                  <option value="16996">Obagi Blue Peel</option>
                  <option value="17101">Otoplasty</option>
                  <option value="17061">Perlane</option>
                  <option value="17058">Phenol Peels</option>
                  <option value="17317">Photobiomodulation</option>
                  <option value="17069">Photodynamic Therapy (PDT)</option>
                  <option value="17066">Photofacial</option>
                  <option value="17114">PiQo4</option>
                  <option value="17075">Plasma Resurfacing Lasers</option>
                  <option value="17087">Power Assisted Liposuction</option>
                  <option value="17062">Prevelle</option>
                  <option value="17068">Pulsed Dye</option>
                  <option value="16997">Radiesse</option>
                  <option value="17105">
                    Radio Frequency with Microneedling
                  </option>
                  <option value="17115">
                    Radio Frequency-Assisted Lipolysis
                  </option>
                  <option value="17053">Red Light</option>
                  <option value="16998">Restylane</option>
                  <option value="17103">Restylane Defyne</option>
                  <option value="17456">Restylane Lyft</option>
                  <option value="17102">Restylane Refyne</option>
                  <option value="17093">Restylane Silk</option>
                  <option value="17795">Revision Rhinoplasty</option>
                  <option value="16964">Rhinoplasty</option>
                  <option value="16999">Salicylic Peels</option>
                  <option value="17097">SculpSure</option>
                  <option value="17000">Sculptra Aesthetic</option>
                  <option value="17064">Selphyl</option>
                  <option value="17099">Silhouette Instalift</option>
                  <option value="16958">Skin</option>
                  <option value="16986">Skin Tighteners</option>
                  <option value="17106">Skin Treatments</option>
                  <option value="17089">Slim Lipo</option>
                  <option value="17015">Smart Lipo</option>
                  <option value="17046">SMAS facelift</option>
                  <option value="16959">Smile</option>
                  <option value="17020">Smile Makeover</option>
                  <option value="17084">Smoothshapes</option>
                  <option value="17022">Straightening</option>
                  <option value="17016">Stretch Mark Treatments</option>
                  <option value="17057">TCA Chemical Peels</option>
                  <option value="16963">Teeth Whitening</option>
                  <option value="17034">Thermage</option>
                  <option value="17117">ThermiTight</option>
                  <option value="17036">Thigh Lift</option>
                  <option value="17035">Titan</option>
                  <option value="17028">Tooth Contouring</option>
                  <option value="16984">Traditional Facelift</option>
                  <option value="17086">Tumescent Liposuction</option>
                  <option value="16962">Tummy Tuck</option>
                  <option value="17001">Ulthera</option>
                  <option value="17794">Ultherapy</option>
                  <option value="17088">Ultrasound Assisted Liposuction</option>
                  <option value="17318">Umbilicoplasty</option>
                  <option value="16985">Upper Blepharoplasty</option>
                  <option value="17326">Upper eyelid surgery</option>
                  <option value="17116">Vanquish ME</option>
                  <option value="17017">VASER Lipo</option>
                  <option value="17002">Vein Treatments</option>
                  <option value="17018">Velashape</option>
                  <option value="17019">Velasmooth</option>
                  <option value="17029">Veneers</option>
                  <option value="17060">Xeomin</option>
                </select>
                <input
                  className="w-full md:text-[15px] p-2 md:p-3  hover:bg-gray-900 bg-black duration-200 text-white cursor-pointer font-medium"
                  type="submit"
                  value="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
