import type { Location } from './locations';

/**
 * UK towns with a population of 10,000 or more, from the GeoNames GB
 * gazetteer (CC BY 4.0). GENERATED FILE — do not edit by hand. Regenerate with:
 *
 *   node scripts/generate-towns.mjs GB.txt admin2Codes.txt
 *
 * Coordinates are the settlement centre and drive the live pollen lookup, so
 * they are kept to 4 decimal places (~11 m) even though the upstream call
 * buckets to 0.05°.
 */

export const TOWNS: Location[] = [
	{
		slug: 'abbey-wood',
		name: 'Abbey Wood',
		type: 'town',
		lat: 51.4869,
		lon: 0.1075,
		parentRegion: 'london',
		county: 'Greater London',
		population: 17700
	},
	{
		slug: 'abbots-langley',
		name: 'Abbots Langley',
		type: 'town',
		lat: 51.7057,
		lon: -0.4176,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 10472
	},
	{
		slug: 'abercarn',
		name: 'Abercarn',
		type: 'town',
		lat: 51.6473,
		lon: -3.1348,
		parentRegion: 'wales',
		county: 'Caerphilly County Borough',
		population: 10118
	},
	{
		slug: 'aberdare',
		name: 'Aberdare',
		type: 'town',
		lat: 51.7144,
		lon: -3.4492,
		parentRegion: 'wales',
		county: 'Rhondda Cynon Taf',
		population: 31135
	},
	{
		slug: 'abergavenny',
		name: 'Abergavenny',
		type: 'town',
		lat: 51.821,
		lon: -3.0174,
		parentRegion: 'wales',
		county: 'Monmouthshire',
		population: 13695
	},
	{
		slug: 'abergele',
		name: 'Abergele',
		type: 'town',
		lat: 53.2844,
		lon: -3.5822,
		parentRegion: 'wales',
		county: 'Conwy',
		population: 11290
	},
	{
		slug: 'aberkenfig',
		name: 'Aberkenfig',
		type: 'town',
		lat: 51.54,
		lon: -3.5956,
		parentRegion: 'wales',
		county: 'Bridgend county borough',
		population: 10083
	},
	{
		slug: 'abertillery',
		name: 'Abertillery',
		type: 'town',
		lat: 51.7298,
		lon: -3.1343,
		parentRegion: 'wales',
		county: 'Blaenau Gwent',
		population: 10946
	},
	{
		slug: 'aberystwyth',
		name: 'Aberystwyth',
		type: 'town',
		lat: 52.4155,
		lon: -4.0829,
		parentRegion: 'wales',
		county: 'County of Ceredigion',
		population: 18749
	},
	{
		slug: 'abingdon',
		name: 'Abingdon',
		type: 'town',
		lat: 51.6711,
		lon: -1.2828,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 38676
	},
	{
		slug: 'abram',
		name: 'Abram',
		type: 'town',
		lat: 53.5085,
		lon: -2.5927,
		parentRegion: 'north-west',
		county: 'Borough of Wigan',
		population: 10074
	},
	{
		slug: 'accrington',
		name: 'Accrington',
		type: 'town',
		lat: 53.7538,
		lon: -2.3586,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 34897
	},
	{
		slug: 'acton',
		name: 'Acton',
		type: 'town',
		lat: 51.509,
		lon: -0.2762,
		parentRegion: 'london',
		county: 'Greater London',
		population: 62480
	},
	{
		slug: 'addlestone',
		name: 'Addlestone',
		type: 'town',
		lat: 51.3713,
		lon: -0.4935,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 14978
	},
	{
		slug: 'adwick-le-street',
		name: 'Adwick le Street',
		type: 'town',
		lat: 53.5708,
		lon: -1.1845,
		parentRegion: 'yorkshire-and-humber',
		county: 'Doncaster',
		population: 19481
	},
	{
		slug: 'airdrie',
		name: 'Airdrie',
		type: 'town',
		lat: 55.866,
		lon: -3.9802,
		parentRegion: 'strathclyde',
		county: 'North Lanarkshire',
		population: 36390
	},
	{
		slug: 'aldershot',
		name: 'Aldershot',
		type: 'town',
		lat: 51.2483,
		lon: -0.7639,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 40160
	},
	{
		slug: 'aldridge',
		name: 'Aldridge',
		type: 'town',
		lat: 52.6055,
		lon: -1.9171,
		parentRegion: 'west-midlands',
		county: 'Walsall',
		population: 26896
	},
	{
		slug: 'alfreton',
		name: 'Alfreton',
		type: 'town',
		lat: 53.0977,
		lon: -1.3838,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 22550
	},
	{
		slug: 'allerton',
		name: 'Allerton',
		type: 'town',
		lat: 53.367,
		lon: -2.894,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 15540
	},
	{
		slug: 'alloa',
		name: 'Alloa',
		type: 'town',
		lat: 56.1159,
		lon: -3.79,
		parentRegion: 'tayside-and-fife',
		county: 'Clackmannanshire',
		population: 20390
	},
	{
		slug: 'alsager',
		name: 'Alsager',
		type: 'town',
		lat: 53.0962,
		lon: -2.3065,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 13347
	},
	{
		slug: 'alton',
		name: 'Alton',
		type: 'town',
		lat: 51.1493,
		lon: -0.9747,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 19425
	},
	{
		slug: 'altrincham',
		name: 'Altrincham',
		type: 'town',
		lat: 53.3875,
		lon: -2.3485,
		parentRegion: 'north-west',
		county: 'Trafford',
		population: 49680
	},
	{
		slug: 'amersham',
		name: 'Amersham',
		type: 'town',
		lat: 51.6667,
		lon: -0.6167,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 21731
	},
	{
		slug: 'amersham-on-the-hill',
		name: 'Amersham on the Hill',
		type: 'town',
		lat: 51.6747,
		lon: -0.6074,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 17719
	},
	{
		slug: 'amesbury',
		name: 'Amesbury',
		type: 'town',
		lat: 51.1751,
		lon: -1.7806,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 10116
	},
	{
		slug: 'ammanford',
		name: 'Ammanford',
		type: 'town',
		lat: 51.7928,
		lon: -3.9883,
		parentRegion: 'wales',
		county: 'Carmarthenshire',
		population: 23709
	},
	{
		slug: 'ampthill',
		name: 'Ampthill',
		type: 'town',
		lat: 52.0269,
		lon: -0.4957,
		parentRegion: 'east-of-england',
		county: 'Central Bedfordshire',
		population: 20026
	},
	{
		slug: 'andover',
		name: 'Andover',
		type: 'town',
		lat: 51.2114,
		lon: -1.4939,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 42276
	},
	{
		slug: 'annfield-plain',
		name: 'Annfield Plain',
		type: 'town',
		lat: 54.8575,
		lon: -1.7383,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 10406
	},
	{
		slug: 'antrim',
		name: 'Antrim',
		type: 'town',
		lat: 54.7175,
		lon: -6.211,
		parentRegion: 'northern-ireland',
		county: 'Antrim and Newtownabbey',
		population: 19661
	},
	{
		slug: 'arbroath',
		name: 'Arbroath',
		type: 'town',
		lat: 56.5632,
		lon: -2.5874,
		parentRegion: 'tayside-and-fife',
		county: 'Angus',
		population: 23640
	},
	{
		slug: 'ardrossan',
		name: 'Ardrossan',
		type: 'town',
		lat: 55.6502,
		lon: -4.8066,
		parentRegion: 'strathclyde',
		county: 'North Ayrshire',
		population: 10500
	},
	{
		slug: 'armadale',
		name: 'Armadale',
		type: 'town',
		lat: 55.8833,
		lon: -3.7,
		parentRegion: 'dumfries-and-borders',
		county: 'West Lothian',
		population: 12720
	},
	{
		slug: 'armagh',
		name: 'Armagh',
		type: 'town',
		lat: 54.35,
		lon: -6.6667,
		parentRegion: 'northern-ireland',
		county: 'Armagh City Banbridge and Craigavon',
		population: 14801
	},
	{
		slug: 'armthorpe',
		name: 'Armthorpe',
		type: 'town',
		lat: 53.5352,
		lon: -1.0534,
		parentRegion: 'yorkshire-and-humber',
		county: 'Doncaster',
		population: 12911
	},
	{
		slug: 'arnold',
		name: 'Arnold',
		type: 'town',
		lat: 53,
		lon: -1.1333,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 37873
	},
	{
		slug: 'ascot',
		name: 'Ascot',
		type: 'town',
		lat: 51.4108,
		lon: -0.6748,
		parentRegion: 'south-east',
		county: 'Royal Borough of Windsor and Maidenhead',
		population: 17899
	},
	{
		slug: 'ashby-de-la-zouch',
		name: 'Ashby-de-la-Zouch',
		type: 'town',
		lat: 52.7463,
		lon: -1.4732,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 12370
	},
	{
		slug: 'ashford',
		name: 'Ashford',
		type: 'town',
		lat: 51.1465,
		lon: 0.8738,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 62787
	},
	{
		slug: 'ashford-surrey',
		name: 'Ashford',
		type: 'town',
		lat: 51.4317,
		lon: -0.4576,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 27382
	},
	{
		slug: 'ashington',
		name: 'Ashington',
		type: 'town',
		lat: 55.1772,
		lon: -1.5641,
		parentRegion: 'north-east',
		county: 'Northumberland',
		population: 27670
	},
	{
		slug: 'ashtead',
		name: 'Ashtead',
		type: 'town',
		lat: 51.3087,
		lon: -0.2997,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 13494
	},
	{
		slug: 'ashton-in-makerfield',
		name: 'Ashton in Makerfield',
		type: 'town',
		lat: 53.4833,
		lon: -2.65,
		parentRegion: 'north-west',
		county: 'St. Helens',
		population: 26380
	},
	{
		slug: 'ashton-under-lyne',
		name: 'Ashton-under-Lyne',
		type: 'town',
		lat: 53.4888,
		lon: -2.0989,
		parentRegion: 'north-west',
		county: 'Borough of Tameside',
		population: 43675
	},
	{
		slug: 'atherstone',
		name: 'Atherstone',
		type: 'town',
		lat: 52.5754,
		lon: -1.5469,
		parentRegion: 'west-midlands',
		county: 'Warwickshire',
		population: 11259
	},
	{
		slug: 'atherton',
		name: 'Atherton',
		type: 'town',
		lat: 53.5237,
		lon: -2.4935,
		parentRegion: 'north-west',
		county: 'Borough of Wigan',
		population: 22000
	},
	{
		slug: 'attleborough',
		name: 'Attleborough',
		type: 'town',
		lat: 52.5178,
		lon: 1.0157,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 10549
	},
	{
		slug: 'aylesbury',
		name: 'Aylesbury',
		type: 'town',
		lat: 51.8167,
		lon: -0.8146,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 74748
	},
	{
		slug: 'aylestone',
		name: 'Aylestone',
		type: 'town',
		lat: 52.6042,
		lon: -1.1463,
		parentRegion: 'east-midlands',
		county: 'City of Leicester',
		population: 11151
	},
	{
		slug: 'ayr',
		name: 'Ayr',
		type: 'town',
		lat: 55.4627,
		lon: -4.6339,
		parentRegion: 'strathclyde',
		county: 'South Ayrshire',
		population: 46260
	},
	{
		slug: 'bacup',
		name: 'Bacup',
		type: 'town',
		lat: 53.7034,
		lon: -2.2007,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 13047
	},
	{
		slug: 'baildon',
		name: 'Baildon',
		type: 'town',
		lat: 53.8471,
		lon: -1.7878,
		parentRegion: 'yorkshire-and-humber',
		county: 'Bradford',
		population: 15710
	},
	{
		slug: 'baldock',
		name: 'Baldock',
		type: 'town',
		lat: 51.9878,
		lon: -0.1883,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 10615
	},
	{
		slug: 'balham',
		name: 'Balham',
		type: 'town',
		lat: 51.4496,
		lon: -0.151,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14751
	},
	{
		slug: 'ballymena',
		name: 'Ballymena',
		type: 'town',
		lat: 54.8636,
		lon: -6.2763,
		parentRegion: 'northern-ireland',
		county: 'Mid and East Antrim',
		population: 28932
	},
	{
		slug: 'banbridge',
		name: 'Banbridge',
		type: 'town',
		lat: 54.35,
		lon: -6.2833,
		parentRegion: 'northern-ireland',
		county: 'Armagh City Banbridge and Craigavon',
		population: 16173
	},
	{
		slug: 'banbury',
		name: 'Banbury',
		type: 'town',
		lat: 52.0632,
		lon: -1.3422,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 48651
	},
	{
		slug: 'bangor',
		name: 'Bangor',
		type: 'town',
		lat: 54.6608,
		lon: -5.668,
		parentRegion: 'northern-ireland',
		county: 'Ards and North Down',
		population: 61011
	},
	{
		slug: 'bangor-gwynedd',
		name: 'Bangor',
		type: 'town',
		lat: 53.2275,
		lon: -4.1294,
		parentRegion: 'wales',
		county: 'Gwynedd',
		population: 18322
	},
	{
		slug: 'banstead',
		name: 'Banstead',
		type: 'town',
		lat: 51.3223,
		lon: -0.2069,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 46280
	},
	{
		slug: 'bargoed',
		name: 'Bargoed',
		type: 'town',
		lat: 51.6833,
		lon: -3.2333,
		parentRegion: 'wales',
		county: 'Caerphilly County Borough',
		population: 13412
	},
	{
		slug: 'barking',
		name: 'Barking',
		type: 'town',
		lat: 51.5333,
		lon: 0.0833,
		parentRegion: 'london',
		county: 'Greater London',
		population: 218534
	},
	{
		slug: 'barnes',
		name: 'Barnes',
		type: 'town',
		lat: 51.4735,
		lon: -0.2484,
		parentRegion: 'london',
		county: 'Greater London',
		population: 21218
	},
	{
		slug: 'barnet',
		name: 'Barnet',
		type: 'town',
		lat: 51.65,
		lon: -0.2,
		parentRegion: 'london',
		county: 'Greater London',
		population: 30000
	},
	{
		slug: 'barnham',
		name: 'Barnham',
		type: 'town',
		lat: 50.8312,
		lon: -0.6379,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 11881
	},
	{
		slug: 'barnoldswick',
		name: 'Barnoldswick',
		type: 'town',
		lat: 53.9171,
		lon: -2.1871,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 10435
	},
	{
		slug: 'barnsbury',
		name: 'Barnsbury',
		type: 'town',
		lat: 51.5407,
		lon: -0.1168,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10000
	},
	{
		slug: 'barnsley',
		name: 'Barnsley',
		type: 'town',
		lat: 53.55,
		lon: -1.4833,
		parentRegion: 'yorkshire-and-humber',
		county: 'Barnsley',
		population: 71447
	},
	{
		slug: 'barnstaple',
		name: 'Barnstaple',
		type: 'town',
		lat: 51.0802,
		lon: -4.0581,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 31616
	},
	{
		slug: 'barrhead',
		name: 'Barrhead',
		type: 'town',
		lat: 55.7992,
		lon: -4.3929,
		parentRegion: 'strathclyde',
		county: 'East Renfrewshire',
		population: 17890
	},
	{
		slug: 'barrow-in-furness',
		name: 'Barrow in Furness',
		type: 'town',
		lat: 54.1109,
		lon: -3.2276,
		parentRegion: 'north-west',
		county: 'Cumbria',
		population: 55489
	},
	{
		slug: 'barry',
		name: 'Barry',
		type: 'town',
		lat: 51.3998,
		lon: -3.2838,
		parentRegion: 'wales',
		county: 'Vale of Glamorgan',
		population: 54673
	},
	{
		slug: 'bartley-green',
		name: 'Bartley Green',
		type: 'town',
		lat: 52.4353,
		lon: -1.9971,
		parentRegion: 'west-midlands',
		county: 'City and Borough of Birmingham',
		population: 22670
	},
	{
		slug: 'barton-upon-humber',
		name: 'Barton upon Humber',
		type: 'town',
		lat: 53.6891,
		lon: -0.4438,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Lincolnshire',
		population: 11066
	},
	{
		slug: 'basford',
		name: 'Basford',
		type: 'town',
		lat: 52.9667,
		lon: -1.1833,
		parentRegion: 'east-midlands',
		county: 'Nottingham',
		population: 16000
	},
	{
		slug: 'basildon',
		name: 'Basildon',
		type: 'town',
		lat: 51.5684,
		lon: 0.4578,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 144859
	},
	{
		slug: 'basingstoke',
		name: 'Basingstoke',
		type: 'town',
		lat: 51.2625,
		lon: -1.0871,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 107642
	},
	{
		slug: 'batchworth',
		name: 'Batchworth',
		type: 'town',
		lat: 51.634,
		lon: -0.4642,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 12600
	},
	{
		slug: 'bath',
		name: 'Bath',
		type: 'town',
		lat: 51.3751,
		lon: -2.3617,
		parentRegion: 'south-west',
		county: 'Bath and North East Somerset',
		population: 101557
	},
	{
		slug: 'bathgate',
		name: 'Bathgate',
		type: 'town',
		lat: 55.902,
		lon: -3.644,
		parentRegion: 'dumfries-and-borders',
		county: 'West Lothian',
		population: 23600
	},
	{
		slug: 'batley',
		name: 'Batley',
		type: 'town',
		lat: 53.7029,
		lon: -1.6337,
		parentRegion: 'yorkshire-and-humber',
		county: 'Kirklees',
		population: 39013
	},
	{
		slug: 'beaconsfield',
		name: 'Beaconsfield',
		type: 'town',
		lat: 51.6122,
		lon: -0.6473,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 13797
	},
	{
		slug: 'bearsden',
		name: 'Bearsden',
		type: 'town',
		lat: 55.9154,
		lon: -4.3328,
		parentRegion: 'strathclyde',
		county: 'East Dunbartonshire',
		population: 28470
	},
	{
		slug: 'bebington',
		name: 'Bebington',
		type: 'town',
		lat: 53.35,
		lon: -3.0167,
		parentRegion: 'north-west',
		county: 'Metropolitan Borough of Wirral',
		population: 57600
	},
	{
		slug: 'beccles',
		name: 'Beccles',
		type: 'town',
		lat: 52.4594,
		lon: 1.5647,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 13868
	},
	{
		slug: 'beckenham',
		name: 'Beckenham',
		type: 'town',
		lat: 51.4088,
		lon: -0.0253,
		parentRegion: 'london',
		county: 'Greater London',
		population: 60739
	},
	{
		slug: 'bedford',
		name: 'Bedford',
		type: 'town',
		lat: 52.1346,
		lon: -0.4663,
		parentRegion: 'east-of-england',
		county: 'Bedford',
		population: 106940
	},
	{
		slug: 'bedlington',
		name: 'Bedlington',
		type: 'town',
		lat: 55.1306,
		lon: -1.5932,
		parentRegion: 'north-east',
		county: 'Northumberland',
		population: 18470
	},
	{
		slug: 'bedworth',
		name: 'Bedworth',
		type: 'town',
		lat: 52.4791,
		lon: -1.4691,
		parentRegion: 'west-midlands',
		county: 'Warwickshire',
		population: 31090
	},
	{
		slug: 'beighton',
		name: 'Beighton',
		type: 'town',
		lat: 53.3333,
		lon: -1.3333,
		parentRegion: 'yorkshire-and-humber',
		county: 'Sheffield',
		population: 10914
	},
	{
		slug: 'belgrave',
		name: 'Belgrave',
		type: 'town',
		lat: 52.65,
		lon: -1.1167,
		parentRegion: 'east-midlands',
		county: 'City of Leicester',
		population: 11558
	},
	{
		slug: 'bellshill',
		name: 'Bellshill',
		type: 'town',
		lat: 55.8167,
		lon: -4.0167,
		parentRegion: 'strathclyde',
		county: 'North Lanarkshire',
		population: 19700
	},
	{
		slug: 'belper',
		name: 'Belper',
		type: 'town',
		lat: 53.0233,
		lon: -1.4812,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 23417
	},
	{
		slug: 'belsize-park',
		name: 'Belsize Park',
		type: 'town',
		lat: 51.5477,
		lon: -0.1723,
		parentRegion: 'london',
		county: 'Greater London',
		population: 11600
	},
	{
		slug: 'bentley',
		name: 'Bentley',
		type: 'town',
		lat: 53.5333,
		lon: -1.15,
		parentRegion: 'yorkshire-and-humber',
		county: 'Doncaster',
		population: 34821
	},
	{
		slug: 'berkhamsted',
		name: 'Berkhamsted',
		type: 'town',
		lat: 51.7604,
		lon: -0.5653,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 21997
	},
	{
		slug: 'berwick-upon-tweed',
		name: 'Berwick-Upon-Tweed',
		type: 'town',
		lat: 55.7687,
		lon: -2.0054,
		parentRegion: 'north-east',
		county: 'Northumberland',
		population: 12043
	},
	{
		slug: 'beverley',
		name: 'Beverley',
		type: 'town',
		lat: 53.8459,
		lon: -0.4233,
		parentRegion: 'yorkshire-and-humber',
		county: 'East Riding of Yorkshire',
		population: 30587
	},
	{
		slug: 'bexhill-on-sea',
		name: 'Bexhill-on-Sea',
		type: 'town',
		lat: 50.8502,
		lon: 0.4709,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 43754
	},
	{
		slug: 'bicester',
		name: 'Bicester',
		type: 'town',
		lat: 51.9,
		lon: -1.1536,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 33846
	},
	{
		slug: 'bickley',
		name: 'Bickley',
		type: 'town',
		lat: 51.4014,
		lon: 0.0458,
		parentRegion: 'london',
		county: 'Greater London',
		population: 13904
	},
	{
		slug: 'biddulph',
		name: 'Biddulph',
		type: 'town',
		lat: 53.1172,
		lon: -2.1758,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 17669
	},
	{
		slug: 'bideford',
		name: 'Bideford',
		type: 'town',
		lat: 51.0168,
		lon: -4.2083,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 28672
	},
	{
		slug: 'biggin-hill',
		name: 'Biggin Hill',
		type: 'town',
		lat: 51.3133,
		lon: 0.0343,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10817
	},
	{
		slug: 'biggleswade',
		name: 'Biggleswade',
		type: 'town',
		lat: 52.0865,
		lon: -0.2649,
		parentRegion: 'east-of-england',
		county: 'Central Bedfordshire',
		population: 16551
	},
	{
		slug: 'billericay',
		name: 'Billericay',
		type: 'town',
		lat: 51.6287,
		lon: 0.4196,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 36338
	},
	{
		slug: 'billingham',
		name: 'Billingham',
		type: 'town',
		lat: 54.5888,
		lon: -1.2903,
		parentRegion: 'north-east',
		county: 'Stockton-on-Tees',
		population: 35708
	},
	{
		slug: 'bingley',
		name: 'Bingley',
		type: 'town',
		lat: 53.8486,
		lon: -1.8386,
		parentRegion: 'yorkshire-and-humber',
		county: 'Bradford',
		population: 18040
	},
	{
		slug: 'birkenhead',
		name: 'Birkenhead',
		type: 'town',
		lat: 53.3934,
		lon: -3.0148,
		parentRegion: 'north-west',
		county: 'Metropolitan Borough of Wirral',
		population: 325264
	},
	{
		slug: 'birstall',
		name: 'Birstall',
		type: 'town',
		lat: 52.6667,
		lon: -1.1167,
		parentRegion: 'east-midlands',
		county: 'City of Leicester',
		population: 12216
	},
	{
		slug: 'bishop-auckland',
		name: 'Bishop Auckland',
		type: 'town',
		lat: 54.6555,
		lon: -1.6771,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 26050
	},
	{
		slug: 'bishopbriggs',
		name: 'Bishopbriggs',
		type: 'town',
		lat: 55.9067,
		lon: -4.2187,
		parentRegion: 'strathclyde',
		county: 'East Dunbartonshire',
		population: 23680
	},
	{
		slug: 'bishops-cleeve',
		name: 'Bishops Cleeve',
		type: 'town',
		lat: 51.9475,
		lon: -2.0628,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 14231
	},
	{
		slug: 'bishops-stortford',
		name: 'Bishops Stortford',
		type: 'town',
		lat: 51.8711,
		lon: 0.1587,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 40915
	},
	{
		slug: 'bishopstoke',
		name: 'Bishopstoke',
		type: 'town',
		lat: 50.9664,
		lon: -1.3283,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 17667
	},
	{
		slug: 'blackburn',
		name: 'Blackburn',
		type: 'town',
		lat: 53.75,
		lon: -2.4833,
		parentRegion: 'north-west',
		county: 'Blackburn with Darwen',
		population: 146521
	},
	{
		slug: 'blackheath',
		name: 'Blackheath',
		type: 'town',
		lat: 51.4647,
		lon: 0.0079,
		parentRegion: 'london',
		county: 'Greater London',
		population: 25116
	},
	{
		slug: 'blackpool',
		name: 'Blackpool',
		type: 'town',
		lat: 53.8167,
		lon: -3.05,
		parentRegion: 'north-west',
		county: 'Blackpool',
		population: 145007
	},
	{
		slug: 'blackwood',
		name: 'Blackwood',
		type: 'town',
		lat: 51.6678,
		lon: -3.2075,
		parentRegion: 'wales',
		county: 'Caerphilly County Borough',
		population: 15476
	},
	{
		slug: 'blacon',
		name: 'Blacon',
		type: 'town',
		lat: 53.2083,
		lon: -2.9253,
		parentRegion: 'north-west',
		county: 'Cheshire West and Chester',
		population: 13495
	},
	{
		slug: 'blandford-forum',
		name: 'Blandford Forum',
		type: 'town',
		lat: 50.8607,
		lon: -2.1617,
		parentRegion: 'south-west',
		county: 'Dorset',
		population: 11694
	},
	{
		slug: 'blantyre',
		name: 'Blantyre',
		type: 'town',
		lat: 55.7963,
		lon: -4.0949,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 17090
	},
	{
		slug: 'blaydon-on-tyne',
		name: 'Blaydon-on-Tyne',
		type: 'town',
		lat: 54.9646,
		lon: -1.7139,
		parentRegion: 'north-east',
		county: 'Gateshead',
		population: 15155
	},
	{
		slug: 'bletchley',
		name: 'Bletchley',
		type: 'town',
		lat: 51.9933,
		lon: -0.7347,
		parentRegion: 'south-east',
		county: 'Milton Keynes',
		population: 50193
	},
	{
		slug: 'bloxwich',
		name: 'Bloxwich',
		type: 'town',
		lat: 52.6181,
		lon: -2.0043,
		parentRegion: 'west-midlands',
		county: 'Walsall',
		population: 40000
	},
	{
		slug: 'blyth',
		name: 'Blyth',
		type: 'town',
		lat: 55.1271,
		lon: -1.5086,
		parentRegion: 'north-east',
		county: 'Northumberland',
		population: 37339
	},
	{
		slug: 'boness',
		name: 'Bo’ness',
		type: 'town',
		lat: 56.0167,
		lon: -3.6167,
		parentRegion: 'tayside-and-fife',
		county: 'Falkirk',
		population: 14840
	},
	{
		slug: 'bodmin',
		name: 'Bodmin',
		type: 'town',
		lat: 50.4715,
		lon: -4.7243,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 16909
	},
	{
		slug: 'bognor-regis',
		name: 'Bognor Regis',
		type: 'town',
		lat: 50.7821,
		lon: -0.6798,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 63885
	},
	{
		slug: 'bolsover',
		name: 'Bolsover',
		type: 'town',
		lat: 53.2285,
		lon: -1.292,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 11754
	},
	{
		slug: 'bolton-upon-dearne',
		name: 'Bolton upon Dearne',
		type: 'town',
		lat: 53.5167,
		lon: -1.3167,
		parentRegion: 'yorkshire-and-humber',
		county: 'Barnsley',
		population: 13236
	},
	{
		slug: 'bonnyrigg',
		name: 'Bonnyrigg',
		type: 'town',
		lat: 55.8733,
		lon: -3.1051,
		parentRegion: 'dumfries-and-borders',
		county: 'Midlothian',
		population: 18320
	},
	{
		slug: 'bootle',
		name: 'Bootle',
		type: 'town',
		lat: 53.4667,
		lon: -3.0167,
		parentRegion: 'north-west',
		county: 'Sefton',
		population: 57791
	},
	{
		slug: 'bordon',
		name: 'Bordon',
		type: 'town',
		lat: 51.1136,
		lon: -0.8625,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 20978
	},
	{
		slug: 'borehamwood',
		name: 'Borehamwood',
		type: 'town',
		lat: 51.6547,
		lon: -0.2776,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 36322
	},
	{
		slug: 'boston',
		name: 'Boston',
		type: 'town',
		lat: 52.9763,
		lon: -0.0266,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 45339
	},
	{
		slug: 'boughton',
		name: 'Boughton',
		type: 'town',
		lat: 53.2,
		lon: -0.9833,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 10120
	},
	{
		slug: 'bourne',
		name: 'Bourne',
		type: 'town',
		lat: 52.7667,
		lon: -0.3833,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 13961
	},
	{
		slug: 'bowthorpe',
		name: 'Bowthorpe',
		type: 'town',
		lat: 52.6388,
		lon: 1.2188,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 20000
	},
	{
		slug: 'brackley',
		name: 'Brackley',
		type: 'town',
		lat: 52.0333,
		lon: -1.15,
		parentRegion: 'east-midlands',
		county: 'West Northamptonshire',
		population: 13018
	},
	{
		slug: 'bracknell',
		name: 'Bracknell',
		type: 'town',
		lat: 51.4136,
		lon: -0.7505,
		parentRegion: 'south-east',
		county: 'Bracknell Forest',
		population: 76103
	},
	{
		slug: 'bradwell',
		name: 'Bradwell',
		type: 'town',
		lat: 52.5735,
		lon: 1.6998,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 10000
	},
	{
		slug: 'braintree',
		name: 'Braintree',
		type: 'town',
		lat: 51.8782,
		lon: 0.5529,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 53477
	},
	{
		slug: 'bramhall',
		name: 'Bramhall',
		type: 'town',
		lat: 53.358,
		lon: -2.1654,
		parentRegion: 'north-west',
		county: 'Borough of Stockport',
		population: 17195
	},
	{
		slug: 'braunstone',
		name: 'Braunstone',
		type: 'town',
		lat: 52.6183,
		lon: -1.179,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 16850
	},
	{
		slug: 'bredbury',
		name: 'Bredbury',
		type: 'town',
		lat: 53.4167,
		lon: -2.1167,
		parentRegion: 'north-west',
		county: 'Borough of Stockport',
		population: 17040
	},
	{
		slug: 'brentford',
		name: 'Brentford',
		type: 'town',
		lat: 51.4862,
		lon: -0.3083,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10750
	},
	{
		slug: 'brentwood',
		name: 'Brentwood',
		type: 'town',
		lat: 51.6213,
		lon: 0.3056,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 52586
	},
	{
		slug: 'bridgend',
		name: 'Bridgend',
		type: 'town',
		lat: 51.5058,
		lon: -3.5772,
		parentRegion: 'wales',
		county: 'Bridgend county borough',
		population: 49597
	},
	{
		slug: 'bridgnorth',
		name: 'Bridgnorth',
		type: 'town',
		lat: 52.5366,
		lon: -2.4203,
		parentRegion: 'west-midlands',
		county: 'Shropshire',
		population: 12657
	},
	{
		slug: 'bridgwater',
		name: 'Bridgwater',
		type: 'town',
		lat: 51.1284,
		lon: -3.0036,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 41276
	},
	{
		slug: 'bridlington',
		name: 'Bridlington',
		type: 'town',
		lat: 54.0831,
		lon: -0.1919,
		parentRegion: 'yorkshire-and-humber',
		county: 'East Riding of Yorkshire',
		population: 35154
	},
	{
		slug: 'bridport',
		name: 'Bridport',
		type: 'town',
		lat: 50.7338,
		lon: -2.7583,
		parentRegion: 'south-west',
		county: 'Dorset',
		population: 12295
	},
	{
		slug: 'brierfield',
		name: 'Brierfield',
		type: 'town',
		lat: 53.8247,
		lon: -2.2342,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 10271
	},
	{
		slug: 'brierley-hill',
		name: 'Brierley Hill',
		type: 'town',
		lat: 52.4817,
		lon: -2.1214,
		parentRegion: 'west-midlands',
		county: 'Dudley',
		population: 28000
	},
	{
		slug: 'brighouse',
		name: 'Brighouse',
		type: 'town',
		lat: 53.7032,
		lon: -1.7843,
		parentRegion: 'yorkshire-and-humber',
		county: 'Calderdale',
		population: 32872
	},
	{
		slug: 'briton-ferry',
		name: 'Briton Ferry',
		type: 'town',
		lat: 51.6311,
		lon: -3.819,
		parentRegion: 'wales',
		county: 'Neath Port Talbot',
		population: 35179
	},
	{
		slug: 'brixham',
		name: 'Brixham',
		type: 'town',
		lat: 50.3943,
		lon: -3.5158,
		parentRegion: 'south-west',
		county: 'Borough of Torbay',
		population: 16693
	},
	{
		slug: 'brixton-hill',
		name: 'Brixton Hill',
		type: 'town',
		lat: 51.4521,
		lon: -0.123,
		parentRegion: 'london',
		county: 'Greater London',
		population: 12458
	},
	{
		slug: 'broadfield',
		name: 'Broadfield',
		type: 'town',
		lat: 51.0971,
		lon: -0.2066,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 13000
	},
	{
		slug: 'broadstairs',
		name: 'Broadstairs',
		type: 'town',
		lat: 51.3584,
		lon: 1.4419,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 23283
	},
	{
		slug: 'broadstone',
		name: 'Broadstone',
		type: 'town',
		lat: 50.7572,
		lon: -1.9941,
		parentRegion: 'south-west',
		county: 'Bournemouth, Christchurch and Poole Council',
		population: 10289
	},
	{
		slug: 'brockley',
		name: 'Brockley',
		type: 'town',
		lat: 51.4637,
		lon: -0.0365,
		parentRegion: 'london',
		county: 'Greater London',
		population: 17156
	},
	{
		slug: 'bromborough',
		name: 'Bromborough',
		type: 'town',
		lat: 53.3485,
		lon: -2.9794,
		parentRegion: 'north-west',
		county: 'Metropolitan Borough of Wirral',
		population: 14850
	},
	{
		slug: 'bromsgrove',
		name: 'Bromsgrove',
		type: 'town',
		lat: 52.3357,
		lon: -2.0598,
		parentRegion: 'west-midlands',
		county: 'Worcestershire',
		population: 34755
	},
	{
		slug: 'brough',
		name: 'Brough',
		type: 'town',
		lat: 53.7286,
		lon: -0.5722,
		parentRegion: 'yorkshire-and-humber',
		county: 'East Riding of Yorkshire',
		population: 19904
	},
	{
		slug: 'brownhills',
		name: 'Brownhills',
		type: 'town',
		lat: 52.6333,
		lon: -1.9333,
		parentRegion: 'west-midlands',
		county: 'Walsall',
		population: 13441
	},
	{
		slug: 'broxbourne',
		name: 'Broxbourne',
		type: 'town',
		lat: 51.7471,
		lon: -0.0192,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 13298
	},
	{
		slug: 'broxburn',
		name: 'Broxburn',
		type: 'town',
		lat: 55.9342,
		lon: -3.4713,
		parentRegion: 'dumfries-and-borders',
		county: 'West Lothian',
		population: 15970
	},
	{
		slug: 'brymbo',
		name: 'Brymbo',
		type: 'town',
		lat: 53.0667,
		lon: -3.0667,
		parentRegion: 'wales',
		county: 'Wrexham',
		population: 18111
	},
	{
		slug: 'brynmawr',
		name: 'Brynmawr',
		type: 'town',
		lat: 51.8,
		lon: -3.1833,
		parentRegion: 'wales',
		county: 'Blaenau Gwent',
		population: 14924
	},
	{
		slug: 'buckhurst-hill',
		name: 'Buckhurst Hill',
		type: 'town',
		lat: 51.6241,
		lon: 0.0326,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 11755
	},
	{
		slug: 'buckingham',
		name: 'Buckingham',
		type: 'town',
		lat: 51.9997,
		lon: -0.9878,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 12890
	},
	{
		slug: 'buckley',
		name: 'Buckley',
		type: 'town',
		lat: 53.1667,
		lon: -3.0833,
		parentRegion: 'wales',
		county: 'County of Flintshire',
		population: 63576
	},
	{
		slug: 'burgess-hill',
		name: 'Burgess Hill',
		type: 'town',
		lat: 50.9584,
		lon: -0.1329,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 30635
	},
	{
		slug: 'burngreave',
		name: 'Burngreave',
		type: 'town',
		lat: 53.393,
		lon: -1.4579,
		parentRegion: 'yorkshire-and-humber',
		county: 'Sheffield',
		population: 27481
	},
	{
		slug: 'burnham',
		name: 'Burnham',
		type: 'town',
		lat: 51.5353,
		lon: -0.6658,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 12500
	},
	{
		slug: 'burnham-on-sea',
		name: 'Burnham-on-Sea',
		type: 'town',
		lat: 51.2386,
		lon: -2.9978,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 23325
	},
	{
		slug: 'burnley',
		name: 'Burnley',
		type: 'town',
		lat: 53.8,
		lon: -2.2333,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 149422
	},
	{
		slug: 'burntwood',
		name: 'Burntwood',
		type: 'town',
		lat: 52.6808,
		lon: -1.9276,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 29244
	},
	{
		slug: 'burton-upon-trent',
		name: 'Burton upon Trent',
		type: 'town',
		lat: 52.8073,
		lon: -1.6426,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 122199
	},
	{
		slug: 'bury',
		name: 'Bury',
		type: 'town',
		lat: 53.6,
		lon: -2.3,
		parentRegion: 'north-west',
		county: 'Borough of Bury',
		population: 61044
	},
	{
		slug: 'bury-st-edmunds',
		name: 'Bury St Edmunds',
		type: 'town',
		lat: 52.2463,
		lon: 0.7111,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 41280
	},
	{
		slug: 'bushey',
		name: 'Bushey',
		type: 'town',
		lat: 51.6432,
		lon: -0.3605,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 28416
	},
	{
		slug: 'buxton',
		name: 'Buxton',
		type: 'town',
		lat: 53.2574,
		lon: -1.9098,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 20048
	},
	{
		slug: 'caerphilly',
		name: 'Caerphilly',
		type: 'town',
		lat: 51.5745,
		lon: -3.218,
		parentRegion: 'wales',
		county: 'Caerphilly County Borough',
		population: 31060
	},
	{
		slug: 'calne',
		name: 'Calne',
		type: 'town',
		lat: 51.4388,
		lon: -2.0057,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 17274
	},
	{
		slug: 'camberley',
		name: 'Camberley',
		type: 'town',
		lat: 51.337,
		lon: -0.7426,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 30155
	},
	{
		slug: 'camborne',
		name: 'Camborne',
		type: 'town',
		lat: 50.2131,
		lon: -5.2973,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 20450
	},
	{
		slug: 'cambuslang',
		name: 'Cambuslang',
		type: 'town',
		lat: 55.8097,
		lon: -4.161,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 30790
	},
	{
		slug: 'camden-town',
		name: 'Camden Town',
		type: 'town',
		lat: 51.5406,
		lon: -0.1433,
		parentRegion: 'london',
		county: 'Greater London',
		population: 26122
	},
	{
		slug: 'canning-town',
		name: 'Canning Town',
		type: 'town',
		lat: 51.5136,
		lon: 0.0195,
		parentRegion: 'london',
		county: 'Greater London',
		population: 42667
	},
	{
		slug: 'cannock',
		name: 'Cannock',
		type: 'town',
		lat: 52.6904,
		lon: -2.0309,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 86121
	},
	{
		slug: 'canterbury',
		name: 'Canterbury',
		type: 'town',
		lat: 51.279,
		lon: 1.0799,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 55087
	},
	{
		slug: 'canvey-island',
		name: 'Canvey Island',
		type: 'town',
		lat: 51.522,
		lon: 0.5809,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 38170
	},
	{
		slug: 'carlisle',
		name: 'Carlisle',
		type: 'town',
		lat: 54.8951,
		lon: -2.9382,
		parentRegion: 'north-west',
		county: 'Cumbria',
		population: 78470
	},
	{
		slug: 'carluke',
		name: 'Carluke',
		type: 'town',
		lat: 55.736,
		lon: -3.8302,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 13810
	},
	{
		slug: 'carmarthen',
		name: 'Carmarthen',
		type: 'town',
		lat: 51.8555,
		lon: -4.3053,
		parentRegion: 'wales',
		county: 'Carmarthenshire',
		population: 15854
	},
	{
		slug: 'carnoustie',
		name: 'Carnoustie',
		type: 'town',
		lat: 56.5026,
		lon: -2.7053,
		parentRegion: 'tayside-and-fife',
		county: 'Angus',
		population: 11310
	},
	{
		slug: 'carrickfergus',
		name: 'Carrickfergus',
		type: 'town',
		lat: 54.7158,
		lon: -5.8058,
		parentRegion: 'northern-ireland',
		county: 'Mid and East Antrim',
		population: 29208
	},
	{
		slug: 'carshalton',
		name: 'Carshalton',
		type: 'town',
		lat: 51.3683,
		lon: -0.1676,
		parentRegion: 'london',
		county: 'Greater London',
		population: 45525
	},
	{
		slug: 'carterton',
		name: 'Carterton',
		type: 'town',
		lat: 51.7591,
		lon: -1.5943,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 15680
	},
	{
		slug: 'castleford',
		name: 'Castleford',
		type: 'town',
		lat: 53.7259,
		lon: -1.3626,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Wakefield',
		population: 45106
	},
	{
		slug: 'castlereagh',
		name: 'Castlereagh',
		type: 'town',
		lat: 54.5735,
		lon: -5.8847,
		parentRegion: 'northern-ireland',
		county: 'City of Belfast',
		population: 56679
	},
	{
		slug: 'caterham',
		name: 'Caterham',
		type: 'town',
		lat: 51.2823,
		lon: -0.0789,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 20957
	},
	{
		slug: 'catford',
		name: 'Catford',
		type: 'town',
		lat: 51.4449,
		lon: -0.0204,
		parentRegion: 'london',
		county: 'Greater London',
		population: 44905
	},
	{
		slug: 'chadderton',
		name: 'Chadderton',
		type: 'town',
		lat: 53.5448,
		lon: -2.1398,
		parentRegion: 'north-west',
		county: 'Borough of Oldham',
		population: 37602
	},
	{
		slug: 'chaddesden',
		name: 'Chaddesden',
		type: 'town',
		lat: 52.9295,
		lon: -1.4342,
		parentRegion: 'east-midlands',
		county: 'Derby',
		population: 13413
	},
	{
		slug: 'chalfont-saint-peter',
		name: 'Chalfont Saint Peter',
		type: 'town',
		lat: 51.6088,
		lon: -0.5562,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 20059
	},
	{
		slug: 'chalk-farm',
		name: 'Chalk Farm',
		type: 'town',
		lat: 51.5431,
		lon: -0.1499,
		parentRegion: 'london',
		county: 'Greater London',
		population: 24977
	},
	{
		slug: 'chapel-allerton',
		name: 'Chapel Allerton',
		type: 'town',
		lat: 53.829,
		lon: -1.5383,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 18206
	},
	{
		slug: 'chapeltown',
		name: 'Chapeltown',
		type: 'town',
		lat: 53.4651,
		lon: -1.4722,
		parentRegion: 'yorkshire-and-humber',
		county: 'Sheffield',
		population: 23056
	},
	{
		slug: 'chard',
		name: 'Chard',
		type: 'town',
		lat: 50.8727,
		lon: -2.966,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 14287
	},
	{
		slug: 'charlton',
		name: 'Charlton',
		type: 'town',
		lat: 51.485,
		lon: 0.0403,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14385
	},
	{
		slug: 'charlton-kings',
		name: 'Charlton Kings',
		type: 'town',
		lat: 51.8837,
		lon: -2.0424,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 11700
	},
	{
		slug: 'chatham',
		name: 'Chatham',
		type: 'town',
		lat: 51.3789,
		lon: 0.5279,
		parentRegion: 'south-east',
		county: 'Medway',
		population: 80596
	},
	{
		slug: 'chatteris',
		name: 'Chatteris',
		type: 'town',
		lat: 52.4562,
		lon: 0.0524,
		parentRegion: 'east-of-england',
		county: 'Cambridgeshire',
		population: 10298
	},
	{
		slug: 'cheadle',
		name: 'Cheadle',
		type: 'town',
		lat: 52.9833,
		lon: -1.9833,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 11404
	},
	{
		slug: 'cheadle-hulme',
		name: 'Cheadle Hulme',
		type: 'town',
		lat: 53.3761,
		lon: -2.1897,
		parentRegion: 'north-west',
		county: 'Borough of Stockport',
		population: 28952
	},
	{
		slug: 'chelmsford',
		name: 'Chelmsford',
		type: 'town',
		lat: 51.7358,
		lon: 0.4696,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 111511
	},
	{
		slug: 'chelmsley-wood',
		name: 'Chelmsley Wood',
		type: 'town',
		lat: 52.4781,
		lon: -1.7381,
		parentRegion: 'west-midlands',
		county: 'Solihull',
		population: 13278
	},
	{
		slug: 'chelsfield',
		name: 'Chelsfield',
		type: 'town',
		lat: 51.3581,
		lon: 0.1277,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14507
	},
	{
		slug: 'cheltenham',
		name: 'Cheltenham',
		type: 'town',
		lat: 51.9001,
		lon: -2.0797,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 118836
	},
	{
		slug: 'chepstow',
		name: 'Chepstow',
		type: 'town',
		lat: 51.6409,
		lon: -2.6768,
		parentRegion: 'wales',
		county: 'Monmouthshire',
		population: 11900
	},
	{
		slug: 'chertsey',
		name: 'Chertsey',
		type: 'town',
		lat: 51.3881,
		lon: -0.5078,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 15967
	},
	{
		slug: 'chesham',
		name: 'Chesham',
		type: 'town',
		lat: 51.7,
		lon: -0.6,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 20649
	},
	{
		slug: 'cheshunt',
		name: 'Cheshunt',
		type: 'town',
		lat: 51.7002,
		lon: -0.0303,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 43680
	},
	{
		slug: 'chessington',
		name: 'Chessington',
		type: 'town',
		lat: 51.3624,
		lon: -0.3043,
		parentRegion: 'london',
		county: 'Greater London',
		population: 19433
	},
	{
		slug: 'chester',
		name: 'Chester',
		type: 'town',
		lat: 53.1905,
		lon: -2.8919,
		parentRegion: 'north-west',
		county: 'Cheshire West and Chester',
		population: 90524
	},
	{
		slug: 'chester-le-street',
		name: 'Chester-le-Street',
		type: 'town',
		lat: 54.8586,
		lon: -1.5741,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 36917
	},
	{
		slug: 'chesterfield',
		name: 'Chesterfield',
		type: 'town',
		lat: 53.25,
		lon: -1.4167,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 113057
	},
	{
		slug: 'chichester',
		name: 'Chichester',
		type: 'town',
		lat: 50.8367,
		lon: -0.78,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 31654
	},
	{
		slug: 'chigwell',
		name: 'Chigwell',
		type: 'town',
		lat: 51.62,
		lon: 0.076,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 12250
	},
	{
		slug: 'childwall',
		name: 'Childwall',
		type: 'town',
		lat: 53.3972,
		lon: -2.897,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 13640
	},
	{
		slug: 'chingford',
		name: 'Chingford',
		type: 'town',
		lat: 51.6303,
		lon: 0.0005,
		parentRegion: 'london',
		county: 'Greater London',
		population: 70583
	},
	{
		slug: 'chippenham',
		name: 'Chippenham',
		type: 'town',
		lat: 51.46,
		lon: -2.1247,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 35800
	},
	{
		slug: 'chislehurst',
		name: 'Chislehurst',
		type: 'town',
		lat: 51.4171,
		lon: 0.0686,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15600
	},
	{
		slug: 'chorley',
		name: 'Chorley',
		type: 'town',
		lat: 53.65,
		lon: -2.6167,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 33888
	},
	{
		slug: 'chorleywood',
		name: 'Chorleywood',
		type: 'town',
		lat: 51.6547,
		lon: -0.514,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 11917
	},
	{
		slug: 'christchurch',
		name: 'Christchurch',
		type: 'town',
		lat: 50.7358,
		lon: -1.7813,
		parentRegion: 'south-west',
		county: 'Bournemouth, Christchurch and Poole Council',
		population: 31372
	},
	{
		slug: 'churchdown',
		name: 'Churchdown',
		type: 'town',
		lat: 51.8774,
		lon: -2.1709,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 13287
	},
	{
		slug: 'cinderford',
		name: 'Cinderford',
		type: 'town',
		lat: 51.8242,
		lon: -2.4987,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 12942
	},
	{
		slug: 'cirencester',
		name: 'Cirencester',
		type: 'town',
		lat: 51.7193,
		lon: -1.9714,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 20229
	},
	{
		slug: 'city-of-westminster',
		name: 'City of Westminster',
		type: 'town',
		lat: 51.4975,
		lon: -0.1357,
		parentRegion: 'london',
		county: 'Greater London',
		population: 247614
	},
	{
		slug: 'clacton-on-sea',
		name: 'Clacton-on-Sea',
		type: 'town',
		lat: 51.7897,
		lon: 1.156,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 50548
	},
	{
		slug: 'clayton-le-woods',
		name: 'Clayton-le-Woods',
		type: 'town',
		lat: 53.6969,
		lon: -2.6682,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 14528
	},
	{
		slug: 'cleckheaton',
		name: 'Cleckheaton',
		type: 'town',
		lat: 53.724,
		lon: -1.7129,
		parentRegion: 'yorkshire-and-humber',
		county: 'Kirklees',
		population: 27393
	},
	{
		slug: 'cleethorpes',
		name: 'Cleethorpes',
		type: 'town',
		lat: 53.5605,
		lon: -0.0323,
		parentRegion: 'yorkshire-and-humber',
		county: 'North East Lincolnshire',
		population: 38996
	},
	{
		slug: 'clevedon',
		name: 'Clevedon',
		type: 'town',
		lat: 51.4423,
		lon: -2.8579,
		parentRegion: 'south-west',
		county: 'North Somerset',
		population: 21002
	},
	{
		slug: 'cleveleys',
		name: 'Cleveleys',
		type: 'town',
		lat: 53.8775,
		lon: -3.0399,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 15000
	},
	{
		slug: 'clitheroe',
		name: 'Clitheroe',
		type: 'town',
		lat: 53.8667,
		lon: -2.4,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 14765
	},
	{
		slug: 'clydach',
		name: 'Clydach',
		type: 'town',
		lat: 51.6833,
		lon: -3.9,
		parentRegion: 'wales',
		county: 'City and County of Swansea',
		population: 19307
	},
	{
		slug: 'clydebank',
		name: 'Clydebank',
		type: 'town',
		lat: 55.9014,
		lon: -4.4057,
		parentRegion: 'strathclyde',
		county: 'West Dunbartonshire',
		population: 25620
	},
	{
		slug: 'coalville',
		name: 'Coalville',
		type: 'town',
		lat: 52.7225,
		lon: -1.3702,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 37661
	},
	{
		slug: 'coatbridge',
		name: 'Coatbridge',
		type: 'town',
		lat: 55.8622,
		lon: -4.0247,
		parentRegion: 'strathclyde',
		county: 'North Lanarkshire',
		population: 43950
	},
	{
		slug: 'cobham',
		name: 'Cobham',
		type: 'town',
		lat: 51.33,
		lon: -0.4113,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 16724
	},
	{
		slug: 'cockington',
		name: 'Cockington',
		type: 'town',
		lat: 50.4633,
		lon: -3.5569,
		parentRegion: 'south-west',
		county: 'Borough of Torbay',
		population: 10000
	},
	{
		slug: 'codicote',
		name: 'Codicote',
		type: 'town',
		lat: 51.8505,
		lon: -0.2367,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 10938
	},
	{
		slug: 'codsall',
		name: 'Codsall',
		type: 'town',
		lat: 52.6299,
		lon: -2.2015,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 11860
	},
	{
		slug: 'coity',
		name: 'Coity',
		type: 'town',
		lat: 51.522,
		lon: -3.5553,
		parentRegion: 'wales',
		county: 'Bridgend county borough',
		population: 41352
	},
	{
		slug: 'colchester',
		name: 'Colchester',
		type: 'town',
		lat: 51.8892,
		lon: 0.9042,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 130245
	},
	{
		slug: 'coleraine',
		name: 'Coleraine',
		type: 'town',
		lat: 55.1333,
		lon: -6.6667,
		parentRegion: 'northern-ireland',
		county: 'Causeway Coast and Glens',
		population: 25681
	},
	{
		slug: 'colne',
		name: 'Colne',
		type: 'town',
		lat: 53.8571,
		lon: -2.1685,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 20118
	},
	{
		slug: 'colwyn-bay',
		name: 'Colwyn Bay',
		type: 'town',
		lat: 53.2948,
		lon: -3.7267,
		parentRegion: 'wales',
		county: 'Conwy',
		population: 29275
	},
	{
		slug: 'congleton',
		name: 'Congleton',
		type: 'town',
		lat: 53.1631,
		lon: -2.2125,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 26178
	},
	{
		slug: 'conisbrough',
		name: 'Conisbrough',
		type: 'town',
		lat: 53.4819,
		lon: -1.2321,
		parentRegion: 'yorkshire-and-humber',
		county: 'Doncaster',
		population: 15934
	},
	{
		slug: 'consett',
		name: 'Consett',
		type: 'town',
		lat: 54.854,
		lon: -1.8316,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 29137
	},
	{
		slug: 'cookstown',
		name: 'Cookstown',
		type: 'town',
		lat: 54.6431,
		lon: -6.7459,
		parentRegion: 'northern-ireland',
		county: 'Mid Ulster',
		population: 11081
	},
	{
		slug: 'corby',
		name: 'Corby',
		type: 'town',
		lat: 52.4964,
		lon: -0.6894,
		parentRegion: 'east-midlands',
		county: 'North Northamptonshire',
		population: 68164
	},
	{
		slug: 'corsham',
		name: 'Corsham',
		type: 'town',
		lat: 51.4343,
		lon: -2.1844,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 13369
	},
	{
		slug: 'cosham',
		name: 'Cosham',
		type: 'town',
		lat: 50.8465,
		lon: -1.0634,
		parentRegion: 'south-east',
		county: 'Portsmouth',
		population: 10226
	},
	{
		slug: 'coulsdon',
		name: 'Coulsdon',
		type: 'town',
		lat: 51.32,
		lon: -0.1409,
		parentRegion: 'london',
		county: 'Greater London',
		population: 25530
	},
	{
		slug: 'cowdenbeath',
		name: 'Cowdenbeath',
		type: 'town',
		lat: 56.1119,
		lon: -3.3443,
		parentRegion: 'tayside-and-fife',
		county: 'Fife',
		population: 12030
	},
	{
		slug: 'cowes',
		name: 'Cowes',
		type: 'town',
		lat: 50.7625,
		lon: -1.2978,
		parentRegion: 'south-east',
		county: 'Isle of Wight',
		population: 21226
	},
	{
		slug: 'cowley',
		name: 'Cowley',
		type: 'town',
		lat: 51.7321,
		lon: -1.2063,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 16500
	},
	{
		slug: 'craigavon',
		name: 'Craigavon',
		type: 'town',
		lat: 54.4471,
		lon: -6.387,
		parentRegion: 'northern-ireland',
		county: 'Armagh City Banbridge and Craigavon',
		population: 59236
	},
	{
		slug: 'cramlington',
		name: 'Cramlington',
		type: 'town',
		lat: 55.0865,
		lon: -1.586,
		parentRegion: 'north-east',
		county: 'Northumberland',
		population: 33180
	},
	{
		slug: 'cranford',
		name: 'Cranford',
		type: 'town',
		lat: 51.477,
		lon: -0.4134,
		parentRegion: 'london',
		county: 'Greater London',
		population: 12330
	},
	{
		slug: 'cranleigh',
		name: 'Cranleigh',
		type: 'town',
		lat: 51.1421,
		lon: -0.4837,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 11082
	},
	{
		slug: 'crewe',
		name: 'Crewe',
		type: 'town',
		lat: 53.0979,
		lon: -2.4416,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 76437
	},
	{
		slug: 'cricklewood',
		name: 'Cricklewood',
		type: 'town',
		lat: 51.5567,
		lon: -0.2155,
		parentRegion: 'london',
		county: 'Greater London',
		population: 65000
	},
	{
		slug: 'crofton-park',
		name: 'Crofton Park',
		type: 'town',
		lat: 51.4515,
		lon: -0.0344,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14937
	},
	{
		slug: 'cross-hills',
		name: 'Cross Hills',
		type: 'town',
		lat: 53.9061,
		lon: -1.9849,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 11731
	},
	{
		slug: 'crowborough',
		name: 'Crowborough',
		type: 'town',
		lat: 51.061,
		lon: 0.1634,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 21688
	},
	{
		slug: 'crowthorne',
		name: 'Crowthorne',
		type: 'town',
		lat: 51.3703,
		lon: -0.7922,
		parentRegion: 'south-east',
		county: 'Bracknell Forest',
		population: 25522
	},
	{
		slug: 'croxley-green',
		name: 'Croxley Green',
		type: 'town',
		lat: 51.6333,
		lon: -0.45,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 13500
	},
	{
		slug: 'croydon',
		name: 'Croydon',
		type: 'town',
		lat: 51.3833,
		lon: -0.1,
		parentRegion: 'london',
		county: 'Greater London',
		population: 173314
	},
	{
		slug: 'crystal-palace',
		name: 'Crystal Palace',
		type: 'town',
		lat: 51.4193,
		lon: -0.0785,
		parentRegion: 'london',
		county: 'Greater London',
		population: 12255
	},
	{
		slug: 'cudworth',
		name: 'Cudworth',
		type: 'town',
		lat: 53.5713,
		lon: -1.416,
		parentRegion: 'yorkshire-and-humber',
		county: 'Barnsley',
		population: 11903
	},
	{
		slug: 'cumbernauld',
		name: 'Cumbernauld',
		type: 'town',
		lat: 55.9468,
		lon: -3.9905,
		parentRegion: 'strathclyde',
		county: 'North Lanarkshire',
		population: 50530
	},
	{
		slug: 'cwmbran',
		name: 'Cwmbran',
		type: 'town',
		lat: 51.6545,
		lon: -3.0228,
		parentRegion: 'wales',
		county: 'Torfaen County Borough',
		population: 48535
	},
	{
		slug: 'dagenham',
		name: 'Dagenham',
		type: 'town',
		lat: 51.55,
		lon: 0.1667,
		parentRegion: 'london',
		county: 'Greater London',
		population: 108368
	},
	{
		slug: 'dalkeith',
		name: 'Dalkeith',
		type: 'town',
		lat: 55.8932,
		lon: -3.0681,
		parentRegion: 'dumfries-and-borders',
		county: 'Midlothian',
		population: 12720
	},
	{
		slug: 'dalserf',
		name: 'Dalserf',
		type: 'town',
		lat: 55.7333,
		lon: -3.9167,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 17985
	},
	{
		slug: 'darlington',
		name: 'Darlington',
		type: 'town',
		lat: 54.5243,
		lon: -1.5504,
		parentRegion: 'north-east',
		county: 'Darlington',
		population: 92363
	},
	{
		slug: 'dartford',
		name: 'Dartford',
		type: 'town',
		lat: 51.4466,
		lon: 0.2142,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 51240
	},
	{
		slug: 'darton',
		name: 'Darton',
		type: 'town',
		lat: 53.587,
		lon: -1.5268,
		parentRegion: 'yorkshire-and-humber',
		county: 'Barnsley',
		population: 21345
	},
	{
		slug: 'darwen',
		name: 'Darwen',
		type: 'town',
		lat: 53.698,
		lon: -2.4649,
		parentRegion: 'north-west',
		county: 'Blackburn with Darwen',
		population: 32566
	},
	{
		slug: 'daventry',
		name: 'Daventry',
		type: 'town',
		lat: 52.2569,
		lon: -1.1607,
		parentRegion: 'east-midlands',
		county: 'West Northamptonshire',
		population: 28123
	},
	{
		slug: 'dawlish',
		name: 'Dawlish',
		type: 'town',
		lat: 50.5812,
		lon: -3.4664,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 11312
	},
	{
		slug: 'deal',
		name: 'Deal',
		type: 'town',
		lat: 51.2232,
		lon: 1.4028,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 30917
	},
	{
		slug: 'denton',
		name: 'Denton',
		type: 'town',
		lat: 53.4568,
		lon: -2.1182,
		parentRegion: 'north-west',
		county: 'Borough of Tameside',
		population: 27464
	},
	{
		slug: 'derry',
		name: 'Derry',
		type: 'town',
		lat: 54.9981,
		lon: -7.3093,
		parentRegion: 'northern-ireland',
		county: 'Derry City and Strabane',
		population: 83652
	},
	{
		slug: 'desborough',
		name: 'Desborough',
		type: 'town',
		lat: 52.4418,
		lon: -0.8213,
		parentRegion: 'east-midlands',
		county: 'North Northamptonshire',
		population: 10697
	},
	{
		slug: 'devizes',
		name: 'Devizes',
		type: 'town',
		lat: 51.3508,
		lon: -1.9942,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 16834
	},
	{
		slug: 'dewsbury',
		name: 'Dewsbury',
		type: 'town',
		lat: 53.6908,
		lon: -1.6291,
		parentRegion: 'yorkshire-and-humber',
		county: 'Kirklees',
		population: 61035
	},
	{
		slug: 'didcot',
		name: 'Didcot',
		type: 'town',
		lat: 51.6093,
		lon: -1.2421,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 29341
	},
	{
		slug: 'didsbury',
		name: 'Didsbury',
		type: 'town',
		lat: 53.417,
		lon: -2.2315,
		parentRegion: 'north-west',
		county: 'Manchester',
		population: 14292
	},
	{
		slug: 'dingle',
		name: 'Dingle',
		type: 'town',
		lat: 53.3791,
		lon: -2.9603,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 13246
	},
	{
		slug: 'dinnington',
		name: 'Dinnington',
		type: 'town',
		lat: 53.3667,
		lon: -1.2,
		parentRegion: 'yorkshire-and-humber',
		county: 'Rotherham',
		population: 19860
	},
	{
		slug: 'diss',
		name: 'Diss',
		type: 'town',
		lat: 52.3768,
		lon: 1.1091,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 10734
	},
	{
		slug: 'dorchester',
		name: 'Dorchester',
		type: 'town',
		lat: 50.7167,
		lon: -2.4333,
		parentRegion: 'south-west',
		county: 'Dorset',
		population: 16879
	},
	{
		slug: 'dorking',
		name: 'Dorking',
		type: 'town',
		lat: 51.2323,
		lon: -0.3338,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 17747
	},
	{
		slug: 'dover',
		name: 'Dover',
		type: 'town',
		lat: 51.126,
		lon: 1.3126,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 41709
	},
	{
		slug: 'downham-market',
		name: 'Downham Market',
		type: 'town',
		lat: 52.6071,
		lon: 0.3837,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 10884
	},
	{
		slug: 'downpatrick',
		name: 'Downpatrick',
		type: 'town',
		lat: 54.3281,
		lon: -5.7153,
		parentRegion: 'northern-ireland',
		county: 'Newry Mourne and Down',
		population: 10507
	},
	{
		slug: 'driffield',
		name: 'Driffield',
		type: 'town',
		lat: 54.0061,
		lon: -0.445,
		parentRegion: 'yorkshire-and-humber',
		county: 'East Riding of Yorkshire',
		population: 13080
	},
	{
		slug: 'droitwich',
		name: 'Droitwich',
		type: 'town',
		lat: 52.2667,
		lon: -2.15,
		parentRegion: 'west-midlands',
		county: 'Worcestershire',
		population: 23834
	},
	{
		slug: 'dronfield',
		name: 'Dronfield',
		type: 'town',
		lat: 53.3022,
		lon: -1.4751,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 21124
	},
	{
		slug: 'droylsden',
		name: 'Droylsden',
		type: 'town',
		lat: 53.48,
		lon: -2.1454,
		parentRegion: 'north-west',
		county: 'Borough of Tameside',
		population: 23689
	},
	{
		slug: 'dudley',
		name: 'Dudley',
		type: 'town',
		lat: 52.5,
		lon: -2.0833,
		parentRegion: 'west-midlands',
		county: 'Dudley',
		population: 199059
	},
	{
		slug: 'dukinfield',
		name: 'Dukinfield',
		type: 'town',
		lat: 53.475,
		lon: -2.0881,
		parentRegion: 'north-west',
		county: 'Borough of Tameside',
		population: 21155
	},
	{
		slug: 'dumbarton',
		name: 'Dumbarton',
		type: 'town',
		lat: 55.9443,
		lon: -4.5706,
		parentRegion: 'strathclyde',
		county: 'West Dunbartonshire',
		population: 19950
	},
	{
		slug: 'dumfries',
		name: 'Dumfries',
		type: 'town',
		lat: 55.0696,
		lon: -3.6114,
		parentRegion: 'dumfries-and-borders',
		county: 'Dumfries and Galloway',
		population: 46500
	},
	{
		slug: 'dunbar',
		name: 'Dunbar',
		type: 'town',
		lat: 56.0006,
		lon: -2.5142,
		parentRegion: 'dumfries-and-borders',
		county: 'East Lothian',
		population: 10270
	},
	{
		slug: 'dundee',
		name: 'Dundee',
		type: 'town',
		lat: 56.4691,
		lon: -2.9749,
		parentRegion: 'tayside-and-fife',
		county: 'Dundee City',
		population: 148210
	},
	{
		slug: 'dundonald',
		name: 'Dundonald',
		type: 'town',
		lat: 54.592,
		lon: -5.798,
		parentRegion: 'northern-ireland',
		county: 'Lisburn and Castlereagh',
		population: 13985
	},
	{
		slug: 'dunfermline',
		name: 'Dunfermline',
		type: 'town',
		lat: 56.0716,
		lon: -3.4589,
		parentRegion: 'tayside-and-fife',
		county: 'Fife',
		population: 54990
	},
	{
		slug: 'dungannon',
		name: 'Dungannon',
		type: 'town',
		lat: 54.5034,
		lon: -6.7672,
		parentRegion: 'northern-ireland',
		county: 'Mid Ulster',
		population: 11935
	},
	{
		slug: 'dunstable',
		name: 'Dunstable',
		type: 'town',
		lat: 51.8857,
		lon: -0.5229,
		parentRegion: 'east-of-england',
		county: 'Central Bedfordshire',
		population: 51973
	},
	{
		slug: 'durham',
		name: 'Durham',
		type: 'town',
		lat: 54.7768,
		lon: -1.5757,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 47785
	},
	{
		slug: 'dursley',
		name: 'Dursley',
		type: 'town',
		lat: 51.6814,
		lon: -2.3533,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 14992
	},
	{
		slug: 'earl-shilton',
		name: 'Earl Shilton',
		type: 'town',
		lat: 52.5768,
		lon: -1.3154,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 19578
	},
	{
		slug: 'earlsfield',
		name: 'Earlsfield',
		type: 'town',
		lat: 51.4439,
		lon: -0.1854,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15562
	},
	{
		slug: 'east-dereham',
		name: 'East Dereham',
		type: 'town',
		lat: 52.6833,
		lon: 0.9333,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 19256
	},
	{
		slug: 'east-grinstead',
		name: 'East Grinstead',
		type: 'town',
		lat: 51.1238,
		lon: -0.0061,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 26523
	},
	{
		slug: 'east-kilbride',
		name: 'East Kilbride',
		type: 'town',
		lat: 55.7641,
		lon: -4.1767,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 75310
	},
	{
		slug: 'east-molesey',
		name: 'East Molesey',
		type: 'town',
		lat: 51.3987,
		lon: -0.3492,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 18565
	},
	{
		slug: 'east-sheen',
		name: 'East Sheen',
		type: 'town',
		lat: 51.4629,
		lon: -0.2684,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10348
	},
	{
		slug: 'eastbourne',
		name: 'Eastbourne',
		type: 'town',
		lat: 50.7687,
		lon: 0.2845,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 101689
	},
	{
		slug: 'eastleigh',
		name: 'Eastleigh',
		type: 'town',
		lat: 50.9667,
		lon: -1.35,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 54225
	},
	{
		slug: 'eastwood',
		name: 'Eastwood',
		type: 'town',
		lat: 53,
		lon: -1.3,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 18612
	},
	{
		slug: 'ebbw-vale',
		name: 'Ebbw Vale',
		type: 'town',
		lat: 51.7771,
		lon: -3.2079,
		parentRegion: 'wales',
		county: 'Blaenau Gwent',
		population: 33068
	},
	{
		slug: 'eccles',
		name: 'Eccles',
		type: 'town',
		lat: 53.4833,
		lon: -2.3333,
		parentRegion: 'north-west',
		county: 'City and Borough of Salford',
		population: 37275
	},
	{
		slug: 'edmonton',
		name: 'Edmonton',
		type: 'town',
		lat: 51.6256,
		lon: -0.058,
		parentRegion: 'london',
		county: 'Greater London',
		population: 82000
	},
	{
		slug: 'egham',
		name: 'Egham',
		type: 'town',
		lat: 51.4316,
		lon: -0.5524,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 29663
	},
	{
		slug: 'elgin',
		name: 'Elgin',
		type: 'town',
		lat: 57.6495,
		lon: -3.3184,
		parentRegion: 'grampian',
		county: 'Moray',
		population: 25040
	},
	{
		slug: 'elland',
		name: 'Elland',
		type: 'town',
		lat: 53.6851,
		lon: -1.8388,
		parentRegion: 'yorkshire-and-humber',
		county: 'Calderdale',
		population: 15625
	},
	{
		slug: 'ellesmere-port-town',
		name: 'Ellesmere Port Town',
		type: 'town',
		lat: 53.2788,
		lon: -2.9013,
		parentRegion: 'north-west',
		county: 'Cheshire West and Chester',
		population: 65430
	},
	{
		slug: 'ellon',
		name: 'Ellon',
		type: 'town',
		lat: 57.364,
		lon: -2.0731,
		parentRegion: 'grampian',
		county: 'Aberdeenshire',
		population: 10070
	},
	{
		slug: 'eltham',
		name: 'Eltham',
		type: 'town',
		lat: 51.4506,
		lon: 0.0522,
		parentRegion: 'london',
		county: 'Greater London',
		population: 48964
	},
	{
		slug: 'ely',
		name: 'Ely',
		type: 'town',
		lat: 52.3996,
		lon: 0.262,
		parentRegion: 'east-of-england',
		county: 'Cambridgeshire',
		population: 20574
	},
	{
		slug: 'emsworth',
		name: 'Emsworth',
		type: 'town',
		lat: 50.8478,
		lon: -0.937,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 18777
	},
	{
		slug: 'enfield-lock',
		name: 'Enfield Lock',
		type: 'town',
		lat: 51.6709,
		lon: -0.0275,
		parentRegion: 'london',
		county: 'Greater London',
		population: 16469
	},
	{
		slug: 'enfield-town',
		name: 'Enfield Town',
		type: 'town',
		lat: 51.6515,
		lon: -0.085,
		parentRegion: 'london',
		county: 'Greater London',
		population: 156858
	},
	{
		slug: 'enniskillen',
		name: 'Enniskillen',
		type: 'town',
		lat: 54.3462,
		lon: -7.6413,
		parentRegion: 'northern-ireland',
		county: 'Fermanagh and Omagh',
		population: 14472
	},
	{
		slug: 'epping',
		name: 'Epping',
		type: 'town',
		lat: 51.6981,
		lon: 0.1105,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 10695
	},
	{
		slug: 'epsom',
		name: 'Epsom',
		type: 'town',
		lat: 51.3305,
		lon: -0.2701,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 31489
	},
	{
		slug: 'erskine',
		name: 'Erskine',
		type: 'town',
		lat: 55.9005,
		lon: -4.4503,
		parentRegion: 'strathclyde',
		county: 'Renfrewshire',
		population: 15530
	},
	{
		slug: 'esher',
		name: 'Esher',
		type: 'town',
		lat: 51.3697,
		lon: -0.3669,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 52392
	},
	{
		slug: 'evesham',
		name: 'Evesham',
		type: 'town',
		lat: 52.0924,
		lon: -1.9489,
		parentRegion: 'west-midlands',
		county: 'Worcestershire',
		population: 27684
	},
	{
		slug: 'evington',
		name: 'Evington',
		type: 'town',
		lat: 52.6,
		lon: -1.0667,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 17268
	},
	{
		slug: 'exeter',
		name: 'Exeter',
		type: 'town',
		lat: 50.7236,
		lon: -3.5275,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 130709
	},
	{
		slug: 'exmouth',
		name: 'Exmouth',
		type: 'town',
		lat: 50.6172,
		lon: -3.4023,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 36204
	},
	{
		slug: 'failsworth',
		name: 'Failsworth',
		type: 'town',
		lat: 53.5048,
		lon: -2.1657,
		parentRegion: 'north-west',
		county: 'Borough of Oldham',
		population: 20555
	},
	{
		slug: 'fair-oak',
		name: 'Fair Oak',
		type: 'town',
		lat: 50.9636,
		lon: -1.2968,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 10212
	},
	{
		slug: 'falkirk',
		name: 'Falkirk',
		type: 'town',
		lat: 56.0021,
		lon: -3.7854,
		parentRegion: 'tayside-and-fife',
		county: 'Falkirk',
		population: 35310
	},
	{
		slug: 'falmouth',
		name: 'Falmouth',
		type: 'town',
		lat: 50.1544,
		lon: -5.0711,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 31988
	},
	{
		slug: 'fareham',
		name: 'Fareham',
		type: 'town',
		lat: 50.8516,
		lon: -1.1793,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 42210
	},
	{
		slug: 'farnborough',
		name: 'Farnborough',
		type: 'town',
		lat: 51.2942,
		lon: -0.7557,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 60652
	},
	{
		slug: 'farnham',
		name: 'Farnham',
		type: 'town',
		lat: 51.2144,
		lon: -0.8005,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 36971
	},
	{
		slug: 'farnworth',
		name: 'Farnworth',
		type: 'town',
		lat: 53.55,
		lon: -2.4,
		parentRegion: 'north-west',
		county: 'Borough of Bolton',
		population: 25680
	},
	{
		slug: 'faversham',
		name: 'Faversham',
		type: 'town',
		lat: 51.3148,
		lon: 0.8886,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 23024
	},
	{
		slug: 'fazakerley',
		name: 'Fazakerley',
		type: 'town',
		lat: 53.4614,
		lon: -2.9286,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 16374
	},
	{
		slug: 'featherstone',
		name: 'Featherstone',
		type: 'town',
		lat: 52.6448,
		lon: -2.0932,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 14175
	},
	{
		slug: 'featherstone-borough-of-wakefield',
		name: 'Featherstone',
		type: 'town',
		lat: 53.6769,
		lon: -1.3565,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Wakefield',
		population: 11060
	},
	{
		slug: 'felixstowe',
		name: 'Felixstowe',
		type: 'town',
		lat: 51.9637,
		lon: 1.3511,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 24521
	},
	{
		slug: 'felling',
		name: 'Felling',
		type: 'town',
		lat: 54.953,
		lon: -1.5715,
		parentRegion: 'north-east',
		county: 'Gateshead',
		population: 34355
	},
	{
		slug: 'feltham',
		name: 'Feltham',
		type: 'town',
		lat: 51.4462,
		lon: -0.4139,
		parentRegion: 'london',
		county: 'Greater London',
		population: 63368
	},
	{
		slug: 'ferndown',
		name: 'Ferndown',
		type: 'town',
		lat: 50.8074,
		lon: -1.8998,
		parentRegion: 'south-west',
		county: 'Dorset',
		population: 17650
	},
	{
		slug: 'finchley',
		name: 'Finchley',
		type: 'town',
		lat: 51.601,
		lon: -0.1952,
		parentRegion: 'london',
		county: 'Greater London',
		population: 65812
	},
	{
		slug: 'fleet',
		name: 'Fleet',
		type: 'town',
		lat: 51.2833,
		lon: -0.8333,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 38726
	},
	{
		slug: 'fleetwood',
		name: 'Fleetwood',
		type: 'town',
		lat: 53.9253,
		lon: -3.0109,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 26232
	},
	{
		slug: 'flint',
		name: 'Flint',
		type: 'town',
		lat: 53.2449,
		lon: -3.1323,
		parentRegion: 'wales',
		county: 'County of Flintshire',
		population: 26442
	},
	{
		slug: 'flitwick',
		name: 'Flitwick',
		type: 'town',
		lat: 52.0034,
		lon: -0.4947,
		parentRegion: 'east-of-england',
		county: 'Central Bedfordshire',
		population: 12983
	},
	{
		slug: 'folkestone',
		name: 'Folkestone',
		type: 'town',
		lat: 51.0817,
		lon: 1.1673,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 66429
	},
	{
		slug: 'forfar',
		name: 'Forfar',
		type: 'town',
		lat: 56.6438,
		lon: -2.89,
		parentRegion: 'tayside-and-fife',
		county: 'Angus',
		population: 13970
	},
	{
		slug: 'formby',
		name: 'Formby',
		type: 'town',
		lat: 53.5584,
		lon: -3.07,
		parentRegion: 'north-west',
		county: 'Sefton',
		population: 23329
	},
	{
		slug: 'fort-william',
		name: 'Fort William',
		type: 'town',
		lat: 56.8165,
		lon: -5.1121,
		parentRegion: 'highland-and-eilean-siar',
		county: 'Highland',
		population: 15757
	},
	{
		slug: 'fraserburgh',
		name: 'Fraserburgh',
		type: 'town',
		lat: 57.6874,
		lon: -2.0184,
		parentRegion: 'grampian',
		county: 'Aberdeenshire',
		population: 12570
	},
	{
		slug: 'friern-barnet',
		name: 'Friern Barnet',
		type: 'town',
		lat: 51.6133,
		lon: -0.1585,
		parentRegion: 'london',
		county: 'Greater London',
		population: 17250
	},
	{
		slug: 'frimley',
		name: 'Frimley',
		type: 'town',
		lat: 51.3167,
		lon: -0.7454,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 12739
	},
	{
		slug: 'frinton-on-sea',
		name: 'Frinton-on-Sea',
		type: 'town',
		lat: 51.8306,
		lon: 1.2442,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 16941
	},
	{
		slug: 'frome',
		name: 'Frome',
		type: 'town',
		lat: 51.2283,
		lon: -2.3221,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 26203
	},
	{
		slug: 'fulham',
		name: 'Fulham',
		type: 'town',
		lat: 51.4803,
		lon: -0.1993,
		parentRegion: 'london',
		county: 'Greater London',
		population: 87161
	},
	{
		slug: 'fulwood',
		name: 'Fulwood',
		type: 'town',
		lat: 53.35,
		lon: -1.55,
		parentRegion: 'yorkshire-and-humber',
		county: 'Sheffield',
		population: 18233
	},
	{
		slug: 'fylde',
		name: 'Fylde',
		type: 'town',
		lat: 53.8333,
		lon: -2.9167,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 76500
	},
	{
		slug: 'gainsborough',
		name: 'Gainsborough',
		type: 'town',
		lat: 53.3833,
		lon: -0.7667,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 20537
	},
	{
		slug: 'galashiels',
		name: 'Galashiels',
		type: 'town',
		lat: 55.6146,
		lon: -2.807,
		parentRegion: 'dumfries-and-borders',
		county: 'The Scottish Borders',
		population: 10060
	},
	{
		slug: 'garforth',
		name: 'Garforth',
		type: 'town',
		lat: 53.7917,
		lon: -1.3807,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 14838
	},
	{
		slug: 'garston',
		name: 'Garston',
		type: 'town',
		lat: 53.3333,
		lon: -2.9,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 21403
	},
	{
		slug: 'gateshead',
		name: 'Gateshead',
		type: 'town',
		lat: 54.9621,
		lon: -1.6017,
		parentRegion: 'north-east',
		county: 'Gateshead',
		population: 77649
	},
	{
		slug: 'gelligaer',
		name: 'Gelligaer',
		type: 'town',
		lat: 51.6644,
		lon: -3.2561,
		parentRegion: 'wales',
		county: 'Caerphilly County Borough',
		population: 17376
	},
	{
		slug: 'gerrards-cross',
		name: 'Gerrards Cross',
		type: 'town',
		lat: 51.5861,
		lon: -0.5554,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 20633
	},
	{
		slug: 'giffnock',
		name: 'Giffnock',
		type: 'town',
		lat: 55.8037,
		lon: -4.2949,
		parentRegion: 'strathclyde',
		county: 'East Renfrewshire',
		population: 12070
	},
	{
		slug: 'gillingham',
		name: 'Gillingham',
		type: 'town',
		lat: 51.3891,
		lon: 0.5486,
		parentRegion: 'south-east',
		county: 'Medway',
		population: 101187
	},
	{
		slug: 'glen-parva',
		name: 'Glen Parva',
		type: 'town',
		lat: 52.5853,
		lon: -1.1706,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 17189
	},
	{
		slug: 'glenfield',
		name: 'Glenfield',
		type: 'town',
		lat: 52.6466,
		lon: -1.1949,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 10000
	},
	{
		slug: 'glenrothes',
		name: 'Glenrothes',
		type: 'town',
		lat: 56.1951,
		lon: -3.1732,
		parentRegion: 'tayside-and-fife',
		county: 'Fife',
		population: 38360
	},
	{
		slug: 'glossop',
		name: 'Glossop',
		type: 'town',
		lat: 53.4432,
		lon: -1.949,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 17825
	},
	{
		slug: 'gloucester',
		name: 'Gloucester',
		type: 'town',
		lat: 51.8657,
		lon: -2.2431,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 132416
	},
	{
		slug: 'godalming',
		name: 'Godalming',
		type: 'town',
		lat: 51.1858,
		lon: -0.6149,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 22689
	},
	{
		slug: 'golborne',
		name: 'Golborne',
		type: 'town',
		lat: 53.4769,
		lon: -2.5965,
		parentRegion: 'north-west',
		county: 'Borough of Wigan',
		population: 24021
	},
	{
		slug: 'golders-green',
		name: 'Golders Green',
		type: 'town',
		lat: 51.5763,
		lon: -0.2003,
		parentRegion: 'london',
		county: 'Greater London',
		population: 18818
	},
	{
		slug: 'goodmayes',
		name: 'Goodmayes',
		type: 'town',
		lat: 51.5629,
		lon: 0.1107,
		parentRegion: 'london',
		county: 'Greater London',
		population: 13069
	},
	{
		slug: 'goole',
		name: 'Goole',
		type: 'town',
		lat: 53.7032,
		lon: -0.8773,
		parentRegion: 'yorkshire-and-humber',
		county: 'East Riding of Yorkshire',
		population: 20810
	},
	{
		slug: 'gorseinon',
		name: 'Gorseinon',
		type: 'town',
		lat: 51.6693,
		lon: -4.0416,
		parentRegion: 'wales',
		county: 'City and County of Swansea',
		population: 20581
	},
	{
		slug: 'gosforth',
		name: 'Gosforth',
		type: 'town',
		lat: 55,
		lon: -1.6167,
		parentRegion: 'north-east',
		county: 'Newcastle upon Tyne',
		population: 23975
	},
	{
		slug: 'gosport',
		name: 'Gosport',
		type: 'town',
		lat: 50.7951,
		lon: -1.129,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 81952
	},
	{
		slug: 'gourock',
		name: 'Gourock',
		type: 'town',
		lat: 55.9616,
		lon: -4.8179,
		parentRegion: 'strathclyde',
		county: 'Inverclyde',
		population: 10210
	},
	{
		slug: 'grangemouth',
		name: 'Grangemouth',
		type: 'town',
		lat: 56.0114,
		lon: -3.7218,
		parentRegion: 'tayside-and-fife',
		county: 'Falkirk',
		population: 16120
	},
	{
		slug: 'grantham',
		name: 'Grantham',
		type: 'town',
		lat: 52.9115,
		lon: -0.6418,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 44580
	},
	{
		slug: 'gravesend',
		name: 'Gravesend',
		type: 'town',
		lat: 51.4421,
		lon: 0.3711,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 54263
	},
	{
		slug: 'grays',
		name: 'Grays',
		type: 'town',
		lat: 51.4757,
		lon: 0.3252,
		parentRegion: 'east-of-england',
		county: 'Borough of Thurrock',
		population: 89755
	},
	{
		slug: 'great-bookham',
		name: 'Great Bookham',
		type: 'town',
		lat: 51.2792,
		lon: -0.3742,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 11375
	},
	{
		slug: 'great-harwood',
		name: 'Great Harwood',
		type: 'town',
		lat: 53.7851,
		lon: -2.4087,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 11467
	},
	{
		slug: 'great-malvern',
		name: 'Great Malvern',
		type: 'town',
		lat: 52.1116,
		lon: -2.3251,
		parentRegion: 'west-midlands',
		county: 'Worcestershire',
		population: 36770
	},
	{
		slug: 'great-sankey',
		name: 'Great Sankey',
		type: 'town',
		lat: 53.3923,
		lon: -2.6399,
		parentRegion: 'north-west',
		county: 'Warrington',
		population: 43793
	},
	{
		slug: 'great-wyrley',
		name: 'Great Wyrley',
		type: 'town',
		lat: 52.6628,
		lon: -2.0111,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 19193
	},
	{
		slug: 'great-yarmouth',
		name: 'Great Yarmouth',
		type: 'town',
		lat: 52.6083,
		lon: 1.7305,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 63434
	},
	{
		slug: 'greenford',
		name: 'Greenford',
		type: 'town',
		lat: 51.5287,
		lon: -0.3551,
		parentRegion: 'london',
		county: 'Greater London',
		population: 38000
	},
	{
		slug: 'greenock',
		name: 'Greenock',
		type: 'town',
		lat: 55.9484,
		lon: -4.7612,
		parentRegion: 'strathclyde',
		county: 'Inverclyde',
		population: 41280
	},
	{
		slug: 'grimsby',
		name: 'Grimsby',
		type: 'town',
		lat: 53.5654,
		lon: -0.0755,
		parentRegion: 'yorkshire-and-humber',
		county: 'North East Lincolnshire',
		population: 86138
	},
	{
		slug: 'guildford',
		name: 'Guildford',
		type: 'town',
		lat: 51.2354,
		lon: -0.5743,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 71873
	},
	{
		slug: 'guisborough',
		name: 'Guisborough',
		type: 'town',
		lat: 54.5348,
		lon: -1.0561,
		parentRegion: 'north-east',
		county: 'Redcar and Cleveland',
		population: 16979
	},
	{
		slug: 'guiseley',
		name: 'Guiseley',
		type: 'town',
		lat: 53.8756,
		lon: -1.7123,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 21000
	},
	{
		slug: 'hadleigh',
		name: 'Hadleigh',
		type: 'town',
		lat: 51.5527,
		lon: 0.6098,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 18300
	},
	{
		slug: 'hadley',
		name: 'Hadley',
		type: 'town',
		lat: 52.7,
		lon: -2.4833,
		parentRegion: 'west-midlands',
		county: 'Telford and Wrekin',
		population: 14829
	},
	{
		slug: 'hadley-wood',
		name: 'Hadley Wood',
		type: 'town',
		lat: 51.6667,
		lon: -0.1698,
		parentRegion: 'london',
		county: 'Greater London',
		population: 21639
	},
	{
		slug: 'hailsham',
		name: 'Hailsham',
		type: 'town',
		lat: 50.8622,
		lon: 0.2577,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 23411
	},
	{
		slug: 'hale',
		name: 'Hale',
		type: 'town',
		lat: 53.3783,
		lon: -2.3327,
		parentRegion: 'north-west',
		county: 'Trafford',
		population: 16715
	},
	{
		slug: 'halesowen',
		name: 'Halesowen',
		type: 'town',
		lat: 52.4486,
		lon: -2.0494,
		parentRegion: 'west-midlands',
		county: 'Dudley',
		population: 60097
	},
	{
		slug: 'halewood',
		name: 'Halewood',
		type: 'town',
		lat: 53.3596,
		lon: -2.8315,
		parentRegion: 'north-west',
		county: 'Knowsley',
		population: 20430
	},
	{
		slug: 'halifax',
		name: 'Halifax',
		type: 'town',
		lat: 53.7167,
		lon: -1.85,
		parentRegion: 'yorkshire-and-humber',
		county: 'Calderdale',
		population: 82624
	},
	{
		slug: 'halstead',
		name: 'Halstead',
		type: 'town',
		lat: 51.9451,
		lon: 0.6393,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 11906
	},
	{
		slug: 'hamilton',
		name: 'Hamilton',
		type: 'town',
		lat: 55.7667,
		lon: -4.0333,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 54480
	},
	{
		slug: 'hampton',
		name: 'Hampton',
		type: 'town',
		lat: 51.4133,
		lon: -0.367,
		parentRegion: 'london',
		county: 'Greater London',
		population: 20000
	},
	{
		slug: 'hampton-wick',
		name: 'Hampton Wick',
		type: 'town',
		lat: 51.42,
		lon: -0.315,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10221
	},
	{
		slug: 'hanworth',
		name: 'Hanworth',
		type: 'town',
		lat: 51.4333,
		lon: -0.3833,
		parentRegion: 'london',
		county: 'Greater London',
		population: 23563
	},
	{
		slug: 'harlesden',
		name: 'Harlesden',
		type: 'town',
		lat: 51.5381,
		lon: -0.2502,
		parentRegion: 'london',
		county: 'Greater London',
		population: 17162
	},
	{
		slug: 'harlow',
		name: 'Harlow',
		type: 'town',
		lat: 51.7766,
		lon: 0.1116,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 93300
	},
	{
		slug: 'harpenden',
		name: 'Harpenden',
		type: 'town',
		lat: 51.8168,
		lon: -0.3571,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 30674
	},
	{
		slug: 'harringay',
		name: 'Harringay',
		type: 'town',
		lat: 51.5824,
		lon: -0.0996,
		parentRegion: 'london',
		county: 'Greater London',
		population: 16500
	},
	{
		slug: 'harrogate',
		name: 'Harrogate',
		type: 'town',
		lat: 53.9908,
		lon: -1.5373,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 89060
	},
	{
		slug: 'harrow',
		name: 'Harrow',
		type: 'town',
		lat: 51.5784,
		lon: -0.3321,
		parentRegion: 'london',
		county: 'Greater London',
		population: 149246
	},
	{
		slug: 'harrow-on-the-hill',
		name: 'Harrow on the Hill',
		type: 'town',
		lat: 51.5714,
		lon: -0.3337,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10632
	},
	{
		slug: 'harrow-weald',
		name: 'Harrow Weald',
		type: 'town',
		lat: 51.6107,
		lon: -0.3374,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14300
	},
	{
		slug: 'hartlepool',
		name: 'Hartlepool',
		type: 'town',
		lat: 54.6855,
		lon: -1.2103,
		parentRegion: 'north-east',
		county: 'Hartlepool',
		population: 88855
	},
	{
		slug: 'hartley',
		name: 'Hartley',
		type: 'town',
		lat: 51.3867,
		lon: 0.3037,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 16302
	},
	{
		slug: 'hartshill',
		name: 'Hartshill',
		type: 'town',
		lat: 52.5483,
		lon: -1.5222,
		parentRegion: 'west-midlands',
		county: 'Warwickshire',
		population: 12479
	},
	{
		slug: 'harwich',
		name: 'Harwich',
		type: 'town',
		lat: 51.9419,
		lon: 1.2844,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 20723
	},
	{
		slug: 'haslemere',
		name: 'Haslemere',
		type: 'town',
		lat: 51.0902,
		lon: -0.7078,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 17279
	},
	{
		slug: 'haslingden',
		name: 'Haslingden',
		type: 'town',
		lat: 53.7033,
		lon: -2.3238,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 15204
	},
	{
		slug: 'hastings',
		name: 'Hastings',
		type: 'town',
		lat: 50.8557,
		lon: 0.5801,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 92855
	},
	{
		slug: 'hatfield',
		name: 'Hatfield',
		type: 'town',
		lat: 51.7634,
		lon: -0.2242,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 41265
	},
	{
		slug: 'havant',
		name: 'Havant',
		type: 'town',
		lat: 50.8567,
		lon: -0.9856,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 45574
	},
	{
		slug: 'haverfordwest',
		name: 'Haverfordwest',
		type: 'town',
		lat: 51.8017,
		lon: -4.9691,
		parentRegion: 'wales',
		county: 'Pembrokeshire',
		population: 14596
	},
	{
		slug: 'haverhill',
		name: 'Haverhill',
		type: 'town',
		lat: 52.0823,
		lon: 0.4389,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 27041
	},
	{
		slug: 'hawarden',
		name: 'Hawarden',
		type: 'town',
		lat: 53.1848,
		lon: -3.0258,
		parentRegion: 'wales',
		county: 'County of Flintshire',
		population: 25513
	},
	{
		slug: 'hawick',
		name: 'Hawick',
		type: 'town',
		lat: 55.4227,
		lon: -2.7867,
		parentRegion: 'dumfries-and-borders',
		county: 'The Scottish Borders',
		population: 13512
	},
	{
		slug: 'haxby',
		name: 'Haxby',
		type: 'town',
		lat: 54.0142,
		lon: -1.0712,
		parentRegion: 'yorkshire-and-humber',
		county: 'City of York',
		population: 11894
	},
	{
		slug: 'haydock',
		name: 'Haydock',
		type: 'town',
		lat: 53.4672,
		lon: -2.6817,
		parentRegion: 'north-west',
		county: 'St. Helens',
		population: 17333
	},
	{
		slug: 'hayes',
		name: 'Hayes',
		type: 'town',
		lat: 51.5158,
		lon: -0.4234,
		parentRegion: 'london',
		county: 'Greater London',
		population: 93928
	},
	{
		slug: 'hayes-greater-london',
		name: 'Hayes',
		type: 'town',
		lat: 51.3779,
		lon: 0.0168,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15908
	},
	{
		slug: 'haywards-heath',
		name: 'Haywards Heath',
		type: 'town',
		lat: 50.9977,
		lon: -0.1031,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 33845
	},
	{
		slug: 'hazel-grove',
		name: 'Hazel Grove',
		type: 'town',
		lat: 53.3833,
		lon: -2.1167,
		parentRegion: 'north-west',
		county: 'Borough of Stockport',
		population: 20170
	},
	{
		slug: 'headstone',
		name: 'Headstone',
		type: 'town',
		lat: 51.5928,
		lon: -0.3449,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14900
	},
	{
		slug: 'heanor',
		name: 'Heanor',
		type: 'town',
		lat: 53.0137,
		lon: -1.3538,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 23122
	},
	{
		slug: 'hebburn',
		name: 'Hebburn',
		type: 'town',
		lat: 54.973,
		lon: -1.5155,
		parentRegion: 'north-east',
		county: 'South Tyneside',
		population: 21345
	},
	{
		slug: 'heckmondwike',
		name: 'Heckmondwike',
		type: 'town',
		lat: 53.7065,
		lon: -1.6775,
		parentRegion: 'yorkshire-and-humber',
		county: 'Kirklees',
		population: 18149
	},
	{
		slug: 'hedge-end',
		name: 'Hedge End',
		type: 'town',
		lat: 50.9123,
		lon: -1.3008,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 17978
	},
	{
		slug: 'hedon',
		name: 'Hedon',
		type: 'town',
		lat: 53.7396,
		lon: -0.1966,
		parentRegion: 'yorkshire-and-humber',
		county: 'East Riding of Yorkshire',
		population: 10358
	},
	{
		slug: 'helensburgh',
		name: 'Helensburgh',
		type: 'town',
		lat: 56.0061,
		lon: -4.7265,
		parentRegion: 'strathclyde',
		county: 'Argyll and Bute',
		population: 13230
	},
	{
		slug: 'helston',
		name: 'Helston',
		type: 'town',
		lat: 50.1032,
		lon: -5.2705,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 11611
	},
	{
		slug: 'hemel-hempstead',
		name: 'Hemel Hempstead',
		type: 'town',
		lat: 51.7537,
		lon: -0.4497,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 95961
	},
	{
		slug: 'henley-on-thames',
		name: 'Henley-on-Thames',
		type: 'town',
		lat: 51.5333,
		lon: -0.9,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 11494
	},
	{
		slug: 'henlow',
		name: 'Henlow',
		type: 'town',
		lat: 52.0302,
		lon: -0.286,
		parentRegion: 'east-of-england',
		county: 'Central Bedfordshire',
		population: 12320
	},
	{
		slug: 'hereford',
		name: 'Hereford',
		type: 'town',
		lat: 52.0568,
		lon: -2.7148,
		parentRegion: 'west-midlands',
		county: 'Herefordshire',
		population: 60415
	},
	{
		slug: 'herne-bay',
		name: 'Herne Bay',
		type: 'town',
		lat: 51.373,
		lon: 1.1286,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 24875
	},
	{
		slug: 'hertford',
		name: 'Hertford',
		type: 'town',
		lat: 51.7959,
		lon: -0.0785,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 25847
	},
	{
		slug: 'heston',
		name: 'Heston',
		type: 'town',
		lat: 51.4836,
		lon: -0.3758,
		parentRegion: 'london',
		county: 'Greater London',
		population: 37045
	},
	{
		slug: 'heswall',
		name: 'Heswall',
		type: 'town',
		lat: 53.3273,
		lon: -3.0965,
		parentRegion: 'north-west',
		county: 'Metropolitan Borough of Wirral',
		population: 29075
	},
	{
		slug: 'hetton-le-hole',
		name: 'Hetton-Le-Hole',
		type: 'town',
		lat: 54.8167,
		lon: -1.45,
		parentRegion: 'north-east',
		county: 'Sunderland',
		population: 14402
	},
	{
		slug: 'hexham',
		name: 'Hexham',
		type: 'town',
		lat: 54.9699,
		lon: -2.104,
		parentRegion: 'north-east',
		county: 'Northumberland',
		population: 11388
	},
	{
		slug: 'heysham',
		name: 'Heysham',
		type: 'town',
		lat: 54.0437,
		lon: -2.8932,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 17016
	},
	{
		slug: 'high-blantyre',
		name: 'High Blantyre',
		type: 'town',
		lat: 55.7844,
		lon: -4.1001,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 16739
	},
	{
		slug: 'high-wycombe',
		name: 'High Wycombe',
		type: 'town',
		lat: 51.6291,
		lon: -0.7493,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 133204
	},
	{
		slug: 'highbury',
		name: 'Highbury',
		type: 'town',
		lat: 51.55,
		lon: -0.1,
		parentRegion: 'london',
		county: 'Greater London',
		population: 26664
	},
	{
		slug: 'highgate',
		name: 'Highgate',
		type: 'town',
		lat: 51.5656,
		lon: -0.159,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10955
	},
	{
		slug: 'hillingdon',
		name: 'Hillingdon',
		type: 'town',
		lat: 51.5329,
		lon: -0.4529,
		parentRegion: 'london',
		county: 'Greater London',
		population: 12403
	},
	{
		slug: 'hinckley',
		name: 'Hinckley',
		type: 'town',
		lat: 52.5389,
		lon: -1.3761,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 50712
	},
	{
		slug: 'hindley',
		name: 'Hindley',
		type: 'town',
		lat: 53.5333,
		lon: -2.5833,
		parentRegion: 'north-west',
		county: 'Borough of Wigan',
		population: 25001
	},
	{
		slug: 'hitchin',
		name: 'Hitchin',
		type: 'town',
		lat: 51.9492,
		lon: -0.285,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 35220
	},
	{
		slug: 'hoddesdon',
		name: 'Hoddesdon',
		type: 'town',
		lat: 51.7615,
		lon: -0.0114,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 35174
	},
	{
		slug: 'holborn',
		name: 'Holborn',
		type: 'town',
		lat: 51.5175,
		lon: -0.1205,
		parentRegion: 'london',
		county: 'Greater London',
		population: 13023
	},
	{
		slug: 'hollinwood',
		name: 'Hollinwood',
		type: 'town',
		lat: 53.5167,
		lon: -2.1333,
		parentRegion: 'north-west',
		county: 'Borough of Oldham',
		population: 12310
	},
	{
		slug: 'holyhead',
		name: 'Holyhead',
		type: 'town',
		lat: 53.3062,
		lon: -4.6321,
		parentRegion: 'wales',
		county: 'Anglesey',
		population: 11431
	},
	{
		slug: 'holywood',
		name: 'Holywood',
		type: 'town',
		lat: 54.6386,
		lon: -5.8247,
		parentRegion: 'northern-ireland',
		county: 'Ards and North Down',
		population: 13109
	},
	{
		slug: 'honiton',
		name: 'Honiton',
		type: 'town',
		lat: 50.7996,
		lon: -3.189,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 12154
	},
	{
		slug: 'hook',
		name: 'Hook',
		type: 'town',
		lat: 51.368,
		lon: -0.3065,
		parentRegion: 'london',
		county: 'Greater London',
		population: 18973
	},
	{
		slug: 'horbury',
		name: 'Horbury',
		type: 'town',
		lat: 53.6605,
		lon: -1.5601,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Wakefield',
		population: 10225
	},
	{
		slug: 'horley',
		name: 'Horley',
		type: 'town',
		lat: 51.1742,
		lon: -0.1592,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 21232
	},
	{
		slug: 'hornsey',
		name: 'Hornsey',
		type: 'town',
		lat: 51.5875,
		lon: -0.122,
		parentRegion: 'london',
		county: 'Greater London',
		population: 12659
	},
	{
		slug: 'horsforth',
		name: 'Horsforth',
		type: 'town',
		lat: 53.8426,
		lon: -1.6375,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 19350
	},
	{
		slug: 'horsham',
		name: 'Horsham',
		type: 'town',
		lat: 51.0631,
		lon: -0.3276,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 51472
	},
	{
		slug: 'horwich',
		name: 'Horwich',
		type: 'town',
		lat: 53.6013,
		lon: -2.5497,
		parentRegion: 'north-west',
		county: 'Borough of Bolton',
		population: 18696
	},
	{
		slug: 'houghton-le-spring',
		name: 'Houghton-Le-Spring',
		type: 'town',
		lat: 54.8403,
		lon: -1.4643,
		parentRegion: 'north-east',
		county: 'Sunderland',
		population: 36746
	},
	{
		slug: 'hounslow',
		name: 'Hounslow',
		type: 'town',
		lat: 51.4684,
		lon: -0.3609,
		parentRegion: 'london',
		county: 'Greater London',
		population: 66292
	},
	{
		slug: 'hove',
		name: 'Hove',
		type: 'town',
		lat: 50.8309,
		lon: -0.1672,
		parentRegion: 'south-east',
		county: 'Brighton and Hove',
		population: 75174
	},
	{
		slug: 'hoyland-nether',
		name: 'Hoyland Nether',
		type: 'town',
		lat: 53.5,
		lon: -1.45,
		parentRegion: 'yorkshire-and-humber',
		county: 'Barnsley',
		population: 15842
	},
	{
		slug: 'hucknall',
		name: 'Hucknall',
		type: 'town',
		lat: 53.0333,
		lon: -1.2,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 29728
	},
	{
		slug: 'huddersfield',
		name: 'Huddersfield',
		type: 'town',
		lat: 53.649,
		lon: -1.7842,
		parentRegion: 'yorkshire-and-humber',
		county: 'Kirklees',
		population: 149017
	},
	{
		slug: 'humberstone',
		name: 'Humberstone',
		type: 'town',
		lat: 52.6474,
		lon: -1.0865,
		parentRegion: 'east-midlands',
		county: 'City of Leicester',
		population: 18854
	},
	{
		slug: 'huntingdon',
		name: 'Huntingdon',
		type: 'town',
		lat: 52.3305,
		lon: -0.1865,
		parentRegion: 'east-of-england',
		county: 'Cambridgeshire',
		population: 23937
	},
	{
		slug: 'hurstpierpoint',
		name: 'Hurstpierpoint',
		type: 'town',
		lat: 50.9339,
		lon: -0.1801,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 12730
	},
	{
		slug: 'huyton',
		name: 'Huyton',
		type: 'town',
		lat: 53.4115,
		lon: -2.8394,
		parentRegion: 'north-west',
		county: 'Knowsley',
		population: 54738
	},
	{
		slug: 'hyde',
		name: 'Hyde',
		type: 'town',
		lat: 53.4513,
		lon: -2.0794,
		parentRegion: 'north-west',
		county: 'Borough of Tameside',
		population: 35895
	},
	{
		slug: 'hythe',
		name: 'Hythe',
		type: 'town',
		lat: 50.86,
		lon: -1.4016,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 20526
	},
	{
		slug: 'hythe-kent',
		name: 'Hythe',
		type: 'town',
		lat: 51.0715,
		lon: 1.0842,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 14604
	},
	{
		slug: 'ickenham',
		name: 'Ickenham',
		type: 'town',
		lat: 51.5643,
		lon: -0.4437,
		parentRegion: 'london',
		county: 'Greater London',
		population: 13600
	},
	{
		slug: 'ilford',
		name: 'Ilford',
		type: 'town',
		lat: 51.5577,
		lon: 0.0728,
		parentRegion: 'london',
		county: 'Greater London',
		population: 168168
	},
	{
		slug: 'ilfracombe',
		name: 'Ilfracombe',
		type: 'town',
		lat: 51.2093,
		lon: -4.1134,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 11042
	},
	{
		slug: 'ilkeston',
		name: 'Ilkeston',
		type: 'town',
		lat: 52.9706,
		lon: -1.3095,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 40953
	},
	{
		slug: 'ilkley',
		name: 'Ilkley',
		type: 'town',
		lat: 53.9245,
		lon: -1.8233,
		parentRegion: 'yorkshire-and-humber',
		county: 'Bradford',
		population: 14809
	},
	{
		slug: 'immingham',
		name: 'Immingham',
		type: 'town',
		lat: 53.6142,
		lon: -0.2158,
		parentRegion: 'yorkshire-and-humber',
		county: 'North East Lincolnshire',
		population: 10750
	},
	{
		slug: 'ince-in-makerfield',
		name: 'Ince-in-Makerfield',
		type: 'town',
		lat: 53.5333,
		lon: -2.6167,
		parentRegion: 'north-west',
		county: 'Borough of Wigan',
		population: 11185
	},
	{
		slug: 'ingleby-greenhow',
		name: 'Ingleby Greenhow',
		type: 'town',
		lat: 54.4498,
		lon: -1.1069,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 14608
	},
	{
		slug: 'inverness',
		name: 'Inverness',
		type: 'town',
		lat: 57.4791,
		lon: -4.224,
		parentRegion: 'highland-and-eilean-siar',
		county: 'Highland',
		population: 47790
	},
	{
		slug: 'inverurie',
		name: 'Inverurie',
		type: 'town',
		lat: 57.2845,
		lon: -2.3774,
		parentRegion: 'grampian',
		county: 'Aberdeenshire',
		population: 14660
	},
	{
		slug: 'irlam',
		name: 'Irlam',
		type: 'town',
		lat: 53.4425,
		lon: -2.4232,
		parentRegion: 'north-west',
		county: 'City and Borough of Salford',
		population: 19442
	},
	{
		slug: 'irvine',
		name: 'Irvine',
		type: 'town',
		lat: 55.6194,
		lon: -4.6551,
		parentRegion: 'strathclyde',
		county: 'North Ayrshire',
		population: 34130
	},
	{
		slug: 'isleworth',
		name: 'Isleworth',
		type: 'town',
		lat: 51.4752,
		lon: -0.3425,
		parentRegion: 'london',
		county: 'Greater London',
		population: 25008
	},
	{
		slug: 'islington',
		name: 'Islington',
		type: 'town',
		lat: 51.5362,
		lon: -0.103,
		parentRegion: 'london',
		county: 'Greater London',
		population: 319143
	},
	{
		slug: 'ivybridge',
		name: 'Ivybridge',
		type: 'town',
		lat: 50.3904,
		lon: -3.9191,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 11851
	},
	{
		slug: 'jarrow',
		name: 'Jarrow',
		type: 'town',
		lat: 54.9804,
		lon: -1.4842,
		parentRegion: 'north-east',
		county: 'South Tyneside',
		population: 29470
	},
	{
		slug: 'johnstone',
		name: 'Johnstone',
		type: 'town',
		lat: 55.8291,
		lon: -4.516,
		parentRegion: 'strathclyde',
		county: 'Renfrewshire',
		population: 15930
	},
	{
		slug: 'kearsley',
		name: 'Kearsley',
		type: 'town',
		lat: 53.5333,
		lon: -2.3833,
		parentRegion: 'north-west',
		county: 'Borough of Bolton',
		population: 10127
	},
	{
		slug: 'keighley',
		name: 'Keighley',
		type: 'town',
		lat: 53.8679,
		lon: -1.9066,
		parentRegion: 'yorkshire-and-humber',
		county: 'Bradford',
		population: 50171
	},
	{
		slug: 'kempston',
		name: 'Kempston',
		type: 'town',
		lat: 52.116,
		lon: -0.5004,
		parentRegion: 'east-of-england',
		county: 'Bedford',
		population: 19873
	},
	{
		slug: 'kempston-hardwick',
		name: 'Kempston Hardwick',
		type: 'town',
		lat: 52.0896,
		lon: -0.4991,
		parentRegion: 'east-of-england',
		county: 'Bedford',
		population: 20000
	},
	{
		slug: 'kendal',
		name: 'Kendal',
		type: 'town',
		lat: 54.3268,
		lon: -2.7476,
		parentRegion: 'north-west',
		county: 'Cumbria',
		population: 29147
	},
	{
		slug: 'kenilworth',
		name: 'Kenilworth',
		type: 'town',
		lat: 52.3496,
		lon: -1.5828,
		parentRegion: 'west-midlands',
		county: 'Warwickshire',
		population: 22413
	},
	{
		slug: 'kenley',
		name: 'Kenley',
		type: 'town',
		lat: 51.3264,
		lon: -0.1011,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14966
	},
	{
		slug: 'kesgrave',
		name: 'Kesgrave',
		type: 'town',
		lat: 52.0624,
		lon: 1.2365,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 11020
	},
	{
		slug: 'kettering',
		name: 'Kettering',
		type: 'town',
		lat: 52.3984,
		lon: -0.7257,
		parentRegion: 'east-midlands',
		county: 'North Northamptonshire',
		population: 56676
	},
	{
		slug: 'kew',
		name: 'Kew',
		type: 'town',
		lat: 51.4817,
		lon: -0.2875,
		parentRegion: 'london',
		county: 'Greater London',
		population: 11436
	},
	{
		slug: 'keynsham',
		name: 'Keynsham',
		type: 'town',
		lat: 51.4139,
		lon: -2.4978,
		parentRegion: 'south-west',
		county: 'Bath and North East Somerset',
		population: 19603
	},
	{
		slug: 'kidbrooke',
		name: 'Kidbrooke',
		type: 'town',
		lat: 51.4672,
		lon: 0.0271,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14300
	},
	{
		slug: 'kidderminster',
		name: 'Kidderminster',
		type: 'town',
		lat: 52.3882,
		lon: -2.25,
		parentRegion: 'west-midlands',
		county: 'Worcestershire',
		population: 57400
	},
	{
		slug: 'kidlington',
		name: 'Kidlington',
		type: 'town',
		lat: 51.8217,
		lon: -1.2886,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 13600
	},
	{
		slug: 'kidsgrove',
		name: 'Kidsgrove',
		type: 'town',
		lat: 53.0869,
		lon: -2.2378,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 29480
	},
	{
		slug: 'kilmarnock',
		name: 'Kilmarnock',
		type: 'town',
		lat: 55.6117,
		lon: -4.4958,
		parentRegion: 'strathclyde',
		county: 'East Ayrshire',
		population: 46970
	},
	{
		slug: 'kilwinning',
		name: 'Kilwinning',
		type: 'town',
		lat: 55.6533,
		lon: -4.7067,
		parentRegion: 'strathclyde',
		county: 'North Ayrshire',
		population: 16100
	},
	{
		slug: 'kimberley',
		name: 'Kimberley',
		type: 'town',
		lat: 52.9833,
		lon: -1.2667,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 11273
	},
	{
		slug: 'kings-cross',
		name: "King's Cross",
		type: 'town',
		lat: 51.5307,
		lon: -0.1231,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14082
	},
	{
		slug: 'kings-lynn',
		name: "King's Lynn",
		type: 'town',
		lat: 52.7517,
		lon: 0.3952,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 46093
	},
	{
		slug: 'kingsteignton',
		name: 'Kingsteignton',
		type: 'town',
		lat: 50.55,
		lon: -3.5833,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 11360
	},
	{
		slug: 'kingston-upon-thames',
		name: 'Kingston upon Thames',
		type: 'town',
		lat: 51.4126,
		lon: -0.2974,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10001
	},
	{
		slug: 'kingswinford',
		name: 'Kingswinford',
		type: 'town',
		lat: 52.4975,
		lon: -2.1689,
		parentRegion: 'west-midlands',
		county: 'Dudley',
		population: 20000
	},
	{
		slug: 'kingswood',
		name: 'Kingswood',
		type: 'town',
		lat: 51.4528,
		lon: -2.5083,
		parentRegion: 'south-west',
		county: 'South Gloucestershire',
		population: 40734
	},
	{
		slug: 'kippax',
		name: 'Kippax',
		type: 'town',
		lat: 53.7669,
		lon: -1.371,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 15965
	},
	{
		slug: 'kirk-sandall',
		name: 'Kirk Sandall',
		type: 'town',
		lat: 53.5621,
		lon: -1.0688,
		parentRegion: 'yorkshire-and-humber',
		county: 'Doncaster',
		population: 13572
	},
	{
		slug: 'kirkby',
		name: 'Kirkby',
		type: 'town',
		lat: 53.4814,
		lon: -2.8921,
		parentRegion: 'north-west',
		county: 'Knowsley',
		population: 45564
	},
	{
		slug: 'kirkby-in-ashfield',
		name: 'Kirkby in Ashfield',
		type: 'town',
		lat: 53.0998,
		lon: -1.2438,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 27539
	},
	{
		slug: 'kirkcaldy',
		name: 'Kirkcaldy',
		type: 'town',
		lat: 56.1168,
		lon: -3.16,
		parentRegion: 'tayside-and-fife',
		county: 'Fife',
		population: 50370
	},
	{
		slug: 'kirkintilloch',
		name: 'Kirkintilloch',
		type: 'town',
		lat: 55.9393,
		lon: -4.1526,
		parentRegion: 'strathclyde',
		county: 'East Dunbartonshire',
		population: 19630
	},
	{
		slug: 'knaresborough',
		name: 'Knaresborough',
		type: 'town',
		lat: 54.0091,
		lon: -1.4685,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 14740
	},
	{
		slug: 'knottingley',
		name: 'Knottingley',
		type: 'town',
		lat: 53.7078,
		lon: -1.2564,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Wakefield',
		population: 13804
	},
	{
		slug: 'knotty-ash',
		name: 'Knotty Ash',
		type: 'town',
		lat: 53.4162,
		lon: -2.8965,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 14355
	},
	{
		slug: 'knowle',
		name: 'Knowle',
		type: 'town',
		lat: 52.3833,
		lon: -1.7333,
		parentRegion: 'west-midlands',
		county: 'Solihull',
		population: 10823
	},
	{
		slug: 'knutsford',
		name: 'Knutsford',
		type: 'town',
		lat: 53.3029,
		lon: -2.3748,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 13191
	},
	{
		slug: 'ladywell',
		name: 'Ladywell',
		type: 'town',
		lat: 51.4545,
		lon: -0.0223,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14515
	},
	{
		slug: 'lancaster',
		name: 'Lancaster',
		type: 'town',
		lat: 54.0465,
		lon: -2.7999,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 47162
	},
	{
		slug: 'lancing',
		name: 'Lancing',
		type: 'town',
		lat: 50.8288,
		lon: -0.3225,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 18692
	},
	{
		slug: 'largs',
		name: 'Largs',
		type: 'town',
		lat: 55.7963,
		lon: -4.8634,
		parentRegion: 'strathclyde',
		county: 'North Ayrshire',
		population: 11030
	},
	{
		slug: 'larkhall',
		name: 'Larkhall',
		type: 'town',
		lat: 55.7333,
		lon: -3.9667,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 15030
	},
	{
		slug: 'larne',
		name: 'Larne',
		type: 'town',
		lat: 54.85,
		lon: -5.8167,
		parentRegion: 'northern-ireland',
		county: 'Mid and East Antrim',
		population: 18421
	},
	{
		slug: 'leatherhead',
		name: 'Leatherhead',
		type: 'town',
		lat: 51.2965,
		lon: -0.3338,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 43544
	},
	{
		slug: 'lee',
		name: 'Lee',
		type: 'town',
		lat: 51.4556,
		lon: 0.0052,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14573
	},
	{
		slug: 'leek',
		name: 'Leek',
		type: 'town',
		lat: 53.1043,
		lon: -2.0221,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 19385
	},
	{
		slug: 'lees',
		name: 'Lees',
		type: 'town',
		lat: 53.5379,
		lon: -2.073,
		parentRegion: 'north-west',
		county: 'Borough of Oldham',
		population: 12630
	},
	{
		slug: 'leicester-forest-east',
		name: 'Leicester Forest East',
		type: 'town',
		lat: 52.625,
		lon: -1.2183,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 13846
	},
	{
		slug: 'leigh',
		name: 'Leigh',
		type: 'town',
		lat: 53.4964,
		lon: -2.5197,
		parentRegion: 'north-west',
		county: 'Borough of Wigan',
		population: 43626
	},
	{
		slug: 'leighton-buzzard',
		name: 'Leighton Buzzard',
		type: 'town',
		lat: 51.9172,
		lon: -0.658,
		parentRegion: 'east-of-england',
		county: 'Central Bedfordshire',
		population: 42727
	},
	{
		slug: 'leominster',
		name: 'Leominster',
		type: 'town',
		lat: 52.2258,
		lon: -2.7449,
		parentRegion: 'west-midlands',
		county: 'Herefordshire',
		population: 10938
	},
	{
		slug: 'letchworth-garden-city',
		name: 'Letchworth Garden City',
		type: 'town',
		lat: 51.9794,
		lon: -0.2266,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 33990
	},
	{
		slug: 'lewes',
		name: 'Lewes',
		type: 'town',
		lat: 50.874,
		lon: 0.0088,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 17297
	},
	{
		slug: 'leyland',
		name: 'Leyland',
		type: 'town',
		lat: 53.6979,
		lon: -2.6876,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 37614
	},
	{
		slug: 'leyton',
		name: 'Leyton',
		type: 'town',
		lat: 51.5596,
		lon: -0.0078,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14184
	},
	{
		slug: 'lichfield',
		name: 'Lichfield',
		type: 'town',
		lat: 52.6815,
		lon: -1.8255,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 34738
	},
	{
		slug: 'limavady',
		name: 'Limavady',
		type: 'town',
		lat: 55.0504,
		lon: -6.9507,
		parentRegion: 'northern-ireland',
		county: 'Causeway Coast and Glens',
		population: 11279
	},
	{
		slug: 'lincoln',
		name: 'Lincoln',
		type: 'town',
		lat: 53.2268,
		lon: -0.5379,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 103813
	},
	{
		slug: 'linlithgow',
		name: 'Linlithgow',
		type: 'town',
		lat: 55.9764,
		lon: -3.6036,
		parentRegion: 'dumfries-and-borders',
		county: 'West Lothian',
		population: 12840
	},
	{
		slug: 'lisburn',
		name: 'Lisburn',
		type: 'town',
		lat: 54.5234,
		lon: -6.0353,
		parentRegion: 'northern-ireland',
		county: 'Lisburn and Castlereagh',
		population: 77506
	},
	{
		slug: 'litherland',
		name: 'Litherland',
		type: 'town',
		lat: 53.4699,
		lon: -2.9981,
		parentRegion: 'north-west',
		county: 'Sefton',
		population: 22971
	},
	{
		slug: 'little-hulton',
		name: 'Little Hulton',
		type: 'town',
		lat: 53.5333,
		lon: -2.4167,
		parentRegion: 'north-west',
		county: 'City and Borough of Salford',
		population: 13469
	},
	{
		slug: 'little-lever',
		name: 'Little Lever',
		type: 'town',
		lat: 53.5635,
		lon: -2.378,
		parentRegion: 'north-west',
		county: 'Borough of Bolton',
		population: 10100
	},
	{
		slug: 'littleborough',
		name: 'Littleborough',
		type: 'town',
		lat: 53.6441,
		lon: -2.0958,
		parentRegion: 'north-west',
		county: 'Borough of Rochdale',
		population: 13807
	},
	{
		slug: 'littlehampton',
		name: 'Littlehampton',
		type: 'town',
		lat: 50.8114,
		lon: -0.5408,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 58714
	},
	{
		slug: 'liversedge',
		name: 'Liversedge',
		type: 'town',
		lat: 53.7051,
		lon: -1.6933,
		parentRegion: 'yorkshire-and-humber',
		county: 'Kirklees',
		population: 19420
	},
	{
		slug: 'livingston',
		name: 'Livingston',
		type: 'town',
		lat: 55.9029,
		lon: -3.5226,
		parentRegion: 'dumfries-and-borders',
		county: 'West Lothian',
		population: 56840
	},
	{
		slug: 'llandudno',
		name: 'Llandudno',
		type: 'town',
		lat: 53.325,
		lon: -3.8315,
		parentRegion: 'wales',
		county: 'Conwy',
		population: 15371
	},
	{
		slug: 'llanelli',
		name: 'Llanelli',
		type: 'town',
		lat: 51.682,
		lon: -4.1619,
		parentRegion: 'wales',
		county: 'Carmarthenshire',
		population: 49591
	},
	{
		slug: 'llantrisant',
		name: 'Llantrisant',
		type: 'town',
		lat: 51.5403,
		lon: -3.3739,
		parentRegion: 'wales',
		county: 'Rhondda Cynon Taf',
		population: 14422
	},
	{
		slug: 'llantwit-major',
		name: 'Llantwit Major',
		type: 'town',
		lat: 51.4107,
		lon: -3.4863,
		parentRegion: 'wales',
		county: 'Vale of Glamorgan',
		population: 14384
	},
	{
		slug: 'lofthouse',
		name: 'Lofthouse',
		type: 'town',
		lat: 53.7295,
		lon: -1.497,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 23458
	},
	{
		slug: 'long-eaton',
		name: 'Long Eaton',
		type: 'town',
		lat: 52.8986,
		lon: -1.2714,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 47898
	},
	{
		slug: 'longfield',
		name: 'Longfield',
		type: 'town',
		lat: 51.3969,
		lon: 0.3021,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 16808
	},
	{
		slug: 'longton',
		name: 'Longton',
		type: 'town',
		lat: 52.9833,
		lon: -2.1333,
		parentRegion: 'west-midlands',
		county: 'Stoke-on-Trent',
		population: 27214
	},
	{
		slug: 'loughborough',
		name: 'Loughborough',
		type: 'town',
		lat: 52.7667,
		lon: -1.2,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 64884
	},
	{
		slug: 'loughton',
		name: 'Loughton',
		type: 'town',
		lat: 52.4333,
		lon: -2.5667,
		parentRegion: 'west-midlands',
		county: 'Shropshire',
		population: 33346
	},
	{
		slug: 'louth',
		name: 'Louth',
		type: 'town',
		lat: 53.3666,
		lon: -0.0044,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 17382
	},
	{
		slug: 'lower-earley',
		name: 'Lower Earley',
		type: 'town',
		lat: 51.4271,
		lon: -0.9198,
		parentRegion: 'south-east',
		county: 'Wokingham',
		population: 32000
	},
	{
		slug: 'lowestoft',
		name: 'Lowestoft',
		type: 'town',
		lat: 52.4752,
		lon: 1.7517,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 71327
	},
	{
		slug: 'ludlow',
		name: 'Ludlow',
		type: 'town',
		lat: 52.3743,
		lon: -2.7131,
		parentRegion: 'west-midlands',
		county: 'Shropshire',
		population: 10515
	},
	{
		slug: 'lymington',
		name: 'Lymington',
		type: 'town',
		lat: 50.7592,
		lon: -1.5383,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 14858
	},
	{
		slug: 'lymm',
		name: 'Lymm',
		type: 'town',
		lat: 53.3811,
		lon: -2.4776,
		parentRegion: 'north-west',
		county: 'Warrington',
		population: 11608
	},
	{
		slug: 'lytham-st-annes',
		name: 'Lytham St Annes',
		type: 'town',
		lat: 53.7426,
		lon: -2.997,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 42695
	},
	{
		slug: 'mablethorpe',
		name: 'Mablethorpe',
		type: 'town',
		lat: 53.3409,
		lon: 0.261,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 12531
	},
	{
		slug: 'macclesfield',
		name: 'Macclesfield',
		type: 'town',
		lat: 53.2602,
		lon: -2.1256,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 54345
	},
	{
		slug: 'maesteg',
		name: 'Maesteg',
		type: 'town',
		lat: 51.6093,
		lon: -3.6582,
		parentRegion: 'wales',
		county: 'Bridgend county borough',
		population: 21001
	},
	{
		slug: 'maghull',
		name: 'Maghull',
		type: 'town',
		lat: 53.5162,
		lon: -2.9412,
		parentRegion: 'north-west',
		county: 'Sefton',
		population: 26997
	},
	{
		slug: 'maidenhead',
		name: 'Maidenhead',
		type: 'town',
		lat: 51.5228,
		lon: -0.7199,
		parentRegion: 'south-east',
		county: 'Royal Borough of Windsor and Maidenhead',
		population: 70374
	},
	{
		slug: 'maidstone',
		name: 'Maidstone',
		type: 'town',
		lat: 51.2667,
		lon: 0.5167,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 107627
	},
	{
		slug: 'maldon',
		name: 'Maldon',
		type: 'town',
		lat: 51.7311,
		lon: 0.6746,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 23380
	},
	{
		slug: 'maltby',
		name: 'Maltby',
		type: 'town',
		lat: 53.4167,
		lon: -1.2,
		parentRegion: 'yorkshire-and-humber',
		county: 'Rotherham',
		population: 17513
	},
	{
		slug: 'mangotsfield',
		name: 'Mangotsfield',
		type: 'town',
		lat: 51.4878,
		lon: -2.504,
		parentRegion: 'south-west',
		county: 'South Gloucestershire',
		population: 36427
	},
	{
		slug: 'manor-park',
		name: 'Manor Park',
		type: 'town',
		lat: 51.5493,
		lon: 0.0487,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15318
	},
	{
		slug: 'mansfield-woodhouse',
		name: 'Mansfield Woodhouse',
		type: 'town',
		lat: 53.1649,
		lon: -1.1938,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 18330
	},
	{
		slug: 'march',
		name: 'March',
		type: 'town',
		lat: 52.5513,
		lon: 0.0883,
		parentRegion: 'east-of-england',
		county: 'Cambridgeshire',
		population: 21051
	},
	{
		slug: 'margate',
		name: 'Margate',
		type: 'town',
		lat: 51.3813,
		lon: 1.3862,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 63322
	},
	{
		slug: 'market-deeping',
		name: 'Market Deeping',
		type: 'town',
		lat: 52.6765,
		lon: -0.3163,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 13574
	},
	{
		slug: 'market-drayton',
		name: 'Market Drayton',
		type: 'town',
		lat: 52.9054,
		lon: -2.4901,
		parentRegion: 'west-midlands',
		county: 'Shropshire',
		population: 11773
	},
	{
		slug: 'market-harborough',
		name: 'Market Harborough',
		type: 'town',
		lat: 52.4776,
		lon: -0.9205,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 24779
	},
	{
		slug: 'marlow',
		name: 'Marlow',
		type: 'town',
		lat: 51.5693,
		lon: -0.7742,
		parentRegion: 'south-east',
		county: 'Buckinghamshire',
		population: 18261
	},
	{
		slug: 'marple',
		name: 'Marple',
		type: 'town',
		lat: 53.3945,
		lon: -2.0629,
		parentRegion: 'north-west',
		county: 'Borough of Stockport',
		population: 12970
	},
	{
		slug: 'matlock',
		name: 'Matlock',
		type: 'town',
		lat: 53.1384,
		lon: -1.5556,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 14956
	},
	{
		slug: 'mayfield',
		name: 'Mayfield',
		type: 'town',
		lat: 55.8717,
		lon: -3.0387,
		parentRegion: 'dumfries-and-borders',
		county: 'Midlothian',
		population: 13690
	},
	{
		slug: 'meikle-earnock',
		name: 'Meikle Earnock',
		type: 'town',
		lat: 55.75,
		lon: -4.0333,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 54480
	},
	{
		slug: 'melksham',
		name: 'Melksham',
		type: 'town',
		lat: 51.3728,
		lon: -2.14,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 19357
	},
	{
		slug: 'melton-mowbray',
		name: 'Melton Mowbray',
		type: 'town',
		lat: 52.7659,
		lon: -0.8869,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 27737
	},
	{
		slug: 'merthyr-tydfil',
		name: 'Merthyr Tydfil',
		type: 'town',
		lat: 51.7479,
		lon: -3.3778,
		parentRegion: 'wales',
		county: 'Merthyr Tydfil County Borough',
		population: 43820
	},
	{
		slug: 'methil',
		name: 'Methil',
		type: 'town',
		lat: 56.1854,
		lon: -3.0216,
		parentRegion: 'tayside-and-fife',
		county: 'Fife',
		population: 10890
	},
	{
		slug: 'mexborough',
		name: 'Mexborough',
		type: 'town',
		lat: 53.4939,
		lon: -1.2924,
		parentRegion: 'yorkshire-and-humber',
		county: 'Doncaster',
		population: 15079
	},
	{
		slug: 'middlesbrough',
		name: 'Middlesbrough',
		type: 'town',
		lat: 54.5762,
		lon: -1.2348,
		parentRegion: 'north-east',
		county: 'Middlesbrough',
		population: 142707
	},
	{
		slug: 'middleton',
		name: 'Middleton',
		type: 'town',
		lat: 53.55,
		lon: -2.2,
		parentRegion: 'north-west',
		county: 'Borough of Rochdale',
		population: 45589
	},
	{
		slug: 'middlewich',
		name: 'Middlewich',
		type: 'town',
		lat: 53.193,
		lon: -2.444,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 13595
	},
	{
		slug: 'midsomer-norton',
		name: 'Midsomer Norton',
		type: 'town',
		lat: 51.2857,
		lon: -2.4859,
		parentRegion: 'south-west',
		county: 'Bath and North East Somerset',
		population: 13000
	},
	{
		slug: 'mildenhall',
		name: 'Mildenhall',
		type: 'town',
		lat: 52.3445,
		lon: 0.5109,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 14382
	},
	{
		slug: 'milford-haven',
		name: 'Milford Haven',
		type: 'town',
		lat: 51.7128,
		lon: -5.0341,
		parentRegion: 'wales',
		county: 'Pembrokeshire',
		population: 13582
	},
	{
		slug: 'milngavie',
		name: 'Milngavie',
		type: 'town',
		lat: 55.9407,
		lon: -4.3231,
		parentRegion: 'strathclyde',
		county: 'East Dunbartonshire',
		population: 12840
	},
	{
		slug: 'minehead',
		name: 'Minehead',
		type: 'town',
		lat: 51.2045,
		lon: -3.4828,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 11757
	},
	{
		slug: 'mirfield',
		name: 'Mirfield',
		type: 'town',
		lat: 53.6734,
		lon: -1.6964,
		parentRegion: 'yorkshire-and-humber',
		county: 'Kirklees',
		population: 18800
	},
	{
		slug: 'mitcham',
		name: 'Mitcham',
		type: 'town',
		lat: 51.4032,
		lon: -0.1683,
		parentRegion: 'london',
		county: 'Greater London',
		population: 63393
	},
	{
		slug: 'mold',
		name: 'Mold',
		type: 'town',
		lat: 53.1667,
		lon: -3.1414,
		parentRegion: 'wales',
		county: 'County of Flintshire',
		population: 10058
	},
	{
		slug: 'monmouth',
		name: 'Monmouth',
		type: 'town',
		lat: 51.8126,
		lon: -2.7136,
		parentRegion: 'wales',
		county: 'Monmouthshire',
		population: 10110
	},
	{
		slug: 'montrose',
		name: 'Montrose',
		type: 'town',
		lat: 56.7168,
		lon: -2.467,
		parentRegion: 'tayside-and-fife',
		county: 'Angus',
		population: 11730
	},
	{
		slug: 'morden',
		name: 'Morden',
		type: 'town',
		lat: 51.3982,
		lon: -0.1984,
		parentRegion: 'london',
		county: 'Greater London',
		population: 48233
	},
	{
		slug: 'morecambe',
		name: 'Morecambe',
		type: 'town',
		lat: 54.0684,
		lon: -2.8611,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 51644
	},
	{
		slug: 'moreton',
		name: 'Moreton',
		type: 'town',
		lat: 53.4,
		lon: -3.1167,
		parentRegion: 'north-west',
		county: 'Metropolitan Borough of Wirral',
		population: 17670
	},
	{
		slug: 'morley',
		name: 'Morley',
		type: 'town',
		lat: 53.7401,
		lon: -1.5988,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 57385
	},
	{
		slug: 'morpeth',
		name: 'Morpeth',
		type: 'town',
		lat: 55.1688,
		lon: -1.6889,
		parentRegion: 'north-east',
		county: 'Northumberland',
		population: 14403
	},
	{
		slug: 'mortlake',
		name: 'Mortlake',
		type: 'town',
		lat: 51.4695,
		lon: -0.2675,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10919
	},
	{
		slug: 'mossend',
		name: 'Mossend',
		type: 'town',
		lat: 55.8167,
		lon: -4,
		parentRegion: 'strathclyde',
		county: 'North Lanarkshire',
		population: 13480
	},
	{
		slug: 'mossley-hill',
		name: 'Mossley Hill',
		type: 'town',
		lat: 53.377,
		lon: -2.9126,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 12041
	},
	{
		slug: 'motherwell',
		name: 'Motherwell',
		type: 'town',
		lat: 55.7892,
		lon: -3.9919,
		parentRegion: 'strathclyde',
		county: 'North Lanarkshire',
		population: 32840
	},
	{
		slug: 'mountain-ash',
		name: 'Mountain Ash',
		type: 'town',
		lat: 51.6836,
		lon: -3.3801,
		parentRegion: 'wales',
		county: 'Rhondda Cynon Taf',
		population: 11230
	},
	{
		slug: 'mountsorrel',
		name: 'Mountsorrel',
		type: 'town',
		lat: 52.7167,
		lon: -1.15,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 17297
	},
	{
		slug: 'musselburgh',
		name: 'Musselburgh',
		type: 'town',
		lat: 55.9417,
		lon: -3.0499,
		parentRegion: 'dumfries-and-borders',
		county: 'East Lothian',
		population: 23620
	},
	{
		slug: 'muswell-hill',
		name: 'Muswell Hill',
		type: 'town',
		lat: 51.5905,
		lon: -0.1421,
		parentRegion: 'london',
		county: 'Greater London',
		population: 27992
	},
	{
		slug: 'nailsea',
		name: 'Nailsea',
		type: 'town',
		lat: 51.4324,
		lon: -2.7585,
		parentRegion: 'south-west',
		county: 'North Somerset',
		population: 20543
	},
	{
		slug: 'nairn',
		name: 'Nairn',
		type: 'town',
		lat: 57.5809,
		lon: -3.8797,
		parentRegion: 'highland-and-eilean-siar',
		county: 'Highland',
		population: 10190
	},
	{
		slug: 'nantwich',
		name: 'Nantwich',
		type: 'town',
		lat: 53.0688,
		lon: -2.5205,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 17226
	},
	{
		slug: 'neath',
		name: 'Neath',
		type: 'town',
		lat: 51.6632,
		lon: -3.8044,
		parentRegion: 'wales',
		county: 'Neath Port Talbot',
		population: 46126
	},
	{
		slug: 'nelson',
		name: 'Nelson',
		type: 'town',
		lat: 53.8333,
		lon: -2.2,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 29317
	},
	{
		slug: 'nelson-caerphilly-county-borough',
		name: 'Nelson',
		type: 'town',
		lat: 51.6533,
		lon: -3.2844,
		parentRegion: 'wales',
		county: 'Caerphilly County Borough',
		population: 12857
	},
	{
		slug: 'neston',
		name: 'Neston',
		type: 'town',
		lat: 51.4122,
		lon: -2.2006,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 15352
	},
	{
		slug: 'neston-cheshire-west-and-chester',
		name: 'Neston',
		type: 'town',
		lat: 53.2833,
		lon: -3.05,
		parentRegion: 'north-west',
		county: 'Cheshire West and Chester',
		population: 15064
	},
	{
		slug: 'new-barnet',
		name: 'New Barnet',
		type: 'town',
		lat: 51.6497,
		lon: -0.1753,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14000
	},
	{
		slug: 'new-mills',
		name: 'New Mills',
		type: 'town',
		lat: 53.3659,
		lon: -1.9999,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 17968
	},
	{
		slug: 'new-milton',
		name: 'New Milton',
		type: 'town',
		lat: 50.756,
		lon: -1.6658,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 25546
	},
	{
		slug: 'newark-on-trent',
		name: 'Newark on Trent',
		type: 'town',
		lat: 53.0667,
		lon: -0.8167,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 43363
	},
	{
		slug: 'newburn',
		name: 'Newburn',
		type: 'town',
		lat: 54.9876,
		lon: -1.7442,
		parentRegion: 'north-east',
		county: 'Newcastle upon Tyne',
		population: 41347
	},
	{
		slug: 'newbury',
		name: 'Newbury',
		type: 'town',
		lat: 51.4015,
		lon: -1.3247,
		parentRegion: 'south-east',
		county: 'West Berkshire',
		population: 33065
	},
	{
		slug: 'newcastle-under-lyme',
		name: 'Newcastle under Lyme',
		type: 'town',
		lat: 53,
		lon: -2.2333,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 127727
	},
	{
		slug: 'newhaven',
		name: 'Newhaven',
		type: 'town',
		lat: 50.7969,
		lon: 0.0554,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 12854
	},
	{
		slug: 'newmarket',
		name: 'Newmarket',
		type: 'town',
		lat: 52.2447,
		lon: 0.4042,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 20384
	},
	{
		slug: 'newport',
		name: 'Newport',
		type: 'town',
		lat: 51.5877,
		lon: -2.9983,
		parentRegion: 'wales',
		county: 'Newport',
		population: 161506
	},
	{
		slug: 'newport-isle-of-wight',
		name: 'Newport',
		type: 'town',
		lat: 50.7015,
		lon: -1.2912,
		parentRegion: 'south-east',
		county: 'Isle of Wight',
		population: 24884
	},
	{
		slug: 'newport-telford-and-wrekin',
		name: 'Newport',
		type: 'town',
		lat: 52.7668,
		lon: -2.3773,
		parentRegion: 'west-midlands',
		county: 'Telford and Wrekin',
		population: 12741
	},
	{
		slug: 'newport-pagnell',
		name: 'Newport Pagnell',
		type: 'town',
		lat: 52.0873,
		lon: -0.7222,
		parentRegion: 'south-east',
		county: 'Milton Keynes',
		population: 15067
	},
	{
		slug: 'newquay',
		name: 'Newquay',
		type: 'town',
		lat: 50.4156,
		lon: -5.0732,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 20189
	},
	{
		slug: 'newry',
		name: 'Newry',
		type: 'town',
		lat: 54.1784,
		lon: -6.3374,
		parentRegion: 'northern-ireland',
		county: 'Newry Mourne and Down',
		population: 27757
	},
	{
		slug: 'newton-abbot',
		name: 'Newton Abbot',
		type: 'town',
		lat: 50.5286,
		lon: -3.6119,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 36474
	},
	{
		slug: 'newton-aycliffe',
		name: 'Newton Aycliffe',
		type: 'town',
		lat: 54.6184,
		lon: -1.5719,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 26415
	},
	{
		slug: 'newton-mearns',
		name: 'Newton Mearns',
		type: 'town',
		lat: 55.7733,
		lon: -4.3334,
		parentRegion: 'strathclyde',
		county: 'East Renfrewshire',
		population: 28210
	},
	{
		slug: 'newton-le-willows',
		name: 'Newton-le-Willows',
		type: 'town',
		lat: 53.45,
		lon: -2.6,
		parentRegion: 'north-west',
		county: 'St. Helens',
		population: 24642
	},
	{
		slug: 'newtown',
		name: 'Newtown',
		type: 'town',
		lat: 52.5167,
		lon: -3.3,
		parentRegion: 'wales',
		county: 'Sir Powys',
		population: 11362
	},
	{
		slug: 'newtownabbey',
		name: 'Newtownabbey',
		type: 'town',
		lat: 54.6598,
		lon: -5.9086,
		parentRegion: 'northern-ireland',
		county: 'Antrim and Newtownabbey',
		population: 63860
	},
	{
		slug: 'newtownards',
		name: 'Newtownards',
		type: 'town',
		lat: 54.5924,
		lon: -5.6909,
		parentRegion: 'northern-ireland',
		county: 'Ards and North Down',
		population: 29363
	},
	{
		slug: 'norbiton',
		name: 'Norbiton',
		type: 'town',
		lat: 51.4119,
		lon: -0.2842,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10107
	},
	{
		slug: 'north-shields',
		name: 'North Shields',
		type: 'town',
		lat: 55.0165,
		lon: -1.4492,
		parentRegion: 'north-east',
		county: 'North Tyneside',
		population: 39747
	},
	{
		slug: 'north-walsham',
		name: 'North Walsham',
		type: 'town',
		lat: 52.8212,
		lon: 1.3875,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 13007
	},
	{
		slug: 'north-watford',
		name: 'North Watford',
		type: 'town',
		lat: 51.6807,
		lon: -0.3945,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 33000
	},
	{
		slug: 'northallerton',
		name: 'Northallerton',
		type: 'town',
		lat: 54.339,
		lon: -1.4324,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 16832
	},
	{
		slug: 'northolt',
		name: 'Northolt',
		type: 'town',
		lat: 51.5485,
		lon: -0.3678,
		parentRegion: 'london',
		county: 'Greater London',
		population: 26000
	},
	{
		slug: 'northwich',
		name: 'Northwich',
		type: 'town',
		lat: 53.2588,
		lon: -2.5202,
		parentRegion: 'north-west',
		county: 'Cheshire West and Chester',
		population: 47421
	},
	{
		slug: 'northwood',
		name: 'Northwood',
		type: 'town',
		lat: 51.6116,
		lon: -0.4245,
		parentRegion: 'london',
		county: 'Greater London',
		population: 11300
	},
	{
		slug: 'nuneaton',
		name: 'Nuneaton',
		type: 'town',
		lat: 52.5232,
		lon: -1.4652,
		parentRegion: 'west-midlands',
		county: 'Warwickshire',
		population: 88813
	},
	{
		slug: 'oadby',
		name: 'Oadby',
		type: 'town',
		lat: 52.6062,
		lon: -1.0835,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 23849
	},
	{
		slug: 'oakham',
		name: 'Oakham',
		type: 'town',
		lat: 52.6667,
		lon: -0.7333,
		parentRegion: 'east-midlands',
		county: 'District of Rutland',
		population: 10922
	},
	{
		slug: 'oakwood',
		name: 'Oakwood',
		type: 'town',
		lat: 52.9433,
		lon: -1.4309,
		parentRegion: 'east-midlands',
		county: 'Derby',
		population: 13419
	},
	{
		slug: 'old-swan',
		name: 'Old Swan',
		type: 'town',
		lat: 53.4139,
		lon: -2.9089,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 15596
	},
	{
		slug: 'oldbury',
		name: 'Oldbury',
		type: 'town',
		lat: 52.5,
		lon: -2.0167,
		parentRegion: 'west-midlands',
		county: 'Sandwell',
		population: 10830
	},
	{
		slug: 'oldham',
		name: 'Oldham',
		type: 'town',
		lat: 53.5405,
		lon: -2.1183,
		parentRegion: 'north-west',
		county: 'Borough of Oldham',
		population: 237110
	},
	{
		slug: 'omagh',
		name: 'Omagh',
		type: 'town',
		lat: 54.6,
		lon: -7.3,
		parentRegion: 'northern-ireland',
		county: 'Fermanagh and Omagh',
		population: 21056
	},
	{
		slug: 'ormskirk',
		name: 'Ormskirk',
		type: 'town',
		lat: 53.5669,
		lon: -2.8818,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 24073
	},
	{
		slug: 'orpington',
		name: 'Orpington',
		type: 'town',
		lat: 51.3746,
		lon: 0.0979,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15248
	},
	{
		slug: 'ossett',
		name: 'Ossett',
		type: 'town',
		lat: 53.6798,
		lon: -1.5801,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Wakefield',
		population: 21861
	},
	{
		slug: 'osterley',
		name: 'Osterley',
		type: 'town',
		lat: 51.4803,
		lon: -0.354,
		parentRegion: 'london',
		county: 'Greater London',
		population: 13031
	},
	{
		slug: 'oswestry',
		name: 'Oswestry',
		type: 'town',
		lat: 52.862,
		lon: -3.055,
		parentRegion: 'west-midlands',
		county: 'Shropshire',
		population: 18743
	},
	{
		slug: 'otley',
		name: 'Otley',
		type: 'town',
		lat: 53.9055,
		lon: -1.6938,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 14668
	},
	{
		slug: 'oxted',
		name: 'Oxted',
		type: 'town',
		lat: 51.2569,
		lon: -0.006,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 13452
	},
	{
		slug: 'padiham',
		name: 'Padiham',
		type: 'town',
		lat: 53.8019,
		lon: -2.3151,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 11338
	},
	{
		slug: 'paignton',
		name: 'Paignton',
		type: 'town',
		lat: 50.4357,
		lon: -3.5679,
		parentRegion: 'south-west',
		county: 'Borough of Torbay',
		population: 67520
	},
	{
		slug: 'paisley',
		name: 'Paisley',
		type: 'town',
		lat: 55.8317,
		lon: -4.4325,
		parentRegion: 'strathclyde',
		county: 'Renfrewshire',
		population: 77270
	},
	{
		slug: 'palmers-green',
		name: 'Palmers Green',
		type: 'town',
		lat: 51.6179,
		lon: -0.1101,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15162
	},
	{
		slug: 'peacehaven',
		name: 'Peacehaven',
		type: 'town',
		lat: 50.7927,
		lon: -0.0065,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 18579
	},
	{
		slug: 'pelsall',
		name: 'Pelsall',
		type: 'town',
		lat: 52.6291,
		lon: -1.9674,
		parentRegion: 'west-midlands',
		county: 'Walsall',
		population: 11371
	},
	{
		slug: 'penarth',
		name: 'Penarth',
		type: 'town',
		lat: 51.4386,
		lon: -3.1734,
		parentRegion: 'wales',
		county: 'Vale of Glamorgan',
		population: 23437
	},
	{
		slug: 'penicuik',
		name: 'Penicuik',
		type: 'town',
		lat: 55.8312,
		lon: -3.2261,
		parentRegion: 'dumfries-and-borders',
		county: 'Midlothian',
		population: 16150
	},
	{
		slug: 'penistone',
		name: 'Penistone',
		type: 'town',
		lat: 53.5257,
		lon: -1.6303,
		parentRegion: 'yorkshire-and-humber',
		county: 'Barnsley',
		population: 10956
	},
	{
		slug: 'penrith',
		name: 'Penrith',
		type: 'town',
		lat: 54.6658,
		lon: -2.7576,
		parentRegion: 'north-west',
		county: 'Cumbria',
		population: 16700
	},
	{
		slug: 'penzance',
		name: 'Penzance',
		type: 'town',
		lat: 50.1186,
		lon: -5.5371,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 19872
	},
	{
		slug: 'perth',
		name: 'Perth',
		type: 'town',
		lat: 56.3952,
		lon: -3.4314,
		parentRegion: 'tayside-and-fife',
		county: 'Perth and Kinross',
		population: 47350
	},
	{
		slug: 'peterborough',
		name: 'Peterborough',
		type: 'town',
		lat: 52.5736,
		lon: -0.2478,
		parentRegion: 'east-of-england',
		county: 'Peterborough',
		population: 163379
	},
	{
		slug: 'peterhead',
		name: 'Peterhead',
		type: 'town',
		lat: 57.5052,
		lon: -1.7844,
		parentRegion: 'grampian',
		county: 'Aberdeenshire',
		population: 19060
	},
	{
		slug: 'peterlee',
		name: 'Peterlee',
		type: 'town',
		lat: 54.7603,
		lon: -1.3365,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 20300
	},
	{
		slug: 'petersfield',
		name: 'Petersfield',
		type: 'town',
		lat: 51.005,
		lon: -0.9337,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 14974
	},
	{
		slug: 'pinner',
		name: 'Pinner',
		type: 'town',
		lat: 51.5938,
		lon: -0.3822,
		parentRegion: 'london',
		county: 'Greater London',
		population: 19158
	},
	{
		slug: 'pinxton',
		name: 'Pinxton',
		type: 'town',
		lat: 53.0906,
		lon: -1.3177,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 14357
	},
	{
		slug: 'pitsea',
		name: 'Pitsea',
		type: 'town',
		lat: 51.5639,
		lon: 0.5086,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 25000
	},
	{
		slug: 'plumstead',
		name: 'Plumstead',
		type: 'town',
		lat: 51.4833,
		lon: 0.0833,
		parentRegion: 'london',
		county: 'Greater London',
		population: 16736
	},
	{
		slug: 'plymstock',
		name: 'Plymstock',
		type: 'town',
		lat: 50.36,
		lon: -4.0905,
		parentRegion: 'south-west',
		county: 'Plymouth',
		population: 24103
	},
	{
		slug: 'ponders-end',
		name: 'Ponders End',
		type: 'town',
		lat: 51.6445,
		lon: -0.0465,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15664
	},
	{
		slug: 'pontefract',
		name: 'Pontefract',
		type: 'town',
		lat: 53.6911,
		lon: -1.3127,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Wakefield',
		population: 44710
	},
	{
		slug: 'ponteland',
		name: 'Ponteland',
		type: 'town',
		lat: 55.0502,
		lon: -1.7453,
		parentRegion: 'north-east',
		county: 'Northumberland',
		population: 10135
	},
	{
		slug: 'pontypool',
		name: 'Pontypool',
		type: 'town',
		lat: 51.7011,
		lon: -3.0444,
		parentRegion: 'wales',
		county: 'Torfaen County Borough',
		population: 35686
	},
	{
		slug: 'pontypridd',
		name: 'Pontypridd',
		type: 'town',
		lat: 51.6021,
		lon: -3.3421,
		parentRegion: 'wales',
		county: 'Rhondda Cynon Taf',
		population: 31206
	},
	{
		slug: 'poole',
		name: 'Poole',
		type: 'town',
		lat: 50.7143,
		lon: -1.9846,
		parentRegion: 'south-west',
		county: 'Bournemouth, Christchurch and Poole Council',
		population: 151500
	},
	{
		slug: 'port-glasgow',
		name: 'Port Glasgow',
		type: 'town',
		lat: 55.9346,
		lon: -4.6895,
		parentRegion: 'strathclyde',
		county: 'Inverclyde',
		population: 14200
	},
	{
		slug: 'portadown',
		name: 'Portadown',
		type: 'town',
		lat: 54.423,
		lon: -6.4443,
		parentRegion: 'northern-ireland',
		county: 'Armagh City Banbridge and Craigavon',
		population: 32926
	},
	{
		slug: 'porthcawl',
		name: 'Porthcawl',
		type: 'town',
		lat: 51.479,
		lon: -3.7036,
		parentRegion: 'wales',
		county: 'Bridgend county borough',
		population: 15672
	},
	{
		slug: 'portishead',
		name: 'Portishead',
		type: 'town',
		lat: 51.482,
		lon: -2.7697,
		parentRegion: 'south-west',
		county: 'North Somerset',
		population: 26355
	},
	{
		slug: 'portland',
		name: 'Portland',
		type: 'town',
		lat: 50.5675,
		lon: -2.4447,
		parentRegion: 'south-west',
		county: 'Dorset',
		population: 12710
	},
	{
		slug: 'portslade',
		name: 'Portslade',
		type: 'town',
		lat: 50.8429,
		lon: -0.2161,
		parentRegion: 'south-east',
		county: 'Brighton and Hove',
		population: 20000
	},
	{
		slug: 'portswood',
		name: 'Portswood',
		type: 'town',
		lat: 50.9272,
		lon: -1.3903,
		parentRegion: 'south-east',
		county: 'Southampton',
		population: 14831
	},
	{
		slug: 'potters-bar',
		name: 'Potters Bar',
		type: 'town',
		lat: 51.6935,
		lon: -0.1784,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 22639
	},
	{
		slug: 'poulton-le-fylde',
		name: 'Poulton-le-Fylde',
		type: 'town',
		lat: 53.8333,
		lon: -2.9833,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 19914
	},
	{
		slug: 'poynton',
		name: 'Poynton',
		type: 'town',
		lat: 53.35,
		lon: -2.1167,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 14351
	},
	{
		slug: 'prenton',
		name: 'Prenton',
		type: 'town',
		lat: 53.3676,
		lon: -3.0548,
		parentRegion: 'north-west',
		county: 'Metropolitan Borough of Wirral',
		population: 14429
	},
	{
		slug: 'prescot',
		name: 'Prescot',
		type: 'town',
		lat: 53.4295,
		lon: -2.8003,
		parentRegion: 'north-west',
		county: 'Knowsley',
		population: 40889
	},
	{
		slug: 'prestatyn',
		name: 'Prestatyn',
		type: 'town',
		lat: 53.3375,
		lon: -3.4078,
		parentRegion: 'wales',
		county: 'Denbighshire',
		population: 19085
	},
	{
		slug: 'preston',
		name: 'Preston',
		type: 'town',
		lat: 53.7628,
		lon: -2.7045,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 313332
	},
	{
		slug: 'prestwich',
		name: 'Prestwich',
		type: 'town',
		lat: 53.5333,
		lon: -2.2833,
		parentRegion: 'north-west',
		county: 'Borough of Bury',
		population: 31500
	},
	{
		slug: 'prestwick',
		name: 'Prestwick',
		type: 'town',
		lat: 55.4833,
		lon: -4.6167,
		parentRegion: 'strathclyde',
		county: 'South Ayrshire',
		population: 14880
	},
	{
		slug: 'primrose-place',
		name: 'Primrose Place',
		type: 'town',
		lat: 52.5606,
		lon: -0.1089,
		parentRegion: 'east-of-england',
		county: 'Cambridgeshire',
		population: 17161
	},
	{
		slug: 'prudhoe',
		name: 'Prudhoe',
		type: 'town',
		lat: 54.9615,
		lon: -1.8517,
		parentRegion: 'north-east',
		county: 'Northumberland',
		population: 12075
	},
	{
		slug: 'pudsey',
		name: 'Pudsey',
		type: 'town',
		lat: 53.7954,
		lon: -1.6613,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 25393
	},
	{
		slug: 'purley',
		name: 'Purley',
		type: 'town',
		lat: 51.3368,
		lon: -0.112,
		parentRegion: 'london',
		county: 'Greater London',
		population: 72000
	},
	{
		slug: 'pyle',
		name: 'Pyle',
		type: 'town',
		lat: 51.5167,
		lon: -3.7,
		parentRegion: 'wales',
		county: 'Bridgend county borough',
		population: 13701
	},
	{
		slug: 'radcliffe',
		name: 'Radcliffe',
		type: 'town',
		lat: 53.5618,
		lon: -2.3245,
		parentRegion: 'north-west',
		county: 'Borough of Bury',
		population: 29950
	},
	{
		slug: 'rainham',
		name: 'Rainham',
		type: 'town',
		lat: 51.5169,
		lon: 0.1943,
		parentRegion: 'london',
		county: 'Greater London',
		population: 12482
	},
	{
		slug: 'rainhill',
		name: 'Rainhill',
		type: 'town',
		lat: 53.4157,
		lon: -2.7661,
		parentRegion: 'north-west',
		county: 'St. Helens',
		population: 10853
	},
	{
		slug: 'ramsbottom',
		name: 'Ramsbottom',
		type: 'town',
		lat: 53.6479,
		lon: -2.3168,
		parentRegion: 'north-west',
		county: 'Borough of Bury',
		population: 17067
	},
	{
		slug: 'ramsgate',
		name: 'Ramsgate',
		type: 'town',
		lat: 51.3357,
		lon: 1.418,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 42027
	},
	{
		slug: 'rastrick',
		name: 'Rastrick',
		type: 'town',
		lat: 53.6921,
		lon: -1.7883,
		parentRegion: 'yorkshire-and-humber',
		county: 'Calderdale',
		population: 11351
	},
	{
		slug: 'rawmarsh',
		name: 'Rawmarsh',
		type: 'town',
		lat: 53.4606,
		lon: -1.3444,
		parentRegion: 'yorkshire-and-humber',
		county: 'Rotherham',
		population: 18498
	},
	{
		slug: 'rawtenstall',
		name: 'Rawtenstall',
		type: 'town',
		lat: 53.7008,
		lon: -2.2844,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 23000
	},
	{
		slug: 'rayleigh',
		name: 'Rayleigh',
		type: 'town',
		lat: 51.5857,
		lon: 0.6046,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 32380
	},
	{
		slug: 'redcar',
		name: 'Redcar',
		type: 'town',
		lat: 54.6166,
		lon: -1.06,
		parentRegion: 'north-east',
		county: 'Redcar and Cleveland',
		population: 37073
	},
	{
		slug: 'redditch',
		name: 'Redditch',
		type: 'town',
		lat: 52.3065,
		lon: -1.9457,
		parentRegion: 'west-midlands',
		county: 'Worcestershire',
		population: 87847
	},
	{
		slug: 'redhill',
		name: 'Redhill',
		type: 'town',
		lat: 51.2405,
		lon: -0.1704,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 51559
	},
	{
		slug: 'redruth',
		name: 'Redruth',
		type: 'town',
		lat: 50.2332,
		lon: -5.2243,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 42690
	},
	{
		slug: 'reigate',
		name: 'Reigate',
		type: 'town',
		lat: 51.2374,
		lon: -0.2058,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 21820
	},
	{
		slug: 'renfrew',
		name: 'Renfrew',
		type: 'town',
		lat: 55.872,
		lon: -4.3925,
		parentRegion: 'strathclyde',
		county: 'Renfrewshire',
		population: 24270
	},
	{
		slug: 'retford',
		name: 'Retford',
		type: 'town',
		lat: 53.3221,
		lon: -0.9432,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 22023
	},
	{
		slug: 'rhondda',
		name: 'Rhondda',
		type: 'town',
		lat: 51.659,
		lon: -3.4489,
		parentRegion: 'wales',
		county: 'Rhondda Cynon Taf',
		population: 69506
	},
	{
		slug: 'rhosllannerchrugog',
		name: 'Rhosllannerchrugog',
		type: 'town',
		lat: 53.0097,
		lon: -3.0581,
		parentRegion: 'wales',
		county: 'Wrexham',
		population: 25362
	},
	{
		slug: 'rhyl',
		name: 'Rhyl',
		type: 'town',
		lat: 53.3193,
		lon: -3.4923,
		parentRegion: 'wales',
		county: 'Denbighshire',
		population: 25874
	},
	{
		slug: 'richmond',
		name: 'Richmond',
		type: 'town',
		lat: 51.4617,
		lon: -0.3063,
		parentRegion: 'london',
		county: 'Greater London',
		population: 21469
	},
	{
		slug: 'rickmansworth',
		name: 'Rickmansworth',
		type: 'town',
		lat: 51.639,
		lon: -0.4772,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 25413
	},
	{
		slug: 'ringwood',
		name: 'Ringwood',
		type: 'town',
		lat: 50.8454,
		lon: -1.7887,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 14084
	},
	{
		slug: 'ripley',
		name: 'Ripley',
		type: 'town',
		lat: 53.0333,
		lon: -1.4,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 21097
	},
	{
		slug: 'ripon',
		name: 'Ripon',
		type: 'town',
		lat: 54.1358,
		lon: -1.5283,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 16363
	},
	{
		slug: 'risca',
		name: 'Risca',
		type: 'town',
		lat: 51.608,
		lon: -3.1008,
		parentRegion: 'wales',
		county: 'Caerphilly County Borough',
		population: 20443
	},
	{
		slug: 'rochdale',
		name: 'Rochdale',
		type: 'town',
		lat: 53.6177,
		lon: -2.1552,
		parentRegion: 'north-west',
		county: 'Borough of Rochdale',
		population: 97550
	},
	{
		slug: 'rochester',
		name: 'Rochester',
		type: 'town',
		lat: 51.3876,
		lon: 0.5055,
		parentRegion: 'south-east',
		county: 'Medway',
		population: 28671
	},
	{
		slug: 'rochford',
		name: 'Rochford',
		type: 'town',
		lat: 51.582,
		lon: 0.7067,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 16739
	},
	{
		slug: 'romford',
		name: 'Romford',
		type: 'town',
		lat: 51.5752,
		lon: 0.1858,
		parentRegion: 'london',
		county: 'Greater London',
		population: 95000
	},
	{
		slug: 'romsey',
		name: 'Romsey',
		type: 'town',
		lat: 50.9891,
		lon: -1.4999,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 17161
	},
	{
		slug: 'ross-on-wye',
		name: 'Ross on Wye',
		type: 'town',
		lat: 51.9167,
		lon: -2.5667,
		parentRegion: 'west-midlands',
		county: 'Herefordshire',
		population: 10582
	},
	{
		slug: 'rosyth',
		name: 'Rosyth',
		type: 'town',
		lat: 56.0369,
		lon: -3.438,
		parentRegion: 'tayside-and-fife',
		county: 'Fife',
		population: 13570
	},
	{
		slug: 'rotherham',
		name: 'Rotherham',
		type: 'town',
		lat: 53.4301,
		lon: -1.3568,
		parentRegion: 'yorkshire-and-humber',
		county: 'Rotherham',
		population: 117618
	},
	{
		slug: 'rottingdean',
		name: 'Rottingdean',
		type: 'town',
		lat: 50.8098,
		lon: -0.0594,
		parentRegion: 'south-east',
		county: 'Brighton and Hove',
		population: 21756
	},
	{
		slug: 'royal-leamington-spa',
		name: 'Royal Leamington Spa',
		type: 'town',
		lat: 52.2852,
		lon: -1.52,
		parentRegion: 'west-midlands',
		county: 'Warwickshire',
		population: 50923
	},
	{
		slug: 'royal-tunbridge-wells',
		name: 'Royal Tunbridge Wells',
		type: 'town',
		lat: 51.1332,
		lon: 0.2626,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 68910
	},
	{
		slug: 'royal-wootton-bassett',
		name: 'Royal Wootton Bassett',
		type: 'town',
		lat: 51.5419,
		lon: -1.9045,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 11265
	},
	{
		slug: 'royston',
		name: 'Royston',
		type: 'town',
		lat: 52.0483,
		lon: -0.0244,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 15781
	},
	{
		slug: 'royton',
		name: 'Royton',
		type: 'town',
		lat: 53.5651,
		lon: -2.1227,
		parentRegion: 'north-west',
		county: 'Borough of Oldham',
		population: 22848
	},
	{
		slug: 'rugby',
		name: 'Rugby',
		type: 'town',
		lat: 52.3709,
		lon: -1.2642,
		parentRegion: 'west-midlands',
		county: 'Warwickshire',
		population: 78117
	},
	{
		slug: 'rugeley',
		name: 'Rugeley',
		type: 'town',
		lat: 52.7593,
		lon: -1.9369,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 26156
	},
	{
		slug: 'ruislip',
		name: 'Ruislip',
		type: 'town',
		lat: 51.5734,
		lon: -0.4234,
		parentRegion: 'london',
		county: 'Greater London',
		population: 31000
	},
	{
		slug: 'runcorn',
		name: 'Runcorn',
		type: 'town',
		lat: 53.3417,
		lon: -2.7312,
		parentRegion: 'north-west',
		county: 'Borough of Halton',
		population: 61145
	},
	{
		slug: 'rushden',
		name: 'Rushden',
		type: 'town',
		lat: 52.2893,
		lon: -0.6018,
		parentRegion: 'east-midlands',
		county: 'North Northamptonshire',
		population: 37584
	},
	{
		slug: 'rustington',
		name: 'Rustington',
		type: 'town',
		lat: 50.8103,
		lon: -0.5067,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 13210
	},
	{
		slug: 'rutherglen',
		name: 'Rutherglen',
		type: 'town',
		lat: 55.8289,
		lon: -4.2138,
		parentRegion: 'strathclyde',
		county: 'South Lanarkshire',
		population: 30950
	},
	{
		slug: 'ryde',
		name: 'Ryde',
		type: 'town',
		lat: 50.73,
		lon: -1.1621,
		parentRegion: 'south-east',
		county: 'Isle of Wight',
		population: 24096
	},
	{
		slug: 'ryhope',
		name: 'Ryhope',
		type: 'town',
		lat: 54.8714,
		lon: -1.37,
		parentRegion: 'north-east',
		county: 'Sunderland',
		population: 14000
	},
	{
		slug: 'ryton',
		name: 'Ryton',
		type: 'town',
		lat: 52.6167,
		lon: -2.35,
		parentRegion: 'west-midlands',
		county: 'Shropshire',
		population: 16093
	},
	{
		slug: 'saddleworth',
		name: 'Saddleworth',
		type: 'town',
		lat: 53.5485,
		lon: -2.0046,
		parentRegion: 'north-west',
		county: 'Borough of Oldham',
		population: 25441
	},
	{
		slug: 'saffron-walden',
		name: 'Saffron Walden',
		type: 'town',
		lat: 52.0234,
		lon: 0.2423,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 16610
	},
	{
		slug: 'saint-andrews',
		name: 'Saint Andrews',
		type: 'town',
		lat: 56.3387,
		lon: -2.799,
		parentRegion: 'tayside-and-fife',
		county: 'Fife',
		population: 18410
	},
	{
		slug: 'saint-ives',
		name: 'Saint Ives',
		type: 'town',
		lat: 52.3325,
		lon: -0.0766,
		parentRegion: 'east-of-england',
		county: 'Cambridgeshire',
		population: 16815
	},
	{
		slug: 'saint-leonards-on-sea',
		name: 'Saint Leonards-on-Sea',
		type: 'town',
		lat: 50.8556,
		lon: 0.5452,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 10001
	},
	{
		slug: 'saint-neots',
		name: 'Saint Neots',
		type: 'town',
		lat: 52.2167,
		lon: -0.2667,
		parentRegion: 'east-of-england',
		county: 'Cambridgeshire',
		population: 30811
	},
	{
		slug: 'saint-peters',
		name: 'Saint Peters',
		type: 'town',
		lat: 51.3667,
		lon: 1.4167,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 125370
	},
	{
		slug: 'sale',
		name: 'Sale',
		type: 'town',
		lat: 53.4252,
		lon: -2.3244,
		parentRegion: 'north-west',
		county: 'Trafford',
		population: 62550
	},
	{
		slug: 'salisbury',
		name: 'Salisbury',
		type: 'town',
		lat: 51.0693,
		lon: -1.7957,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 44748
	},
	{
		slug: 'saltash',
		name: 'Saltash',
		type: 'town',
		lat: 50.4096,
		lon: -4.2251,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 15566
	},
	{
		slug: 'saltcoats',
		name: 'Saltcoats',
		type: 'town',
		lat: 55.6362,
		lon: -4.7859,
		parentRegion: 'strathclyde',
		county: 'North Ayrshire',
		population: 12250
	},
	{
		slug: 'sandbach',
		name: 'Sandbach',
		type: 'town',
		lat: 53.1452,
		lon: -2.3625,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 17976
	},
	{
		slug: 'sanderstead',
		name: 'Sanderstead',
		type: 'town',
		lat: 51.3359,
		lon: -0.0778,
		parentRegion: 'london',
		county: 'Greater London',
		population: 12777
	},
	{
		slug: 'sandhurst',
		name: 'Sandhurst',
		type: 'town',
		lat: 51.3468,
		lon: -0.7865,
		parentRegion: 'south-east',
		county: 'Bracknell Forest',
		population: 20803
	},
	{
		slug: 'sandown',
		name: 'Sandown',
		type: 'town',
		lat: 50.6516,
		lon: -1.161,
		parentRegion: 'south-east',
		county: 'Isle of Wight',
		population: 20155
	},
	{
		slug: 'sandy',
		name: 'Sandy',
		type: 'town',
		lat: 52.1293,
		lon: -0.2893,
		parentRegion: 'east-of-england',
		county: 'Central Bedfordshire',
		population: 11657
	},
	{
		slug: 'scarborough',
		name: 'Scarborough',
		type: 'town',
		lat: 54.2797,
		lon: -0.4044,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 61749
	},
	{
		slug: 'scunthorpe',
		name: 'Scunthorpe',
		type: 'town',
		lat: 53.5791,
		lon: -0.6544,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Lincolnshire',
		population: 81576
	},
	{
		slug: 'seaford',
		name: 'Seaford',
		type: 'town',
		lat: 50.7714,
		lon: 0.1027,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 22584
	},
	{
		slug: 'seaham',
		name: 'Seaham',
		type: 'town',
		lat: 54.839,
		lon: -1.3458,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 22373
	},
	{
		slug: 'selby',
		name: 'Selby',
		type: 'town',
		lat: 53.7833,
		lon: -1.0667,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 24859
	},
	{
		slug: 'selsey',
		name: 'Selsey',
		type: 'town',
		lat: 50.735,
		lon: -0.7898,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 10550
	},
	{
		slug: 'sevenoaks',
		name: 'Sevenoaks',
		type: 'town',
		lat: 51.2727,
		lon: 0.1888,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 29506
	},
	{
		slug: 'shadwell',
		name: 'Shadwell',
		type: 'town',
		lat: 51.5114,
		lon: -0.0566,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15110
	},
	{
		slug: 'sheerness',
		name: 'Sheerness',
		type: 'town',
		lat: 51.4404,
		lon: 0.7625,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 13249
	},
	{
		slug: 'shepherds-bush',
		name: 'Shepherds Bush',
		type: 'town',
		lat: 51.505,
		lon: -0.2211,
		parentRegion: 'london',
		county: 'Greater London',
		population: 39724
	},
	{
		slug: 'shepperton',
		name: 'Shepperton',
		type: 'town',
		lat: 51.3955,
		lon: -0.4489,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 10106
	},
	{
		slug: 'shepshed',
		name: 'Shepshed',
		type: 'town',
		lat: 52.7657,
		lon: -1.2902,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 13505
	},
	{
		slug: 'shepton-mallet',
		name: 'Shepton Mallet',
		type: 'town',
		lat: 51.1897,
		lon: -2.5472,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 10369
	},
	{
		slug: 'shipley',
		name: 'Shipley',
		type: 'town',
		lat: 53.8333,
		lon: -1.7667,
		parentRegion: 'yorkshire-and-humber',
		county: 'Bradford',
		population: 28544
	},
	{
		slug: 'shirebrook',
		name: 'Shirebrook',
		type: 'town',
		lat: 53.2033,
		lon: -1.2134,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 10885
	},
	{
		slug: 'shirley',
		name: 'Shirley',
		type: 'town',
		lat: 51.3776,
		lon: -0.0496,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14296
	},
	{
		slug: 'shoreham-by-sea',
		name: 'Shoreham-by-Sea',
		type: 'town',
		lat: 50.8341,
		lon: -0.2743,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 19175
	},
	{
		slug: 'shrewsbury',
		name: 'Shrewsbury',
		type: 'town',
		lat: 52.7101,
		lon: -2.7521,
		parentRegion: 'west-midlands',
		county: 'Shropshire',
		population: 76782
	},
	{
		slug: 'sidcup',
		name: 'Sidcup',
		type: 'town',
		lat: 51.4262,
		lon: 0.1036,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10400
	},
	{
		slug: 'sidmouth',
		name: 'Sidmouth',
		type: 'town',
		lat: 50.6909,
		lon: -3.2397,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 12569
	},
	{
		slug: 'sinfin',
		name: 'Sinfin',
		type: 'town',
		lat: 52.8816,
		lon: -1.4868,
		parentRegion: 'east-midlands',
		county: 'Derby',
		population: 15128
	},
	{
		slug: 'sittingbourne',
		name: 'Sittingbourne',
		type: 'town',
		lat: 51.3413,
		lon: 0.7328,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 54392
	},
	{
		slug: 'skegness',
		name: 'Skegness',
		type: 'town',
		lat: 53.1436,
		lon: 0.3363,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 24876
	},
	{
		slug: 'skelmersdale',
		name: 'Skelmersdale',
		type: 'town',
		lat: 53.5502,
		lon: -2.7735,
		parentRegion: 'north-west',
		county: 'Lancashire',
		population: 38813
	},
	{
		slug: 'skipton',
		name: 'Skipton',
		type: 'town',
		lat: 53.9614,
		lon: -2.0168,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 14623
	},
	{
		slug: 'sleaford',
		name: 'Sleaford',
		type: 'town',
		lat: 52.9983,
		lon: -0.4094,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 17359
	},
	{
		slug: 'smethwick',
		name: 'Smethwick',
		type: 'town',
		lat: 52.4927,
		lon: -1.9674,
		parentRegion: 'west-midlands',
		county: 'Sandwell',
		population: 53653
	},
	{
		slug: 'snaresbrook',
		name: 'Snaresbrook',
		type: 'town',
		lat: 51.5843,
		lon: 0.0192,
		parentRegion: 'london',
		county: 'Greater London',
		population: 11868
	},
	{
		slug: 'snodland',
		name: 'Snodland',
		type: 'town',
		lat: 51.3297,
		lon: 0.443,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 10211
	},
	{
		slug: 'solihull',
		name: 'Solihull',
		type: 'town',
		lat: 52.4143,
		lon: -1.7809,
		parentRegion: 'west-midlands',
		county: 'Solihull',
		population: 126577
	},
	{
		slug: 'south-benfleet',
		name: 'South Benfleet',
		type: 'town',
		lat: 51.553,
		lon: 0.5596,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 48824
	},
	{
		slug: 'south-elmsall',
		name: 'South Elmsall',
		type: 'town',
		lat: 53.5971,
		lon: -1.2803,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Wakefield',
		population: 18835
	},
	{
		slug: 'south-hayling',
		name: 'South Hayling',
		type: 'town',
		lat: 50.7877,
		lon: -0.977,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 15485
	},
	{
		slug: 'south-ockendon',
		name: 'South Ockendon',
		type: 'town',
		lat: 51.508,
		lon: 0.2833,
		parentRegion: 'east-of-england',
		county: 'Borough of Thurrock',
		population: 22440
	},
	{
		slug: 'south-shields',
		name: 'South Shields',
		type: 'town',
		lat: 54.9986,
		lon: -1.4323,
		parentRegion: 'north-east',
		county: 'South Tyneside',
		population: 83655
	},
	{
		slug: 'southall',
		name: 'Southall',
		type: 'town',
		lat: 51.509,
		lon: -0.3713,
		parentRegion: 'london',
		county: 'Greater London',
		population: 78253
	},
	{
		slug: 'southgate',
		name: 'Southgate',
		type: 'town',
		lat: 51.6167,
		lon: -0.1,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14454
	},
	{
		slug: 'southport',
		name: 'Southport',
		type: 'town',
		lat: 53.6458,
		lon: -3.0101,
		parentRegion: 'north-west',
		county: 'Sefton',
		population: 91703
	},
	{
		slug: 'spalding',
		name: 'Spalding',
		type: 'town',
		lat: 52.7871,
		lon: -0.1514,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 30556
	},
	{
		slug: 'speke',
		name: 'Speke',
		type: 'town',
		lat: 53.3407,
		lon: -2.841,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 21403
	},
	{
		slug: 'spennymoor',
		name: 'Spennymoor',
		type: 'town',
		lat: 54.6988,
		lon: -1.6023,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 17766
	},
	{
		slug: 'st-albans',
		name: 'St Albans',
		type: 'town',
		lat: 51.75,
		lon: -0.3333,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 84561
	},
	{
		slug: 'st-austell',
		name: 'St Austell',
		type: 'town',
		lat: 50.3425,
		lon: -4.7744,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 24360
	},
	{
		slug: 'st-helens',
		name: 'St Helens',
		type: 'town',
		lat: 53.45,
		lon: -2.7333,
		parentRegion: 'north-west',
		county: 'St. Helens',
		population: 183200
	},
	{
		slug: 'stafford',
		name: 'Stafford',
		type: 'town',
		lat: 52.8052,
		lon: -2.1164,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 70145
	},
	{
		slug: 'staines',
		name: 'Staines',
		type: 'town',
		lat: 51.4309,
		lon: -0.5061,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 51040
	},
	{
		slug: 'stalybridge',
		name: 'Stalybridge',
		type: 'town',
		lat: 53.4841,
		lon: -2.0591,
		parentRegion: 'north-west',
		county: 'Borough of Tameside',
		population: 26830
	},
	{
		slug: 'stamford',
		name: 'Stamford',
		type: 'town',
		lat: 52.65,
		lon: -0.4833,
		parentRegion: 'east-midlands',
		county: 'Lincolnshire',
		population: 20592
	},
	{
		slug: 'stanford-le-hope',
		name: 'Stanford-le-Hope',
		type: 'town',
		lat: 51.5227,
		lon: 0.4342,
		parentRegion: 'east-of-england',
		county: 'Borough of Thurrock',
		population: 29525
	},
	{
		slug: 'stanley',
		name: 'Stanley',
		type: 'town',
		lat: 54.868,
		lon: -1.6985,
		parentRegion: 'north-east',
		county: 'County Durham',
		population: 31300
	},
	{
		slug: 'stanwell',
		name: 'Stanwell',
		type: 'town',
		lat: 51.4541,
		lon: -0.4781,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 11279
	},
	{
		slug: 'staveley',
		name: 'Staveley',
		type: 'town',
		lat: 53.2667,
		lon: -1.35,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 25719
	},
	{
		slug: 'stepney',
		name: 'Stepney',
		type: 'town',
		lat: 51.5175,
		lon: -0.0429,
		parentRegion: 'london',
		county: 'Greater London',
		population: 16238
	},
	{
		slug: 'stevenage',
		name: 'Stevenage',
		type: 'town',
		lat: 51.9022,
		lon: -0.2026,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 91774
	},
	{
		slug: 'stirling',
		name: 'Stirling',
		type: 'town',
		lat: 56.119,
		lon: -3.9368,
		parentRegion: 'tayside-and-fife',
		county: 'Stirling',
		population: 37910
	},
	{
		slug: 'stockport',
		name: 'Stockport',
		type: 'town',
		lat: 53.4098,
		lon: -2.1576,
		parentRegion: 'north-west',
		county: 'Borough of Stockport',
		population: 139052
	},
	{
		slug: 'stocksbridge',
		name: 'Stocksbridge',
		type: 'town',
		lat: 53.4825,
		lon: -1.5937,
		parentRegion: 'yorkshire-and-humber',
		county: 'Sheffield',
		population: 13069
	},
	{
		slug: 'stockton-on-tees',
		name: 'Stockton-on-Tees',
		type: 'town',
		lat: 54.5685,
		lon: -1.3187,
		parentRegion: 'north-east',
		county: 'Stockton-on-Tees',
		population: 79957
	},
	{
		slug: 'stoke-gifford',
		name: 'Stoke Gifford',
		type: 'town',
		lat: 51.5169,
		lon: -2.5405,
		parentRegion: 'south-west',
		county: 'South Gloucestershire',
		population: 13560
	},
	{
		slug: 'stone',
		name: 'Stone',
		type: 'town',
		lat: 52.9059,
		lon: -2.1541,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 14258
	},
	{
		slug: 'stonehaven',
		name: 'Stonehaven',
		type: 'town',
		lat: 56.9637,
		lon: -2.2118,
		parentRegion: 'grampian',
		county: 'Aberdeenshire',
		population: 11150
	},
	{
		slug: 'stourbridge',
		name: 'Stourbridge',
		type: 'town',
		lat: 52.4561,
		lon: -2.1432,
		parentRegion: 'west-midlands',
		county: 'Dudley',
		population: 56950
	},
	{
		slug: 'stourport-on-severn',
		name: 'Stourport-on-Severn',
		type: 'town',
		lat: 52.3398,
		lon: -2.2803,
		parentRegion: 'west-midlands',
		county: 'Worcestershire',
		population: 20586
	},
	{
		slug: 'stowmarket',
		name: 'Stowmarket',
		type: 'town',
		lat: 52.1889,
		lon: 0.9977,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 21028
	},
	{
		slug: 'strabane',
		name: 'Strabane',
		type: 'town',
		lat: 54.8237,
		lon: -7.4692,
		parentRegion: 'northern-ireland',
		county: 'Derry City and Strabane',
		population: 14198
	},
	{
		slug: 'stranraer',
		name: 'Stranraer',
		type: 'town',
		lat: 54.9023,
		lon: -5.0273,
		parentRegion: 'dumfries-and-borders',
		county: 'Dumfries and Galloway',
		population: 10510
	},
	{
		slug: 'stratford',
		name: 'Stratford',
		type: 'town',
		lat: 51.5333,
		lon: 0,
		parentRegion: 'london',
		county: 'Greater London',
		population: 36666
	},
	{
		slug: 'stratford-upon-avon',
		name: 'Stratford-upon-Avon',
		type: 'town',
		lat: 52.1917,
		lon: -1.7073,
		parentRegion: 'west-midlands',
		county: 'Warwickshire',
		population: 30495
	},
	{
		slug: 'streatham',
		name: 'Streatham',
		type: 'town',
		lat: 51.429,
		lon: -0.1318,
		parentRegion: 'london',
		county: 'Greater London',
		population: 58055
	},
	{
		slug: 'street',
		name: 'Street',
		type: 'town',
		lat: 51.1247,
		lon: -2.74,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 12911
	},
	{
		slug: 'streetly',
		name: 'Streetly',
		type: 'town',
		lat: 52.5833,
		lon: -1.8833,
		parentRegion: 'west-midlands',
		county: 'Walsall',
		population: 13251
	},
	{
		slug: 'stretford',
		name: 'Stretford',
		type: 'town',
		lat: 53.45,
		lon: -2.3167,
		parentRegion: 'north-west',
		county: 'Trafford',
		population: 41953
	},
	{
		slug: 'stroud',
		name: 'Stroud',
		type: 'town',
		lat: 51.75,
		lon: -2.2,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 60155
	},
	{
		slug: 'sudbury',
		name: 'Sudbury',
		type: 'town',
		lat: 52.0389,
		lon: 0.7312,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 23912
	},
	{
		slug: 'sudbury-greater-london',
		name: 'Sudbury',
		type: 'town',
		lat: 51.5553,
		lon: -0.3236,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14950
	},
	{
		slug: 'sunbury-on-thames',
		name: 'Sunbury-on-Thames',
		type: 'town',
		lat: 51.4042,
		lon: -0.4182,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 27784
	},
	{
		slug: 'sunninghill',
		name: 'Sunninghill',
		type: 'town',
		lat: 51.4014,
		lon: -0.6556,
		parentRegion: 'south-east',
		county: 'Royal Borough of Windsor and Maidenhead',
		population: 11603
	},
	{
		slug: 'surbiton',
		name: 'Surbiton',
		type: 'town',
		lat: 51.3915,
		lon: -0.2983,
		parentRegion: 'london',
		county: 'Greater London',
		population: 38158
	},
	{
		slug: 'sutton',
		name: 'Sutton',
		type: 'town',
		lat: 51.35,
		lon: -0.2,
		parentRegion: 'london',
		county: 'Greater London',
		population: 187600
	},
	{
		slug: 'sutton-coldfield',
		name: 'Sutton Coldfield',
		type: 'town',
		lat: 52.5667,
		lon: -1.8167,
		parentRegion: 'west-midlands',
		county: 'City and Borough of Birmingham',
		population: 109899
	},
	{
		slug: 'sutton-in-ashfield',
		name: 'Sutton in Ashfield',
		type: 'town',
		lat: 53.1254,
		lon: -1.2613,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 36404
	},
	{
		slug: 'swadlincote',
		name: 'Swadlincote',
		type: 'town',
		lat: 52.774,
		lon: -1.5574,
		parentRegion: 'east-midlands',
		county: 'Derbyshire',
		population: 34576
	},
	{
		slug: 'swanage',
		name: 'Swanage',
		type: 'town',
		lat: 50.6083,
		lon: -1.9566,
		parentRegion: 'south-west',
		county: 'Dorset',
		population: 10454
	},
	{
		slug: 'swanley',
		name: 'Swanley',
		type: 'town',
		lat: 51.3972,
		lon: 0.1732,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 21839
	},
	{
		slug: 'swanscombe',
		name: 'Swanscombe',
		type: 'town',
		lat: 51.4471,
		lon: 0.3103,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 15801
	},
	{
		slug: 'swinton',
		name: 'Swinton',
		type: 'town',
		lat: 53.5,
		lon: -2.35,
		parentRegion: 'north-west',
		county: 'City and Borough of Salford',
		population: 22931
	},
	{
		slug: 'syston',
		name: 'Syston',
		type: 'town',
		lat: 52.6833,
		lon: -1.0667,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 11508
	},
	{
		slug: 'tadley',
		name: 'Tadley',
		type: 'town',
		lat: 51.3505,
		lon: -1.1285,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 15836
	},
	{
		slug: 'tamworth',
		name: 'Tamworth',
		type: 'town',
		lat: 52.634,
		lon: -1.6959,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 81964
	},
	{
		slug: 'taunton',
		name: 'Taunton',
		type: 'town',
		lat: 51.0149,
		lon: -3.1029,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 64621
	},
	{
		slug: 'tavistock',
		name: 'Tavistock',
		type: 'town',
		lat: 50.5494,
		lon: -4.1442,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 12675
	},
	{
		slug: 'teignmouth',
		name: 'Teignmouth',
		type: 'town',
		lat: 50.5458,
		lon: -3.4967,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 14932
	},
	{
		slug: 'tewkesbury',
		name: 'Tewkesbury',
		type: 'town',
		lat: 51.9924,
		lon: -2.1601,
		parentRegion: 'south-west',
		county: 'Gloucestershire',
		population: 20360
	},
	{
		slug: 'thame',
		name: 'Thame',
		type: 'town',
		lat: 51.7484,
		lon: -0.9762,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 11329
	},
	{
		slug: 'thamesmead',
		name: 'Thamesmead',
		type: 'town',
		lat: 51.5037,
		lon: 0.1198,
		parentRegion: 'london',
		county: 'Greater London',
		population: 31824
	},
	{
		slug: 'thatcham',
		name: 'Thatcham',
		type: 'town',
		lat: 51.4037,
		lon: -1.2605,
		parentRegion: 'south-east',
		county: 'West Berkshire',
		population: 25464
	},
	{
		slug: 'thetford',
		name: 'Thetford',
		type: 'town',
		lat: 52.4167,
		lon: 0.75,
		parentRegion: 'east-of-england',
		county: 'Norfolk',
		population: 24833
	},
	{
		slug: 'thornaby-on-tees',
		name: 'Thornaby-on-Tees',
		type: 'town',
		lat: 54.5333,
		lon: -1.3,
		parentRegion: 'north-east',
		county: 'Stockton-on-Tees',
		population: 22356
	},
	{
		slug: 'thornbury',
		name: 'Thornbury',
		type: 'town',
		lat: 51.6089,
		lon: -2.5203,
		parentRegion: 'south-west',
		county: 'South Gloucestershire',
		population: 11687
	},
	{
		slug: 'thorne',
		name: 'Thorne',
		type: 'town',
		lat: 53.6112,
		lon: -0.9631,
		parentRegion: 'yorkshire-and-humber',
		county: 'Doncaster',
		population: 17295
	},
	{
		slug: 'thornton-heath',
		name: 'Thornton Heath',
		type: 'town',
		lat: 51.3988,
		lon: -0.0987,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14669
	},
	{
		slug: 'tidworth',
		name: 'Tidworth',
		type: 'town',
		lat: 51.2314,
		lon: -1.6632,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 12089
	},
	{
		slug: 'tilbury',
		name: 'Tilbury',
		type: 'town',
		lat: 51.4625,
		lon: 0.3586,
		parentRegion: 'east-of-england',
		county: 'Borough of Thurrock',
		population: 14185
	},
	{
		slug: 'timperley',
		name: 'Timperley',
		type: 'town',
		lat: 53.4,
		lon: -2.3333,
		parentRegion: 'north-west',
		county: 'Trafford',
		population: 11323
	},
	{
		slug: 'tipton',
		name: 'Tipton',
		type: 'town',
		lat: 52.5296,
		lon: -2.0677,
		parentRegion: 'west-midlands',
		county: 'Sandwell',
		population: 47000
	},
	{
		slug: 'tiverton',
		name: 'Tiverton',
		type: 'town',
		lat: 50.9024,
		lon: -3.4923,
		parentRegion: 'south-west',
		county: 'Devon',
		population: 22291
	},
	{
		slug: 'todmorden',
		name: 'Todmorden',
		type: 'town',
		lat: 53.7143,
		lon: -2.097,
		parentRegion: 'yorkshire-and-humber',
		county: 'Calderdale',
		population: 11690
	},
	{
		slug: 'tonbridge',
		name: 'Tonbridge',
		type: 'town',
		lat: 51.1953,
		lon: 0.2736,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 36115
	},
	{
		slug: 'tonypandy',
		name: 'Tonypandy',
		type: 'town',
		lat: 51.622,
		lon: -3.4554,
		parentRegion: 'wales',
		county: 'Rhondda Cynon Taf',
		population: 62545
	},
	{
		slug: 'torquay',
		name: 'Torquay',
		type: 'town',
		lat: 50.462,
		lon: -3.5252,
		parentRegion: 'south-west',
		county: 'Borough of Torbay',
		population: 65388
	},
	{
		slug: 'tottenham',
		name: 'Tottenham',
		type: 'town',
		lat: 51.6037,
		lon: -0.0679,
		parentRegion: 'london',
		county: 'Greater London',
		population: 130000
	},
	{
		slug: 'totteridge',
		name: 'Totteridge',
		type: 'town',
		lat: 51.6333,
		lon: -0.2,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15159
	},
	{
		slug: 'totton',
		name: 'Totton',
		type: 'town',
		lat: 50.9188,
		lon: -1.4904,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 34169
	},
	{
		slug: 'tranent',
		name: 'Tranent',
		type: 'town',
		lat: 55.9444,
		lon: -2.9541,
		parentRegion: 'dumfries-and-borders',
		county: 'East Lothian',
		population: 11910
	},
	{
		slug: 'tredegar',
		name: 'Tredegar',
		type: 'town',
		lat: 51.7725,
		lon: -3.2468,
		parentRegion: 'wales',
		county: 'Blaenau Gwent',
		population: 14855
	},
	{
		slug: 'treharris',
		name: 'Treharris',
		type: 'town',
		lat: 51.6646,
		lon: -3.3072,
		parentRegion: 'wales',
		county: 'Merthyr Tydfil County Borough',
		population: 12352
	},
	{
		slug: 'tring',
		name: 'Tring',
		type: 'town',
		lat: 51.7947,
		lon: -0.6582,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 11929
	},
	{
		slug: 'troon',
		name: 'Troon',
		type: 'town',
		lat: 55.5436,
		lon: -4.6634,
		parentRegion: 'strathclyde',
		county: 'South Ayrshire',
		population: 14950
	},
	{
		slug: 'trowbridge',
		name: 'Trowbridge',
		type: 'town',
		lat: 51.3189,
		lon: -2.2086,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 40952
	},
	{
		slug: 'truro',
		name: 'Truro',
		type: 'town',
		lat: 50.2653,
		lon: -5.0544,
		parentRegion: 'south-west',
		county: 'Cornwall',
		population: 23041
	},
	{
		slug: 'tyldesley',
		name: 'Tyldesley',
		type: 'town',
		lat: 53.5139,
		lon: -2.4675,
		parentRegion: 'north-west',
		county: 'Borough of Wigan',
		population: 35932
	},
	{
		slug: 'tynemouth',
		name: 'Tynemouth',
		type: 'town',
		lat: 55.0179,
		lon: -1.4256,
		parentRegion: 'north-east',
		county: 'North Tyneside',
		population: 60605
	},
	{
		slug: 'uckfield',
		name: 'Uckfield',
		type: 'town',
		lat: 50.9695,
		lon: 0.0959,
		parentRegion: 'south-east',
		county: 'East Sussex',
		population: 18452
	},
	{
		slug: 'ulverston',
		name: 'Ulverston',
		type: 'town',
		lat: 54.1959,
		lon: -3.0963,
		parentRegion: 'north-west',
		county: 'Cumbria',
		population: 11356
	},
	{
		slug: 'upminster',
		name: 'Upminster',
		type: 'town',
		lat: 51.5559,
		lon: 0.2556,
		parentRegion: 'london',
		county: 'Greater London',
		population: 10000
	},
	{
		slug: 'uppermill',
		name: 'Uppermill',
		type: 'town',
		lat: 53.5486,
		lon: -2.0053,
		parentRegion: 'north-west',
		county: 'Borough of Oldham',
		population: 11191
	},
	{
		slug: 'urmston',
		name: 'Urmston',
		type: 'town',
		lat: 53.4485,
		lon: -2.3542,
		parentRegion: 'north-west',
		county: 'Trafford',
		population: 41731
	},
	{
		slug: 'uttoxeter',
		name: 'Uttoxeter',
		type: 'town',
		lat: 52.8984,
		lon: -1.8649,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 14014
	},
	{
		slug: 'uxbridge',
		name: 'Uxbridge',
		type: 'town',
		lat: 51.5489,
		lon: -0.4821,
		parentRegion: 'london',
		county: 'Greater London',
		population: 70000
	},
	{
		slug: 'vale-of-leven',
		name: 'Vale of Leven',
		type: 'town',
		lat: 55.9713,
		lon: -4.5793,
		parentRegion: 'strathclyde',
		county: 'West Dunbartonshire',
		population: 24640
	},
	{
		slug: 'verwood',
		name: 'Verwood',
		type: 'town',
		lat: 50.8757,
		lon: -1.8702,
		parentRegion: 'south-west',
		county: 'Dorset',
		population: 13360
	},
	{
		slug: 'viewpark',
		name: 'Viewpark',
		type: 'town',
		lat: 55.8274,
		lon: -4.0573,
		parentRegion: 'strathclyde',
		county: 'North Lanarkshire',
		population: 16020
	},
	{
		slug: 'wakefield',
		name: 'Wakefield',
		type: 'town',
		lat: 53.6833,
		lon: -1.4977,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Wakefield',
		population: 109766
	},
	{
		slug: 'walkden',
		name: 'Walkden',
		type: 'town',
		lat: 53.5167,
		lon: -2.4,
		parentRegion: 'north-west',
		county: 'City and Borough of Salford',
		population: 35616
	},
	{
		slug: 'wallasey',
		name: 'Wallasey',
		type: 'town',
		lat: 53.4232,
		lon: -3.065,
		parentRegion: 'north-west',
		county: 'Metropolitan Borough of Wirral',
		population: 58794
	},
	{
		slug: 'wallingford',
		name: 'Wallingford',
		type: 'town',
		lat: 51.5998,
		lon: -1.1248,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 11600
	},
	{
		slug: 'wallington',
		name: 'Wallington',
		type: 'town',
		lat: 51.364,
		lon: -0.1537,
		parentRegion: 'london',
		county: 'Greater London',
		population: 20850
	},
	{
		slug: 'wallsend',
		name: 'Wallsend',
		type: 'town',
		lat: 54.9911,
		lon: -1.534,
		parentRegion: 'north-east',
		county: 'North Tyneside',
		population: 42739
	},
	{
		slug: 'waltham-abbey',
		name: 'Waltham Abbey',
		type: 'town',
		lat: 51.687,
		lon: -0.0042,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 22858
	},
	{
		slug: 'waltham-cross',
		name: 'Waltham Cross',
		type: 'town',
		lat: 51.686,
		lon: -0.0357,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 10000
	},
	{
		slug: 'walthamstow',
		name: 'Walthamstow',
		type: 'town',
		lat: 51.5907,
		lon: -0.0208,
		parentRegion: 'london',
		county: 'Greater London',
		population: 109424
	},
	{
		slug: 'walton-on-thames',
		name: 'Walton-on-Thames',
		type: 'town',
		lat: 51.3868,
		lon: -0.4132,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 22834
	},
	{
		slug: 'walton-on-the-naze',
		name: 'Walton-on-the-Naze',
		type: 'town',
		lat: 51.8482,
		lon: 1.2674,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 17458
	},
	{
		slug: 'wanstead',
		name: 'Wanstead',
		type: 'town',
		lat: 51.5768,
		lon: 0.0246,
		parentRegion: 'london',
		county: 'Greater London',
		population: 11543
	},
	{
		slug: 'wantage',
		name: 'Wantage',
		type: 'town',
		lat: 51.5885,
		lon: -1.4257,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 13106
	},
	{
		slug: 'ware',
		name: 'Ware',
		type: 'town',
		lat: 51.8106,
		lon: -0.0288,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 17576
	},
	{
		slug: 'warminster',
		name: 'Warminster',
		type: 'town',
		lat: 51.2043,
		lon: -2.1787,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 17490
	},
	{
		slug: 'warwick',
		name: 'Warwick',
		type: 'town',
		lat: 52.2833,
		lon: -1.5833,
		parentRegion: 'west-midlands',
		county: 'Warwickshire',
		population: 37267
	},
	{
		slug: 'washington',
		name: 'Washington',
		type: 'town',
		lat: 54.9,
		lon: -1.5167,
		parentRegion: 'north-east',
		county: 'Sunderland',
		population: 67085
	},
	{
		slug: 'waterlooville',
		name: 'Waterlooville',
		type: 'town',
		lat: 50.8807,
		lon: -1.0304,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 64350
	},
	{
		slug: 'wath-upon-dearne',
		name: 'Wath upon Dearne',
		type: 'town',
		lat: 53.5029,
		lon: -1.3458,
		parentRegion: 'yorkshire-and-humber',
		county: 'Rotherham',
		population: 16964
	},
	{
		slug: 'wednesbury',
		name: 'Wednesbury',
		type: 'town',
		lat: 52.5514,
		lon: -2.0236,
		parentRegion: 'west-midlands',
		county: 'Sandwell',
		population: 20313
	},
	{
		slug: 'wednesfield',
		name: 'Wednesfield',
		type: 'town',
		lat: 52.5963,
		lon: -2.0851,
		parentRegion: 'west-midlands',
		county: 'Wolverhampton',
		population: 33555
	},
	{
		slug: 'welling',
		name: 'Welling',
		type: 'town',
		lat: 51.4625,
		lon: 0.1076,
		parentRegion: 'london',
		county: 'Greater London',
		population: 41000
	},
	{
		slug: 'wellingborough',
		name: 'Wellingborough',
		type: 'town',
		lat: 52.3027,
		lon: -0.6945,
		parentRegion: 'east-midlands',
		county: 'North Northamptonshire',
		population: 56564
	},
	{
		slug: 'wellington',
		name: 'Wellington',
		type: 'town',
		lat: 52.7,
		lon: -2.5167,
		parentRegion: 'west-midlands',
		county: 'Telford and Wrekin',
		population: 22816
	},
	{
		slug: 'wells',
		name: 'Wells',
		type: 'town',
		lat: 51.2079,
		lon: -2.649,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 11145
	},
	{
		slug: 'welwyn-garden-city',
		name: 'Welwyn Garden City',
		type: 'town',
		lat: 51.8017,
		lon: -0.2069,
		parentRegion: 'east-of-england',
		county: 'Hertfordshire',
		population: 51505
	},
	{
		slug: 'wembley',
		name: 'Wembley',
		type: 'town',
		lat: 51.5524,
		lon: -0.2969,
		parentRegion: 'london',
		county: 'Greater London',
		population: 90045
	},
	{
		slug: 'west-bridgford',
		name: 'West Bridgford',
		type: 'town',
		lat: 52.9298,
		lon: -1.1254,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 36487
	},
	{
		slug: 'west-bromwich',
		name: 'West Bromwich',
		type: 'town',
		lat: 52.5187,
		lon: -1.9945,
		parentRegion: 'west-midlands',
		county: 'Sandwell',
		population: 103112
	},
	{
		slug: 'west-derby',
		name: 'West Derby',
		type: 'town',
		lat: 53.4328,
		lon: -2.9096,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 13837
	},
	{
		slug: 'west-drayton',
		name: 'West Drayton',
		type: 'town',
		lat: 51.5,
		lon: -0.4667,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14370
	},
	{
		slug: 'west-ealing',
		name: 'West Ealing',
		type: 'town',
		lat: 51.5136,
		lon: -0.3229,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15169
	},
	{
		slug: 'west-ham',
		name: 'West Ham',
		type: 'town',
		lat: 51.5333,
		lon: 0.0167,
		parentRegion: 'london',
		county: 'Greater London',
		population: 15551
	},
	{
		slug: 'west-molesey',
		name: 'West Molesey',
		type: 'town',
		lat: 51.3999,
		lon: -0.38,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 18565
	},
	{
		slug: 'west-wickham',
		name: 'West Wickham',
		type: 'town',
		lat: 51.3667,
		lon: -0.0167,
		parentRegion: 'london',
		county: 'Greater London',
		population: 14276
	},
	{
		slug: 'westbury',
		name: 'Westbury',
		type: 'town',
		lat: 51.26,
		lon: -2.1875,
		parentRegion: 'south-west',
		county: 'Wiltshire',
		population: 16989
	},
	{
		slug: 'westhill',
		name: 'Westhill',
		type: 'town',
		lat: 57.1526,
		lon: -2.2797,
		parentRegion: 'grampian',
		county: 'Aberdeenshire',
		population: 12110
	},
	{
		slug: 'westhoughton',
		name: 'Westhoughton',
		type: 'town',
		lat: 53.549,
		lon: -2.5246,
		parentRegion: 'north-west',
		county: 'Borough of Bolton',
		population: 26260
	},
	{
		slug: 'weston-super-mare',
		name: 'Weston-super-Mare',
		type: 'town',
		lat: 51.346,
		lon: -2.9766,
		parentRegion: 'south-west',
		county: 'North Somerset',
		population: 82903
	},
	{
		slug: 'wetherby',
		name: 'Wetherby',
		type: 'town',
		lat: 53.9284,
		lon: -1.3867,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 13572
	},
	{
		slug: 'weybridge',
		name: 'Weybridge',
		type: 'town',
		lat: 51.3718,
		lon: -0.4597,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 19463
	},
	{
		slug: 'weymouth',
		name: 'Weymouth',
		type: 'town',
		lat: 50.6145,
		lon: -2.4599,
		parentRegion: 'south-west',
		county: 'Dorset',
		population: 53416
	},
	{
		slug: 'whickham',
		name: 'Whickham',
		type: 'town',
		lat: 54.9456,
		lon: -1.6764,
		parentRegion: 'north-east',
		county: 'Gateshead',
		population: 16625
	},
	{
		slug: 'whiston',
		name: 'Whiston',
		type: 'town',
		lat: 53.42,
		lon: -2.7891,
		parentRegion: 'north-west',
		county: 'Knowsley',
		population: 13629
	},
	{
		slug: 'whitburn',
		name: 'Whitburn',
		type: 'town',
		lat: 55.8667,
		lon: -3.6833,
		parentRegion: 'dumfries-and-borders',
		county: 'West Lothian',
		population: 11490
	},
	{
		slug: 'whitby',
		name: 'Whitby',
		type: 'town',
		lat: 54.4877,
		lon: -0.615,
		parentRegion: 'yorkshire-and-humber',
		county: 'North Yorkshire',
		population: 13213
	},
	{
		slug: 'whitchurch',
		name: 'Whitchurch',
		type: 'town',
		lat: 51.5117,
		lon: -3.2208,
		parentRegion: 'wales',
		county: 'Cardiff',
		population: 13974
	},
	{
		slug: 'whitchurch-shropshire',
		name: 'Whitchurch',
		type: 'town',
		lat: 52.9667,
		lon: -2.6833,
		parentRegion: 'west-midlands',
		county: 'Shropshire',
		population: 10142
	},
	{
		slug: 'whitefield',
		name: 'Whitefield',
		type: 'town',
		lat: 53.55,
		lon: -2.3,
		parentRegion: 'north-west',
		county: 'Borough of Bury',
		population: 23545
	},
	{
		slug: 'whitehaven',
		name: 'Whitehaven',
		type: 'town',
		lat: 54.549,
		lon: -3.5841,
		parentRegion: 'north-west',
		county: 'Cumbria',
		population: 22945
	},
	{
		slug: 'whitley-bay',
		name: 'Whitley Bay',
		type: 'town',
		lat: 55.0397,
		lon: -1.4471,
		parentRegion: 'north-east',
		county: 'North Tyneside',
		population: 38055
	},
	{
		slug: 'whitstable',
		name: 'Whitstable',
		type: 'town',
		lat: 51.3607,
		lon: 1.0257,
		parentRegion: 'south-east',
		county: 'Kent',
		population: 32196
	},
	{
		slug: 'whittlesey',
		name: 'Whittlesey',
		type: 'town',
		lat: 52.558,
		lon: -0.1302,
		parentRegion: 'east-of-england',
		county: 'Cambridgeshire',
		population: 12745
	},
	{
		slug: 'wickford',
		name: 'Wickford',
		type: 'town',
		lat: 51.611,
		lon: 0.5233,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 27535
	},
	{
		slug: 'widnes',
		name: 'Widnes',
		type: 'town',
		lat: 53.3618,
		lon: -2.7341,
		parentRegion: 'north-west',
		county: 'Borough of Halton',
		population: 61464
	},
	{
		slug: 'wigston-magna',
		name: 'Wigston Magna',
		type: 'town',
		lat: 52.5813,
		lon: -1.0925,
		parentRegion: 'east-midlands',
		county: 'Leicestershire',
		population: 37260
	},
	{
		slug: 'willenhall',
		name: 'Willenhall',
		type: 'town',
		lat: 52.5851,
		lon: -2.0593,
		parentRegion: 'west-midlands',
		county: 'Walsall',
		population: 49587
	},
	{
		slug: 'willesden',
		name: 'Willesden',
		type: 'town',
		lat: 51.5333,
		lon: -0.2333,
		parentRegion: 'london',
		county: 'Greater London',
		population: 44295
	},
	{
		slug: 'wilmslow',
		name: 'Wilmslow',
		type: 'town',
		lat: 53.328,
		lon: -2.2315,
		parentRegion: 'north-west',
		county: 'Cheshire East',
		population: 25725
	},
	{
		slug: 'wimbledon-park',
		name: 'Wimbledon Park',
		type: 'town',
		lat: 51.435,
		lon: -0.1988,
		parentRegion: 'london',
		county: 'Greater London',
		population: 11197
	},
	{
		slug: 'wimborne-minster',
		name: 'Wimborne Minster',
		type: 'town',
		lat: 50.7833,
		lon: -1.9833,
		parentRegion: 'south-west',
		county: 'Bournemouth, Christchurch and Poole Council',
		population: 15552
	},
	{
		slug: 'winchester',
		name: 'Winchester',
		type: 'town',
		lat: 51.0651,
		lon: -1.3187,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 46074
	},
	{
		slug: 'windsor',
		name: 'Windsor',
		type: 'town',
		lat: 51.4833,
		lon: -0.6,
		parentRegion: 'south-east',
		county: 'Royal Borough of Windsor and Maidenhead',
		population: 31560
	},
	{
		slug: 'winsford',
		name: 'Winsford',
		type: 'town',
		lat: 53.1915,
		lon: -2.524,
		parentRegion: 'north-west',
		county: 'Cheshire West and Chester',
		population: 30259
	},
	{
		slug: 'wisbech',
		name: 'Wisbech',
		type: 'town',
		lat: 52.6662,
		lon: 0.1594,
		parentRegion: 'east-of-england',
		county: 'Cambridgeshire',
		population: 32489
	},
	{
		slug: 'wishaw',
		name: 'Wishaw',
		type: 'town',
		lat: 55.7667,
		lon: -3.9167,
		parentRegion: 'strathclyde',
		county: 'North Lanarkshire',
		population: 30050
	},
	{
		slug: 'witham',
		name: 'Witham',
		type: 'town',
		lat: 51.8001,
		lon: 0.6404,
		parentRegion: 'east-of-england',
		county: 'Essex',
		population: 25353
	},
	{
		slug: 'witney',
		name: 'Witney',
		type: 'town',
		lat: 51.7836,
		lon: -1.4854,
		parentRegion: 'south-east',
		county: 'Oxfordshire',
		population: 29103
	},
	{
		slug: 'woking',
		name: 'Woking',
		type: 'town',
		lat: 51.319,
		lon: -0.5589,
		parentRegion: 'south-east',
		county: 'Surrey',
		population: 103900
	},
	{
		slug: 'wokingham',
		name: 'Wokingham',
		type: 'town',
		lat: 51.4112,
		lon: -0.8357,
		parentRegion: 'south-east',
		county: 'Wokingham',
		population: 41143
	},
	{
		slug: 'wombourne',
		name: 'Wombourne',
		type: 'town',
		lat: 52.5333,
		lon: -2.1833,
		parentRegion: 'west-midlands',
		county: 'Staffordshire',
		population: 13511
	},
	{
		slug: 'wombwell',
		name: 'Wombwell',
		type: 'town',
		lat: 53.5219,
		lon: -1.397,
		parentRegion: 'yorkshire-and-humber',
		county: 'Barnsley',
		population: 15518
	},
	{
		slug: 'wood-green',
		name: 'Wood Green',
		type: 'town',
		lat: 51.6,
		lon: -0.1167,
		parentRegion: 'london',
		county: 'Greater London',
		population: 28453
	},
	{
		slug: 'woodbridge',
		name: 'Woodbridge',
		type: 'town',
		lat: 52.0933,
		lon: 1.3204,
		parentRegion: 'east-of-england',
		county: 'Suffolk',
		population: 11200
	},
	{
		slug: 'woodford-green',
		name: 'Woodford Green',
		type: 'town',
		lat: 51.6094,
		lon: 0.0233,
		parentRegion: 'london',
		county: 'Greater London',
		population: 22803
	},
	{
		slug: 'woolton',
		name: 'Woolton',
		type: 'town',
		lat: 53.374,
		lon: -2.87,
		parentRegion: 'north-west',
		county: 'Liverpool',
		population: 12921
	},
	{
		slug: 'worcester',
		name: 'Worcester',
		type: 'town',
		lat: 52.1893,
		lon: -2.22,
		parentRegion: 'west-midlands',
		county: 'Worcestershire',
		population: 101659
	},
	{
		slug: 'worcester-park',
		name: 'Worcester Park',
		type: 'town',
		lat: 51.3799,
		lon: -0.2445,
		parentRegion: 'london',
		county: 'Greater London',
		population: 16031
	},
	{
		slug: 'workington',
		name: 'Workington',
		type: 'town',
		lat: 54.6425,
		lon: -3.5441,
		parentRegion: 'north-west',
		county: 'Cumbria',
		population: 21275
	},
	{
		slug: 'worksop',
		name: 'Worksop',
		type: 'town',
		lat: 53.3018,
		lon: -1.124,
		parentRegion: 'east-midlands',
		county: 'Nottinghamshire',
		population: 44733
	},
	{
		slug: 'worthing',
		name: 'Worthing',
		type: 'town',
		lat: 50.818,
		lon: -0.3754,
		parentRegion: 'south-east',
		county: 'West Sussex',
		population: 113866
	},
	{
		slug: 'wrexham',
		name: 'Wrexham',
		type: 'town',
		lat: 53.0466,
		lon: -2.9913,
		parentRegion: 'wales',
		county: 'Wrexham',
		population: 65692
	},
	{
		slug: 'yarm',
		name: 'Yarm',
		type: 'town',
		lat: 54.5036,
		lon: -1.3579,
		parentRegion: 'north-east',
		county: 'Stockton-on-Tees',
		population: 19184
	},
	{
		slug: 'yate',
		name: 'Yate',
		type: 'town',
		lat: 51.5407,
		lon: -2.4184,
		parentRegion: 'south-west',
		county: 'South Gloucestershire',
		population: 23703
	},
	{
		slug: 'yateley',
		name: 'Yateley',
		type: 'town',
		lat: 51.343,
		lon: -0.8298,
		parentRegion: 'south-east',
		county: 'Hampshire',
		population: 20334
	},
	{
		slug: 'yatton',
		name: 'Yatton',
		type: 'town',
		lat: 51.3884,
		lon: -2.8235,
		parentRegion: 'south-west',
		county: 'North Somerset',
		population: 10251
	},
	{
		slug: 'yeadon',
		name: 'Yeadon',
		type: 'town',
		lat: 53.8644,
		lon: -1.6874,
		parentRegion: 'yorkshire-and-humber',
		county: 'City and Borough of Leeds',
		population: 37379
	},
	{
		slug: 'yeovil',
		name: 'Yeovil',
		type: 'town',
		lat: 50.9416,
		lon: -2.6321,
		parentRegion: 'south-west',
		county: 'Somerset',
		population: 50176
	},
	{
		slug: 'ystalyfera',
		name: 'Ystalyfera',
		type: 'town',
		lat: 51.7672,
		lon: -3.7808,
		parentRegion: 'wales',
		county: 'Neath Port Talbot',
		population: 10218
	}
];
