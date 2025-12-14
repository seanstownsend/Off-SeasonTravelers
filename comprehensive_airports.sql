-- ===== ADDITIONAL US AIRPORTS =====
-- Run this SQL to add comprehensive US airport coverage
-- This includes international airports, regional hubs, and major regional airports
-- NOTE: Excludes airports already in the main database schema

INSERT INTO airports (code, name, city, state, is_major) VALUES

-- REGIONAL AIRPORTS ONLY (excluding ALL duplicates from main schema)
-- Main schema already has: ATL, LAX, ORD, DFW, DEN, JFK, SFO, SEA, LAS, MCO, EWR, CLT, PHX, IAH, MIA, BOS, MSP, DTW, PHL, LGA, BWI, FLL, IAD, MDW, TPA, PDX, SLC, MSY, AUS, RDU, SAN, STL, HNL, ANC, CLE, IND, MCI, BNA, OAK, SJC, BUR

-- Additional airports NOT in main schema
('ABQ', 'Albuquerque International Sunport', 'Albuquerque', 'New Mexico', true),
('AMA', 'Rick Husband Amarillo International Airport', 'Amarillo', 'Texas', false),
('ATW', 'Appleton International Airport', 'Appleton', 'Wisconsin', false),
('BGR', 'Bangor International Airport', 'Bangor', 'Maine', false),
('BHM', 'Birmingham-Shuttlesworth International Airport', 'Birmingham', 'Alabama', true),
('BIL', 'Billings Logan International Airport', 'Billings', 'Montana', false),
('BOI', 'Boise Airport', 'Boise', 'Idaho', true),
('BTV', 'Burlington International Airport', 'Burlington', 'Vermont', false),
('BUF', 'Buffalo Niagara International Airport', 'Buffalo', 'New York', true),
('CAK', 'Akron-Canton Airport', 'Akron', 'Ohio', false),
('CHS', 'Charleston International Airport', 'Charleston', 'South Carolina', true),
('CID', 'Cedar Rapids Airport', 'Cedar Rapids', 'Iowa', false),
('CMH', 'John Glenn Columbus International Airport', 'Columbus', 'Ohio', true),
('COS', 'City of Colorado Springs Municipal Airport', 'Colorado Springs', 'Colorado', false),
('CVG', 'Cincinnati/Northern Kentucky International Airport', 'Cincinnati', 'Ohio', true),
('DAL', 'Dallas Love Field', 'Dallas', 'Texas', true),
('DAY', 'James M. Cox Dayton International Airport', 'Dayton', 'Ohio', false),
('DSM', 'Des Moines International Airport', 'Des Moines', 'Iowa', true),
('ELP', 'El Paso International Airport', 'El Paso', 'Texas', true),
('FAI', 'Fairbanks International Airport', 'Fairbanks', 'Alaska', false),
('FAR', 'Hector International Airport', 'Fargo', 'North Dakota', false),
('GEG', 'Spokane International Airport', 'Spokane', 'Washington', true),
('GRR', 'Gerald R. Ford International Airport', 'Grand Rapids', 'Michigan', true),
('GSO', 'Piedmont Triad International Airport', 'Greensboro', 'North Carolina', true),
('GSP', 'Greenville-Spartanburg International Airport', 'Greenville', 'South Carolina', true),
('GUM', 'Antonio B. Won Pat International Airport', 'Hagatna', 'Guam', true),
('HOU', 'William P. Hobby Airport', 'Houston', 'Texas', true),
('HSV', 'Huntsville International Airport', 'Huntsville', 'Alabama', false),
('ICT', 'Wichita Dwight D. Eisenhower National Airport', 'Wichita', 'Kansas', true),
('JAN', 'Jackson-Medgar Wiley Evers International Airport', 'Jackson', 'Mississippi', true),
('JAX', 'Jacksonville International Airport', 'Jacksonville', 'Florida', true),
('JNU', 'Juneau International Airport', 'Juneau', 'Alaska', false),
('LEX', 'Blue Grass Airport', 'Lexington', 'Kentucky', false),
('LGB', 'Long Beach Airport', 'Long Beach', 'California', true),
('LIT', 'Bill and Hillary Clinton National Airport', 'Little Rock', 'Arkansas', true),
('MAF', 'Midland International Air and Space Port', 'Midland', 'Texas', false),
('MEM', 'Memphis International Airport', 'Memphis', 'Tennessee', true),
('MHT', 'Manchester-Boston Regional Airport', 'Manchester', 'New Hampshire', true),
('MKE', 'Milwaukee Mitchell International Airport', 'Milwaukee', 'Wisconsin', true),
('MOB', 'Mobile Regional Airport', 'Mobile', 'Alabama', false),
('MYR', 'Myrtle Beach International Airport', 'Myrtle Beach', 'South Carolina', true),
('OKC', 'Will Rogers World Airport', 'Oklahoma City', 'Oklahoma', true),
('OMA', 'Eppley Airfield', 'Omaha', 'Nebraska', true),
('ONT', 'Ontario International Airport', 'Ontario', 'California', true),
('ORF', 'Norfolk International Airport', 'Norfolk', 'Virginia', true),
('PBI', 'Palm Beach International Airport', 'West Palm Beach', 'Florida', true),
('PIT', 'Pittsburgh International Airport', 'Pittsburgh', 'Pennsylvania', true),
('PVD', 'Theodore Francis Green Airport', 'Providence', 'Rhode Island', true),
('RIC', 'Richmond International Airport', 'Richmond', 'Virginia', true),
('RNO', 'Reno-Tahoe International Airport', 'Reno', 'Nevada', true),
('ROC', 'Greater Rochester International Airport', 'Rochester', 'New York', true),
('RSW', 'Southwest Florida International Airport', 'Fort Myers', 'Florida', true),
('SAT', 'San Antonio International Airport', 'San Antonio', 'Texas', true),
('SAV', 'Savannah/Hilton Head International Airport', 'Savannah', 'Georgia', true),
('SDF', 'Louisville Muhammad Ali International Airport', 'Louisville', 'Kentucky', true),
('SMF', 'Sacramento International Airport', 'Sacramento', 'California', true),
('SNA', 'John Wayne Airport', 'Santa Ana', 'California', true),
('SRQ', 'Sarasota-Bradenton International Airport', 'Sarasota', 'Florida', true),
('STT', 'Cyril E. King Airport', 'Charlotte Amalie', 'U.S. Virgin Islands', true),
('STX', 'Henry E. Rohlsen Airport', 'Christiansted', 'U.S. Virgin Islands', true),
('SYR', 'Syracuse Hancock International Airport', 'Syracuse', 'New York', true),
('TLH', 'Tallahassee International Airport', 'Tallahassee', 'Florida', false),
('TRI', 'Tri-Cities Airport', 'Bristol', 'Tennessee', false),
('TUL', 'Tulsa International Airport', 'Tulsa', 'Oklahoma', true),
('TUS', 'Tucson International Airport', 'Tucson', 'Arizona', true),
('TYS', 'McGhee Tyson Airport', 'Knoxville', 'Tennessee', true),

