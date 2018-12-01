"use strict";

var data = require( './prefix-data.json' );

var PhoneNumber = function(number){ 

    this.number = number.replace( /^\+?[10]/, '' ).replace( /[^0-9]/g, '' );

    this.areacode = (this.number.charAt(0) == '1' ? this.number.slice(1,4) : this.number.slice(0,3));
    this.prefix = (this.number.charAt(0) == '1' ? this.number.slice(4,7) : this.number.slice(3,6));
    this.last_four = (this.number.charAt(0) == '1' ? this.number.slice(7,11) : this.number.slice(6,10));
    if (data[this.areacode] && data[this.areacode][this.prefix]) {
        this.location = {
            city: data[this.areacode][this.prefix].city,
            state: {
                abbrv: data[this.areacode][this.prefix].state,
                name: statesByAbbrv[data[this.areacode][this.prefix].state]
            }
        };
        this.carrier = data[this.areacode][this.prefix].carrier;
    } else {
        this.location = null;
        this.carrier = null;
    }
    
};

PhoneNumber.prototype.format = function(style) {

    return this.number.replace(/[A]{3}/,this.areacode).replace(/[P]{3}/,this.prefix).replace(/[N]{4}/,this.last_four);
    
}

PhoneNumber.prototype.locate = function(type) {

    type = type || '';
    type = type.toLowerCase();

    if (this.location != null) { 
        if (!type || type == 'city, st') {
            return this.location.city+', '+this.location.state.abbrv;
        }
    
        if (type == 'city') {
            return this.location.city;
        }
    
        if (type == 'state') {
            return this.location.state.name;
        }
    
        if (type == 'st') {
            return this.location.state.abbrv;
        }
        return 'Invalid Location Format';
    } else {
        return null;
    }
    

}

const statesByAbbrv = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'DC': 'District of Columbia',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming'
};

module.exports = PhoneNumber;