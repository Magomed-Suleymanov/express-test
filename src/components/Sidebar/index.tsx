import React from 'react';
import '../../styles/sidebar.scss';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { IPoints, SidebarProps } from '../../types';

const Sidebar = ({ setCoordinate, setZoom, places }: SidebarProps) => {
  const handleClick = (place: IPoints) => {
    setCoordinate([place.latitude, place.longitude]);
    setZoom(15);
  };

  return (
    <div className="sidebar">
      <div className="container">
        <Scrollbars className="wrapScrollbars" style={{ height: '95vh' }}>
          {places.map((place) => {
            return (
              <div
                className="items"
                key={place.latitude}
                tabIndex={0}
                onClick={() => handleClick(place)}
              >
                <div className="contentAddress">{place.address}</div>
                <div className="contentTabs">
                  {place.budgets.map((budget, index) => {
                    return (
                      <div className="contentTab" key={budget + index}>
                        {budget}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Scrollbars>
      </div>
    </div>
  );
};

export default Sidebar;