-- MAJOR REGIONAL AIRPORTS BY STATE

-- Alabama
('DHN', 'Dothan Regional Airport', 'Dothan', 'Alabama', false),
('GAD', 'Northeast Alabama Regional Airport', 'Gadsden', 'Alabama', false),

-- Alaska
('ADQ', 'Kodiak Airport', 'Kodiak', 'Alaska', false),
('BET', 'Bethel Airport', 'Bethel', 'Alaska', false),
('CDV', 'Merle K. (Mudhole) Smith Airport', 'Cordova', 'Alaska', false),
('DLG', 'Dillingham Airport', 'Dillingham', 'Alaska', false),
('KTN', 'Ketchikan International Airport', 'Ketchikan', 'Alaska', false),
('OME', 'Nome Airport', 'Nome', 'Alaska', false),
('PSG', 'Petersburg James A. Johnson Airport', 'Petersburg', 'Alaska', false),
('SCC', 'Deadhorse Airport', 'Deadhorse', 'Alaska', false),
('SIT', 'Sitka Rocky Gutierrez Airport', 'Sitka', 'Alaska', false),
('WRG', 'Wrangell Airport', 'Wrangell', 'Alaska', false),
('YAK', 'Yakutat Airport', 'Yakutat', 'Alaska', false),

-- Arizona
('FLG', 'Flagstaff Pulliam Airport', 'Flagstaff', 'Arizona', false),
('PRC', 'Ernest A. Love Field', 'Prescott', 'Arizona', false),
('YUM', 'Yuma International Airport', 'Yuma', 'Arizona', false),

