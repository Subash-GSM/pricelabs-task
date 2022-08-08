export const INITIAL_FILTER_VALUES = {
  minBedrooms: 1,
  maxBedrooms: 2,
  minBathrooms: 0,
  maxBathrooms: 1,
  minSleeps: 1,
  maxSleeps: 2,
  propertyReviews: [],
};

export const PROPERTY_REVIEW_FILTER_OPTIONS = [
  {
    value: 5,
    label: '5 + stars',
  },
  {
    value: 4,
    label: '4 + stars',
  },
  {
    value: 0,
    label: '0 + stars',
  },
];

export const MAX_BEDROOM = 20;
export const MAX_BATHROOM = 20;
export const MAX_SLEEP = 20;

export const RESPONSE_DATA = {
  data: {
    results: {
      id: 'b54150cb97e40c1d3e1ea1ba6079eb58',
      typeaheadSuggestion: {
        uuid: 'd972311c-c70b-4b96-8480-20005acbcfe0',
        term: 'Paris, France',
        name: 'Paris',
        __typename: 'TypeAheadSuggestion',
      },
      geography: {
        lbsId: 'd972311c-c70b-4b96-8480-20005acbcfe0',
        gaiaId: '2734',
        location: {
          latitude: 48.856696,
          longitude: 2.351761,
          __typename: 'GeoCode',
        },
        isGeocoded: false,
        shouldShowMapCentralPin: true,
        __typename: 'SearchGeography',
        name: 'Paris',
        description: 'Paris, France',
        primaryGeoType: 'administrative_division_level_2',
        breadcrumbs: [
          {
            name: 'Europe',
            countryCode: null,
            location: {
              latitude: 54.525963,
              longitude: 15.255118,
              __typename: 'GeoCode',
            },
            primaryGeoType: 'continent',
            __typename: 'SearchGeography',
          },
          {
            name: 'France',
            countryCode: 'FR',
            location: {
              latitude: 46.227638,
              longitude: 2.213749,
              __typename: 'GeoCode',
            },
            primaryGeoType: 'country',
            __typename: 'SearchGeography',
          },
          {
            name: 'Île-de-France',
            countryCode: 'FR',
            location: {
              latitude: 48.856132,
              longitude: 2.349701,
              __typename: 'GeoCode',
            },
            primaryGeoType: 'administrative_division_level_1',
            __typename: 'SearchGeography',
          },
        ],
      },
      propertyRedirectUrl: null,
      __typename: 'SearchResult',
      destination: {
        breadcrumbs: [
          {
            name: 'Home',
            url: 'https://www.vrbo.com/vacation-rentals',
            __typename: 'SearchDestinationLink',
          },
          {
            name: 'France',
            url: 'https://www.vrbo.com/vacation-rentals/europe/france',
            __typename: 'SearchDestinationLink',
          },
          {
            name: 'Ile-de-France',
            url: 'https://www.vrbo.com/vacation-rentals/europe/france/ile-de-france',
            __typename: 'SearchDestinationLink',
          },
          {
            name: 'Paris',
            url: 'https://www.vrbo.com/vacation-rentals/europe/france/ile-de-france/paris',
            __typename: 'SearchDestinationLink',
          },
        ],
        __typename: 'SearchDestination',
      },
      destinationMessage: {
        iconTitleText: {
          title: 'Need flexibility? We’ve got you.{NEW_LINE_PLACEHOLDER}',
          message:
            'Some places let you cancel for free closer to your check-in date. Check the property’s policy for details.',
          icon: 'DELAY_REFUND',
          messageValueType: 'PLAN_FOR_PEACE_OF_MIND',
          link: null,
          __typename: 'IconTitleText',
        },
        iconText: null,
        __typename: 'DestinationMessage',
      },
      resultCount: 499,
      filterGroups: [
        {
          groupInfo: {
            name: 'Popular',
            id: '13',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '74',
                name: 'House',
                refineByQueryArgument: 'filter:74',
                description: null,
                __typename: 'Filter',
                groupId: '13',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '13',
                name: 'Internet or WiFi',
                refineByQueryArgument: 'filter:13',
                description: null,
                __typename: 'Filter',
                groupId: '13',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '92',
                name: 'Apartment or condo',
                refineByQueryArgument: 'filter:92',
                description: null,
                __typename: 'Filter',
                groupId: '13',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '23',
                name: 'Pool',
                refineByQueryArgument: 'filter:23',
                description: 'These places have access to a pool.',
                __typename: 'Filter',
                groupId: '13',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '95',
                name: '★★★★☆ 4+ stars',
                refineByQueryArgument: 'filter:95',
                description: null,
                __typename: 'Filter',
                groupId: '13',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '1',
                name: 'Air conditioning',
                refineByQueryArgument: 'filter:1',
                description: null,
                __typename: 'Filter',
                groupId: '13',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Price',
            id: '26',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '1023',
                name: 'Has Updated Price',
                refineByQueryArgument: 'filter:1023',
                description: null,
                __typename: 'Filter',
                groupId: '26',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Rooms & spaces',
            id: '24',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '99',
                name: 'Kitchen',
                refineByQueryArgument: 'filter:99',
                description: null,
                __typename: 'Filter',
                groupId: '24',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '114',
                name: 'Dining Room',
                refineByQueryArgument: 'filter:114',
                description: null,
                __typename: 'Filter',
                groupId: '24',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '115',
                name: 'Living Room',
                refineByQueryArgument: 'filter:115',
                description: null,
                __typename: 'Filter',
                groupId: '24',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '116',
                name: 'Outdoor space',
                refineByQueryArgument: 'filter:116',
                description: null,
                __typename: 'Filter',
                groupId: '24',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Free Cancellation',
            id: '22',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '108',
                name: 'Free cancellation',
                refineByQueryArgument: 'filter:108',
                description:
                  'View properties that offer free cancellation depending on your trip dates. View cancellation policies for details.',
                __typename: 'Filter',
                groupId: '22',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Features & amenities',
            id: '1',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '13',
                name: 'Internet or WiFi',
                refineByQueryArgument: 'filter:13',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '23',
                name: 'Pool',
                refineByQueryArgument: 'filter:23',
                description: 'These places have access to a pool.',
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '1',
                name: 'Air conditioning',
                refineByQueryArgument: 'filter:1',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '2',
                name: 'Balcony',
                refineByQueryArgument: 'filter:2',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '3',
                name: 'Bed linens provided',
                refineByQueryArgument: 'filter:3',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '109',
                name: 'Stove',
                refineByQueryArgument: 'filter:109',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '110',
                name: 'Dryer',
                refineByQueryArgument: 'filter:110',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '17',
                name: 'Washer',
                refineByQueryArgument: 'filter:17',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '20',
                name: 'Oven',
                refineByQueryArgument: 'filter:20',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '25',
                name: 'TV',
                refineByQueryArgument: 'filter:25',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '24',
                name: 'Private pool',
                refineByQueryArgument: 'filter:24',
                description: 'Find a place with a pool all to yourself.',
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '8',
                name: 'Garden or backyard',
                refineByQueryArgument: 'filter:8',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '18',
                name: 'Microwave',
                refineByQueryArgument: 'filter:18',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '5',
                name: 'Dishwasher',
                refineByQueryArgument: 'filter:5',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '21',
                name: 'Parking available',
                refineByQueryArgument: 'filter:21',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '22',
                name: 'Patio or deck',
                refineByQueryArgument: 'filter:22',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '12',
                name: 'Hot tub',
                refineByQueryArgument: 'filter:12',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '16',
                name: 'King-sized bed',
                refineByQueryArgument: 'filter:16',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '14',
                name: 'Iron and board',
                refineByQueryArgument: 'filter:14',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '19',
                name: 'Outdoor grill',
                refineByQueryArgument: 'filter:19',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '7',
                name: 'Fireplace',
                refineByQueryArgument: 'filter:7',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '4',
                name: 'Crib',
                refineByQueryArgument: 'filter:4',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '15',
                name: "Kids' high chair",
                refineByQueryArgument: 'filter:15',
                description: null,
                __typename: 'Filter',
                groupId: '1',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Property reviews',
            id: '10',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '95',
                name: '★★★★☆ 4+ stars',
                refineByQueryArgument: 'filter:95',
                description: null,
                __typename: 'Filter',
                groupId: '10',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '10140',
                name: 'Highly rated for location',
                refineByQueryArgument: 'filter:10140',
                description:
                  'Guests rated the location of these places 4+ stars.',
                __typename: 'Filter',
                groupId: '10',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '10139',
                name: 'Highly rated for cleanliness',
                refineByQueryArgument: 'filter:10139',
                description:
                  'Guests rated these places 4+ stars for cleanliness.',
                __typename: 'Filter',
                groupId: '10',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'House rules',
            id: '2',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '27',
                name: 'Pets allowed',
                refineByQueryArgument: 'filter:27',
                description: null,
                __typename: 'Filter',
                groupId: '2',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '29',
                name: 'Children welcome',
                refineByQueryArgument: 'filter:29',
                description:
                  'These homes are suitable for children according to owner or manager.',
                __typename: 'Filter',
                groupId: '2',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '28',
                name: 'Smoking allowed',
                refineByQueryArgument: 'filter:28',
                description: null,
                __typename: 'Filter',
                groupId: '2',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '26',
                name: 'Events allowed',
                refineByQueryArgument: 'filter:26',
                description: null,
                __typename: 'Filter',
                groupId: '2',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Properties good for',
            id: '4',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '43',
                name: 'Families',
                refineByQueryArgument: 'filter:43',
                description:
                  'Families rated these places 4+ stars or guests recommended them for families.',
                __typename: 'Filter',
                groupId: '4',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Neighborhoods',
            id: '12',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '7de4c16e-ab3e-406b-bc09-57d713130d21',
                name: 'Marais',
                refineByQueryArgument:
                  'filter:7de4c16e-ab3e-406b-bc09-57d713130d21',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '372b3f6d-3fd4-4e7c-85c3-9c9b67260db4',
                name: 'Saint-Germain-des-Pres',
                refineByQueryArgument:
                  'filter:372b3f6d-3fd4-4e7c-85c3-9c9b67260db4',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '8a010133-9a77-4978-b76d-7b21d4a40af3',
                name: '7th Arrondissement',
                refineByQueryArgument:
                  'filter:8a010133-9a77-4978-b76d-7b21d4a40af3',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '463249f7-34bd-4af3-be36-a229ace5d74c',
                name: '6th Arrondissement',
                refineByQueryArgument:
                  'filter:463249f7-34bd-4af3-be36-a229ace5d74c',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: 'a5c37f49-956f-4472-b667-7c53f711bbb6',
                name: 'Montmartre',
                refineByQueryArgument:
                  'filter:a5c37f49-956f-4472-b667-7c53f711bbb6',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: 'aa1a48f4-04e7-4281-8ddb-a5375171acbf',
                name: 'Latin Quarter',
                refineByQueryArgument:
                  'filter:aa1a48f4-04e7-4281-8ddb-a5375171acbf',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '14370f1a-5746-41ab-881f-60f6eb8b89a1',
                name: '5th Arrondissement',
                refineByQueryArgument:
                  'filter:14370f1a-5746-41ab-881f-60f6eb8b89a1',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '55f004a3-7d6d-42d8-bc88-88867b44efb7',
                name: 'Quartier du Gros-Caillou',
                refineByQueryArgument:
                  'filter:55f004a3-7d6d-42d8-bc88-88867b44efb7',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: 'c9b2efaa-f8f8-48ab-a379-5ec30c0a727c',
                name: '1st Arrondissement',
                refineByQueryArgument:
                  'filter:c9b2efaa-f8f8-48ab-a379-5ec30c0a727c',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '4637bfd0-e525-493e-81f4-eadd977bf913',
                name: '16th Arrondissement',
                refineByQueryArgument:
                  'filter:4637bfd0-e525-493e-81f4-eadd977bf913',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: 'e1375a89-630b-44bf-b8a5-586ba42bef9d',
                name: '4th Arrondissement',
                refineByQueryArgument:
                  'filter:e1375a89-630b-44bf-b8a5-586ba42bef9d',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: 'e3b4da27-e30e-4a27-8924-d0e56c67a3aa',
                name: '8th Arrondissement',
                refineByQueryArgument:
                  'filter:e3b4da27-e30e-4a27-8924-d0e56c67a3aa',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '38915e8b-a728-47a4-9f08-61cd110efeca',
                name: '3rd Arrondissement',
                refineByQueryArgument:
                  'filter:38915e8b-a728-47a4-9f08-61cd110efeca',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '706b98bf-73bf-4636-9705-6ec687b5373b',
                name: '2nd Arrondissement',
                refineByQueryArgument:
                  'filter:706b98bf-73bf-4636-9705-6ec687b5373b',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '1480a73c-425a-4505-9ecf-b65a400c282f',
                name: 'Champs-Élysées',
                refineByQueryArgument:
                  'filter:1480a73c-425a-4505-9ecf-b65a400c282f',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '6dde4c8f-f76b-4ccf-8c47-b8b4b44f0410',
                name: '11th Arrondissement',
                refineByQueryArgument:
                  'filter:6dde4c8f-f76b-4ccf-8c47-b8b4b44f0410',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '623a4843-95d9-45c2-a29d-a256a0d4bb2f',
                name: '15th Arrondissement',
                refineByQueryArgument:
                  'filter:623a4843-95d9-45c2-a29d-a256a0d4bb2f',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: 'd3684dc6-75da-490b-b45d-9e610443cb85',
                name: '9th Arrondissement',
                refineByQueryArgument:
                  'filter:d3684dc6-75da-490b-b45d-9e610443cb85',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: 'ea9c194e-8002-4001-81da-d19111eb7e7a',
                name: 'Montparnasse',
                refineByQueryArgument:
                  'filter:ea9c194e-8002-4001-81da-d19111eb7e7a',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '76d73d57-e678-4351-a4a6-15437d49782f',
                name: 'Les Halles',
                refineByQueryArgument:
                  'filter:76d73d57-e678-4351-a4a6-15437d49782f',
                description: null,
                __typename: 'Filter',
                groupId: '12',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Location',
            id: '3',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '33',
                name: 'Downtown',
                refineByQueryArgument: 'filter:33',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '30',
                name: 'Beach',
                refineByQueryArgument: 'filter:30',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '32',
                name: 'Beachfront',
                refineByQueryArgument: 'filter:32',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '42',
                name: 'Waterfront',
                refineByQueryArgument: 'filter:42',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '91',
                name: 'Oceanfront',
                refineByQueryArgument: 'filter:91',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '37',
                name: 'Ocean',
                refineByQueryArgument: 'filter:37',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '35',
                name: 'Lake',
                refineByQueryArgument: 'filter:35',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '31',
                name: 'Beach view',
                refineByQueryArgument: 'filter:31',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '36',
                name: 'Mountains',
                refineByQueryArgument: 'filter:36',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '38',
                name: 'Rural',
                refineByQueryArgument: 'filter:38',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '41',
                name: 'Village',
                refineByQueryArgument: 'filter:41',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '39',
                name: 'Ski-in/ski-out',
                refineByQueryArgument: 'filter:39',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '34',
                name: 'Golf course',
                refineByQueryArgument: 'filter:34',
                description: null,
                __typename: 'Filter',
                groupId: '3',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Property type',
            id: '6',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '74',
                name: 'House',
                refineByQueryArgument: 'filter:74',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '92',
                name: 'Apartment or condo',
                refineByQueryArgument: 'filter:92',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '83',
                name: 'Villa',
                refineByQueryArgument: 'filter:83',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '69',
                name: 'Cottage',
                refineByQueryArgument: 'filter:69',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '62',
                name: 'Boat',
                refineByQueryArgument: 'filter:62',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '75',
                name: 'Houseboat',
                refineByQueryArgument: 'filter:75',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '65',
                name: 'Castle',
                refineByQueryArgument: 'filter:65',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '64',
                name: 'Cabin',
                refineByQueryArgument: 'filter:64',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '73',
                name: 'Hotel',
                refineByQueryArgument: 'filter:73',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '66',
                name: 'Chalet',
                refineByQueryArgument: 'filter:66',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '79',
                name: 'Resort',
                refineByQueryArgument: 'filter:79',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '72',
                name: 'Guest house',
                refineByQueryArgument: 'filter:72',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '70',
                name: 'Estate',
                refineByQueryArgument: 'filter:70',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '78',
                name: 'RV',
                refineByQueryArgument: 'filter:78',
                description: null,
                __typename: 'Filter',
                groupId: '6',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Nearby activities',
            id: '5',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '54',
                name: 'Shopping',
                refineByQueryArgument: 'filter:54',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '10145',
                name: 'Museums',
                refineByQueryArgument: 'filter:10145',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '58',
                name: 'Wineries or breweries',
                refineByQueryArgument: 'filter:58',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '50',
                name: 'Horseback riding',
                refineByQueryArgument: 'filter:50',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '10144',
                name: 'Spa and wellness',
                refineByQueryArgument: 'filter:10144',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '55',
                name: 'Skiing or snowboarding',
                refineByQueryArgument: 'filter:55',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '48',
                name: 'Golfing',
                refineByQueryArgument: 'filter:48',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '49',
                name: 'Hiking',
                refineByQueryArgument: 'filter:49',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '47',
                name: 'Fishing',
                refineByQueryArgument: 'filter:47',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '46',
                name: 'Cycling',
                refineByQueryArgument: 'filter:46',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '10143',
                name: 'Theme parks',
                refineByQueryArgument: 'filter:10143',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '10142',
                name: 'Zoo or wildlife viewing',
                refineByQueryArgument: 'filter:10142',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '57',
                name: 'Watersports',
                refineByQueryArgument: 'filter:57',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '53',
                name: 'Scuba diving or snorkeling',
                refineByQueryArgument: 'filter:53',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '56',
                name: 'Tennis',
                refineByQueryArgument: 'filter:56',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '10146',
                name: 'Casinos',
                refineByQueryArgument: 'filter:10146',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '10141',
                name: 'Winter activities',
                refineByQueryArgument: 'filter:10141',
                description:
                  'Enjoy the season with activities like ice skating, snowmobiling, or sledding.',
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '52',
                name: 'Rock or mountain climbing',
                refineByQueryArgument: 'filter:52',
                description: null,
                __typename: 'Filter',
                groupId: '5',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Premier Host',
            id: '11',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '97',
                name: 'Premier Host',
                refineByQueryArgument: 'filter:97',
                description:
                  'The owner or manager of this property consistently provides great experiences for their guests.',
                __typename: 'Filter',
                groupId: '11',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Safety',
            id: '20',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '100',
                name: 'Smoke detector',
                refineByQueryArgument: 'filter:100',
                description: null,
                __typename: 'Filter',
                groupId: '20',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '101',
                name: 'Carbon-monoxide detector',
                refineByQueryArgument: 'filter:101',
                description: null,
                __typename: 'Filter',
                groupId: '20',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Accessibility',
            id: '19',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '85',
                name: 'Elevator',
                refineByQueryArgument: 'filter:85',
                description: null,
                __typename: 'Filter',
                groupId: '19',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '87',
                name: 'Wheelchair accessible',
                refineByQueryArgument: 'filter:87',
                description: null,
                __typename: 'Filter',
                groupId: '19',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Virtual Tour',
            id: '16',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '98',
                name: 'Virtual Tour',
                refineByQueryArgument: 'filter:98',
                description: null,
                __typename: 'Filter',
                groupId: '16',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Booking Options',
            id: '9',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '89',
                name: 'Instant Confirmation',
                refineByQueryArgument: 'filter:89',
                description: 'Book without waiting for owner approval.',
                __typename: 'Filter',
                groupId: '9',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '1022',
                name: 'Pay later with Affirm',
                refineByQueryArgument: 'filter:1022',
                description: null,
                __typename: 'Filter',
                groupId: '9',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
        {
          groupInfo: {
            name: 'Discounts',
            id: '25',
            __typename: 'FilterGroupInfo',
          },
          filters: [
            {
              count: 5,
              checked: false,
              filter: {
                id: '117',
                name: 'Weekly discount',
                refineByQueryArgument: 'filter:117',
                description:
                  'The host offers a discount for staying 7 nights or longer.',
                __typename: 'Filter',
                groupId: '25',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '118',
                name: 'Monthly discount',
                refineByQueryArgument: 'filter:118',
                description:
                  'The host offers a discount for staying 28 nights or longer.',
                __typename: 'Filter',
                groupId: '25',
              },
              __typename: 'SearchFilter',
            },
            {
              count: 5,
              checked: false,
              filter: {
                id: '119',
                name: 'New listing discount',
                refineByQueryArgument: 'filter:119',
                description: null,
                __typename: 'Filter',
                groupId: '25',
              },
              __typename: 'SearchFilter',
            },
          ],
          __typename: 'SearchFilterGroup',
        },
      ],
      page: 1,
      pageSize: 50,
      queryUUID: '0047da15-9a43-4948-9c79-51be69860962',
      listings: [
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/0c74f7da.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/0c74f7da.c9.jpg',
              mab: {
                banditId: '811.6410401.1999054',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/00f736e9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/00f736e9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/9bfd7f89.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/9bfd7f89.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/1a50cb0f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/1a50cb0f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/66749cf6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/66749cf6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/6857d648.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/6857d648.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/771a1238.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/771a1238.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/189f0a5c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/189f0a5c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/61b36b1b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/61b36b1b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/4380ecd5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/4380ecd5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/4e56d162.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/4e56d162.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/d61d144a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/d61d144a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/36bed457.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/36bed457.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/18fa5d64.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/18fa5d64.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/76465842.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/76465842.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/03346927.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/03346927.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/417cb965.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/417cb965.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/7af3231e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/7af3231e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/d5e0c266.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/d5e0c266.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/0a8f0a73.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/0a8f0a73.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/ea63ffff.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/ea63ffff.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/a83cbc7f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/a83cbc7f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/1b189aeb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/1b189aeb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/2b6fca0f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/2b6fca0f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/cd094c8c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/cd094c8c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/0b38aa8a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/0b38aa8a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/264259bc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/264259bc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/349647f8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/349647f8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/c2c0df8b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/c2c0df8b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/ae758253.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/ae758253.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/579d4ac9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/579d4ac9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/717bd356.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/717bd356.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/bce2ca82.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/bce2ca82.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/5f60fc3f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/5f60fc3f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/718aff08.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/718aff08.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/aa81d6e4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/aa81d6e4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/36466773.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/36466773.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/09bf3b71.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/09bf3b71.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/4d2b54b2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/4d2b54b2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/3de12b23.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/3de12b23.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/ab02854f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/ab02854f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/4867ec7c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33584200/33584171/4867ec7c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '811.6410401.1999054',
          detailPageUrl: '/6410401ha?unitId=1999054&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '6410401ha',
          propertyMetadata: {
            headline:
              'Large duplex studio at the corner of the town hall square',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 0,
          propertyType: 'Studio',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 312,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/47245bb1-b6d0-e311-a563-d4ae52897104","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$128","perioddescription":"avg/night"}',
            formattedAmount: '$128',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.825641,
          reviewCount: 195,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 6410401,
          geoCode: {
            latitude: 48.858131408691406,
            longitude: 2.353128671646118,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/3aa3542d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/3aa3542d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/a5d4ed02.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/a5d4ed02.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/6c8cdffd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/6c8cdffd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/6cb1850e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/6cb1850e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/b51fec39.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/b51fec39.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/f320411b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/f320411b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/11dce94c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/11dce94c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/276a3ed6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/276a3ed6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/ada6b62b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/ada6b62b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/2501352b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/2501352b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/a0fc472d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/a0fc472d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/07d7fbd2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/07d7fbd2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/87ea0dd2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/87ea0dd2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/3ab78486.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/3ab78486.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/9cbb01c7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/9cbb01c7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/d8a3c34e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/d8a3c34e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/10defaea.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/10defaea.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/c296ed72.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/c296ed72.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/aae31290.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/aae31290.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/5d3bf814.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/5d3bf814.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/b8c688e3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/b8c688e3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/1717412f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/1717412f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/8b6cc161.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/8b6cc161.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/91172c13.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33602100/33602086/91172c13.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '811.6617212.2071413',
          detailPageUrl: '/6617212ha?unitId=2071413&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 5,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '6617212ha',
          propertyMetadata: {
            headline:
              '2 ROOMS WITH VIEW IN THE HEART OF THE CONFIDENTIAL MARAIS',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 431,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.4 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/d48987b1-b6d0-e311-a563-d4ae52897104","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$164","perioddescription":"avg/night"}',
            formattedAmount: '$164',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.887574,
          reviewCount: 169,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 6617212,
          geoCode: {
            latitude: 48.85440826416016,
            longitude: 2.360043525695801,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/03b2ee43.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/03b2ee43.c9.jpg',
              mab: {
                banditId: '321.49273.49273',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/82cb57f3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/82cb57f3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/f937118f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/f937118f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/cac2022d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/cac2022d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/68f1de30.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/68f1de30.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/ccee9545.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/ccee9545.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/8f1c5d85.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/8f1c5d85.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/c9ae4fa7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/c9ae4fa7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/6be9b659.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/6be9b659.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/1471dd88.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/1471dd88.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/dfd9a262.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/dfd9a262.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/c59a8db8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/c59a8db8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/761e2986.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/761e2986.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/04c356a7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/04c356a7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/e51883da.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/e51883da.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/c03abd8d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/c03abd8d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/dd83d85b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/dd83d85b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/5346f06e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/5346f06e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/11b1a8ca.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/11b1a8ca.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/34b52638.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/34b52638.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/010bebf3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/010bebf3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/ba0ec763.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/ba0ec763.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/f68b130b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/f68b130b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/4602250d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34190000/34185600/34185543/4602250d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.49273.49273',
          detailPageUrl: '/49273?unitId=49273&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 60 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '49273',
          propertyMetadata: {
            headline:
              "Marais - Unique 'Country Cottage in Heart of Paris' Romantic Garden Apartment",
            __typename: 'PropertyMetadata',
            propertyName: 'Cottage in the Heart of Paris',
          },
          superlativesBadges: [
            {
              id: '6',
              helpText: null,
              name: 'Exceptional! 5/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 0,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 320,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.6 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/c52335dd-9652-4287-b824-746c5e2f80a8","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$159","perioddescription":"avg/night"}',
            formattedAmount: '$159',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.9558825,
          reviewCount: 136,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 49273,
          geoCode: {
            latitude: 48.86220169067383,
            longitude: 2.3615026473999023,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/19174a03.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/19174a03.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/e4cf10d9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/e4cf10d9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/c3c33398.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/c3c33398.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/c7f66009.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/c7f66009.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/195dc6f0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/195dc6f0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/0573be76.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/0573be76.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/3fd2029d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/3fd2029d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/707555e0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/707555e0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/969273b3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/969273b3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/1e401e69.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/1e401e69.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/86afb1e6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/86afb1e6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/656a7bcd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/656a7bcd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/aab501ac.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/aab501ac.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/9f3fbdf8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/9f3fbdf8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/2c8e4b59.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/2c8e4b59.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/79239f9f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/38000000/37890000/37883100/37883021/79239f9f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.1668245.2229641',
          detailPageUrl: '/1668245?unitId=2229641&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1668245',
          propertyMetadata: {
            headline: 'Magnific studio with balcony AC',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_2229641',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Studio',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 215,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.4 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/4a7978fc-7fa6-45c4-97e4-a39efb175e0e","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$123","perioddescription":"avg/night"}',
            formattedAmount: '$123',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.935484,
          reviewCount: 31,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 1668245,
          geoCode: {
            latitude: 48.85960277,
            longitude: 2.34677788,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Pets Welcome',
              id: '9',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Fireplace',
              id: '16',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/c9c4afb4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/c9c4afb4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/4575ff91.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/4575ff91.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/0931c7b8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/0931c7b8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/880265fa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/880265fa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/de043db4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/de043db4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/3790db24.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/3790db24.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/77ccd894.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/77ccd894.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/e940e08f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/e940e08f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/97cac2dc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/79000000/78410000/78401100/78401035/97cac2dc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.2118685.2294609',
          detailPageUrl: '/2118685a?unitId=2294609&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 1,
            minStayLow: 1,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '2118685a',
          propertyMetadata: {
            headline: 'Apartment',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'Room',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 3,
          petsAllowed: true,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: null,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/67e7a874-34b0-4d45-9852-16359a381168","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$97","perioddescription":"avg/night"}',
            formattedAmount: '$97',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.7777777,
          reviewCount: 9,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 2118685,
          geoCode: {
            latitude: 48.84220644,
            longitude: 2.34329398,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/1f2c092f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/1f2c092f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/6e1aafa6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/6e1aafa6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/ee351204.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/ee351204.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/cb67557c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/cb67557c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/11fcdd84.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/11fcdd84.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/aab82b1c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/aab82b1c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/a59146cc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/a59146cc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/2c433b76.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/2c433b76.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/a8112b63.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/a8112b63.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/0d222401.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/0d222401.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/195016c8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/195016c8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/c9d44853.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/c9d44853.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/2a431f2b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/2a431f2b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/c3f2aa88.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/c3f2aa88.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/16041ec2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/16041ec2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/166b4357.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/166b4357.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/0ec3d1f2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/0ec3d1f2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/0269d25a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/0269d25a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/12283bd5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/12283bd5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/793529fa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/793529fa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/7de6da28.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/7de6da28.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/e1b4be70.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33965900/33965893/e1b4be70.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.295042.295042',
          detailPageUrl: '/295042?unitId=295042&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 6,
            minStayLow: 6,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 60 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '295042',
          propertyMetadata: {
            headline:
              'Prestigious Elegance Marais Apartment, AIR CONDITIONING,',
            __typename: 'PropertyMetadata',
            propertyName: 'Elegance Marais',
          },
          superlativesBadges: [
            {
              id: '6',
              helpText: null,
              name: 'Exceptional! 5/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 409,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.4 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/5c77aa2a-2b95-4eac-a6d7-95b8f1e42e55","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$170","perioddescription":"avg/night"}',
            formattedAmount: '$170',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.978022,
          reviewCount: 91,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 295042,
          geoCode: {
            latitude: 48.85675048828125,
            longitude: 2.3603224754333496,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Garden',
              id: '23',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/1a1fd320.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/1a1fd320.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/aa22662f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/aa22662f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/d03ef395.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/d03ef395.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/6c14e7ec.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/6c14e7ec.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/35eef9bf.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/35eef9bf.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/1f08eb22.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/1f08eb22.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/d0572253.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/d0572253.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/348ce42b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/348ce42b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/6f2dae36.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54070000/54069500/54069500/6f2dae36.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1273636.1440788',
          detailPageUrl: '/1273636a?unitId=1440788&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1273636a',
          propertyMetadata: {
            headline: 'apartment courtyard with trees, in the heart of Paris',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.6/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 323,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.6 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/1675310c-9b54-4b95-9bcd-aed2c1dc2cca","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$101","perioddescription":"avg/night"}',
            formattedAmount: '$101',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.597015,
          reviewCount: 67,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1273636,
          geoCode: {
            latitude: 48.8783761,
            longitude: 2.3422279999999773,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Fireplace',
              id: '16',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/a57a883f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/a57a883f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/2b8ea607.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/2b8ea607.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/bacea6d6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/bacea6d6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/64a818d9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/64a818d9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/51e57bcd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/51e57bcd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/4a77999b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/4a77999b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/01a3aa83.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/01a3aa83.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/3cf6a72b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/3cf6a72b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/ec0885e4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/ec0885e4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/8b3382ee.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/8b3382ee.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/5bb7e746.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/5bb7e746.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/ff13d52b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/ff13d52b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/8d9a8833.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/8d9a8833.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/aa824b98.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/aa824b98.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/25d831a7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33967300/33967236/25d831a7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.250303.250303',
          detailPageUrl: '/250303?unitId=250303&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 60 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '250303',
          propertyMetadata: {
            headline:
              'Eiffel Tower Suite and Luxury Paris Apartment Rental with Wifi',
            __typename: 'PropertyMetadata',
            propertyName: 'Eiffel Tower Suite',
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.7/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 538,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.4 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/eca76503-9280-4a3f-8b84-b9c4abf2a02b","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$239","perioddescription":"avg/night"}',
            formattedAmount: '$239',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.6985292,
          reviewCount: 136,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 250303,
          geoCode: {
            latitude: 48.85892868041992,
            longitude: 2.300187349319458,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/b0945939.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/b0945939.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/ba424419.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/ba424419.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/d24142cd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/d24142cd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/9961dab7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/9961dab7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/074a738f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/074a738f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/92402c5e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/92402c5e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/79194327.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/79194327.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/ba3d2ffd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/ba3d2ffd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/1685c16b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/1685c16b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/12dd2773.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/12dd2773.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/7fe1b346.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/7fe1b346.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/fa74c691.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/fa74c691.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/a6e3fa25.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/a6e3fa25.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/6c80d949.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/6c80d949.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/e2605616.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27170000/27166700/27166677/e2605616.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '811.6693734.2135399',
          detailPageUrl: '/6693734ha?unitId=2135399&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '6693734ha',
          propertyMetadata: {
            headline: 'Nice little room in the heart of  Paris',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 0,
          propertyType: 'Studio',
          sleeps: 1,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 108,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/896ab7b1-b6d0-e311-a563-d4ae52897104","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$46","perioddescription":"avg/night"}',
            formattedAmount: '$46',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.9166665,
          reviewCount: 48,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 6693734,
          geoCode: {
            latitude: 48.866546630859375,
            longitude: 2.373438596725464,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/aa7d3863.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/aa7d3863.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/343a4dda.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/343a4dda.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/ad25cd50.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/ad25cd50.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/f0a55347.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/f0a55347.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/27beb841.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/27beb841.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/bc23a088.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/bc23a088.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/3db42c7d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/3db42c7d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/a4999733.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/a4999733.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/938fb94c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/938fb94c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/d4f67375.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/d4f67375.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/b52b2934.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/b52b2934.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/f79e53f1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/f79e53f1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/17e2b918.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/17e2b918.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/02d52570.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/02d52570.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/0f0b6291.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/0f0b6291.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/af5cad0c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/af5cad0c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/874e9cba.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/874e9cba.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/f932e20e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/f932e20e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/073b305b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/073b305b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/2a9b9126.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/2a9b9126.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/06c0e0c5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/06c0e0c5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/abe85358.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/abe85358.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/64fab468.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33484100/33484077/64fab468.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.20090.20090',
          detailPageUrl: '/20090?unitId=20090&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 7,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '20090',
          propertyMetadata: {
            headline: 'Le Marais Prestigious Great Apt, Balcony, AIR COND.',
            __typename: 'PropertyMetadata',
            propertyName: 'Heart MARAIS♥BOURG TIBOURG♥',
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.7/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 323,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/0d57afcf-960c-4ac6-967e-7cda0093f101","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$113","perioddescription":"avg/night"}',
            formattedAmount: '$113',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.702381,
          reviewCount: 84,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 20090,
          geoCode: {
            latitude: 48.857444763183594,
            longitude: 2.3562090396881104,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/16ecae84.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/16ecae84.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/f35856b2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/f35856b2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/258a4f81.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/258a4f81.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/6c54ad7a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/6c54ad7a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/c615b049.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/c615b049.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/bad45014.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/bad45014.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/0df42c70.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/0df42c70.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/5b73c717.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/5b73c717.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/27ffa3dd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/27ffa3dd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/8fb1749c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/8fb1749c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/9a7fe09a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/9a7fe09a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/6a1938b0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/6a1938b0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/56902fc9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/56902fc9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/3fb620b1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/3fb620b1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/4c0e2883.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/4c0e2883.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/aa7fc3e7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/aa7fc3e7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/5e95d0e4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/5e95d0e4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/b872b567.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36110000/36103400/36103352/b872b567.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.1561334.2122401',
          detailPageUrl: '/1561334?unitId=2122401&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '1561334',
          propertyMetadata: {
            headline: 'luxury 1BR quiet fully equipped kitchen washer/drier ',
            __typename: 'PropertyMetadata',
            propertyName: 'luxury 1BR quiet',
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_2122401',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 323,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/1399a29e-405e-41ca-859f-f6956cc1aaff","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$133","perioddescription":"avg/night"}',
            formattedAmount: '$133',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.8974357,
          reviewCount: 39,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 1561334,
          geoCode: {
            latitude: 48.87037369,
            longitude: 2.36973371,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Accessible',
              id: '14',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Garden',
              id: '23',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/d01ee59a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/d01ee59a.c9.jpg',
              mab: {
                banditId: '731.1062009.1226278',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/c190015e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/c190015e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/2baa58a9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/2baa58a9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/306fce6d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/306fce6d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/9c89c40e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/9c89c40e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/16086d54.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/16086d54.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/35147804.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/35147804.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/3777a377.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/3777a377.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/0de69d9d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/0de69d9d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/54b98a20.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33470000/33469600/33469529/54b98a20.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1062009.1226278',
          detailPageUrl: '/1062009a?unitId=1226278&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1062009a',
          propertyMetadata: {
            headline: 'Charming studio near Montmartre',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.4/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 0,
          propertyType: 'Studio',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 215,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.6 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/2eb1677e-5f5c-483d-ab2c-348cbb8f4e17","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$81","perioddescription":"avg/night"}',
            formattedAmount: '$81',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.3773584,
          reviewCount: 53,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1062009,
          geoCode: {
            latitude: 48.878363,
            longitude: 2.3422349999999597,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/b758aded.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/b758aded.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/1fbd3e59.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/1fbd3e59.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/61e5ac88.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/61e5ac88.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/86ce4a70.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/86ce4a70.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/29b5d0d5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/29b5d0d5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/00ede5de.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/00ede5de.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/a853bfd3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/a853bfd3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/ead6ae49.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/ead6ae49.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/eaef3dc4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/eaef3dc4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/2788ce5b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/2788ce5b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/3cc322fd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/3cc322fd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/01c770f1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/01c770f1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/b0f18e50.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/b0f18e50.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/e37ece35.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/e37ece35.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/87f4c00e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/87f4c00e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/ae381592.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/ae381592.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/7e159095.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/7e159095.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/990ec716.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/990ec716.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/04fd3dfd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/04fd3dfd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/589c6010.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/589c6010.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/c1190997.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/c1190997.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/a7f69443.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/a7f69443.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/f659974d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/f659974d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/dcfa3062.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33970000/33969000/33968919/dcfa3062.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.439068.1022139',
          detailPageUrl: '/439068?unitId=1022139&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '439068',
          propertyMetadata: {
            headline: 'Quiet And Airy Luxury Studio In The Upper Marais',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.7/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_1022139',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 323,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.8 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/aeaba1cb-fb96-4d28-86ab-742340006c45","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$123","perioddescription":"avg/night"}',
            formattedAmount: '$123',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.6788993,
          reviewCount: 109,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 439068,
          geoCode: {
            latitude: 48.8622952,
            longitude: 2.3675071000000116,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kids Welcome',
              id: '19',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/9b7c9e77.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/9b7c9e77.c9.jpg',
              mab: {
                banditId: '731.685072.685072',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/edc4aed9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/edc4aed9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/95f2f626.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/95f2f626.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/e4e6e79d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/e4e6e79d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/7ce4b8fc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/7ce4b8fc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/1c39061a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/1c39061a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/88a2f45f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/88a2f45f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/d37d8e30.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/d37d8e30.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/331b3ea0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/331b3ea0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/7923e219.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/7923e219.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/02f8aae8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/02f8aae8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/22352f92.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/22352f92.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/e415c831.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/e415c831.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/3783770c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/3783770c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/ac0061b9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/ac0061b9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/0732ad1b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/0732ad1b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/f2e362e3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/f2e362e3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/9777cd55.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/9777cd55.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/ad172f3f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/22000000/21130000/21128400/21128383/ad172f3f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.685072.685072',
          detailPageUrl: '/685072a?unitId=685072&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 7,
            minStayLow: 7,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '685072a',
          propertyMetadata: {
            headline: 'Luxury apartment at the heart of Paris Rent',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 1,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 484,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/119d0c82-11f6-4ff9-9ad6-108ca7c5015e","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$239","perioddescription":"avg/night"}',
            formattedAmount: '$239',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.95,
          reviewCount: 80,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 685072,
          geoCode: {
            latitude: 48.8574128,
            longitude: 2.3519681,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/d86d4686.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/d86d4686.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/fbd74a17.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/fbd74a17.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/09f45593.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/09f45593.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/e867e941.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/e867e941.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/6a030a8e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/6a030a8e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/5fda4c30.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/5fda4c30.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/155b3a2c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/155b3a2c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/f90109b8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/f90109b8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/5c3adb00.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/5c3adb00.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/45d10f7c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/45d10f7c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/2c5c1dcb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/2c5c1dcb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/2188f471.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/2188f471.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/b37ab0f4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/b37ab0f4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/2884d6f3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/2884d6f3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/9172441f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/9172441f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/5ac619f0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/5ac619f0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/36804263.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/36804263.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/8fc3cf9a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/8fc3cf9a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/a7b5fb30.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/a7b5fb30.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/3a938e8c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/3a938e8c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/3ae3d5e7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/3ae3d5e7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/84a48502.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/84a48502.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/b22b0e76.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33610000/33605900/33605882/b22b0e76.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '811.6627273.2079490',
          detailPageUrl: '/6627273ha?unitId=2079490&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 3,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '6627273ha',
          propertyMetadata: {
            headline:
              '19th district - apartment in residence, 250m from the metro',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 1,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 538,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.5 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/f0f08bb1-b6d0-e311-a563-d4ae52897104","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$102","perioddescription":"avg/night"}',
            formattedAmount: '$102',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.8304095,
          reviewCount: 171,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 6627273,
          geoCode: {
            latitude: 48.886436462402344,
            longitude: 2.383798837661743,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/6cd0eb98.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/6cd0eb98.c9.jpg',
              mab: {
                banditId: '321.161489.161489',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/ed4daa0e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/ed4daa0e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/efff2a3c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/efff2a3c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/36826a68.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/36826a68.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/931df196.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/931df196.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/42bc6ecd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/42bc6ecd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/64597e46.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/64597e46.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/a93692b5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/a93692b5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/ac8e8613.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/ac8e8613.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/298f21d7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/298f21d7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/1cb649aa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/1cb649aa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/bc58acd3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33483000/33482941/bc58acd3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.161489.161489',
          detailPageUrl: '/161489?unitId=161489&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '161489',
          propertyMetadata: {
            headline: 'Studio in Paris, Marais',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Studio',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: null,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/03120754-f024-4ff0-86a0-6bbc5a6382cd","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$97","perioddescription":"avg/night"}',
            formattedAmount: '$97',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.757143,
          reviewCount: 70,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 161489,
          geoCode: {
            latitude: 48.85819548,
            longitude: 2.35126754,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/0f181079.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/0f181079.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/851c29a1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/851c29a1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/bf674575.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/bf674575.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/73d8e886.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/73d8e886.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/390dac4b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/390dac4b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/43bb1bfb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/43bb1bfb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/5a1048a1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/5a1048a1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/3fd5d3b5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/3fd5d3b5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/034dad73.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/034dad73.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/9d0622a1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/9d0622a1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/b9a9fdb5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/b9a9fdb5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/5d68758f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/5d68758f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/82b32a8c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/82b32a8c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/e189d475.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/e189d475.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/1cde6c98.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/1cde6c98.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/75e5f4f6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/75e5f4f6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/691fe098.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/691fe098.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/460a642f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/460a642f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/90df3b11.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/90df3b11.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/1b62ce15.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/1b62ce15.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/d6bdc8aa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/d6bdc8aa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/65b3dfe4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/65b3dfe4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/3dc3bedd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/52000000/51830000/51826600/51826541/3dc3bedd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1913363.2089123',
          detailPageUrl: '/1913363a?unitId=2089123&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 2,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1913363a',
          propertyMetadata: {
            headline: 'Charming apartment in the heart of le Marais',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '3',
              helpText: null,
              name: 'Very Good! 4.2/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 1,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: null,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/d828427b-63da-4922-bdac-e6eba8eeb58b","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$148","perioddescription":"avg/night"}',
            formattedAmount: '$148',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.1666665,
          reviewCount: 6,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1913363,
          geoCode: {
            latitude: 48.85994969999999,
            longitude: 2.3539272,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/d32c30f1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/d32c30f1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/81ce32ac.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/81ce32ac.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/587dd433.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/587dd433.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/4bb3f6dd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/4bb3f6dd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/2d509f8e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/2d509f8e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/e3a8afa7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/e3a8afa7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/2edd9ae4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/2edd9ae4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/931cfb45.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/931cfb45.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/a235901b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/a235901b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/0a2e2123.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/0a2e2123.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/6a8c700f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/6a8c700f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/06192707.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/06192707.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/1d963a10.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/1d963a10.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/861b0b32.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/861b0b32.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/53fb42b9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/53fb42b9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/aac653c1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/aac653c1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/9c4e39e1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/9c4e39e1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/4825f91b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/4825f91b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/75530008.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/75530008.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/7f5fbcea.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33100000/33091000/33090931/7f5fbcea.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '611.862408.1204943',
          detailPageUrl: '/862408ha?unitId=1204943&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 3,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '862408ha',
          propertyMetadata: {
            headline:
              'OPERA, LOUVRE, MONTMARTRE - TOURIST AREA--LIFT-WIFI -A/C',
            __typename: 'PropertyMetadata',
            propertyName: 'PARIS PROMENADE',
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.6/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_1204943',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 2,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 5,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 646,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/24b7f220-e5d3-447d-99a0-fcaed040bfa6","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$201","perioddescription":"avg/night"}',
            formattedAmount: '$201',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.6463413,
          reviewCount: 82,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 862408,
          geoCode: {
            latitude: 48.87106874,
            longitude: 2.33949209,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/a8c23058.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/a8c23058.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/333b115a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/333b115a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/bb6bc8d2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/bb6bc8d2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/d16492fb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/d16492fb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/2098c703.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/2098c703.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/e235510a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/e235510a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/ebbb3ede.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/ebbb3ede.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/a82b6e4c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/a82b6e4c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/ae6ac62e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/ae6ac62e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/c01cea6d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/c01cea6d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/15332f7e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/15332f7e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/6ed88357.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/6ed88357.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/26cf88e8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/26cf88e8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/16e84b10.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/16e84b10.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/529766da.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/529766da.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/2572f1f0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/2572f1f0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/df6c25ef.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/df6c25ef.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/a8dcf78b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/a8dcf78b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/584291fc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/584291fc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/e78137c0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/e78137c0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/be02805c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/be02805c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/64d21162.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/64d21162.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/8fb77756.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/8fb77756.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/daee2dea.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/daee2dea.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/474e5f00.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/474e5f00.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/651bf0dd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/651bf0dd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/bcc70a01.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/bcc70a01.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/ce20f2ac.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/ce20f2ac.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/cb3b6a56.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/cb3b6a56.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/0b6786b6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/0b6786b6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/475a21cd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/475a21cd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/b67c6a4f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/b67c6a4f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/43634893.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/43634893.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/68187168.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/68187168.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/65bf9723.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/65bf9723.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/eb680c27.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/eb680c27.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/c9fe3f70.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/c9fe3f70.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/86f790e4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/86f790e4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/762143f1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/762143f1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/01565148.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/01565148.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/5ea3cc8c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/5ea3cc8c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/494673de.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/494673de.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/a285609e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33590000/33588900/33588871/a285609e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '811.6583168.2046065',
          detailPageUrl: '/6583168ha?unitId=2046065&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '6583168ha',
          propertyMetadata: {
            headline:
              'Studio With a Nice View of Paris - Luxury Building in the Heart of the Marais',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Studio',
          sleeps: 3,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 344,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.3 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/62bb7eb1-b6d0-e311-a563-d4ae52897104","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$97","perioddescription":"avg/night"}',
            formattedAmount: '$97',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.85,
          reviewCount: 140,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 6583168,
          geoCode: {
            latitude: 48.86056137084961,
            longitude: 2.349341869354248,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/a581ae6c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/a581ae6c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/e32ce643.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/e32ce643.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/48b42499.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/48b42499.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/9b89ce99.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/9b89ce99.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/2dd70be8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/2dd70be8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/e398a372.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/84000000/83160000/83159500/83159401/e398a372.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.2910145.3482185',
          detailPageUrl: '/2910145?unitId=3482185&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 2,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '2910145',
          propertyMetadata: {
            headline:
              'Wonderful and calm, in the heart of Paris 5 mins walk from Bastille',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '48',
              helpText: null,
              name: 'New listing',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_3482185',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: null,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/60c8e5fc-b7d7-4cb9-8f07-b98e093651e2","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$100","perioddescription":"avg/night"}',
            formattedAmount: '$100',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 0,
          reviewCount: 0,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 2910145,
          geoCode: {
            latitude: 48.85499137,
            longitude: 2.376507,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Pets Welcome',
              id: '9',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/661803e0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/661803e0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/8468cdef.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/8468cdef.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/2b19723a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/2b19723a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/f80cc3f1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/f80cc3f1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/88c6727c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/88c6727c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/ebe8f207.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/ebe8f207.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/2211a20e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/2211a20e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/a1e203ff.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/a1e203ff.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/e194dd6d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/e194dd6d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/65048550.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/65048550.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/2aa5dd9f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/2aa5dd9f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/659f4cd4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/659f4cd4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/8608113c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/68000000/67140000/67132000/67131981/8608113c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1984580.2160455',
          detailPageUrl: '/1984580a?unitId=2160455&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 2,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [],
          propertyId: '1984580a',
          propertyMetadata: {
            headline: 'Charming Parisian Apartment in the heart of Paris',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.5/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 6,
          petsAllowed: true,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: null,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.5 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/4a43f428-359c-415c-a73e-b1e2295541e4","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$225","perioddescription":"avg/night"}',
            formattedAmount: '$225',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.5,
          reviewCount: 6,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1984580,
          geoCode: {
            latitude: 48.84465583,
            longitude: 2.30294967,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/49a9f5ef.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/49a9f5ef.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/a34a7115.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/a34a7115.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/52903a3e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/52903a3e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/d7b93085.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/d7b93085.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/43172a1b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/43172a1b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/93376c39.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/93376c39.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/90ff475b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/90ff475b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/0380e5a3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/0380e5a3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/07829098.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/07829098.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/c6db99fa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/c6db99fa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/e3974e62.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/e3974e62.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/587be93c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/587be93c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/6d734e2e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/6d734e2e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/c3f4de35.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/c3f4de35.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/d6c788dc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36430000/36427900/36427889/d6c788dc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.1628505.2189828',
          detailPageUrl: '/1628505?unitId=2189828&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '1628505',
          propertyMetadata: {
            headline: 'Quiet Steps Away from Champs Elysees A/C',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_2189828',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 215,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/2a360c78-cd2b-438e-947e-0a7b8f65649d","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$102","perioddescription":"avg/night"}',
            formattedAmount: '$102',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.8,
          reviewCount: 30,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 1628505,
          geoCode: {
            latitude: 48.87132944,
            longitude: 2.31321575,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/fc5468d1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/fc5468d1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/6a12a18e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/6a12a18e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/7c34ed8f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/7c34ed8f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/41844436.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/41844436.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/8afcb4e8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/8afcb4e8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/b2f71d19.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/b2f71d19.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/a9396469.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/a9396469.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/3e0175aa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/3e0175aa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/c126942f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/c126942f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/28a8eab0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/28a8eab0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/34688c6e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/34688c6e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/13fb8dee.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/13fb8dee.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/78fc0e69.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/78fc0e69.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/b1a3e78d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/b1a3e78d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/a1b122e0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/a1b122e0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/07d613bb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/07d613bb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/69e6081c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/69e6081c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/cd72d1a9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/cd72d1a9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/9a1665ec.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/9a1665ec.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/54306caf.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/54306caf.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/ec4c5f5b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/ec4c5f5b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/f22d15a5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/f22d15a5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/f5256254.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/f5256254.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/f1873511.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33710000/33702700/33702690/f1873511.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.643750.643750',
          detailPageUrl: '/643750a?unitId=643750&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 3,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '643750a',
          propertyMetadata: {
            headline:
              'Refined Apartment With Incredible View On Sacré Coeur Basilic And Paris Roofs',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 301,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/80b16d93-b4b6-49c8-a45e-f0e26fb91da6","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$107","perioddescription":"avg/night"}',
            formattedAmount: '$107',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.785714,
          reviewCount: 28,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 643750,
          geoCode: {
            latitude: 48.886223,
            longitude: 2.343987,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/7f1e6e28.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/7f1e6e28.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/60d66357.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/60d66357.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/a5d2aa6c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/a5d2aa6c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/a59f1ca8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/a59f1ca8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/13b69fc2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/13b69fc2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/51171f86.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/51171f86.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/76f694af.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/76f694af.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/0129a567.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/0129a567.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/297b1915.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/297b1915.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/024719f8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/024719f8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/9579149a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/9579149a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/134e40bc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/134e40bc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/02be2303.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/02be2303.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/90-096b2e73.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/90-096b2e73.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/238dfab4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33393500/33393409/238dfab4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1448060.1619639',
          detailPageUrl: '/1448060a?unitId=1619639&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 3,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1448060a',
          propertyMetadata: {
            headline:
              'Small studio in private green alley in the heart of Paris',
            __typename: 'PropertyMetadata',
            propertyName: 'STUDETTE IN GREEN ALLEY  ',
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Bed & breakfast',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 258,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/d131d4d9-5837-4255-b399-e7c0871776b4","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$87","perioddescription":"avg/night"}',
            formattedAmount: '$87',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.7622952,
          reviewCount: 122,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1448060,
          geoCode: {
            latitude: 48.8614623,
            longitude: 2.371959699999934,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/dbbbc0ee.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/dbbbc0ee.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/36c4be2d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/36c4be2d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/14e9a82e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/14e9a82e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/40c7fecb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/40c7fecb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/61ddbbf4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/61ddbbf4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/867543b9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/867543b9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/16b97126.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/16b97126.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/284d2c96.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/284d2c96.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/289b6d93.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/289b6d93.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/831ff3a8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/831ff3a8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/0d47edeb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/0d47edeb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/f9b87320.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/f9b87320.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/159d1b8c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/159d1b8c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/599917e9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/599917e9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/854710db.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/854710db.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/fe9c0a62.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/fe9c0a62.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/caf71433.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/caf71433.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/6c25f7de.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/6c25f7de.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/e4fcb37b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/e4fcb37b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/7512e298.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/7512e298.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/c743da02.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/c743da02.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/81a826b3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/81a826b3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/ce92dd1c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/ce92dd1c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/d1aa02e6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/d1aa02e6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/d0fc5ba4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/d0fc5ba4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/83d864dd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/83d864dd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/b51ce4d1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/b51ce4d1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/96ed148d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/96ed148d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/bd43faa8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/bd43faa8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/a6c8f028.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/a6c8f028.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/aad9e0cc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/aad9e0cc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/cb5d3a6a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32890000/32888100/32888021/cb5d3a6a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1216911.1383316',
          detailPageUrl: '/1216911a?unitId=1383316&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 6,
            minStayLow: 1,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1216911a',
          propertyMetadata: {
            headline:
              'Like a house, fantastic loft style apartment ** ideal for a family**',
            __typename: 'PropertyMetadata',
            propertyName: 'Ecrin Secret',
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 5,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 600,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.9 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/70d50414-1862-4036-b252-857f232d5cd5","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$205","perioddescription":"avg/night"}',
            formattedAmount: '$205',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.8932037,
          reviewCount: 103,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1216911,
          geoCode: {
            latitude: 48.87899533265768,
            longitude: 2.326340438098214,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kids Welcome',
              id: '19',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/1b6dcf8f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/1b6dcf8f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/e2113eda.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/e2113eda.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/af463433.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/af463433.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/03a38026.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/03a38026.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/fd1875d3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/fd1875d3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/762f106a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/762f106a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/2d5e5467.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/2d5e5467.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/8404c2e7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/8404c2e7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/8697e712.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/8697e712.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-0ec1122d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-0ec1122d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/ea2d2d0f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/ea2d2d0f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-158fe416.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-158fe416.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-260eb432.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-260eb432.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-18d68033.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-18d68033.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-68d567b2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-68d567b2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-2025fad6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/270-2025fad6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/a7cad7af.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/a7cad7af.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/a9a95e56.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33920000/33915000/33914908/a9a95e56.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '811.6324130.1950790',
          detailPageUrl: '/6324130ha?unitId=1950790&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 2,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '6324130ha',
          propertyMetadata: {
            headline:
              'Paris 20 Pere Lachaise: VERY QUIET STUDIO WITH A TERRACE',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 3,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 26,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/12483fb1-b6d0-e311-a563-d4ae52897104","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$74","perioddescription":"avg/night"}',
            formattedAmount: '$74',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.8513513,
          reviewCount: 148,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 6324130,
          geoCode: {
            latitude: 48.8568108,
            longitude: 2.3958817999999837,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kids Welcome',
              id: '19',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/cbff8d96.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/cbff8d96.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/35f8ef38.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/35f8ef38.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/a36bb34c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/a36bb34c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/8973faea.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/8973faea.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/d66c252a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/d66c252a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/aec3ab4d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/aec3ab4d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/785d412f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/785d412f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/58ccc8d5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/58ccc8d5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/434944c9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/434944c9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/0cc20292.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/0cc20292.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/dbd090b4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/dbd090b4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/b0fafdf7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/b0fafdf7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/9930a40c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/9930a40c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/d411582a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/d411582a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/99c66d18.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/99c66d18.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/38606a87.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/38606a87.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/62680bf2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/62680bf2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/8e1f852d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/8e1f852d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/ff75b8e2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/ff75b8e2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/df4cea0f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38130000/38125200/38125200/df4cea0f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '811.6348055.1963115',
          detailPageUrl: '/6348055ha?unitId=1963115&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '6348055ha',
          propertyMetadata: {
            headline:
              'Very Nice Bright and Character Studio at the Foot of the Town Hall',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 0,
          propertyType: 'Studio',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 269,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/51ed43b1-b6d0-e311-a563-d4ae52897104","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$97","perioddescription":"avg/night"}',
            formattedAmount: '$97',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.7586207,
          reviewCount: 174,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 6348055,
          geoCode: {
            latitude: 48.85687255859375,
            longitude: 2.3551106452941895,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kids Welcome',
              id: '19',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/d7d5a8e2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/d7d5a8e2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/bbaa79fb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/bbaa79fb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/2274077e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/2274077e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/d52ed15d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/d52ed15d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/3b9163e3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/3b9163e3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/b5962126.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/b5962126.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/42e5a0f5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/42e5a0f5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/8ca163ab.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/8ca163ab.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/288aac31.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/72000000/71950000/71941000/71940913/288aac31.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.2038346.2214243',
          detailPageUrl: '/2038346a?unitId=2214243&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 3,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '2038346a',
          propertyMetadata: {
            headline: 'Superb Studio Fireplace Balcony Air Conditioning',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [],
          unitMetadata: {
            unitName: 'Room',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: null,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.5 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/76af744b-2acb-4828-8ec7-0c82f79b3fb9","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$123","perioddescription":"avg/night"}',
            formattedAmount: '$123',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 5,
          reviewCount: 4,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 2038346,
          geoCode: {
            latitude: 48.86547497,
            longitude: 2.35279606,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/353f02bf.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/353f02bf.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/6e3c045e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/6e3c045e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/c76cc07a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/c76cc07a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/9c694384.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/9c694384.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/a8dd375f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/a8dd375f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/08cc62dc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/08cc62dc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/4568991b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/4568991b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/9c8849ad.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/9c8849ad.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/ea78de41.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/ea78de41.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/e82c77f7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/e82c77f7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/c70212d9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/c70212d9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/03a7f7d0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27700000/27692800/27692749/03a7f7d0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.907637.1066748',
          detailPageUrl: '/907637a?unitId=1066748&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 3,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '907637a',
          propertyMetadata: {
            headline:
              'Beautiful Studio of 18 m² at the center of Paris Place de la Nation and the Bois de Vincennes',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.4/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 0,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 194,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/932c8048-6559-4a49-b48c-c4cc5691d578","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$61","perioddescription":"avg/night"}',
            formattedAmount: '$61',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.3650794,
          reviewCount: 63,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 907637,
          geoCode: {
            latitude: 48.8489791,
            longitude: 2.3995001,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/6e877174.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/6e877174.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/f1bbeed0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/f1bbeed0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/290b855a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/290b855a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/9bb95e6c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/9bb95e6c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/0579f103.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/0579f103.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/3e2cf702.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/3e2cf702.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/ae1e1590.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/ae1e1590.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/8ca3c63d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/8ca3c63d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/17f31fa1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/17f31fa1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/0190cfac.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/0190cfac.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/2da9f71c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/2da9f71c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/6391a074.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/6391a074.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/878a51e0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/878a51e0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/e5891d08.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/e5891d08.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/9f0a6167.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/9f0a6167.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/56b9f940.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/56b9f940.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/6001898f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/6001898f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/aa89a680.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/aa89a680.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/7d8bd704.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/7d8bd704.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/faf28ef6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/faf28ef6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/755b4c9f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/755b4c9f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/317fcb8f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/317fcb8f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/f53c9794.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33502200/33502171/f53c9794.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.297929.297929',
          detailPageUrl: '/297929?unitId=297929&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '297929',
          propertyMetadata: {
            headline:
              'Wooden Beams - by the Seine & Pont Neuf - Charm & Calm Duplex',
            __typename: 'PropertyMetadata',
            propertyName: 'DAUPHINE - SUBS',
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.7/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 258,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.5 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/5e66d58b-6703-43cb-b0e6-6a0a6d3c7c35","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$188","perioddescription":"avg/night"}',
            formattedAmount: '$188',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.736842,
          reviewCount: 57,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 297929,
          geoCode: {
            latitude: 48.855743408203125,
            longitude: 2.3407464027404785,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Pool',
              id: '8',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Garden',
              id: '23',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/dec4a562.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/dec4a562.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/e1d9de4a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/e1d9de4a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/293f6e4a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/293f6e4a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/423e7e96.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/423e7e96.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/f6ddabe2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/f6ddabe2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/e2acb871.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/e2acb871.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/d9fb0c35.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/d9fb0c35.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/2083028f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/2083028f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/a92d6a30.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/a92d6a30.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/e1fc1d6d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/e1fc1d6d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/0b37f28b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/0b37f28b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/091e9682.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/091e9682.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/81a879cd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/81a879cd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/5415b08d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/5415b08d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/e1ae6b2e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/e1ae6b2e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/b4613b63.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/b4613b63.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/25132b3d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/25132b3d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/c3792109.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/c3792109.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/3b751faa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/3b751faa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/dc622dd8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/dc622dd8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/779cbabf.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/779cbabf.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/9f6e8ef7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/9f6e8ef7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/8e6b80c8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/8e6b80c8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/92b2c54d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33490000/33489500/33489478/92b2c54d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.492436.1075617',
          detailPageUrl: '/492436?unitId=1075617&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 3,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '492436',
          propertyMetadata: {
            headline:
              'Smart And Large Studio, Amazing Views, Modern, Sunny, Comfortable, Best-Located',
            __typename: 'PropertyMetadata',
            propertyName: 'Best View Sorbonne Eiffel Towr',
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_1075617',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 269,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.6 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/25ae4652-45e4-447a-bd6b-47063b376724","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$210","perioddescription":"avg/night"}',
            formattedAmount: '$210',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.9466667,
          reviewCount: 75,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 492436,
          geoCode: {
            latitude: 48.8493833,
            longitude: 2.3459960000000137,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kids Welcome',
              id: '19',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/2a7f89f7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/2a7f89f7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/f3eb080e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/f3eb080e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/e547f0fc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/e547f0fc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/4fb2e72d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/4fb2e72d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/5098d71a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/5098d71a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/a1a7a759.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/a1a7a759.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/da8552e3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/da8552e3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/79c07c35.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/79c07c35.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/02e36806.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/02e36806.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/0cacde74.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/0cacde74.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/d8a88c12.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/d8a88c12.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/821c3831.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/821c3831.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/67b5d5a4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/67b5d5a4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/210d700a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/210d700a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/437ca81f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/437ca81f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/ee8a59c3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/ee8a59c3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/32447178.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/32447178.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/11eecce3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/11eecce3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/c51b1c3c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/c51b1c3c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/6abb5d42.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/6abb5d42.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/c021e23c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/c021e23c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/3c65a513.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/3c65a513.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/cd0deb2c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/cd0deb2c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/04b7661f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/28000000/27480000/27477700/27477661/04b7661f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.1046373.1594493',
          detailPageUrl: '/1046373?unitId=1594493&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '1046373',
          propertyMetadata: {
            headline: 'ROMANTIC LUXE TOP FLOOR 1BR EIFFEL TOWER VIEW A/C',
            __typename: 'PropertyMetadata',
            propertyName: 'TOP FLR  EIFFEL TWER VIEW A/C',
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_1594493',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 538,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/af5bcbb9-15c3-40db-bab4-e8557a02703a","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$205","perioddescription":"avg/night"}',
            formattedAmount: '$205',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.9,
          reviewCount: 30,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 1046373,
          geoCode: {
            latitude: 48.85906714,
            longitude: 2.30625625,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Fireplace',
              id: '16',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kids Welcome',
              id: '19',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/a287ecdf.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/a287ecdf.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/dd7bc60d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/dd7bc60d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/4460b2b4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/4460b2b4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e6a38f84.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e6a38f84.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/6f6a7c12.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/6f6a7c12.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e6af2947.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e6af2947.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/067d39bd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/067d39bd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/96195283.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/96195283.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/289808c3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/289808c3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/5547b879.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/5547b879.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e99500e0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e99500e0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e1bb5dc0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e1bb5dc0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e2120a94.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/e2120a94.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/93ebb282.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/93ebb282.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/9dc68016.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/9dc68016.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/f4cbdb3c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/f4cbdb3c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/2f0ab0d8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/2f0ab0d8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/1b8d9209.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/1b8d9209.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/663b65dc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/663b65dc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/3e3f1e1b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/3e3f1e1b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/68497a39.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/68497a39.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/2d7ac34c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/2d7ac34c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/7123e25a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/7123e25a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/0b04fbdd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/0b04fbdd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/2cd50a3e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/2cd50a3e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/3d05a84a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/3d05a84a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/9125b0fa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/9125b0fa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/1f3120b9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/1f3120b9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/9bfa5002.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/9bfa5002.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/8731f60a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/8731f60a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/62923705.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/62923705.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/9398e6d6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/9398e6d6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/5edf4815.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/5edf4815.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/33451189.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/33451189.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/ee7d4253.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/ee7d4253.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/edbaa772.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/edbaa772.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/2a7a6fca.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/2a7a6fca.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/d7822c7b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/d7822c7b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/3034fb68.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/3034fb68.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/dd291589.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/dd291589.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/ed323655.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39967300/39967211/ed323655.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.681954.681954',
          detailPageUrl: '/681954a?unitId=681954&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 7,
            minStayLow: 7,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '681954a',
          propertyMetadata: {
            headline:
              'Luxury apartment at the heart of Paris Rent from one week',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '6',
              helpText: null,
              name: 'Exceptional! 5/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 807,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/52af1f6f-6c97-4b4c-ad18-9e3484f3ef20","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$287","perioddescription":"avg/night"}',
            formattedAmount: '$287',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 5,
          reviewCount: 78,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 681954,
          geoCode: {
            latitude: 48.8574128,
            longitude: 2.3519681,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/fbebbd6b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/fbebbd6b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/8c478acf.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/8c478acf.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/c103c0a2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/c103c0a2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/ab5e2c8c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/ab5e2c8c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/89764a2f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/89764a2f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/292f29c0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/292f29c0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/2f4dc183.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/2f4dc183.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/90-49e28f5c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/90-49e28f5c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/90-6eff3098.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/90-6eff3098.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/11f8521d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/57000000/56940000/56939600/56939595/11f8521d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1935728.2111529',
          detailPageUrl: '/1935728a?unitId=2111529&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1935728a',
          propertyMetadata: {
            headline: 'Marais Magic - Rue des Rosiers Paris 4e',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 484,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.4 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/b229fb8c-127b-494d-a991-b37f91c3348b","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$205","perioddescription":"avg/night"}',
            formattedAmount: '$205',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.923077,
          reviewCount: 13,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1935728,
          geoCode: {
            latitude: 48.8567851,
            longitude: 2.3603923,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/2fa9e21c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/2fa9e21c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/3eeec2c7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/3eeec2c7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/1964f1ac.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/1964f1ac.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/db77e209.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/db77e209.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/930fe32c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/930fe32c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/191a00d8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/191a00d8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/2a11e652.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/2a11e652.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/001ff7ac.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/001ff7ac.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/7a66b25b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/7a66b25b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/c48db89f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/c48db89f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/b036549b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/b036549b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/b0acfbe4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/b0acfbe4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/46d3da8e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/46d3da8e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/bc9d566e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/bc9d566e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/25e9e9fa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/25e9e9fa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/6a0030a5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/6a0030a5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/d8866382.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/d8866382.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/18fdbe21.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/18fdbe21.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/cd388bc4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/cd388bc4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/e32f6abc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/e32f6abc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/b05a94ce.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/b05a94ce.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/486b66a8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32730000/32728000/32727901/486b66a8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '611.842401.1182234',
          detailPageUrl: '/842401ha?unitId=1182234&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 5,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '842401ha',
          propertyMetadata: {
            headline: 'PARIS ON FOOT,TOURISTIC AREA .WITH LIFT , WIFI , AC',
            __typename: 'PropertyMetadata',
            propertyName: 'LE PASSAGE',
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.6/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_1182234',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 1,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 5,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 614,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/c3b10067-3733-4ae0-970a-40231408884e","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$203","perioddescription":"avg/night"}',
            formattedAmount: '$203',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.625,
          reviewCount: 112,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 842401,
          geoCode: {
            latitude: 48.8703284,
            longitude: 2.33999594,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/7df648a9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/7df648a9.c9.jpg',
              mab: {
                banditId: '321.582339.1129656',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/712b64da.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/712b64da.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/63e8f4dd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/63e8f4dd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/536cc818.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/536cc818.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/2c9cb0c1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/2c9cb0c1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/0b2e044a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/0b2e044a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/aa02067c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/aa02067c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/39401410.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/39401410.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/a0c59948.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/a0c59948.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/a0c2b85d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/a0c2b85d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/d77596ad.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/d77596ad.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/5f3fe69e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/5f3fe69e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/3c2d088b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/3c2d088b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/93c72740.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/93c72740.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/411b9a32.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/411b9a32.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/67de2979.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/67de2979.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/0d7ac6ad.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/0d7ac6ad.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/f80214c1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/f80214c1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/f517751f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/f517751f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/f34ad2fa.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/f34ad2fa.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/9af1f4f4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/9af1f4f4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/43af551d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/43af551d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/7d85241d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/7d85241d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/97876234.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/97876234.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/0953de2b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32420000/32415500/32415441/0953de2b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.582339.1129656',
          detailPageUrl: '/582339?unitId=1129656&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 6,
            minStayLow: 6,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '582339',
          propertyMetadata: {
            headline:
              'Luxurious Apartment in the heart of Saint Germain des Prés, Center of Paris',
            __typename: 'PropertyMetadata',
            propertyName: "The Artist's Atelier",
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.6/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_1129656',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 431,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.9 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/7f3c680f-4f46-4da5-a50a-00f38674c575","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$195","perioddescription":"avg/night"}',
            formattedAmount: '$195',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.611111,
          reviewCount: 36,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 582339,
          geoCode: {
            latitude: 48.852453976655106,
            longitude: 2.3341193460327077,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/a097a668.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/a097a668.c9.jpg',
              mab: {
                banditId: '731.687675.687675',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/ab0ade9a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/ab0ade9a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/2b3cd194.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/2b3cd194.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/53ff3635.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/53ff3635.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/d525f387.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/d525f387.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/12a3f60d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/12a3f60d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/7be1c3cd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/7be1c3cd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/153969ed.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/153969ed.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/e8455a70.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/e8455a70.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/43db5821.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/43db5821.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/2f8da112.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/2f8da112.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/ec5da7a6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/ec5da7a6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/acd3bed0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/acd3bed0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/2be0256c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/2be0256c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/abb2e735.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/abb2e735.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/aa2d63ab.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/aa2d63ab.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/427ba3b6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/427ba3b6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/587e774c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/587e774c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/69ad5f0a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/69ad5f0a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/3b9e00ea.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/3b9e00ea.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/77373b1f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/77373b1f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/1ac7cbbb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/1ac7cbbb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/293fdd41.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/293fdd41.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/08bcfd7c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/21000000/20140000/20139400/20139392/08bcfd7c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.687675.687675',
          detailPageUrl: '/687675a?unitId=687675&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 2,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [],
          propertyId: '687675a',
          propertyMetadata: {
            headline: 'Beautiful renovated apartment near Place Des Vosges',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.7/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 1,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 6,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 538,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.6 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/84f647b4-4db8-4c36-a076-57c0504f7422","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$212","perioddescription":"avg/night"}',
            formattedAmount: '$212',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.681416,
          reviewCount: 113,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 687675,
          geoCode: {
            latitude: 48.858574,
            longitude: 2.364438,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/c356dcd0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/c356dcd0.c9.jpg',
              mab: {
                banditId: '811.6653249.2100658',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/1b8b5341.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/1b8b5341.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-bda204ad.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-bda204ad.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/a90d1fa6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/a90d1fa6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/e133a578.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/e133a578.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/06318863.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/06318863.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-c0bbc09b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-c0bbc09b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/562fa2f2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/562fa2f2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-8112ffbf.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-8112ffbf.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/07512f7b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/07512f7b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/cc031420.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/cc031420.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/e40b37f5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/e40b37f5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-65687eda.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-65687eda.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-11adb5cc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33390000/33389500/33389496/270-11adb5cc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '811.6653249.2100658',
          detailPageUrl: '/6653249ha?unitId=2100658&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 2,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '6653249ha',
          propertyMetadata: {
            headline:
              'Paris 01 Les Halles: rent charming F3 in the heart of PARIS',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 1,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 753,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.4 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/17119db1-b6d0-e311-a563-d4ae52897104","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$138","perioddescription":"avg/night"}',
            formattedAmount: '$138',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.9038463,
          reviewCount: 104,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 6653249,
          geoCode: {
            latitude: 48.86201858520508,
            longitude: 2.3491721153259277,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/a764ad36.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/a764ad36.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/62c12440.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/62c12440.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/dec2d558.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/dec2d558.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/61c408c9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/61c408c9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/1dfb1c8b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/1dfb1c8b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/7f2ce80a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/67000000/66800000/66797800/66797772/7f2ce80a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1981651.2157526',
          detailPageUrl: '/1981651a?unitId=2157526&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 3,
            minStayLow: 3,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 60 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1981651a',
          propertyMetadata: {
            headline:
              'Charming apartment in Montmartre at the foot of the Sacré-Coeur',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '6',
              helpText: null,
              name: 'Exceptional! 5/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: null,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.4 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/7dcd1231-c614-4c7f-9e5a-1715f9936d20","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$87","perioddescription":"avg/night"}',
            formattedAmount: '$87',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.952381,
          reviewCount: 21,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1981651,
          geoCode: {
            latitude: 48.88780481,
            longitude: 2.3428412,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/9fa98115.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/9fa98115.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/5c5cf92c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/5c5cf92c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/0e381b1a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/0e381b1a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/8c9a6a8b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/8c9a6a8b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/ff5f55d4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/ff5f55d4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/3dd764ce.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/3dd764ce.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/da9107ce.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/da9107ce.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/687a420f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/687a420f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/a21799f0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/a21799f0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/017ca3c8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/017ca3c8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/a09429d4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/a09429d4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/f1c56fcd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/f1c56fcd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/56b8a63d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/56b8a63d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/54089d29.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/54089d29.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/690979d6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/690979d6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/786e1ce3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/786e1ce3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/4f6abe05.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/4f6abe05.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/16852434.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/16852434.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/f13a6633.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/f13a6633.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/6729f5db.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/6729f5db.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/ee0748b7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/ee0748b7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/6a22d1dc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/6a22d1dc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/b0a6ea68.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/b0a6ea68.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/d7b0ecf8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/35000000/34520000/34516600/34516544/d7b0ecf8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.622862.1170643',
          detailPageUrl: '/622862?unitId=1170643&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '622862',
          propertyMetadata: {
            headline:
              'luxury fully equipped quiet studio in the oberkampf district with a/c',
            __typename: 'PropertyMetadata',
            propertyName: 'luxury fully equipped quiet ac',
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.7/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_1170643',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Condo',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 269,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.1 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/41ca26f4-e062-4681-ac8f-9605a2d20e54","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$123","perioddescription":"avg/night"}',
            formattedAmount: '$123',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.6761904,
          reviewCount: 105,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 622862,
          geoCode: {
            latitude: 48.8641509,
            longitude: 2.372239400000012,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/91d2ce82.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/91d2ce82.c9.jpg',
              mab: {
                banditId: '321.351780.351780',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/9f7f164e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/9f7f164e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/1f8212df.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/1f8212df.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/181fd50d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/181fd50d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/70a978c2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/70a978c2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/af808cd6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/af808cd6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/aa21b6a2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/aa21b6a2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/188e316a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/188e316a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/de2b739c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/de2b739c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/0e75fee8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33510000/33505100/33505077/0e75fee8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.351780.351780',
          detailPageUrl: '/351780?unitId=351780&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 60 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '351780',
          propertyMetadata: {
            headline:
              'Paris Apartment : Eiffel View from All RoomsBalcony, Air Con',
            __typename: 'PropertyMetadata',
            propertyName: 'Residence Suffren',
          },
          superlativesBadges: [
            {
              id: '6',
              helpText: null,
              name: 'Exceptional! 5/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 1,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 592,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.5 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/697ff092-4a66-4373-8343-6d46c4959dc6","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$263","perioddescription":"avg/night"}',
            formattedAmount: '$263',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.96,
          reviewCount: 50,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 351780,
          geoCode: {
            latitude: 48.85451641,
            longitude: 2.29680897,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kids Welcome',
              id: '19',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/da6ad422.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/da6ad422.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/b5c4e6b2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/b5c4e6b2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/dafd5e63.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/dafd5e63.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/d489a3bd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/d489a3bd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/6e27449c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/6e27449c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/eb54c805.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/eb54c805.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/f583318a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/f583318a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/ff4e8fb2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/ff4e8fb2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/433504d1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/433504d1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/feb40599.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/feb40599.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/1c8fd864.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/1c8fd864.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/66b124fb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/66b124fb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/131bb808.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/131bb808.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/de8a3689.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/de8a3689.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/8a6a5fe7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/8a6a5fe7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/5c103678.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/5c103678.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/52ba14b3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/52ba14b3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/70d9696a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/70d9696a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/c4eec3e3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/60000000/59200000/59191100/59191083/c4eec3e3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1947747.2123588',
          detailPageUrl: '/1947747a?unitId=2123588&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 1,
            minStayLow: 1,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1947747a',
          propertyMetadata: {
            headline: 'Cosy Appartment Champs de Mars Eiffel',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.3/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Studio',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: null,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.7 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/dc4d2428-3538-4a43-8b37-b388bbbae75a","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$92","perioddescription":"avg/night"}',
            formattedAmount: '$92',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.25,
          reviewCount: 8,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1947747,
          geoCode: {
            latitude: 48.85525303,
            longitude: 2.29570011,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Accessible',
              id: '14',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/4d8a9c21.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/4d8a9c21.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/86aa30a5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/86aa30a5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/9d456575.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/9d456575.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/1e5c1a9a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/1e5c1a9a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/e22f6ef1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/e22f6ef1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/fce2779a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/fce2779a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/1d98efef.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/1d98efef.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/d818f63d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/d818f63d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/ffdce956.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/ffdce956.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/3b256256.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/3b256256.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/f9fd3585.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/f9fd3585.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/476fcb49.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/476fcb49.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/bae50bcf.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/bae50bcf.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/3d6fbae6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/3d6fbae6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/f1113eab.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/f1113eab.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/856a0ac4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/856a0ac4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/ea629c26.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/ea629c26.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/342fc344.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/342fc344.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/71ce11f9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/71ce11f9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/6fbf25d3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/6fbf25d3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/10ff1e6b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/10ff1e6b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/c10147ca.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/c10147ca.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/0e7eba34.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/0e7eba34.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/b7a19d92.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33400000/33395500/33395481/b7a19d92.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.570176.1117493',
          detailPageUrl: '/570176?unitId=1117493&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '570176',
          propertyMetadata: {
            headline: 'quiet and comfortable studio steps away from le marais',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.4/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_1117493',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 0,
          propertyType: 'Condo',
          sleeps: 2,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 301,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.8 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/bfb53e23-1e63-4c99-ae78-bb723e6eadf5","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$87","perioddescription":"avg/night"}',
            formattedAmount: '$87',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.4473686,
          reviewCount: 76,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 570176,
          geoCode: {
            latitude: 48.8615,
            longitude: 2.368392999999969,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/d1386429.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/d1386429.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/a0130f84.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/a0130f84.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/436d1432.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/436d1432.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/985bfad4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/985bfad4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/15150a95.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/15150a95.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/61b750f3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/61b750f3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/8519bfd2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/8519bfd2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/54e19a7b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/54e19a7b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/5b31a883.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/5b31a883.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/a0eba7e5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/a0eba7e5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/4ceef4e9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/4ceef4e9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/584e4536.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/584e4536.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/1d94b456.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/55000000/54740000/54733000/54732913/1d94b456.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '731.1926858.2102633',
          detailPageUrl: '/1926858a?unitId=2102633&noDates=true',
          instantBookable: false,
          minStayRange: {
            minStayHigh: 2,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '1926858a',
          propertyMetadata: {
            headline:
              'Very nice two-room apartment, very well placed-full center of Paris, Haussmann style ',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.3/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 377,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0003/b1d0e5b9-1e84-4bef-ae11-cb7782ac9a17","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$79","perioddescription":"avg/night"}',
            formattedAmount: '$79',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.344262,
          reviewCount: 61,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'abritel',
          listingNumber: 1926858,
          geoCode: {
            latitude: 48.8736905,
            longitude: 2.3503398,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Fireplace',
              id: '16',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/e26a6e91.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/e26a6e91.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/77cc9815.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/77cc9815.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/1fee1bb3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/1fee1bb3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/95d31485.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/95d31485.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/31114110.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/31114110.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/11a5779c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/11a5779c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/feab5e87.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/feab5e87.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/3e47c298.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/3e47c298.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/622006a2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/622006a2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/78c19861.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/78c19861.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/8be6ccc1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/8be6ccc1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/308c9541.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/308c9541.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/3d012264.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/3d012264.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/2b104849.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/2b104849.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/974e859a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/974e859a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/7ea1fc82.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/7ea1fc82.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/1d363844.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/1d363844.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/80261ceb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/80261ceb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/708e1036.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/708e1036.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/ee9bb4e1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/ee9bb4e1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/c9b0faca.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/c9b0faca.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/8def34d1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/8def34d1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/b58c2603.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/b58c2603.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/b6bd9083.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/b6bd9083.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/8ab098a0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/8ab098a0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/fe9dc1b9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/fe9dc1b9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/a2e225b7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/a2e225b7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/ef486193.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/ef486193.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/fd1d190a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/fd1d190a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/b0080da7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/b0080da7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/06d6359a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/06d6359a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/6377dbc6.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/6377dbc6.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/c5fbfe52.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/c5fbfe52.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/f2b0765b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/f2b0765b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/63b6ce4a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/63b6ce4a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/0556c25d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/0556c25d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/d054d1a8.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/d054d1a8.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/82cab158.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/82cab158.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/f1e50c1f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/f1e50c1f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/480d5f44.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/480d5f44.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/654ea97e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/654ea97e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/419ab577.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/419ab577.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/8ac16be2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/8ac16be2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/773b319a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/31000000/30450000/30449300/30449276/773b319a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.308714.308714',
          detailPageUrl: '/308714?unitId=308714&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 5,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 30 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '308714',
          propertyMetadata: {
            headline:
              'Beautiful, family-ready space in the historical heart of Paris!',
            __typename: 'PropertyMetadata',
            propertyName: 'The Heart of Paris',
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.8/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 2,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 6,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: null,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '1.4 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/e9228dc6-40c7-42ac-8c32-868b232ec2cd","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$285","perioddescription":"avg/night"}',
            formattedAmount: '$285',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.7714286,
          reviewCount: 70,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 308714,
          geoCode: {
            latitude: 48.86627960205078,
            longitude: 2.3243160247802734,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/c4941b4a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/c4941b4a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/ec95b213.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/ec95b213.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/0484e7d9.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/0484e7d9.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/441deb63.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/441deb63.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/da5cddf0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/da5cddf0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/6d6b6be1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/6d6b6be1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/1c466ca7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/1c466ca7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/44752d9d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/44752d9d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/7766815a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/7766815a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/ad54f093.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/ad54f093.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/1a81e039.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/1a81e039.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/6dc1ab64.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/6dc1ab64.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/2222439d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/2222439d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/4d38b8c7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/4d38b8c7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/76a12363.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/76a12363.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/f95282a4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/f95282a4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/4d623b65.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/4d623b65.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/bc4ca05f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/bc4ca05f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/4c392049.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/37000000/36380000/36370800/36370755/4c392049.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '611.3186.5711',
          detailPageUrl: '/3186ha?unitId=5711&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 4,
            minStayLow: 4,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '49',
              helpText: 'Free cancellation up to 60 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '3186ha',
          propertyMetadata: {
            headline:
              'Unique and charming 65 square metre apartment in 11eme are near Bastille........',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.7/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_5711',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 2,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 2,
          propertyType: 'Apartment',
          sleeps: 6,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 700,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.9 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/8aa7b54e-e12b-47af-8ad6-ebaf96663df7","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$236","perioddescription":"avg/night"}',
            formattedAmount: '$236',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.6666665,
          reviewCount: 63,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 3186,
          geoCode: {
            latitude: 48.8642781,
            longitude: 2.3687162,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/5a16bc81.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/5a16bc81.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/5911afa7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/5911afa7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/1f1393a7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/1f1393a7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/940e3fa4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/940e3fa4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/9e339c46.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/9e339c46.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/91b67069.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/91b67069.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/02e12161.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/02e12161.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/d886635d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/d886635d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/55a90d6f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/55a90d6f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/ead4f43d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/ead4f43d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/58b7ed60.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/58b7ed60.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/e214eb31.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/e214eb31.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/785e34bc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/785e34bc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/6cc45094.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/6cc45094.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/e424fad1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/e424fad1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/29fb313e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/29fb313e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/3573f073.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/3573f073.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/b1dd19d7.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/b1dd19d7.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/59e88d85.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/59e88d85.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/46357449.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/46357449.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/7813837c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/7813837c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/8488868e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/8488868e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/f0e5a223.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/f0e5a223.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/b8e64b29.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/34000000/33500000/33499600/33499598/b8e64b29.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.707041.1254979',
          detailPageUrl: '/707041?unitId=1254979&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '707041',
          propertyMetadata: {
            headline: '1 BR Upper Marais with A/C',
            __typename: 'PropertyMetadata',
            propertyName: '1 BR Upper Marais with A/C',
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.7/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_1254979',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 538,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.9 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/560869d3-6cc5-4e57-bf2c-868978ba4980","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$133","perioddescription":"avg/night"}',
            formattedAmount: '$133',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.720588,
          reviewCount: 68,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 707041,
          geoCode: {
            latitude: 48.8636036,
            longitude: 2.367231400000037,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Accessible',
              id: '14',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Fireplace',
              id: '16',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/607c1330.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/607c1330.c9.jpg',
              mab: {
                banditId: '121.3669850.3684267',
                payloadId: null,
                campaignId: '1607013481896-46',
                cached: null,
                arm: null,
                __typename: 'MabListing',
              },
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/01824d57.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/01824d57.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/f780ba4e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/f780ba4e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/7cae0e8a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/7cae0e8a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/0aad1bfc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/0aad1bfc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/8c47ff4d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/8c47ff4d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/39217b3f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/39217b3f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/d0fcd30a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/d0fcd30a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/b65a25e1.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/b65a25e1.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/6639aa13.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/6639aa13.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/ae0de2fd.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/ae0de2fd.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/f7a5dc4c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/f7a5dc4c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/a14bede0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/a14bede0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/c069f8ea.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/c069f8ea.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/adba7562.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/adba7562.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/6bfd3800.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/6bfd3800.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/46edc382.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/46edc382.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/6b0db430.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/6b0db430.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/45d6132f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/45d6132f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/85db4c32.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/85db4c32.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/0bfc273b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/0bfc273b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/5e2f0361.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/5e2f0361.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/cdfc2337.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/cdfc2337.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/4673f011.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/4673f011.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/bed033c2.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/bed033c2.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/089caba5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/089caba5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/f2355527.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/f2355527.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/70d5f5e4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/70d5f5e4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/e12cfd1b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/e12cfd1b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/9f7dcd23.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/9f7dcd23.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/fb1a8ba4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/fb1a8ba4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/e5a24d94.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/e5a24d94.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/a4b2b77e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/a4b2b77e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/2021802c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/2021802c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/8292c27e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/8292c27e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/8bb91547.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/8bb91547.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/146fe1cb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/146fe1cb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/1e27fea3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/1e27fea3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/9699b27d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/33000000/32160000/32157700/32157660/9699b27d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '121.3669850.3684267',
          detailPageUrl: '/3669850ha?unitId=3684267&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 3,
            minStayLow: 1,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 60 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '3669850ha',
          propertyMetadata: {
            headline: 'Charming apartment with terrace, steps from Notre-Dame',
            __typename: 'PropertyMetadata',
            propertyName: "Notre-Dame's Terrace",
          },
          superlativesBadges: [
            {
              id: '5',
              helpText: null,
              name: 'Wonderful! 4.9/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_3684267',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 1,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 540,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.4 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0000/2d55aee4-ff79-44a2-bf22-c7092f4faa55","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$287","perioddescription":"avg/night"}',
            formattedAmount: '$287',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.885965,
          reviewCount: 114,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 3669850,
          geoCode: {
            latitude: 48.85194629999999,
            longitude: 2.34850449999999,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'Air Conditioning',
              id: '10',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Satellite or Cable',
              id: '15',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Washer & Dryer',
              id: '17',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kids Welcome',
              id: '19',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/70920468.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/70920468.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/3634c92c.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/3634c92c.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/e8c8e720.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/e8c8e720.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/35a3f343.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/35a3f343.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/d04826ac.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/d04826ac.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/2be62633.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/2be62633.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/5c83b66a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/5c83b66a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/e765348a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/e765348a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/3d9f211d.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/3d9f211d.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/f68b8391.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/f68b8391.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/2e7fad9f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/2e7fad9f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/a892084b.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/a892084b.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/714f965f.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/714f965f.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/24b4912a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/39000000/38370000/38367500/38367419/24b4912a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '321.1695815.2257297',
          detailPageUrl: '/1695815?unitId=2257297&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 5,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
          ],
          propertyId: '1695815',
          propertyMetadata: {
            headline: 'luxury 1BR 2BA close to place des vosges fully A/C',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '6',
              helpText: null,
              name: 'Exceptional! 5/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'unit_2257297',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 2,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 538,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '0.6 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0004/6d76fa1c-5dd9-49f0-9e95-e0c544d13a79","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$225","perioddescription":"avg/night"}',
            formattedAmount: '$225',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.965517,
          reviewCount: 29,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'vrbo',
          listingNumber: 1695815,
          geoCode: {
            latitude: 48.85849363,
            longitude: 2.36350277,
            __typename: 'ListingGeoCode',
          },
        },
        {
          virtualTourBadge: null,
          amenitiesBadges: [
            {
              name: 'No Smoking',
              id: '11',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Internet',
              id: '12',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'TV',
              id: '13',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Heater',
              id: '18',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Parking',
              id: '20',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Bed linens provided',
              id: '22',
              helpText: null,
              __typename: 'Badge',
            },
            {
              name: 'Kitchen',
              id: '24',
              helpText: null,
              __typename: 'Badge',
            },
          ],
          multiUnitProperty: false,
          images: [
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/98f02798.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/98f02798.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/eaf6dab5.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/eaf6dab5.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/eb668dcc.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/eb668dcc.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/afc62d01.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/afc62d01.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/b5914ebe.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/b5914ebe.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/789ab217.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/789ab217.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/677da292.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/677da292.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/c83e1828.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/c83e1828.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/ca19420e.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/ca19420e.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/599ce2b0.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/599ce2b0.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/9af70657.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/9af70657.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/c467f265.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/c467f265.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/dff12f20.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/dff12f20.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/3dd41cb3.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/3dd41cb3.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/75964dc4.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/75964dc4.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/be169b68.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/be169b68.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/de52c14a.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/de52c14a.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/94327750.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/94327750.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/23e4b0da.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/23e4b0da.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
            {
              altText: null,
              c6_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/cf6ddbbb.c6.jpg',
              c9_uri:
                'https://media.vrbo.com/lodging/40000000/39970000/39968000/39967962/cf6ddbbb.c9.jpg',
              mab: null,
              __typename: 'Image',
            },
          ],
          listingId: '811.6859933.4038159',
          detailPageUrl: '/6859933ha?unitId=4038159&noDates=true',
          instantBookable: true,
          minStayRange: {
            minStayHigh: 7,
            minStayLow: 2,
            __typename: 'MinStayRange',
          },
          rankedBadges: [
            {
              id: '1',
              helpText:
                'They consistently provide great experiences for their guests',
              name: 'Premier Host',
              __typename: 'Badge',
            },
            {
              id: '49',
              helpText: 'Free cancellation up to 14 days before check-in',
              name: 'Free cancellation',
              __typename: 'Badge',
            },
          ],
          propertyId: '6859933ha',
          propertyMetadata: {
            headline: 'Two rooms at the foot of Montmartre ',
            __typename: 'PropertyMetadata',
            propertyName: null,
          },
          superlativesBadges: [
            {
              id: '4',
              helpText: null,
              name: 'Excellent! 4.6/5',
              __typename: 'Badge',
            },
          ],
          unitMetadata: {
            unitName: 'default-unit',
            __typename: 'UnitMetadata',
          },
          webRatingBadges: [],
          bathrooms: {
            full: 2,
            half: 0,
            toiletOnly: 0,
            __typename: 'Bathrooms',
          },
          bedrooms: 1,
          propertyType: 'Apartment',
          sleeps: 4,
          petsAllowed: false,
          spaces: {
            spacesSummary: {
              area: {
                areaValue: 570,
                __typename: 'AreaMeasurement',
              },
              __typename: 'SpacesSummary',
            },
            __typename: 'Spaces',
          },
          __typename: 'Listing',
          geoDistance: {
            text: '2.2 mi to Paris center',
            relationType: 'PROVIDED_PLACE_LOCATION_CROW_FLIES',
            __typename: 'GeoDistance',
          },
          priceSummary: {
            priceAccurate: null,
            priceTypeId: 'UNKNOWN',
            edapEventJson:
              '{"unituuid":"/units/0001/1d1ef319-a942-4035-ade8-cb25de92caa8","eventnumadults":"1","eventnumchildren":"0","eventcurrency":"USD","eventpets":"false","stramount":"$133","perioddescription":"avg/night"}',
            formattedAmount: '$133',
            roundedFormattedAmount: '',
            pricePeriodDescription: 'avg/night',
            __typename: 'TravelerPriceSummary',
          },
          priceSummarySecondary: null,
          priceLabel: null,
          averageRating: 4.625,
          reviewCount: 24,
          unitMessage: {
            iconText: null,
            __typename: 'UnitMessage',
          },
          listingNamespace: 'trips',
          listingNumber: 6859933,
          geoCode: {
            latitude: 48.8884908,
            longitude: 2.3528570999999374,
            __typename: 'ListingGeoCode',
          },
        },
      ],
      pinnedListing: null,
      parsedParams: {
        q: 'paris',
        coreFilters: {
          adults: null,
          children: null,
          pets: 0,
          minBedrooms: 0,
          maxBedrooms: null,
          minBathrooms: 0,
          maxBathrooms: null,
          minNightlyPrice: 0,
          maxNightlyPrice: null,
          minSleeps: null,
          __typename: 'CoreFilters',
        },
        dates: null,
        sort: null,
        __typename: 'ParsedSearchParams',
      },
      pageCount: 10,
      fromRecord: 1,
      toRecord: 50,
      mapViewport: {
        neLat: 48.8894164872,
        neLong: 2.4015760997999998,
        swLat: 48.841280752799996,
        swLong: 2.2936241101999997,
        __typename: 'MapViewport',
      },
      expandedGroups: [],
      discoveryXploreFeeds: {
        results: [],
        __typename: 'DiscoveryFeeds',
      },
      internalTools: null,
      globalMessages: {
        alert: null,
        __typename: 'GlobalMessages',
        banner: null,
      },
      percentBooked: null,
    },
    requestmarker: '28e1906e-77ce-af77-949c-cb71f184d07b',
    __typename: 'Query',
  },
};
