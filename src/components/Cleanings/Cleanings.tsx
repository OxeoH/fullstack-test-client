import React from 'react'
import styles from './Cleanings.module.scss'
import apartment from '../../../public/assets/images/apartment.png'
import kitchen from '../../../public/assets/images/kitchen.png'
import office from '../../../public/assets/images/office.png'
import Image from 'next/image'
import { InfoBlock } from '../InfoBlock/InfoBlock'

const cleaningsList = [
  {
    title: 'Cleaning a studio apartment',
    description: `
      Involves thoroughly cleaning all areas of the apartment to create a hygienic and visually appealing environment.
      This typically includes tasks such as dusting surfaces, vacuuming or sweeping the floor, cleaning the kitchen and bathroom, and doing laundry. 
      The goal is to remove dirt, grime, and debris from all areas of the apartment to create a clean and tidy living space.`,
    imgSrc: apartment,
  },
  {
    title: 'Office cleaning',
    description: `
    Involves cleaning and maintaining all areas of a commercial office space. 
    This typically includes tasks such as dusting surfaces, vacuuming or sweeping the floor, cleaning bathrooms, wiping down surfaces, and organizing common areas. 
    The goal is to create a hygienic and visually appealing work environment for employees and visitors, and to maintain the overall cleanliness of the office. 
    Regular office cleaning helps to prevent the spread of germs and bacteria, which can improve the health and well-being of those who use the space. 
    It can also help to create a professional and organized image for the office and its employees.`,
    imgSrc: office,
  },

  {
    title: 'Kitchen cleaning',
    description: `
      Includes wiping countertops, cabinets and household appliances to remove dirt, cleaning the sink, including the faucet, handles and drain hole, cleaning the stove, oven and microwave. 
      Washing the refrigerator and freezer, including internal and external surfaces and handles. Sweeping and mopping floors.
      Garbage removal and replacement of garbage bags.`,
    imgSrc: kitchen,
  },
]

export const Cleanings = () => {
  return (
    <InfoBlock>
      <div className={styles.cleanings}>
        {cleaningsList.map((option, index) => (
          <div
            key={index}
            className={styles.cleaning}
            style={{
              justifyContent: index % 2 === 0 ? 'right' : 'left',
              flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
            }}
          >
            <div className={styles.description}>
              <div className={styles.text}>
                <h2>{option.title}</h2>
                <h4>{option.description}</h4>
              </div>

              <span className={styles.line} />
            </div>
            <div className={styles.picture}>
              <Image src={option.imgSrc} alt="Picture" fill />
            </div>
          </div>
        ))}
      </div>
    </InfoBlock>
  )
}