-- Arkansas
('FSM', 'Fort Smith Regional Airport', 'Fort Smith', 'Arkansas', false),
('HOT', 'Memorial Field Airport', 'Hot Springs', 'Arkansas', false),
('JBR', 'Jonesboro Municipal Airport', 'Jonesboro', 'Arkansas', false),
('XNA', 'Northwest Arkansas Regional Airport', 'Bentonville', 'Arkansas', true),

-- California
('ACV', 'Arcata-Eureka Airport', 'Arcata', 'California', false),
('BAK', 'Meadows Field', 'Bakersfield', 'California', false),
('CEC', 'Jack McNamara Field', 'Crescent City', 'California', false),
('FAT', 'Fresno Yosemite International Airport', 'Fresno', 'California', true),
('IYK', 'Inyokern Airport', 'Inyokern', 'California', false),
('MFR', 'Rogue Valley International-Medford Airport', 'Medford', 'Oregon', false),
('MMH', 'Mammoth Yosemite Airport', 'Mammoth Lakes', 'California', false),
('MOD', 'Modesto City-County Airport', 'Modesto', 'California', false),
('MRY', 'Monterey Regional Airport', 'Monterey', 'California', false),
('PSP', 'Palm Springs International Airport', 'Palm Springs', 'California', true),
('RDD', 'Redding Regional Airport', 'Redding', 'California', false),
('SBA', 'Santa Barbara Municipal Airport', 'Santa Barbara', 'California', true),
('SCK', 'Stockton Metropolitan Airport', 'Stockton', 'California', false),
('STS', 'Charles M. Schulz Sonoma County Airport', 'Santa Rosa', 'California', false),
('VIS', 'Visalia Municipal Airport', 'Visalia', 'California', false),

-- Colorado
('ASE', 'Aspen/Pitkin County Airport', 'Aspen', 'Colorado', false),
('DRO', 'Durango-La Plata County Airport', 'Durango', 'Colorado', false),
('EGE', 'Eagle County Regional Airport', 'Eagle', 'Colorado', false),
('FNL', 'Northern Colorado Regional Airport', 'Fort Collins', 'Colorado', false),
('GJT', 'Grand Junction Regional Airport', 'Grand Junction', 'Colorado', false),
('GUC', 'Gunnison-Crested Butte Regional Airport', 'Gunnison', 'Colorado', false),
('HDN', 'Yampa Valley Airport', 'Hayden', 'Colorado', false),
('MTJ', 'Montrose Regional Airport', 'Montrose', 'Colorado', false),
('PUB', 'Pueblo Memorial Airport', 'Pueblo', 'Colorado', false),

-- Connecticut
('BDL', 'Bradley International Airport', 'Windsor Locks', 'Connecticut', true),
('GON', 'Groton-New London Airport', 'Groton', 'Connecticut', false),
('HVN', 'Tweed New Haven Airport', 'New Haven', 'Connecticut', false),

-- Delaware
('ILG', 'New Castle Airport', 'Wilmington', 'Delaware', false),

-- Florida
('DAB', 'Daytona Beach International Airport', 'Daytona Beach', 'Florida', true),
('EYW', 'Key West International Airport', 'Key West', 'Florida', false),
('GNV', 'Gainesville Regional Airport', 'Gainesville', 'Florida', false),
('MLB', 'Melbourne Orlando International Airport', 'Melbourne', 'Florida', true),
('PFN', 'Panama City-Bay County International Airport', 'Panama City', 'Florida', false),
('PIE', 'St. Pete-Clearwater International Airport', 'St. Petersburg', 'Florida', true),
('PNS', 'Pensacola International Airport', 'Pensacola', 'Florida', true),
('VPS', 'Destin-Fort Walton Beach Airport', 'Valparaiso', 'Florida', false),

-- Georgia
('ABY', 'Southwest Georgia Regional Airport', 'Albany', 'Georgia', false),
('AGS', 'Augusta Regional Airport', 'Augusta', 'Georgia', false),
('BQK', 'Brunswick Golden Isles Airport', 'Brunswick', 'Georgia', false),
('CSG', 'Columbus Airport', 'Columbus', 'Georgia', false),
('VLD', 'Valdosta Regional Airport', 'Valdosta', 'Georgia', false),

-- Hawaii
('ITO', 'Hilo International Airport', 'Hilo', 'Hawaii', true),
('JHM', 'Kapalua Airport', 'Kapalua', 'Hawaii', false),
('KOA', 'Ellison Onizuka Kona International Airport', 'Kona', 'Hawaii', true),
('LIH', 'Lihue Airport', 'Lihue', 'Hawaii', true),
('LNY', 'Lanai Airport', 'Lanai City', 'Hawaii', false),
('MKK', 'Molokai Airport', 'Kaunakakai', 'Hawaii', false),
('OGG', 'Kahului Airport', 'Kahului', 'Hawaii', true),

