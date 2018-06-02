// const Sequelize = require('sequelize');
//
// const { BillingRate } = require('../schema/billingSchema.js');

const seeds = [
  { country: "Afghanistan",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Albania",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Algeria",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Andorra",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Angola",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Antigua and Barbud",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Argentina",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Armenia",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Australia",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Austria",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Azerbaijan",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Bahamas",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Bahrain",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Bangladesh",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Barbados",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Belarus",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Belgium",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Belize",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Benin",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Bhutan",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Bolivia",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Bosnia and Herzegovina",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Botswana",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Brazil",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Brunei",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Bulgaria",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Burkina Faso",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Burundi",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Côte d'Ivoire",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Cabo Verde",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Cambodia",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Cameroon",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Canada",	basic_rate: 10,	expedited_rate: 13,	one_day_rate: 16 },
  { country: "Central African Republic",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Chad",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Chile",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "China",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Colombia",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Comoros",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Congo (Congo-Brazzaville)",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Costa Rica",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Croatia",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Cuba",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Cyprus",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Czech Republic",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Democratic Republic of the Congo",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Denmark",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Djibouti",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Dominica",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Dominican Republic",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Ecuador",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Egypt",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "El Salvador",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Equatorial Guinea",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Eritrea",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Estonia",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Ethiopia",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Fiji",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Finland",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "France",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Gabon",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Gambia",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Georgia",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Germany",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Ghana",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Greece",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Grenada",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Guatemala",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Guinea",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Guinea-Bissau",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Guyana",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Haiti",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Holy See",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Honduras",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Hungary",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Iceland",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "India",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Indonesia",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Iran",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Iraq",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Ireland",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Israel",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Italy",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Jamaica",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Japan",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Jordan",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Kazakhstan",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Kenya",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Kiribati",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Kuwait",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Kyrgyzstan",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Laos",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Latvia",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Lebanon",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Lesotho",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Liberia",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Libya",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Liechtenstein",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Lithuania",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Luxembourg",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Macedonia (FYROM)",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Madagascar",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Malawi",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Malaysia",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Maldives",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Mali",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Malta",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Marshall Islands",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Mauritania",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Mauritius",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Mexico",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Micronesia",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Moldova",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Monaco",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Mongolia",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Montenegro",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Morocco",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Mozambique",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Myanmar (formerly Burma)",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Namibia",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Nauru",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Nepal",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Netherlands",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "New Zealand",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Nicaragua",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Niger",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Nigeria",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "North Korea",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Norway",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Oman",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Pakistan",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Palau",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Palestine State",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Panama",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Papua New Guinea",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Paraguay",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Peru",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Philippines",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Poland",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Portugal",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Qatar",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Romania",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Russia",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Rwanda",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Saint Kitts and Nevis",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Saint Lucia",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Saint Vincent and the Grenadines",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Samoa",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "San Marino",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Sao Tome and Principe",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Saudi Arabia",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Senegal",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Serbia",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Seychelles",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Sierra Leone",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Singapore",	basic_rate: 10,	expedited_rate: 13,	one_day_rate: 16 },
  { country: "Slovakia",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Slovenia",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Solomon Islands",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Somalia",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "South Africa",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "South Korea",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "South Sudan",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Spain",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Sri Lanka",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Sudan",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Suriname",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Swaziland",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Sweden",	basic_rate: 10,	expedited_rate: 13,	one_day_rate: 16 },
  { country: "Switzerland",	basic_rate: 10,	expedited_rate: 13,	one_day_rate: 16 },
  { country: "Syria",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Tajikistan",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Tanzania",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Thailand",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Timor-Leste",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Togo",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Tonga",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Trinidad and Tobago",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Tunisia",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Turkey",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Turkmenistan",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Tuvalu",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Uganda",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Ukraine",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "United Arab Emirates",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "United Kingdom",	basic_rate: 10,	expedited_rate: 13,	one_day_rate: 16 },
  { country: "United States of America",	basic_rate: 10,	expedited_rate: 13,	one_day_rate: 16 },
  { country: "Uruguay",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Uzbekistan",	basic_rate: 30,	expedited_rate: 33,	one_day_rate: 36 },
  { country: "Vanuatu",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Venezuela",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Viet Nam",	basic_rate: 15,	expedited_rate: 18,	one_day_rate: 21 },
  { country: "Yemen",	basic_rate: 20,	expedited_rate: 23,	one_day_rate: 26 },
  { country: "Zambia",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 },
  { country: "Zimbabwe",	basic_rate: 25,	expedited_rate: 28,	one_day_rate: 31 }
];

module.exports = {
  seeds: seeds
}
