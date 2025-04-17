import DoctorCard from "../Doctors/DoctorCard";

const FeaturedDoctors = ({ doctors }) => {
  return (
    <section className="py-3 sm:m-4 ">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard doctor={doctor} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;