-- Idaho
('COE', 'Coeur d''Alene Airport', 'Coeur d''Alene', 'Idaho', false),
('IDA', 'Idaho Falls Regional Airport', 'Idaho Falls', 'Idaho', false),
('LWS', 'Lewiston-Nez Perce County Airport', 'Lewiston', 'Idaho', false),
('PIH', 'Pocatello Regional Airport', 'Pocatello', 'Idaho', false),
('SUN', 'Friedman Memorial Airport', 'Hailey', 'Idaho', false),
('TWF', 'Magic Valley Regional Airport', 'Twin Falls', 'Idaho', false),

-- Illinois
('BMI', 'Central Illinois Regional Airport', 'Bloomington', 'Illinois', false),
('CMI', 'University of Illinois Willard Airport', 'Champaign', 'Illinois', false),
('DEC', 'Decatur Airport', 'Decatur', 'Illinois', false),
('MLI', 'Quad City International Airport', 'Moline', 'Illinois', false),
('PIA', 'General Downing-Peoria International Airport', 'Peoria', 'Illinois', false),
('RFD', 'Chicago Rockford International Airport', 'Rockford', 'Illinois', false),
('SPI', 'Abraham Lincoln Capital Airport', 'Springfield', 'Illinois', false),

-- Indiana
('EVV', 'Evansville Regional Airport', 'Evansville', 'Indiana', false),
('FWA', 'Fort Wayne International Airport', 'Fort Wayne', 'Indiana', true),
('SBN', 'South Bend International Airport', 'South Bend', 'Indiana', true),
('TER', 'Terre Haute Regional Airport', 'Terre Haute', 'Indiana', false),

-- Iowa
('ALO', 'Waterloo Regional Airport', 'Waterloo', 'Iowa', false),
('BRL', 'Southeast Iowa Regional Airport', 'Burlington', 'Iowa', false),
('DBQ', 'Dubuque Regional Airport', 'Dubuque', 'Iowa', false),
('MCW', 'Mason City Municipal Airport', 'Mason City', 'Iowa', false),
('SUX', 'Sioux Gateway Airport', 'Sioux City', 'Iowa', false),

-- Kansas
('DDC', 'Dodge City Regional Airport', 'Dodge City', 'Kansas', false),
('GCK', 'Garden City Regional Airport', 'Garden City', 'Kansas', false),
('GLD', 'Goodland Municipal Airport', 'Goodland', 'Kansas', false),
('HYS', 'Hays Regional Airport', 'Hays', 'Kansas', false),
('LBL', 'Liberal Mid-America Regional Airport', 'Liberal', 'Kansas', false),
('MHK', 'Manhattan Regional Airport', 'Manhattan', 'Kansas', false),
('SLN', 'Salina Regional Airport', 'Salina', 'Kansas', false),
('TOP', 'Philip Billard Municipal Airport', 'Topeka', 'Kansas', false),

-- Kentucky
('OWB', 'Owensboro-Daviess County Airport', 'Owensboro', 'Kentucky', false),
('PAH', 'Barkley Regional Airport', 'Paducah', 'Kentucky', false),

-- Louisiana
('AEX', 'Alexandria International Airport', 'Alexandria', 'Louisiana', false),
('BTR', 'Baton Rouge Metropolitan Airport', 'Baton Rouge', 'Louisiana', true),
('LCH', 'Lake Charles Regional Airport', 'Lake Charles', 'Louisiana', false),
('LFT', 'Lafayette Regional Airport', 'Lafayette', 'Louisiana', false),
('MLU', 'Monroe Regional Airport', 'Monroe', 'Louisiana', false),
('SHV', 'Shreveport Regional Airport', 'Shreveport', 'Louisiana', true),

-- Maine
('RKD', 'Knox County Regional Airport', 'Rockland', 'Maine', false),

-- Maryland
('HGR', 'Hagerstown Regional Airport', 'Hagerstown', 'Maryland', false),
('SBY', 'Salisbury-Ocean City Wicomico Regional Airport', 'Salisbury', 'Maryland', false),

