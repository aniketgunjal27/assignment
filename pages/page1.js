import React, { Component } from "react";
import DATA from '../components/Sampledata'
const toyota = (props) => {
  return (
    <div>
      
    
      {props.cardData.map((car) => (
        <div>
    
          <div>
            <div>
              <div className="max-w-md rounded overflow-hidden shadow-lg">
                <img
                  className="object-contain h-255 w-455"
                  src={car.photos[0].url}
                  alt="Cards for drive.au"
                />
                <div className="px-6 py-4">
                  <div className="font-sans font-medium text-xl mb-2">
                   {car.redbook.title}

                  </div>
                  <p className="text-gray-700 text-base font-sans font-medium divide-y ">
                    <div className="grid grid-cols-2 gap-4 ">
                      <div className="list-disc" >  { ` ${car.redbook.doors } Doors,  ${car.redbook.seats} Seats` } </div>
                      <div>{car.redbook.engine}</div>
                      <div>{ ` ${car.redbook.gears } Speed  ${car.gearType}` }</div>
                      
                      <div> {car.driveCode}</div>
                     
                      <div> 
                        
                      </div>
                    </div>
                   
                    <div className=" grid grid-cols-2 gap-y-2 pt-3 ">
                      <div>Average Kms</div>
                      <div className="font-bold  ">{car.redbook.pricing.avgKmsMin}k-{car.redbook.pricing.avgKmsMax}k</div>
                      <div>Trade in Value</div>
                      <div className="font-bold">${car.redbook.pricing.tradeMin}-${car.redbook.pricing.tradeMax}</div>
                      <div>Private Sale</div>
                      <div className="font-bold">${car.redbook.pricing.privateMin}-${car.redbook.pricing.privateMax}</div>
                    </div>
                  </p>
                </div>

                <li className="font-sans flex justify-center py-4 px-2">
                  <button className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-32 rounded-lg  ">
                    Get Offer Now
                  </button>
                </li>
              </div>
            </div>
          </div>
          <br/>
          <br/>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  // var data = {
  //   cardData: [
  //     {
  //       variantId: 1,
  //       vehicleKey: "AUVABAR2011AEAA",
  //       segmentId: 1,
  //       gearType: "Manual",
  //       driveCode: "FWD",
  //       photos: [
  //         {
  //           url: "https://res.cloudinary.com/driveau/image/upload/v1616375245/vehicles/redbook/AUVABAR2011AEAA/ABAR0016.jpg",
  //           publicId: "vehicles/redbook/AUVABAR2011AEAA/ABAR0016",
  //         },
  //         {
  //           url: "https://res.cloudinary.com/driveau/image/upload/v1616375245/vehicles/redbook/AUVABAR2011AEAA/ABAR0025.jpg",
  //           publicId: "vehicles/redbook/AUVABAR2011AEAA/ABAR0025",
  //         },
  //       ],
  //       redbook: {
  //         title: "Series 1 Esseesse Hatchback 3dr Man 5sp 1.4T [Mar]",
  //         doors: 3,
  //         seats: 4,
  //         engine: "1.4",
  //         gears: 5,
  //         model: null,
  //         make: "ABAR",
  //         year: 2011,
  //         vehicleType: "PS",
  //         pricing: {
  //           avgRetail: 9750,
  //           tradeMax: 8000,
  //           tradeMin: 6200,
  //           privateMin: 8700,
  //           privateMax: 10500,
  //           avgKmsMax: 180,
  //           avgKmsMin: 100,
  //         },
  //       },
  //     },
  //     {
  //       variantId: 2,
  //       vehicleKey: "AUVABAR2011AEAC",
  //       segmentId: 1,
  //       gearType: "Auto",
  //       driveCode: "FWD",
  //       photos: [
  //         {
  //           url: "https://res.cloudinary.com/driveau/image/upload/v1616375245/vehicles/redbook/AUVABAR2011AEAC/ABAR0012.jpg",
  //           publicId: "vehicles/redbook/AUVABAR2011AEAC/ABAR0012",
  //         },
  //       ],
  //       redbook: {
  //         title: "Series 1 Tributo Ferrari Hatchback 3dr MTA 5sp 1.4T [May]",
  //         doors: 3,
  //         seats: 4,
  //         engine: "1.4",
  //         gears: 5,
  //         model: null,
  //         make: "ABAR",
  //         year: 2011,
  //         vehicleType: "PS",
  //         pricing: {
  //           avgRetail: 22900,
  //           tradeMax: 19600,
  //           tradeMin: 16600,
  //           privateMin: 20900,
  //           privateMax: 23900,
  //           avgKmsMax: 180,
  //           avgKmsMin: 100,
  //         },
  //       },
  //     },
  //   ],
  // };

  return {
    props: DATA,
  };
}

export default toyota;
