import { useState } from "react";
import Image from "next/image";
import { GrCaretPrevious } from "react-icons/gr";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";
import { GrCaretNext } from "react-icons/gr";
import { gallery } from "../data/gallery";
import galleryStyles from "../styles/Gallery.module.css";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const showOverlayClasses =
    galleryStyles["overlay"] + " " + galleryStyles["show"];
  const hideOverlayClasses = galleryStyles["overlay"];

  const checkNumber = (number) => {
    if (number > gallery.length - 1) {
      return 0;
    }
    if (number < 0) {
      return gallery.length - 1;
    }
    return number;
  };
  const previousPhoto = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPhoto = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const openModal = (id) => {
    console.log(id);
    setIndex(id - 1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={galleryStyles.container}>
      <h1>Gallery</h1>
      <div className={galleryStyles.grid} data-aos="slide-up">
        {gallery.map((item, index) => {
          return (
            <div
              className={galleryStyles.imageCont}
              key={item.id}
              onClick={() => openModal(item.id)}
            >
              <Image
                src={item.image}
                layout="fill"
                className={galleryStyles.image}
              />
            </div>
          );
        })}
      </div>
      <div className={isModalOpen ? showOverlayClasses : hideOverlayClasses}>
        <div className={galleryStyles.modalContainer}>
          <div className={galleryStyles.modalImageContainer}>
            <Image
              src={gallery[index].image}
              alt=""
              layout="fill"
              className={galleryStyles.modalImage}
            />
            <div className={galleryStyles.closeModal} onClick={closeModal}>
              <FaTimes color="white" className={galleryStyles.textShadow} />
            </div>
            <div className={galleryStyles.previous} onClick={previousPhoto}>
              <FaChevronLeft
                color="white"
                className={galleryStyles.textShadow}
              />
            </div>
            <div className={galleryStyles.next} onClick={nextPhoto}>
              <FaChevronRight
                color="white"
                className={galleryStyles.textShadow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
