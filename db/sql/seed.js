const seeds = [
  { country: "Afghanistan",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Albania",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Algeria",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Andorra",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Angola",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Antigua and Barbud",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Argentina",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Armenia",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Australia",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Austria",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Azerbaijan",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Bahamas",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Bahrain",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Bangladesh",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Barbados",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Belarus",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Belgium",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Belize",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Benin",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Bhutan",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Bolivia",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Bosnia and Herzegovina",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Botswana",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Brazil",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Brunei",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Bulgaria",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Burkina Faso",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Burundi",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Côte d'Ivoire",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Cabo Verde",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Cambodia",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Cameroon",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Canada",	basic_rate: 10.00,	expedited_rate: 13.00,	one_day_rate: 16.00 },
  { country: "Central African Republic",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Chad",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Chile",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "China",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Colombia",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Comoros",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Congo (Congo-Brazzaville)",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Costa Rica",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Croatia",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Cuba",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Cyprus",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Czech Republic",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Democratic Republic of the Congo",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Denmark",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Djibouti",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Dominica",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Dominican Republic",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Ecuador",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Egypt",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "El Salvador",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Equatorial Guinea",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Eritrea",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Estonia",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Ethiopia",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Fiji",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Finland",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "France",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Gabon",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Gambia",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Georgia",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Germany",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Ghana",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Greece",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Grenada",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Guatemala",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Guinea",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Guinea-Bissau",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Guyana",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Haiti",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Holy See",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Honduras",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Hungary",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Iceland",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "India",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Indonesia",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Iran",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Iraq",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Ireland",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Israel",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Italy",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Jamaica",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Japan",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Jordan",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Kazakhstan",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Kenya",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Kiribati",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Kuwait",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Kyrgyzstan",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Laos",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Latvia",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Lebanon",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Lesotho",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Liberia",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Libya",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Liechtenstein",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Lithuania",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Luxembourg",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Macedonia (FYROM)",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Madagascar",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Malawi",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Malaysia",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Maldives",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Mali",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Malta",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Marshall Islands",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Mauritania",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Mauritius",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Mexico",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Micronesia",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Moldova",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Monaco",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Mongolia",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Montenegro",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Morocco",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Mozambique",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Myanmar (formerly Burma)",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Namibia",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Nauru",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Nepal",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Netherlands",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "New Zealand",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Nicaragua",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Niger",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Nigeria",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "North Korea",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Norway",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Oman",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Pakistan",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Palau",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Palestine State",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Panama",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Papua New Guinea",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Paraguay",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Peru",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Philippines",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Poland",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Portugal",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Qatar",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Romania",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Russia",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Rwanda",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Saint Kitts and Nevis",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Saint Lucia",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Saint Vincent and the Grenadines",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Samoa",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "San Marino",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Sao Tome and Principe",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Saudi Arabia",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Senegal",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Serbia",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Seychelles",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Sierra Leone",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Singapore",	basic_rate: 10.00,	expedited_rate: 13.00,	one_day_rate: 16.00 },
  { country: "Slovakia",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Slovenia",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Solomon Islands",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Somalia",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "South Africa",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "South Korea",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "South Sudan",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Spain",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Sri Lanka",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Sudan",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Suriname",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Swaziland",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Sweden",	basic_rate: 10.00,	expedited_rate: 13.00,	one_day_rate: 16.00 },
  { country: "Switzerland",	basic_rate: 10.00,	expedited_rate: 13.00,	one_day_rate: 16.00 },
  { country: "Syria",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Tajikistan",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Tanzania",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Thailand",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Timor-Leste",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Togo",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Tonga",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Trinidad and Tobago",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Tunisia",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Turkey",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Turkmenistan",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Tuvalu",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Uganda",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Ukraine",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "United Arab Emirates",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "United Kingdom",	basic_rate: 10.00,	expedited_rate: 13.00,	one_day_rate: 16.00 },
  { country: "United States of America",	basic_rate: 10.00,	expedited_rate: 13.00,	one_day_rate: 16.00 },
  { country: "Uruguay",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Uzbekistan",	basic_rate: 30.00,	expedited_rate: 33.00,	one_day_rate: 36.00 },
  { country: "Vanuatu",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Venezuela",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Viet Nam",	basic_rate: 15.00,	expedited_rate: 18.00,	one_day_rate: 21.00 },
  { country: "Yemen",	basic_rate: 20.00,	expedited_rate: 23.00,	one_day_rate: 26.00 },
  { country: "Zambia",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 },
  { country: "Zimbabwe",	basic_rate: 25.00,	expedited_rate: 28.00,	one_day_rate: 31.00 }
];

module.exports = {
  seeds: seeds
};
