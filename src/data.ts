export interface user_data {
  _id: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
}

export const data: user_data[] = 
[
    {
      "_id": "62373554240169381a2b2b55",
      "isActive": false,
      "balance": "$2,081.97",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "green",
      "name": "Espinoza Herman",
      "gender": "male",
      "company": "ELEMANTRA",
      "email": "espinozaherman@elemantra.com",
      "phone": "+1 (897) 532-2292"
    },
    {
      "_id": "62373554a09a5e6c2156fa49",
      "isActive": false,
      "balance": "$1,023.99",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "brown",
      "name": "Lyons Strickland",
      "gender": "male",
      "company": "KOG",
      "email": "lyonsstrickland@kog.com",
      "phone": "+1 (853) 587-2831"
    },
    {
      "_id": "6237355412671edd044ace28",
      "isActive": true,
      "balance": "$1,613.71",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "blue",
      "name": "Lizzie Gray",
      "gender": "female",
      "company": "SOFTMICRO",
      "email": "lizziegray@softmicro.com",
      "phone": "+1 (820) 489-2879"
    },
    {
      "_id": "62373554331488d4a0ac0a31",
      "isActive": false,
      "balance": "$1,888.75",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "brown",
      "name": "Robles Weaver",
      "gender": "male",
      "company": "INFOTRIPS",
      "email": "roblesweaver@infotrips.com",
      "phone": "+1 (885) 464-3302"
    },
    {
      "_id": "62373554e38521874034fd2e",
      "isActive": false,
      "balance": "$1,513.09",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "green",
      "name": "Golden Curry",
      "gender": "male",
      "company": "ADORNICA",
      "email": "goldencurry@adornica.com",
      "phone": "+1 (988) 459-3899"
    }
];