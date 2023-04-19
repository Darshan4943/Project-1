import React, { useState } from "react";
import './Trainer.css'

const trainersData = [
  {
    id: 1,
    name: "John Cena ",
    photo: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2022/06/06_Cena_09142009rf_031--8a1d8885e9ee285288d46da8ae7e86ae.jpg"
  },
  {
    id: 2,
    name: "Batista",
    photo: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2017/01/003_34_RAW_08022004jg_210--07e105ddfbdf4f90dba418536ae42859.jpg",
  },
  {
    id: 3,
    name: "Brock Lesnar",
    photo: "https://www.wikistaar.com/wp-content/uploads/2022/07/brock-lesnar.webp",
  },
  {
    id: 4,
    name: "Khali",
    photo: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/the_great_khali_ranjin_singh_wwe_hall_of_fame_class_of_2021_inductee.jpg",
  },
  {
    id: 5,
    name: "Roman Reigns",
    photo: "https://imageio.forbes.com/blogs-images/alfredkonuwa/files/2018/01/ROME2-1200x800.jpg?format=jpg&width=1200",
  },
  {
    id: 6,
    name: "seth rollins",
    photo: "https://vid.alarabiya.net/images/2018/11/02/27bd9407-2c79-4a83-b9b2-1ebb4d385a8b/27bd9407-2c79-4a83-b9b2-1ebb4d385a8b_16x9_1200x676.jpg",
  },
  {
    id: 7,
    name: "Bray Wyaat",
    photo: "https://image-cdn.essentiallysports.com/wp-content/uploads/bray-wyatt-smackdown-wwe_3776048-740x710.jpg",
  },
];

const Trainer = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTrainers = showAll ? trainersData : trainersData.slice(0, 4);

  return (
    <div className="mainn">
    <div className="trainers-section">
      <h2>Meet Our Team</h2>
      <p>Our experienced trainers are here to help you reach your goals.</p>
      <div className="trainers-grid">
        {visibleTrainers.map((trainer) => (
          <div key={trainer.id} className="trainer">
            <img  src={trainer.photo} alt={trainer.name} />
            <h3>{trainer.name}</h3>
          </div>
        ))}
      </div>
      {!showAll && (
        <button onClick={() => setShowAll(true)}>See the Whole Team</button>
      )}
    </div>
  </div>
  );
};

export default Trainer;