-- Massachusetts
('ACK', 'Nantucket Memorial Airport', 'Nantucket', 'Massachusetts', false),
('BED', 'Laurence G. Hanscom Field', 'Bedford', 'Massachusetts', false),
('CEF', 'Westover ARB/Metropolitan Airport', 'Chicopee', 'Massachusetts', false),
('HYA', 'Barnstable Municipal Airport', 'Hyannis', 'Massachusetts', false),
('MVY', 'Martha''s Vineyard Airport', 'Martha''s Vineyard', 'Massachusetts', false),
('ORH', 'Worcester Regional Airport', 'Worcester', 'Massachusetts', false),
('PVC', 'Provincetown Municipal Airport', 'Provincetown', 'Massachusetts', false),

-- Michigan
('APN', 'Alpena County Regional Airport', 'Alpena', 'Michigan', false),
('ESC', 'Delta County Airport', 'Escanaba', 'Michigan', false),
('FNT', 'Bishop International Airport', 'Flint', 'Michigan', true),
('IMT', 'Ford Airport', 'Iron Mountain', 'Michigan', false),
('KZO', 'Kalamazoo/Battle Creek International Airport', 'Kalamazoo', 'Michigan', false),
('LAN', 'Capital Region International Airport', 'Lansing', 'Michigan', false),
('MBS', 'MBS International Airport', 'Saginaw', 'Michigan', false),
('MQT', 'Sawyer International Airport', 'Marquette', 'Michigan', false),
('TVC', 'Cherry Capital Airport', 'Traverse City', 'Michigan', false),

-- Minnesota
('BJI', 'Bemidji Regional Airport', 'Bemidji', 'Minnesota', false),
('DLH', 'Duluth International Airport', 'Duluth', 'Minnesota', false),
('HIB', 'Range Regional Airport', 'Hibbing', 'Minnesota', false),
('INL', 'Falls International Airport', 'International Falls', 'Minnesota', false),
('RST', 'Rochester International Airport', 'Rochester', 'Minnesota', false),
('STC', 'St. Cloud Regional Airport', 'St. Cloud', 'Minnesota', false),

-- Mississippi
('GPT', 'Gulfport-Biloxi International Airport', 'Gulfport', 'Mississippi', true),
('GTR', 'Golden Triangle Regional Airport', 'Columbus', 'Mississippi', false),
('MEI', 'Meridian Regional Airport', 'Meridian', 'Mississippi', false),
('TUP', 'Tupelo Regional Airport', 'Tupelo', 'Mississippi', false),

-- Missouri
('COU', 'Columbia Regional Airport', 'Columbia', 'Missouri', false),
('JLN', 'Joplin Regional Airport', 'Joplin', 'Missouri', false),
('SGF', 'Springfield-Branson National Airport', 'Springfield', 'Missouri', true),
('TBN', 'Waynesville-St. Robert Regional Airport', 'Fort Leonard Wood', 'Missouri', false),

-- Montana
('BZN', 'Bozeman Yellowstone International Airport', 'Bozeman', 'Montana', true),
('BTM', 'Bert Mooney Airport', 'Butte', 'Montana', false),
('GGW', 'Wokal Field/Glasgow International Airport', 'Glasgow', 'Montana', false),
('GTF', 'Great Falls International Airport', 'Great Falls', 'Montana', false),
('HLN', 'Helena Regional Airport', 'Helena', 'Montana', false),
('KLS', 'Southwest Montana Regional Airport', 'Kalispell', 'Montana', false),
('LWT', 'Lewistown Municipal Airport', 'Lewistown', 'Montana', false),
('MSO', 'Missoula Montana Airport', 'Missoula', 'Montana', true),
('WYS', 'Yellowstone Airport', 'West Yellowstone', 'Montana', false),

-- Nebraska
('GRI', 'Central Nebraska Regional Airport', 'Grand Island', 'Nebraska', false),
('LNK', 'Lincoln Airport', 'Lincoln', 'Nebraska', false),
('SCB', 'Scottsbluff Airport', 'Scottsbluff', 'Nebraska', false),

-- Nevada
('EKO', 'Elko Regional Airport', 'Elko', 'Nevada', false),

-- New Hampshire
('LEB', 'Lebanon Municipal Airport', 'Lebanon', 'New Hampshire', false),

-- New Jersey
('ACY', 'Atlantic City International Airport', 'Atlantic City', 'New Jersey', true),
('MMU', 'Morristown Municipal Airport', 'Morristown', 'New Jersey', false),
('TTN', 'Trenton-Mercer Airport', 'Trenton', 'New Jersey', false),

