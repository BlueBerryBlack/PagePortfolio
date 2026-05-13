import { useState } from 'react';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const [active, setActive] = useState(null);

  const items = [
    { id: 1, 
      title: 'Beauty salon Website - Krakow', 
      subtitle:'wrok: UI/UX Design & Frontend Development',
      text: 'A responsive website design for a beauty salon in Krakow, designed to serve as a focal point and showcase for the brand. The main goal was to facilitate user navigation to booking channels (Booksy) and social media, and to quickly familiarize users with services.' ,
      poster: 'https://i.postimg.cc/xTWZLbXH/New-york-wesite.jpg',
      images: ['https://i.postimg.cc/6pc1gbj9/Desktop-website-seendesign.jpg']
    },
    { id: 2, 
      title: 'Interior Architecture Design Office', 
      subtitle:'wrok: Ui Designer',
      text: 'Opis zdjęcia 1' ,
      poster: 'https://i.postimg.cc/nrfypjqv/header.jpg',
      images: ['/images/photo1b.jpg','/images/photo1b.jpg']
    },

    { id: 3, 
      title: "Author's website ", 
      subtitle:'wrok: Ui Design, Front-end',
      text: 'Opis zdjęcia 1' ,
      poster: 'https://i.postimg.cc/wvsf1f0P/tlo-Hero.jpg',
      images: ['/images/photo1b.jpg','/images/photo1b.jpg']
   },

    { id: 4, 
      title: 'Pizzeria ', 
      subtitle:'wrok: Front-end',
      text: 'Opis zdjęcia 1' ,
      poster: 'https://i.postimg.cc/sxJNznjR/pizza-6.jpg',
      images: ['/images/photo1b.jpg','/images/photo1b.jpg']
  },

    { id: 5, 
      title: 'Weiters app', 
      subtitle:'wrok: Front-end',
      text: 'Opis zdjęcia 1' ,
      poster: 'https://i.postimg.cc/FsrLHPrM/weiter-app.jpg',
      images: ['https://i.postimg.cc/FsrLHPrM/weiter-app.jpg','https://i.postimg.cc/FsrLHPrM/weiter-app.jpg']
  },
  ];

  return (
    <div className={styles.gallery}>
      <h2>Gallery</h2>

      {/* poziomy slider */}
      <div className={styles.slider}>
        {items.map((item) => (
          <div
            key={item.id}
            className={styles.square}
            onClick={() => setActive(item)}
          >

            <div className={styles.overlayText}>
            <h3>{item.title}</h3>
            </div>
            <img src={item.poster} alt={item.title} className={styles.poster} />

            
          </div>
        ))}
      </div>

      {/* okno z treścią */}
      {active && (
        <div className={styles.overlay}>
          <div className={styles.content}>
          <div>
              <button className={styles.close} onClick={() => setActive(null)}>
                X
              </button>
              <h3>{active.title}</h3>
              <h2>{active.subtitle}</h2>
              <p>{active.text}</p>
            </div>
            {active.images && active.images.length > 0 && (
              <div className={styles.imageContainer}>
                {active.images.map((src, i) => (
                  <img 
                    key={i}
                    src={src}
                    alt={`${active.title} ${i + 1}`}
                    className={styles.image}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;