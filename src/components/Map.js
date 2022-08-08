import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import Map, { Marker, Popup } from 'react-map-gl';
import { Image, Row, Col, Button } from 'antd';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3ViYXNoMTEiLCJhIjoiY2wyMWc0cmRqMGptdTNqbW1seHp1OXpxdCJ9.mYw90uvW9IHOKSxq9_4jZA';

const MapContainer = (props) => {
  const {
    propertiyList,
    mapInitialViewState,
    hoverPropertyId,
    removeProperty,
  } = props;

  return (
    <Map
      initialViewState={{
        longitude: mapInitialViewState.longitude,
        latitude: mapInitialViewState.latitude,
        zoom: 12,
      }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      // onClick={(e) => {
      //   console.log(e);
      // }}
    >
      {propertiyList.length > 0 &&
        propertiyList.map((data, index) => {
          return (
            <Marker
              longitude={data.geoCode.longitude}
              latitude={data.geoCode.latitude}
              anchor='center'
              style={{
                height: '15px',
                width: '15px',
                backgroundColor: '#3742fa',
                borderRadius: '50%',
                border: '1px solid #fff',
              }}
              onClick={(e) => {
                document.getElementById(data.propertyId).scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              key={index}
            >
              {data.propertyId === hoverPropertyId && (
                <Popup
                  longitude={data.geoCode.longitude}
                  latitude={data.geoCode.latitude}
                  anchor='bottom'
                  offset={10}
                  closeButton={false}
                  style={{ width: '220px' }}
                >
                  <Row>
                    <Col span={6}>
                      <Image
                        width={50}
                        height={50}
                        src={data.images[0]['c6_uri']}
                      />
                    </Col>
                    <Col
                      style={{
                        padding: '5px',
                      }}
                      span={18}
                    >
                      <Row>
                        <Col
                          style={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {data.propertyMetadata.headline}
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ fontSize: '10px' }}>
                          {data.bedrooms} Br {data.bathrooms.full} Ba Sleeps{' '}
                          {data.sleeps}
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Button
                    size='small'
                    onClick={() => {
                      removeProperty(data.propertyId);
                    }}
                  >
                    Remove
                  </Button>
                </Popup>
              )}
            </Marker>
          );
        })}

      {/* <Marker

 
               key={index}
             ></Marker>*/}
      {/* );
        })} */}
    </Map>
    // <div>
    //   <div ref={mapContainer} className='map-container' />
    // </div>
  );
};

export default MapContainer;
