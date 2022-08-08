import {
    Col,
    Row,
    Button,
    Checkbox,
    Image,
    Divider,
  } from 'antd';
  import { Rating } from 'react-simple-star-rating';

const PropertyComponent = (props) => {
    const { property, removeProperty, setHoverPropertyId } = props;
  
    return (
      <div style={{ margin: 5 }} id={property.propertyId}>
        <Row
          style={{ width: '100%' }}
          onMouseEnter={(e) => {
            setHoverPropertyId(property.propertyId);
          }}
          onMouseLeave={(e) => {
            setHoverPropertyId(null);
          }}
          align='middle'
        >
          <Col span={2}>
            <Checkbox></Checkbox>
          </Col>
          <Col span={4}>
            <Image width={60} height={60} src={property.images[0]['c6_uri']} />
          </Col>
          <Col span={18}>
            {/* <div> Match 76 %</div> */}
            <div
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {property.propertyMetadata.headline}
            </div>
            <div style={{ fontSize: '12px' }}>
              {property.bedrooms} Br {property.bathrooms.full} Ba Sleeps{' '}
              {property.sleeps}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Rating
                  ratingValue={parseInt(property.averageRating * 20)}
                  size={15}
                  transition
                  allowHalfIcon
                  fillColor={'#000'}
                  readonly
                />
                ({property.reviewCount})
              </div>
              <Button
                onClick={() => {
                  removeProperty(property.propertyId);
                }}
                size={'small'}
                type='primary'
                ghost
              >
                Remove
              </Button>
            </div>
          </Col>
        </Row>
        <Divider />
      </div>
    );
  };

  export default PropertyComponent;