-- New Mexico
('CNM', 'Cavern City Air Terminal', 'Carlsbad', 'New Mexico', false),
('FMN', 'Four Corners Regional Airport', 'Farmington', 'New Mexico', false),
('LAM', 'Los Alamos Airport', 'Los Alamos', 'New Mexico', false),
('ROW', 'Roswell International Air Center', 'Roswell', 'New Mexico', false),
('SAF', 'Santa Fe Regional Airport', 'Santa Fe', 'New Mexico', false),

-- New York
('ALB', 'Albany International Airport', 'Albany', 'New York', true),
('BGM', 'Greater Binghamton Airport', 'Binghamton', 'New York', false),
('ELM', 'Elmira/Corning Regional Airport', 'Elmira', 'New York', false),
('HPN', 'Westchester County Airport', 'White Plains', 'New York', true),
('ISP', 'Long Island MacArthur Airport', 'Islip', 'New York', true),
('ITH', 'Ithaca Tompkins International Airport', 'Ithaca', 'New York', false),
('MSS', 'Massena International Airport', 'Massena', 'New York', false),
('OGS', 'Ogdensburg International Airport', 'Ogdensburg', 'New York', false),
('PBG', 'Plattsburgh International Airport', 'Plattsburgh', 'New York', false),
('SWF', 'New York Stewart International Airport', 'Newburgh', 'New York', true),
('WCA', 'Watertown International Airport', 'Watertown', 'New York', false),

-- North Carolina
('AVL', 'Asheville Regional Airport', 'Asheville', 'North Carolina', true),
('EWN', 'Coastal Carolina Regional Airport', 'New Bern', 'North Carolina', false),
('FAY', 'Fayetteville Regional Airport', 'Fayetteville', 'North Carolina', false),
('ILM', 'Wilmington International Airport', 'Wilmington', 'North Carolina', true),
('OAJ', 'Albert J. Ellis Airport', 'Jacksonville', 'North Carolina', false),
('POB', 'Pope Field', 'Fort Bragg', 'North Carolina', false),

-- North Dakota
('BIS', 'Bismarck Airport', 'Bismarck', 'North Dakota', false),
('DVL', 'Devils Lake Regional Airport', 'Devils Lake', 'North Dakota', false),
('GFK', 'Grand Forks International Airport', 'Grand Forks', 'North Dakota', false),
('JMS', 'Jamestown Regional Airport', 'Jamestown', 'North Dakota', false),
('MOT', 'Minot International Airport', 'Minot', 'North Dakota', false),
('WRL', 'Worland Municipal Airport', 'Worland', 'Wyoming', false),

-- Ohio
('TOL', 'Eugene F. Kranz Toledo Express Airport', 'Toledo', 'Ohio', false),
('YNG', 'Youngstown-Warren Regional Airport', 'Vienna', 'Ohio', false),

-- Oklahoma
('ADA', 'Ada Regional Airport', 'Ada', 'Oklahoma', false),
('END', 'Vance Air Force Base', 'Enid', 'Oklahoma', false),
('LAW', 'Lawton-Fort Sill Regional Airport', 'Lawton', 'Oklahoma', false),
('SWO', 'Stillwater Regional Airport', 'Stillwater', 'Oklahoma', false),

-- Oregon
('AST', 'Astoria Regional Airport', 'Astoria', 'Oregon', false),
('BDN', 'Bend Municipal Airport', 'Bend', 'Oregon', false),
('CVO', 'Corvallis Municipal Airport', 'Corvallis', 'Oregon', false),
('EUG', 'Eugene Airport', 'Eugene', 'Oregon', false),
('LMT', 'Klamath Falls Airport', 'Klamath Falls', 'Oregon', false),
('OTH', 'Southwest Oregon Regional Airport', 'North Bend', 'Oregon', false),
('PDT', 'Eastern Oregon Regional Airport', 'Pendleton', 'Oregon', false),
('RDM', 'Roberts Field', 'Redmond', 'Oregon', false),

