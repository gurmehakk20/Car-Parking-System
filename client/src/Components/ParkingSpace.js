import React from 'react';
import '../Styles/ParkingSpace.css';

const ParkingSpace = () => {
    return (
        <div id="parking-container">
            <h1 className="parking-title">Parking Space</h1>
            <div className="parking-section">
                <h2 className="vehicle-title">2-WHEELER</h2>
                <div className="slots-container">
                    {[...Array(7)].map((_, i) => (
                        <div className="slot" key={`2w-${i}`}>
                            Slot {i + 1}
                        </div>
                    ))}
                </div>
            </div>
            <div className="parking-section">
                <h2 className="vehicle-title">3-WHEELER</h2>
                <div className="slots-container">
                    {[...Array(7)].map((_, i) => (
                        <div className="slot" key={`3w-${i}`}>
                            Slot {i + 1}
                        </div>
                    ))}
                </div>
            </div>
            <div className="parking-section">
                <h2 className="vehicle-title">4-WHEELER</h2>
                <div className="slots-container">
                    {[...Array(7)].map((_, i) => (
                        <div className="slot" key={`4w-${i}`}>
                            Slot {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ParkingSpace;
