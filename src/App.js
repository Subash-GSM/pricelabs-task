import {
  Col,
  Row,
  Input,
  Button,
  Tabs,
  Checkbox,
  notification,
  Spin,
} from 'antd';
import {
  SearchOutlined,
  FilterOutlined,
  LeftOutlined,
  RightOutlined,
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import MapContainer from './components/Map';

import {
  MAX_BATHROOM,
  MAX_BEDROOM,
  MAX_SLEEP,
  INITIAL_FILTER_VALUES,
  PROPERTY_REVIEW_FILTER_OPTIONS,
} from './utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyList } from './redux/actions';
import PropertyComponent from './components/Property';

const { TabPane } = Tabs;

const App = () => {
  const propertyData = useSelector((state) => state.PropertyReducer);
  const dispatch = useDispatch();
  const [propertiyList, setPropertiyList] = useState([]);

  const [searchInputValue, setSearchInputValue] = useState('');

  const [showFilterResults, setShowFilterResults] = useState(false);
  const [searchFilterData, setSearchFilterData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageSize, setTotalPageSize] = useState(null);

  const [hoverPropertyId, setHoverPropertyId] = useState(null);

  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [filterValues, setFilterValues] = useState(INITIAL_FILTER_VALUES);

  // Get Data from Server
  const getData = async function (
    minBathrooms = 0,
    maxBathrooms = null,
    minBedrooms = 0,
    maxBedrooms = null,
    location = 'paris'
  ) {
    const payload = {
      operationName: 'SearchRequestQuery',
      variables: {
        filterCounts: true,
        request: {
          paging: {
            page: currentPage,
            pageSize: 50,
          },
          filterVersion: '1',
          filters: [],
          coreFilters: {
            maxBathrooms: maxBathrooms,
            maxBedrooms: maxBedrooms,
            maxNightlyPrice: null,
            maxTotalPrice: null,
            minBathrooms: minBathrooms,
            minBedrooms: minBedrooms,
            minNightlyPrice: 0,
            minTotalPrice: null,
            pets: 0,
          },

          q: location,
        },
        vrbo_web_global_messaging_alert: true,
        vrbo_web_global_messaging_banner: true,
        Vrbo_reco_large_search_destino: false,
      },
      extensions: {
        isPageLoadSearch: false,
      },
      query:
        'query SearchRequestQuery($request: SearchResultRequest!, $filterCounts: Boolean!, $vrbo_web_global_messaging_alert: Boolean!, $vrbo_web_global_messaging_banner: Boolean!, $Vrbo_reco_large_search_destino: Boolean!) {\n  results: search(request: $request) {\n    ...querySelectionSet\n    ...DestinationBreadcrumbsSearchResult\n    ...DestinationCarouselSearchResult @include(if: $Vrbo_reco_large_search_destino)\n    ...DestinationMessageSearchResult\n    ...FilterCountsSearchRequestResult\n    ...HitCollectionSearchResult\n    ...ADLSearchResult\n    ...MapSearchResult\n    ...ExpandedGroupsSearchResult\n    ...PagerSearchResult\n    ...SearchTermCarouselSearchResult\n    ...InternalToolsSearchResult\n    ...SEOMetaDataParamsSearchResult\n    ...GlobalInlineMessageSearchResult @include(if: $vrbo_web_global_messaging_alert)\n    ...GlobalBannerContainerSearchResult @include(if: $vrbo_web_global_messaging_banner)\n    ...FlexibleDatesSearchResult\n    __typename\n  }\n  ...RequestMarkerFragment\n}\n\nfragment querySelectionSet on SearchResult {\n  id\n  typeaheadSuggestion {\n    uuid\n    term\n    name\n    __typename\n  }\n  geography {\n    lbsId\n    gaiaId\n    location {\n      latitude\n      longitude\n      __typename\n    }\n    isGeocoded\n    shouldShowMapCentralPin\n    __typename\n  }\n  propertyRedirectUrl\n  __typename\n}\n\nfragment DestinationBreadcrumbsSearchResult on SearchResult {\n  destination {\n    breadcrumbs {\n      name\n      url\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment DestinationCarouselSearchResult on SearchResult {\n  destinationRecommendationResponse(size: 8, target: SERP_LARGE_SEARCH_TERM_DESTINATION) {\n    ...DestinationCarouselRecommendedDestinationResponse\n    __typename\n  }\n  __typename\n}\n\nfragment DestinationCarouselRecommendedDestinationResponse on RecommendedDestinationResponse {\n  clientRequestId\n  recommendedDestinations {\n    searchTermUuid\n    imageHref\n    recommendationModel\n    breadcrumbs {\n      place {\n        name {\n          simple\n          full\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment HitCollectionSearchResult on SearchResult {\n  page\n  pageSize\n  queryUUID\n  listings {\n    ...HitListing\n    __typename\n  }\n  pinnedListing {\n    headline\n    listing {\n      ...HitListing\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment HitListing on Listing {\n  virtualTourBadge {\n    name\n    id\n    helpText\n    __typename\n  }\n  amenitiesBadges {\n    name\n    id\n    helpText\n    __typename\n  }\n  multiUnitProperty\n  images {\n    altText\n    c6_uri\n    c9_uri\n    mab {\n      banditId\n      payloadId\n      campaignId\n      cached\n      arm {\n        level\n        imageUrl\n        categoryName\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  ...HitInfoListing\n  __typename\n}\n\nfragment HitInfoListing on Listing {\n  listingId\n  ...HitInfoDesktopListing\n  ...HitInfoMobileListing\n  ...PriceListing\n  __typename\n}\n\nfragment HitInfoDesktopListing on Listing {\n  detailPageUrl\n  instantBookable\n  minStayRange {\n    minStayHigh\n    minStayLow\n    __typename\n  }\n  listingId\n  rankedBadges(rankingStrategy: SERP) {\n    id\n    helpText\n    name\n    __typename\n  }\n  propertyId\n  propertyMetadata {\n    headline\n    __typename\n  }\n  superlativesBadges: rankedBadges(rankingStrategy: SERP_SUPERLATIVES) {\n    id\n    helpText\n    name\n    __typename\n  }\n  unitMetadata {\n    unitName\n    __typename\n  }\n  webRatingBadges: rankedBadges(rankingStrategy: SRP_WEB_RATING) {\n    id\n    helpText\n    name\n    __typename\n  }\n  ...DetailsListing\n  ...GeoDistanceListing\n  ...PriceListing\n  ...RatingListing\n  ...UrgencyMessageListing\n  ...MultiUnitHitListing\n  __typename\n}\n\nfragment DetailsListing on Listing {\n  bathrooms {\n    full\n    half\n    toiletOnly\n    __typename\n  }\n  bedrooms\n  propertyType\n  sleeps\n  petsAllowed\n  spaces {\n    spacesSummary {\n      area {\n        areaValue\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment GeoDistanceListing on Listing {\n  geoDistance {\n    text\n    relationType\n    __typename\n  }\n  __typename\n}\n\nfragment PriceListing on Listing {\n  priceSummary: priceSummary {\n    priceAccurate\n    ...PriceSummaryTravelerPriceSummary\n    __typename\n  }\n  priceSummarySecondary: priceSummary(summary: "displayPriceSecondary") {\n    ...PriceSummaryTravelerPriceSummary\n    __typename\n  }\n  priceLabel: priceSummary(summary: "priceLabel") {\n    priceTypeId\n    pricePeriodDescription\n    __typename\n  }\n  __typename\n}\n\nfragment PriceSummaryTravelerPriceSummary on TravelerPriceSummary {\n  priceTypeId\n  edapEventJson\n  formattedAmount\n  roundedFormattedAmount\n  pricePeriodDescription\n  __typename\n}\n\nfragment RatingListing on Listing {\n  averageRating\n  reviewCount\n  __typename\n}\n\nfragment UrgencyMessageListing on Listing {\n  unitMessage(assetVersion: 1) {\n    ...UnitMessageUnitMessage\n    __typename\n  }\n  __typename\n}\n\nfragment UnitMessageUnitMessage on UnitMessage {\n  iconText {\n    message\n    icon\n    messageValueType\n    __typename\n  }\n  __typename\n}\n\nfragment MultiUnitHitListing on Listing {\n  propertyMetadata {\n    propertyName\n    __typename\n  }\n  propertyType\n  listingId\n  ...MultiUnitDropdownListing\n  ...MultiUnitModalListing\n  __typename\n}\n\nfragment MultiUnitDropdownListing on Listing {\n  ...MultiUnitListWrapperListing\n  __typename\n}\n\nfragment MultiUnitListWrapperListing on Listing {\n  listingNamespace\n  listingNumber\n  __typename\n}\n\nfragment MultiUnitModalListing on Listing {\n  ...MultiUnitListWrapperListing\n  __typename\n}\n\nfragment HitInfoMobileListing on Listing {\n  detailPageUrl\n  instantBookable\n  minStayRange {\n    minStayHigh\n    minStayLow\n    __typename\n  }\n  listingId\n  rankedBadges(rankingStrategy: SERP) {\n    id\n    helpText\n    name\n    __typename\n  }\n  propertyId\n  propertyMetadata {\n    headline\n    __typename\n  }\n  superlativesBadges: rankedBadges(rankingStrategy: SERP_SUPERLATIVES) {\n    id\n    helpText\n    name\n    __typename\n  }\n  unitMetadata {\n    unitName\n    __typename\n  }\n  webRatingBadges: rankedBadges(rankingStrategy: SRP_WEB_RATING) {\n    id\n    helpText\n    name\n    __typename\n  }\n  ...DetailsListing\n  ...GeoDistanceListing\n  ...PriceListing\n  ...RatingListing\n  ...UrgencyMessageListing\n  ...MultiUnitHitListing\n  __typename\n}\n\nfragment ExpandedGroupsSearchResult on SearchResult {\n  expandedGroups {\n    ...ExpandedGroupExpandedGroup\n    __typename\n  }\n  __typename\n}\n\nfragment ExpandedGroupExpandedGroup on ExpandedGroup {\n  listings {\n    ...HitListing\n    ...MapHitListing\n    __typename\n  }\n  mapViewport {\n    neLat\n    neLong\n    swLat\n    swLong\n    __typename\n  }\n  __typename\n}\n\nfragment MapHitListing on Listing {\n  ...HitListing\n  geoCode {\n    latitude\n    longitude\n    __typename\n  }\n  __typename\n}\n\nfragment FilterCountsSearchRequestResult on SearchResult {\n  id\n  resultCount\n  filterGroups {\n    groupInfo {\n      name\n      id\n      __typename\n    }\n    filters {\n      count @include(if: $filterCounts)\n      checked\n      filter {\n        id\n        name\n        refineByQueryArgument\n        description\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment MapSearchResult on SearchResult {\n  mapViewport {\n    neLat\n    neLong\n    swLat\n    swLong\n    __typename\n  }\n  page\n  pageSize\n  listings {\n    ...MapHitListing\n    __typename\n  }\n  pinnedListing {\n    listing {\n      ...MapHitListing\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment PagerSearchResult on SearchResult {\n  fromRecord\n  toRecord\n  pageSize\n  pageCount\n  page\n  resultCount\n  __typename\n}\n\nfragment DestinationMessageSearchResult on SearchResult {\n  destinationMessage(assetVersion: 4) {\n    iconTitleText {\n      title\n      message\n      icon\n      messageValueType\n      link {\n        linkText\n        linkHref\n        __typename\n      }\n      __typename\n    }\n    ...DestinationMessageDestinationMessage\n    __typename\n  }\n  __typename\n}\n\nfragment DestinationMessageDestinationMessage on DestinationMessage {\n  iconText {\n    message\n    icon\n    messageValueType\n    __typename\n  }\n  __typename\n}\n\nfragment ADLSearchResult on SearchResult {\n  parsedParams {\n    q\n    coreFilters {\n      adults\n      children\n      pets\n      minBedrooms\n      maxBedrooms\n      minBathrooms\n      maxBathrooms\n      minNightlyPrice\n      maxNightlyPrice\n      minSleeps\n      __typename\n    }\n    dates {\n      arrivalDate\n      departureDate\n      __typename\n    }\n    sort\n    __typename\n  }\n  page\n  pageSize\n  pageCount\n  resultCount\n  fromRecord\n  toRecord\n  pinnedListing {\n    listing {\n      listingId\n      __typename\n    }\n    __typename\n  }\n  listings {\n    listingId\n    __typename\n  }\n  filterGroups {\n    filters {\n      checked\n      filter {\n        groupId\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  geography {\n    lbsId\n    name\n    description\n    location {\n      latitude\n      longitude\n      __typename\n    }\n    primaryGeoType\n    breadcrumbs {\n      name\n      countryCode\n      location {\n        latitude\n        longitude\n        __typename\n      }\n      primaryGeoType\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment RequestMarkerFragment on Query {\n  requestmarker\n  __typename\n}\n\nfragment SearchTermCarouselSearchResult on SearchResult {\n  discoveryXploreFeeds {\n    results {\n      id\n      title\n      items {\n        ... on SearchDiscoveryFeedItem {\n          type\n          imageHref\n          place {\n            uuid\n            name {\n              full\n              simple\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  typeaheadSuggestion {\n    name\n    __typename\n  }\n  __typename\n}\n\nfragment InternalToolsSearchResult on SearchResult {\n  internalTools {\n    searchServiceUrl\n    __typename\n  }\n  __typename\n}\n\nfragment SEOMetaDataParamsSearchResult on SearchResult {\n  page\n  resultCount\n  pageSize\n  geography {\n    name\n    lbsId\n    breadcrumbs {\n      name\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment GlobalInlineMessageSearchResult on SearchResult {\n  globalMessages {\n    ...GlobalInlineAlertGlobalMessages\n    __typename\n  }\n  __typename\n}\n\nfragment GlobalInlineAlertGlobalMessages on GlobalMessages {\n  alert {\n    action {\n      link {\n        href\n        text {\n          value\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    body {\n      text {\n        value\n        __typename\n      }\n      link {\n        href\n        text {\n          value\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    id\n    severity\n    title {\n      value\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment GlobalBannerContainerSearchResult on SearchResult {\n  globalMessages {\n    ...GlobalBannerGlobalMessages\n    __typename\n  }\n  __typename\n}\n\nfragment GlobalBannerGlobalMessages on GlobalMessages {\n  banner {\n    body {\n      text {\n        value\n        __typename\n      }\n      link {\n        href\n        text {\n          value\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    id\n    severity\n    title {\n      value\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment FlexibleDatesSearchResult on SearchResult {\n  percentBooked {\n    currentPercentBooked\n    __typename\n  }\n  __typename\n}\n',
    };
    // Action Dispatch
    dispatch(getPropertyList(payload));
  };

  // Calling get data function (Component Did mount)
  useEffect(() => {
    getData();
  }, []);

  // Search Text Functionality
  useEffect(() => {
    if (searchInputValue.length === 0) {
      setSearchFilterData([]);
      setShowFilterResults(false);
    } else {
      setShowFilterResults(true);

      let filterArr = propertiyList.filter((property) => {
        if (
          property.propertyMetadata.headline
            .toLowerCase()
            .includes(searchInputValue.toLowerCase()) ||
          property.propertyId.includes(searchInputValue.toLowerCase())
        ) {
          return property;
        }
      });

      setSearchFilterData(filterArr);
    }
  }, [searchInputValue]);

  // Remove Property from Property List
  const removeProperty = (propertyId) => {
    let removedArr = propertiyList.filter(
      (property) => property.propertyId !== propertyId
    );
    setPropertiyList(removedArr);
  };

  // Go to Next Page
  const increaseCurrentPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Go to Prev Page
  const decreaseCurrentPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // On Page Change, fetch new page data
  useEffect(() => {
    getData();
  }, [currentPage]);

  // Setting up property list, current page and total page size after every new data fetching
  useEffect(() => {
    if (propertyData.data && Object.keys(propertyData.data).length !== 0) {
      setPropertiyList(propertyData.data.results.listings);
      setCurrentPage(Number(propertyData.data.results.page));
      setTotalPageSize(Number(propertyData.data.results.pageSize));
    }
  }, [propertyData.data]);

  // Show Notification on error
  useEffect(() => {
    if (Object.keys(propertyData.error).length > 0) {
      notification['error']({
        message: propertyData.error.message,
      });
    }
  }, [propertyData.error]);

  // Send Api request with selected filter values
  const onApplyFilters = () => {
    if (filterValues.minBedrooms >= filterValues.maxBedrooms) {
      notification['warning']({
        message: 'Max bedrooms must be greater than Min bedrooms',
      });
    }

    if (filterValues.minBathrooms >= filterValues.maxBathrooms) {
      notification['warning']({
        message: 'Max bathroom must be greater than Min bathroom',
      });
    }

    if (filterValues.minSleeps >= filterValues.maxSleeps) {
      notification['warning']({
        message: 'Max sleeps must be greater than Min Sleeps',
      });
    }

    if (
      filterValues.minSleeps < filterValues.maxSleeps &&
      filterValues.minBathrooms < filterValues.maxBathrooms &&
      filterValues.minBedrooms < filterValues.maxBedrooms
    ) {
      getData(
        filterValues.minBathrooms,
        filterValues.maxBathrooms,
        filterValues.minBedrooms,
        filterValues.maxBedrooms
      );

      setShowFilterDrawer(false);
    }
  };
  return (
    <div className='App' style={{ height: '100vh' }}>
      {/* Display loading */}
      {propertyData.loading ? (
        <Spin
          size='large'
          style={{ right: '50%', top: '50%', position: 'absolute' }}
        />
      ) : (
        <Row>
          {/* Property List Container */}
          <Col span={8} style={{ padding: 10 }}>
            <Row align='middle' justify={'space-between'}>
              <Col span={18}>
                <Input
                  // size='small'
                  placeholder='Search by Property ID or Title'
                  prefix={<SearchOutlined />}
                  value={searchInputValue}
                  onChange={(e) => {
                    setSearchInputValue(e.target.value);
                  }}
                />
              </Col>
              <Col span={5} style={{ margin: 5 }}>
                <Button
                  type='primary'
                  shape='round'
                  icon={<FilterOutlined />}
                  ghost
                  onClick={() => {
                    setShowFilterDrawer(true);
                  }}
                  size={'small'}
                >
                  Filter
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Tabs defaultActiveKey='1' size='small'>
                  <TabPane tab='Comp Set (49)' key='1'>
                    <div>
                      <div style={{ padding: 5 }}>
                        <Checkbox>Select all Properties</Checkbox>
                      </div>

                      <div style={{ height: '65vh', overflowY: 'scroll' }}>
                        {showFilterResults
                          ? searchFilterData.map((property, index) => {
                              return (
                                <PropertyComponent
                                  property={property}
                                  setHoverPropertyId={setHoverPropertyId}
                                  removeProperty={removeProperty}
                                  key={index}
                                />
                              );
                            })
                          : propertiyList.map((property, index) => {
                              return (
                                <PropertyComponent
                                  property={property}
                                  setHoverPropertyId={setHoverPropertyId}
                                  removeProperty={removeProperty}
                                  key={index}
                                />
                              );
                            })}
                      </div>

                      <Row justify='space-between' style={{ margin: '10px' }}>
                        <Col span={10}>
                          Viewing {propertiyList.length === 0 ? 0 : 1}-
                          {propertiyList.length} of {propertiyList.length}{' '}
                          Properties
                        </Col>
                        {currentPage && totalPageSize && (
                          <Col
                            span={10}
                            offset={4}
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <Button
                              shape='circle'
                              icon={<LeftOutlined />}
                              disabled={currentPage === 1}
                              onClick={decreaseCurrentPage}
                              size={'small'}
                              style={{
                                marginRight: '10px',
                                marginBottom: '10px',
                              }}
                            />
                            <p>
                              Page {currentPage}/{totalPageSize}
                            </p>
                            <Button
                              shape='circle'
                              icon={<RightOutlined />}
                              disabled={currentPage === totalPageSize}
                              onClick={increaseCurrentPage}
                              size='small'
                              style={{
                                marginLeft: '10px',
                                marginBottom: '10px',
                              }}
                            />
                          </Col>
                        )}
                      </Row>
                    </div>
                  </TabPane>
                  <TabPane
                    tab='Other Properties (951)'
                    key='2'
                    style={{ height: '85vh' }}
                  >
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane
                    tab='Hotels (100)'
                    key='3'
                    style={{ height: '85vh' }}
                  >
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
          {/* Filter Container */}
          <Col
            span={showFilterDrawer ? 4 : 0}
            id='filterDrawer'
            style={{ padding: '10px' }}
          >
            <Row>
              <Button
                onClick={() => {
                  setShowFilterDrawer(false);
                }}
                icon={<CloseOutlined />}
                style={{ marginLeft: 'auto' }}
                size={'small'}
              ></Button>
            </Row>

            <Row>
              <Col span={24}>
                <Row>
                  <p>
                    <strong>Bedrooms</strong>
                  </p>
                </Row>
                <Row justify='space-between'>
                  <Col>{filterValues.minBedrooms}</Col>
                  <Col>Min Bedrooms</Col>
                  <Col>
                    <Button
                      shape='circle'
                      icon={<MinusOutlined />}
                      disabled={filterValues.minBedrooms === 1}
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          minBedrooms: filterValues.minBedrooms - 1,
                        });
                      }}
                      size={'small'}
                    />

                    <Button
                      shape='circle'
                      icon={<PlusOutlined />}
                      disabled={filterValues.minBedrooms === MAX_BEDROOM - 1}
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          minBedrooms: filterValues.minBedrooms + 1,
                        });
                      }}
                      size={'small'}
                    />
                  </Col>
                </Row>
                <Row justify='space-between'>
                  <Col>{filterValues.maxBedrooms}</Col>
                  <Col>Max Bedrooms</Col>
                  <Col>
                    <Button
                      shape='circle'
                      icon={<MinusOutlined />}
                      disabled={
                        filterValues.minBedrooms + 1 >= filterValues.maxBedrooms
                      }
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          maxBedrooms: filterValues.maxBedrooms - 1,
                        });
                      }}
                      size={'small'}
                    />

                    <Button
                      shape='circle'
                      icon={<PlusOutlined />}
                      disabled={filterValues.maxBedrooms === MAX_BEDROOM}
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          maxBedrooms: filterValues.maxBedrooms + 1,
                        });
                      }}
                      size={'small'}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Row>
                  <p>
                    <strong>Bathrooms</strong>
                  </p>
                </Row>
                <Row justify='space-between'>
                  <Col>{filterValues.minBathrooms}</Col>
                  <Col>Min Bathrooms</Col>
                  <Col>
                    <Button
                      shape='circle'
                      icon={<MinusOutlined />}
                      disabled={
                        filterValues.minBathrooms ===
                        INITIAL_FILTER_VALUES.minBathrooms
                      }
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          minBathrooms: filterValues.minBathrooms - 1,
                        });
                      }}
                      size={'small'}
                    />

                    <Button
                      shape='circle'
                      icon={<PlusOutlined />}
                      disabled={filterValues.minBathrooms === MAX_BATHROOM - 1}
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          minBathrooms: filterValues.minBathrooms + 1,
                        });
                      }}
                      size={'small'}
                    />
                  </Col>
                </Row>
                <Row justify='space-between'>
                  <Col>{filterValues.maxBathrooms}</Col>
                  <Col>Max Bathrooms</Col>
                  <Col>
                    <Button
                      shape='circle'
                      icon={<MinusOutlined />}
                      disabled={
                        filterValues.maxBathrooms - 1 <=
                        filterValues.minBathrooms
                      }
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          maxBathrooms: filterValues.maxBathrooms - 1,
                        });
                      }}
                      size={'small'}
                    />

                    <Button
                      shape='circle'
                      icon={<PlusOutlined />}
                      disabled={filterValues.maxBathrooms === MAX_BATHROOM}
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          maxBathrooms: filterValues.maxBathrooms + 1,
                        });
                      }}
                      size={'small'}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Row>
                  <p>
                    <strong>Sleeps</strong>
                  </p>
                </Row>
                <Row justify='space-between'>
                  <Col>{filterValues.minSleeps}</Col>
                  <Col>Min Sleeps</Col>
                  <Col>
                    <Button
                      shape='circle'
                      icon={<MinusOutlined />}
                      disabled={
                        filterValues.minSleeps ===
                        INITIAL_FILTER_VALUES.minSleeps
                      }
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          minSleeps: filterValues.minSleeps - 1,
                        });
                      }}
                      size={'small'}
                    />

                    <Button
                      shape='circle'
                      icon={<PlusOutlined />}
                      disabled={filterValues.minSleeps === MAX_SLEEP - 1}
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          minSleeps: filterValues.minSleeps + 1,
                        });
                      }}
                      size={'small'}
                    />
                  </Col>
                </Row>
                <Row justify='space-between'>
                  <Col>{filterValues.maxSleeps}</Col>
                  <Col>Max Sleeps</Col>
                  <Col>
                    <Button
                      shape='circle'
                      icon={<MinusOutlined />}
                      disabled={
                        filterValues.minSleeps + 1 >= filterValues.maxSleeps
                      }
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          maxSleeps: filterValues.maxSleeps - 1,
                        });
                      }}
                      size={'small'}
                    />

                    <Button
                      shape='circle'
                      icon={<PlusOutlined />}
                      disabled={filterValues.maxSleeps === MAX_SLEEP}
                      onClick={() => {
                        setFilterValues({
                          ...filterValues,
                          maxSleeps: filterValues.maxSleeps + 1,
                        });
                      }}
                      size={'small'}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Row>
                  <p>
                    <strong>Propert Reviews</strong>
                  </p>
                </Row>
                {PROPERTY_REVIEW_FILTER_OPTIONS.map((opt, index) => (
                  <Row key={index}>
                    <Col>
                      {' '}
                      <Checkbox
                        checked={filterValues.propertyReviews.includes(
                          opt.value
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilterValues({
                              ...filterValues,
                              propertyReviews: [
                                ...filterValues.propertyReviews,
                                opt.value,
                              ],
                            });
                          } else {
                            let reviews = filterValues.propertyReviews;
                            let index = reviews.indexOf(opt.value);
                            reviews.splice(index, 1);
                            setFilterValues({
                              ...filterValues,
                              propertyReviews: [...reviews],
                            });
                          }
                        }}
                      >
                        <Rating
                          ratingValue={parseInt(opt.value * 20)}
                          size={15}
                          transition
                          allowHalfIcon
                          fillColor={'#000'}
                          readonly
                        />{' '}
                        {opt.label}
                      </Checkbox>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>

            <Row>
              <Col style={{ marginLeft: 'auto' }}>
                <Button
                  onClick={() => {
                    setFilterValues(INITIAL_FILTER_VALUES);
                  }}
                  size={'small'}
                  type='primary'
                  ghost
                  style={{ margin: '5px' }}
                >
                  Reset
                </Button>
              </Col>
              <Col>
                <Button
                  size={'small'}
                  type='primary'
                  ghost
                  onClick={onApplyFilters}
                  style={{ margin: '5px' }}
                >
                  Apply
                </Button>
              </Col>
            </Row>
          </Col>
          {/* Map Container */}
          <Col span={showFilterDrawer ? 12 : 16}>
            {showFilterDrawer && (
              <div
                style={{
                  position: 'absolute',
                  backgroundColor: '#000',
                  width: '100%',
                  height: '100vh',
                  zIndex: 1,
                  opacity: '0.5',
                }}
              ></div>
            )}
            {showFilterResults
              ? Object.keys(propertyData.data).length !== 0 &&
                searchFilterData.length > 0 && (
                  <MapContainer
                    propertiyList={searchFilterData}
                    mapInitialViewState={
                      propertyData.data.results.geography.location
                    }
                    hoverPropertyId={hoverPropertyId}
                    removeProperty={removeProperty}
                  />
                )
              : Object.keys(propertyData.data).length !== 0 &&
                propertiyList.length > 0 && (
                  <MapContainer
                    propertiyList={propertiyList}
                    mapInitialViewState={
                      propertyData.data.results.geography.location
                    }
                    hoverPropertyId={hoverPropertyId}
                    removeProperty={removeProperty}
                  />
                )}
          </Col>
        </Row>
      )}
    </div>
  );
};

export default App;