-- Pennsylvania
('ABE', 'Lehigh Valley International Airport', 'Allentown', 'Pennsylvania', true),
('AOO', 'Altoona-Blair County Airport', 'Altoona', 'Pennsylvania', false),
('AVP', 'Wilkes-Barre/Scranton International Airport', 'Scranton', 'Pennsylvania', true),
('BFD', 'Bradford Regional Airport', 'Bradford', 'Pennsylvania', false),
('CXY', 'Capital City Airport', 'Harrisburg', 'Pennsylvania', false),
('ERI', 'Erie International Airport', 'Erie', 'Pennsylvania', false),
('IPT', 'Williamsport Regional Airport', 'Williamsport', 'Pennsylvania', false),
('JST', 'John Murtha Johnstown-Cambria County Airport', 'Johnstown', 'Pennsylvania', false),
('LBE', 'Arnold Palmer Regional Airport', 'Latrobe', 'Pennsylvania', false),
('MDT', 'Harrisburg International Airport', 'Middletown', 'Pennsylvania', true),
('UNV', 'University Park Airport', 'State College', 'Pennsylvania', false),

-- Rhode Island
('BID', 'Block Island State Airport', 'Block Island', 'Rhode Island', false),
('WST', 'Westerly State Airport', 'Westerly', 'Rhode Island', false),

-- South Carolina
('CAE', 'Columbia Metropolitan Airport', 'Columbia', 'South Carolina', true),
('FLO', 'Florence Regional Airport', 'Florence', 'South Carolina', false),
('HXD', 'Hilton Head Airport', 'Hilton Head', 'South Carolina', false),

-- South Dakota
('ABR', 'Aberdeen Regional Airport', 'Aberdeen', 'South Dakota', false),
('HON', 'Huron Regional Airport', 'Huron', 'South Dakota', false),
('MBG', 'Mobridge Municipal Airport', 'Mobridge', 'South Dakota', false),
('PIR', 'Pierre Regional Airport', 'Pierre', 'South Dakota', false),
('RAP', 'Rapid City Regional Airport', 'Rapid City', 'South Dakota', true),
('FSD', 'Sioux Falls Regional Airport', 'Sioux Falls', 'South Dakota', true),
('SPF', 'Spearfish-Black Hills Airport', 'Spearfish', 'South Dakota', false),
('WTW', 'Watertown Regional Airport', 'Watertown', 'South Dakota', false),

-- Tennessee
('CHA', 'Chattanooga Metropolitan Airport', 'Chattanooga', 'Tennessee', true),
('JKS', 'Jackson-McKellar-Sipes Regional Airport', 'Jackson', 'Tennessee', false),

-- Texas
('ACT', 'Waco Regional Airport', 'Waco', 'Texas', false),
('ABI', 'Abilene Regional Airport', 'Abilene', 'Texas', false),
('BPT', 'Southeast Texas Regional Airport', 'Beaumont', 'Texas', false),
('BRO', 'Brownsville/South Padre Island International Airport', 'Brownsville', 'Texas', true),
('CLL', 'Easterwood Airport', 'College Station', 'Texas', false),
('CRP', 'Corpus Christi International Airport', 'Corpus Christi', 'Texas', true),
('GGG', 'East Texas Regional Airport', 'Longview', 'Texas', false),
('GLS', 'Scholes International Airport', 'Galveston', 'Texas', false),
('HRL', 'Valley International Airport', 'Harlingen', 'Texas', true),
('ILE', 'Killeen-Fort Hood Regional Airport', 'Killeen', 'Texas', false),
('LBB', 'Lubbock Preston Smith International Airport', 'Lubbock', 'Texas', true),
('LRD', 'Laredo International Airport', 'Laredo', 'Texas', true),
('SJT', 'San Angelo Regional Airport', 'San Angelo', 'Texas', false),
('TYR', 'Tyler Pounds Regional Airport', 'Tyler', 'Texas', false),
('VCT', 'Victoria Regional Airport', 'Victoria', 'Texas', false),

-- Utah
('CDC', 'Cedar City Regional Airport', 'Cedar City', 'Utah', false),
('CNY', 'Canyonlands Field', 'Moab', 'Utah', false),
('OGD', 'Ogden-Hinckley Airport', 'Ogden', 'Utah', false),
('PVU', 'Provo Municipal Airport', 'Provo', 'Utah', false),
('SGU', 'St. George Regional Airport', 'St. George', 'Utah', false),
('VEL', 'Vernal Regional Airport', 'Vernal', 'Utah', false),

-- Vermont
('RUT', 'Southern Vermont Regional Airport', 'Rutland', 'Vermont', false),

-- Virginia
('CHO', 'Charlottesville-Albemarle Airport', 'Charlottesville', 'Virginia', false),
('LYH', 'Lynchburg Regional Airport', 'Lynchburg', 'Virginia', false),
('PHF', 'Newport News/Williamsburg International Airport', 'Newport News', 'Virginia', true),
('ROA', 'Roanoke-Blacksburg Regional Airport', 'Roanoke', 'Virginia', true),
('SHD', 'Shenandoah Valley Regional Airport', 'Staunton', 'Virginia', false),

-- Washington
('BFI', 'Boeing Field/King County International Airport', 'Seattle', 'Washington', true),
('BLI', 'Bellingham International Airport', 'Bellingham', 'Washington', false),
('EAT', 'Pangborn Memorial Airport', 'Wenatchee', 'Washington', false),
('EPH', 'Ephrata Municipal Airport', 'Ephrata', 'Washington', false),
('PUW', 'Pullman-Moscow Regional Airport', 'Pullman', 'Washington', false),
('YKM', 'Yakima Air Terminal', 'Yakima', 'Washington', false),

-- West Virginia
('BKW', 'Raleigh County Memorial Airport', 'Beckley', 'West Virginia', false),
('CKB', 'North Central West Virginia Airport', 'Bridgeport', 'West Virginia', false),
('CRW', 'Charleston Yeager Airport', 'Charleston', 'West Virginia', true),
('EKN', 'Elkins-Randolph County-Jennings Randolph Field', 'Elkins', 'West Virginia', false),
('HTS', 'Huntington Tri-State Airport', 'Huntington', 'West Virginia', false),
('LWB', 'Greenbrier Valley Airport', 'Lewisburg', 'West Virginia', false),
('MGW', 'Morgantown Municipal Airport', 'Morgantown', 'West Virginia', false),
('PKB', 'Mid-Ohio Valley Regional Airport', 'Parkersburg', 'West Virginia', false),

-- Wisconsin
('EAU', 'Chippewa Valley Regional Airport', 'Eau Claire', 'Wisconsin', false),
('GRB', 'Austin Straubel International Airport', 'Green Bay', 'Wisconsin', true),
('LSE', 'La Crosse Regional Airport', 'La Crosse', 'Wisconsin', false),
('MSN', 'Dane County Regional Airport', 'Madison', 'Wisconsin', true),
('RHI', 'Rhinelander-Oneida County Airport', 'Rhinelander', 'Wisconsin', false),
('SUW', 'Richard I. Bong Airport', 'Superior', 'Wisconsin', false),
('WIS', 'Wisconsin Rapids-Wood County Airport', 'Wisconsin Rapids', 'Wisconsin', false),

-- Wyoming
('COD', 'Yellowstone Regional Airport', 'Cody', 'Wyoming', false),
('CPR', 'Casper-Natrona County International Airport', 'Casper', 'Wyoming', false),
('GCC', 'Gillette-Campbell County Airport', 'Gillette', 'Wyoming', false),
('JAC', 'Jackson Hole Airport', 'Jackson', 'Wyoming', true),
('LAR', 'Laramie Regional Airport', 'Laramie', 'Wyoming', false),
('RIW', 'Riverton Regional Airport', 'Riverton', 'Wyoming', false),
('RKS', 'Rock Springs-Sweetwater County Airport', 'Rock Springs', 'Wyoming', false),
('SHR', 'Sheridan County Airport', 'Sheridan', 'Wyoming', false),

-- TERRITORIES
-- Puerto Rico
('BQN', 'Rafael Hernández Airport', 'Aguadilla', 'Puerto Rico', true),
('CPX', 'Benjamin Rivera Noriega Airport', 'Culebra', 'Puerto Rico', false),
('MAZ', 'Eugenio María de Hostos Airport', 'Mayagüez', 'Puerto Rico', false),
('PSE', 'Mercedita Airport', 'Ponce', 'Puerto Rico', true),
('SIG', 'Fernando Luis Ribas Dominicci Airport', 'San Juan', 'Puerto Rico', false),
('SJU', 'Luis Muñoz Marín International Airport', 'San Juan', 'Puerto Rico', true),
('VQS', 'Antonio Rivera Rodríguez Airport', 'Vieques', 'Puerto Rico', false),
('X95', 'José Aponte de la Torre Airport', 'Ceiba', 'Puerto Rico', false),

-- American Samoa
('PPG', 'Pago Pago International Airport', 'Pago Pago', 'American Samoa', true),

-- Northern Mariana Islands
('ROP', 'Rota International Airport', 'Rota', 'Northern Mariana Islands', false),
('SPN', 'Francisco C. Ada/Saipan International Airport', 'Saipan', 'Northern Mariana Islands', true),
('TNI', 'West Tinian Airport', 'Tinian', 'Northern Mariana Islands', false);