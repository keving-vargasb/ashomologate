import {
  AdminsegAgent,
  AdminsegFrequency,
  AdminsegGender,
  AdminsegHeightUnit,
  AdminsegIdentityType,
  AdminsegPersonType,
  AdminsegPhoneType,
  AdminsegProduct,
  AdminsegRelationship,
  AdminsegWeightUnit
} from './interfaces';

const adminsegGenders: AdminsegGender[] = [
  {
    value: 4,
    name: 'Male',
    appID: 1
  },
  {
    value: 5,
    name: 'Female',
    appID: 2
  }
];

const adminsegProducts: AdminsegProduct[] = [
  {
    value: 3,
    name: 'Easy Term',
    appID: 'p1',
    plans: [
      {
        value: 9,
        name: 'Easy Term 10',
        coverage_years: 10
      },
      {
        value: 10,
        name: 'Easy Term 15',
        coverage_years: 15
      },
      {
        value: 11,
        name: 'Easy Term 20',
        coverage_years: 20
      },
      {
        value: 12,
        name: 'Easy Term 30',
        coverage_years: 30
      }
    ]
  }
];

const adminsegFrequencies: AdminsegFrequency[] = [
  {
    value: 10,
    name: 'Annual',
    payouts: 1,
    appID: 'ANNUAL'
  },
  {
    value: 15,
    name: 'Monthly',
    payouts: 12,
    appID: 'MONTHLY'
  },
  {
    value: 13,
    name: 'Quarterly',
    payouts: 4,
    appID: 'QUARTERLY'
  },
  {
    value: 11,
    name: 'Semiannual',
    payouts: 2,
    appID: 'SEMMIANNUALLY'
  }
];

const adminsegRelationships: AdminsegRelationship[] = [
  {
    value: 39,
    name: 'Aunt',
    appID: 1
  },
  {
    value: 32,
    name: 'Boyfriend',
    appID: 2
  },
  {
    value: 25,
    name: 'Brother',
    appID: 3
  },
  {
    value: 22,
    name: 'Brother in law',
    appID: 4
  },
  {
    value: 40,
    name: 'Business Partner',
    appID: 5
  },
  {
    value: 42,
    name: 'Collateral Assignment',
    appID: 6
  },
  {
    value: 28,
    name: 'Daughter',
    appID: 7
  },
  {
    value: 41,
    name: 'Employer',
    appID: 8
  },
  {
    value: 24,
    name: 'Ex-Spouse',
    appID: 9
  },
  {
    value: 35,
    name: 'Father',
    appID: 10
  },
  {
    value: 36,
    name: 'Father in law',
    appID: 11
  },
  {
    value: 20,
    name: 'Friendship',
    appID: 12
  },
  {
    value: 33,
    name: 'Girlfriend',
    appID: 13
  },
  {
    value: 31,
    name: 'Granddaughter',
    appID: 14
  },
  {
    value: 18,
    name: 'Grandfather',
    appID: 15
  },
  {
    value: 19,
    name: 'Grandmother',
    appID: 16
  },
  {
    value: 30,
    name: 'Grandson',
    appID: 17
  },
  {
    value: 29,
    name: 'Mother',
    appID: 18
  },
  {
    value: 37,
    name: 'Mother in law',
    appID: 19
  },
  {
    value: 34,
    name: 'Other',
    appID: 20
  },
  {
    value: 26,
    name: 'Sister',
    appID: 21
  },
  {
    value: 23,
    name: 'Sister in law',
    appID: 22
  },
  {
    value: 27,
    name: 'Son',
    appID: 23
  },
  {
    value: 21,
    name: 'Spouse',
    appID: 24
  },
  {
    value: 38,
    name: 'Uncle',
    appID: 25
  }
];

const adminsegPhoneTypes: AdminsegPhoneType[] = [
  {
    value: 3,
    name: 'Fax',
    appID: 3
  },
  {
    value: 2,
    name: 'Home',
    appID: 2
  },
  {
    value: 1,
    name: 'Mobile',
    appID: 1
  }
];

const adminsegIdentityTypes: AdminsegIdentityType[] = [
  {
    value: 1,
    name: 'ID',
    appID: 1
  },
  {
    value: 2,
    name: 'Passport',
    appID: 2
  },
  {
    value: 3,
    name: "Owner's ID",
    appID: 3
  },
  {
    value: 4,
    name: 'Legal Representative',
    appID: 4
  }
];

const adminsegPersonTypes: AdminsegPersonType[] = [
  {
    value: 'lp',
    name: 'legal_person',
    appID: 2
  },
  {
    value: 'rp',
    name: 'real_person',
    appID: 1
  }
];

const adminsegHeightUnits: AdminsegHeightUnit[] = [
  {
    value: 'M',
    name: 'Meters',
    appID: 1
  },
  {
    value: 'FT',
    name: 'Feet and Inch',
    appID: 2
  }
];

const adminsegWeightUnits: AdminsegWeightUnit[] = [
  {
    value: 'KG',
    name: 'Kilograms',
    appID: 1
  },
  {
    value: 'LBS',
    name: 'Pounds',
    appID: 2
  }
];

const adminsegAgents: AdminsegAgent[] = [
  {
    value: 504,
    full_name: 'Abente Meilike, Mirtha Graciela',
    code: 'AMX-341'
  },
  {
    value: 627,
    full_name: 'Abrahan Ricardo Pfeffer Almeida',
    code: 'AMX-464'
  },
  {
    value: 331,
    full_name: 'Acosta Claros, Alejandra Paola',
    code: 'AMX-168'
  },
  {
    value: 580,
    full_name: 'Adela Patricia Brenes Ross',
    code: 'AMX-417'
  },
  {
    value: 923,
    full_name: 'Adolfo Fay Colina Suels',
    code: 'AMX-760'
  },
  {
    value: 578,
    full_name: 'AGENCIA ASESORA PRODUCTORA DE SEGUROS RRO INSURANCE S.A.',
    code: 'AMX-415'
  },
  {
    value: 868,
    full_name: 'AHIA-DEL RIO',
    code: 'AMX-705'
  },
  {
    value: 685,
    full_name: 'Albert Maurice Lisbona ',
    code: 'AMX-522'
  },
  {
    value: 922,
    full_name: 'Alberto  Lecuona Madero',
    code: 'AMX-759'
  },
  {
    value: 582,
    full_name: 'Alberto Israel Benhayon Hernandez',
    code: 'AMX-419'
  },
  {
    value: 831,
    full_name: 'Alberto Jesus Burger Anato',
    code: 'AMX-668'
  },
  {
    value: 326,
    full_name: 'ALDECOA, MIKELANDER',
    code: 'AMX-163'
  },
  {
    value: 312,
    full_name: 'Alef Consulting, Llc',
    code: 'AMX-149'
  },
  {
    value: 944,
    full_name: 'Alejandro Antonio Sommi Cordero',
    code: 'AMX-781'
  },
  {
    value: 790,
    full_name: 'ALEXANDER DEL CARMEN REDONDO ROMERO',
    code: 'AMX-627'
  },
  {
    value: 796,
    full_name: 'Alexandra Christine Hill Cronembold',
    code: 'AMX-633'
  },
  {
    value: 766,
    full_name: 'Alexandra Mercedes pieve La Rosa',
    code: 'AMX-603'
  },
  {
    value: 631,
    full_name: 'Alfredo  Angeles ',
    code: 'AMX-468'
  },
  {
    value: 713,
    full_name: 'Alfredo Adrian Narvaez Ortiz',
    code: 'AMX-550'
  },
  {
    value: 684,
    full_name: 'Alfredo Alejandro Carrillo Aponte',
    code: 'AMX-521'
  },
  {
    value: 650,
    full_name: 'Algise  Betancourt ',
    code: 'AMX-487'
  },
  {
    value: 225,
    full_name: 'Alliance International Advisors',
    code: 'AMX-62'
  },
  {
    value: 441,
    full_name: 'ALLIEGRO ALVAREZ, RAFAEL ENRIQUE',
    code: 'AMX-278'
  },
  {
    value: 468,
    full_name: 'Altamirano, Gustavo Adolfo',
    code: 'AMX-305'
  },
  {
    value: 392,
    full_name: 'ALVARADO MUÑOZ, JENNY AISMAR',
    code: 'AMX-229'
  },
  {
    value: 57,
    full_name: 'Amedex Assurance Company',
    code: 'AMX'
  },
  {
    value: 746,
    full_name: 'Amelys janett Morales Quevedo',
    code: 'AMX-583'
  },
  {
    value: 390,
    full_name: 'AMPUERO FRANCO, MARIANELLA ALEXANDRA',
    code: 'AMX-227'
  },
  {
    value: 924,
    full_name: 'Ana  Fusella ',
    code: 'AMX-761'
  },
  {
    value: 693,
    full_name: 'Ana Esther Ventosinos Fossi',
    code: 'AMX-530'
  },
  {
    value: 884,
    full_name: 'ANA ISABEL  THIELEN ',
    code: 'AMX-721'
  },
  {
    value: 781,
    full_name: 'ANA PAULA MENDES DE BERETTA',
    code: 'AMX-618'
  },
  {
    value: 943,
    full_name: 'Andrea Cristina Jijon Chavez',
    code: 'AMX-780'
  },
  {
    value: 808,
    full_name: 'Andrea Isabel Baquerizo Calderón',
    code: 'AMX-645'
  },
  {
    value: 406,
    full_name: 'Andreina  Villasmil Arias',
    code: 'AMX-243'
  },
  {
    value: 646,
    full_name: 'ANDRES DAVID CHIRIBOGA ESPINOZA',
    code: 'AMX-483'
  },
  {
    value: 750,
    full_name: 'Andres eduardo Velasquez de pool',
    code: 'AMX-587'
  },
  {
    value: 840,
    full_name: 'Andres Fernando Parreño Paredes',
    code: 'AMX-677'
  },
  {
    value: 595,
    full_name: 'Andrey  Cruz Picado',
    code: 'AMX-432'
  },
  {
    value: 705,
    full_name: 'Angel Antonio Colmenares Hernandez',
    code: 'AMX-542'
  },
  {
    value: 857,
    full_name: 'ANGELA MARÍA ORDOÑEZ GALLEGO',
    code: 'AMX-694'
  },
  {
    value: 682,
    full_name: 'Angela Veronica Rojas Vasconez',
    code: 'AMX-519'
  },
  {
    value: 549,
    full_name: 'Angulo Pérez, Katherine Andrea',
    code: 'AMX-386'
  },
  {
    value: 903,
    full_name: 'Antonieta  Nunez de Lairet',
    code: 'AMX-740'
  },
  {
    value: 635,
    full_name: 'Antonieta Coromoto Castejon Marquez',
    code: 'AMX-472'
  },
  {
    value: 807,
    full_name: 'Antonio Galo Joniaux Bustamante',
    code: 'AMX-644'
  },
  {
    value: 515,
    full_name: 'Aragon Ortiz, Maria Graciela',
    code: 'AMX-352'
  },
  {
    value: 463,
    full_name: 'Arditti Bejarano, Efrain',
    code: 'AMX-300'
  },
  {
    value: 640,
    full_name: 'ARMANDO EMETERIO ALONSO RAMOS',
    code: 'AMX-477'
  },
  {
    value: 267,
    full_name: 'ARMENTA CRUZ, MARCO ANTONIO',
    code: 'AMX-104'
  },
  {
    value: 398,
    full_name: 'Arturo  Alpiste Castillo',
    code: 'AMX-235'
  },
  {
    value: 642,
    full_name: 'ARTURO EDUARDO EGUIGUREN EGUIGUREN',
    code: 'AMX-479'
  },
  {
    value: 671,
    full_name: 'Arwa Karim Qubain Khamis',
    code: 'AMX-508'
  },
  {
    value: 769,
    full_name: 'ASESORES Y CONSULTORES TECNICOS DE SEGUROS S. DE R.L.',
    code: 'AMX-606'
  },
  {
    value: 186,
    full_name: 'Asesores, Inc.',
    code: 'AMX-23'
  },
  {
    value: 330,
    full_name: 'Assaf Abu Allis, Vivian',
    code: 'AMX-167'
  },
  {
    value: 413,
    full_name: 'avendaño cisneros, maria del pilar',
    code: 'AMX-250'
  },
  {
    value: 628,
    full_name: 'Axis Brokers',
    code: 'AMX-465'
  },
  {
    value: 467,
    full_name: 'Bali Vergara, Jacqueline Maria',
    code: 'AMX-304'
  },
  {
    value: 899,
    full_name: 'Baluarte Cia. Ltda.',
    code: 'AMX-736'
  },
  {
    value: 465,
    full_name: 'BALZA TOMASSI, JUAN CARLOS',
    code: 'AMX-302'
  },
  {
    value: 508,
    full_name: 'BANDE GONZALEZ, RAMON LUIS',
    code: 'AMX-345'
  },
  {
    value: 275,
    full_name: 'BARAJAS ARMENTA, LUIS MARTIN',
    code: 'AMX-112'
  },
  {
    value: 513,
    full_name: 'Baraona Bolaños, Liana Mirey',
    code: 'AMX-350'
  },
  {
    value: 771,
    full_name: 'Barbara Sabine Diaz Bohm',
    code: 'AMX-608'
  },
  {
    value: 351,
    full_name: 'Barbeito Urbina, William Alexander',
    code: 'AMX-188'
  },
  {
    value: 528,
    full_name: 'BARRETO SILVERA, ALBERICO RAMÓN',
    code: 'AMX-365'
  },
  {
    value: 579,
    full_name: 'Beatriz  Hueck Enriquez',
    code: 'AMX-416'
  },
  {
    value: 866,
    full_name: 'BEATRIZ DE LOS ANGELES vizcaino HIDALGO',
    code: 'AMX-703'
  },
  {
    value: 827,
    full_name: 'BEATRIZ ELENA BARAZARTE DE NUÑEZ',
    code: 'AMX-664'
  },
  {
    value: 929,
    full_name: 'Beatriz Rosa Fratini Filippi',
    code: 'AMX-766'
  },
  {
    value: 211,
    full_name: 'BENCHIMOL, JOHNY',
    code: 'AMX-48'
  },
  {
    value: 447,
    full_name: 'Benedetti Punceles, Alfredo',
    code: 'AMX-284'
  },
  {
    value: 313,
    full_name: 'Benefits',
    code: 'AMX-150'
  },
  {
    value: 838,
    full_name: 'Benito  Acevedo ',
    code: 'AMX-675'
  },
  {
    value: 877,
    full_name: 'BEYTZY CAROLINA MACHUCA MONSALVE',
    code: 'AMX-714'
  },
  {
    value: 288,
    full_name: 'Bistre Michan, Helel',
    code: 'AMX-125'
  },
  {
    value: 537,
    full_name: 'BITAR RINCON, ELVIRA ROSA',
    code: 'AMX-374'
  },
  {
    value: 449,
    full_name: 'BLAICHMAN, DANILO',
    code: 'AMX-286'
  },
  {
    value: 908,
    full_name: 'BLANCA ELENA SALAZAR ESCALANTE',
    code: 'AMX-745'
  },
  {
    value: 391,
    full_name: 'Bojanic Sornoza, Mirko Danilo',
    code: 'AMX-228'
  },
  {
    value: 886,
    full_name: 'Bolivar  Mendieta Diaz',
    code: 'AMX-723'
  },
  {
    value: 363,
    full_name: 'Bosque Oropesa, José Guillermo',
    code: 'AMX-200'
  },
  {
    value: 489,
    full_name: 'Botran Lancho, Venancio',
    code: 'AMX-326'
  },
  {
    value: 355,
    full_name: 'braverman bronsoler, susana',
    code: 'AMX-192'
  },
  {
    value: 383,
    full_name: 'brito BASTIDAS, betzabeth',
    code: 'AMX-220'
  },
  {
    value: 320,
    full_name: 'Brito Nassar, Roger Adolfo',
    code: 'AMX-157'
  },
  {
    value: 219,
    full_name: 'Brokers Financial',
    code: 'AMX-56'
  },
  {
    value: 741,
    full_name: 'BrunoYannuzzelly',
    code: 'AMX-578'
  },
  {
    value: 265,
    full_name: 'BULNES GOMEZ, MANUEL',
    code: 'AMX-102'
  },
  {
    value: 473,
    full_name: 'BUONTEMPO, DANIEL RAUCCI',
    code: 'AMX-310'
  },
  {
    value: 421,
    full_name: 'Cabrera Gordillo, David Estuardo',
    code: 'AMX-258'
  },
  {
    value: 405,
    full_name: 'CACHAY VILLEGAS, SERGIO BALTAZAR',
    code: 'AMX-242'
  },
  {
    value: 466,
    full_name: 'Caldera Baca, Camilo Alfredo',
    code: 'AMX-303'
  },
  {
    value: 806,
    full_name: 'Camilo  Pinzon Posada',
    code: 'AMX-643'
  },
  {
    value: 315,
    full_name: 'Campos Cañas, Javier Alberto',
    code: 'AMX-152'
  },
  {
    value: 300,
    full_name: 'Canales, Jose M.',
    code: 'AMX-137'
  },
  {
    value: 300,
    full_name: 'Canales, Jose M.',
    code: 'AMX-137'
  },
  {
    value: 381,
    full_name: 'CANTU VILLARREAL, CLEO DE JESUS',
    code: 'AMX-218'
  },
  {
    value: 311,
    full_name: 'CAPITAL DRIVER, S.A.C.',
    code: 'AMX-148'
  },
  {
    value: 726,
    full_name: 'Caribbean Assurance Brokers Limited',
    code: 'AMX-563'
  },
  {
    value: 602,
    full_name: 'Caribbean Brokers Life And Health',
    code: 'AMX-439'
  },
  {
    value: 736,
    full_name: 'Carla glorimar Maldonado martinez',
    code: 'AMX-573'
  },
  {
    value: 562,
    full_name: 'Carlos  Reyes ',
    code: 'AMX-399'
  },
  {
    value: 709,
    full_name: 'CARLOS ALBERTO BOISSIERE ABRAHAN',
    code: 'AMX-546'
  },
  {
    value: 714,
    full_name: 'CARLOS ALBERTO SILVA FLORES',
    code: 'AMX-551'
  },
  {
    value: 873,
    full_name: 'Carlos Eduardo Bustillos Aranguren',
    code: 'AMX-710'
  },
  {
    value: 833,
    full_name: 'Carlos Eduardo Diaz Piña',
    code: 'AMX-670'
  },
  {
    value: 598,
    full_name: 'Carlos Eduardo Petit Peña',
    code: 'AMX-435'
  },
  {
    value: 871,
    full_name: 'Carlos Enrique Hinojosa Gonzalez',
    code: 'AMX-708'
  },
  {
    value: 926,
    full_name: 'Carlos Gonzalo Bano Calderon',
    code: 'AMX-763'
  },
  {
    value: 891,
    full_name: 'Carlos Joaquin Malo Pozo',
    code: 'AMX-728'
  },
  {
    value: 630,
    full_name: 'CARLOS RAFAEL HERNANDEZ CAMPANI',
    code: 'AMX-467'
  },
  {
    value: 826,
    full_name: 'CARMELO ENRIQUE Redondo Romero',
    code: 'AMX-663'
  },
  {
    value: 623,
    full_name: 'carmen maria murua hegel',
    code: 'AMX-460'
  },
  {
    value: 817,
    full_name: 'CARMEN PILAR RODRIGUEZ PUEBLITA',
    code: 'AMX-654'
  },
  {
    value: 532,
    full_name: 'CARMI LEWIN, PAULO EMILIO',
    code: 'AMX-369'
  },
  {
    value: 485,
    full_name: 'Castellanos Montiel, Roberto Enrique',
    code: 'AMX-322'
  },
  {
    value: 371,
    full_name: 'CASTRO MENDIVIL QUEVEDO, MARIA ROCIO DEL PILAR',
    code: 'AMX-208'
  },
  {
    value: 603,
    full_name: 'Cecilia  Baca Hayn',
    code: 'AMX-440'
  },
  {
    value: 367,
    full_name: 'Celis Regalado, Hector Gustavo',
    code: 'AMX-204'
  },
  {
    value: 469,
    full_name: 'CENANI, CONSULTORA CENANI',
    code: 'AMX-306'
  },
  {
    value: 786,
    full_name: 'CERTUS AGENTE DE SEGUROS Y DE FIANZAS, S.A. DE C.V.',
    code: 'AMX-623'
  },
  {
    value: 867,
    full_name: 'Cesar Alfonso Sevilla del Pozo',
    code: 'AMX-704'
  },
  {
    value: 656,
    full_name: 'Cesar Eugenio Mejias Figueredo',
    code: 'AMX-493'
  },
  {
    value: 706,
    full_name: 'CESAR HUMBERTO RODRIGUEZ CABELLO',
    code: 'AMX-543'
  },
  {
    value: 555,
    full_name: 'CGLFINS.COM',
    code: 'AMX-392'
  },
  {
    value: 670,
    full_name: 'Challenger International',
    code: 'AMX-507'
  },
  {
    value: 373,
    full_name: 'CHAPA CALVILLO, JUAN ANTONIO',
    code: 'AMX-210'
  },
  {
    value: 415,
    full_name: 'CHOICE INTERNATIONAL BROKERS LLS',
    code: 'AMX-252'
  },
  {
    value: 590,
    full_name: 'Christian Jacobo Del Pino Figueroa',
    code: 'AMX-427'
  },
  {
    value: 422,
    full_name: 'Ciniglio, Maria Elisa',
    code: 'AMX-259'
  },
  {
    value: 461,
    full_name: 'Cisneros Gonzalez, Luis Alberto',
    code: 'AMX-298'
  },
  {
    value: 762,
    full_name: 'Clarisa Guadalupe Coello Herdocia',
    code: 'AMX-599'
  },
  {
    value: 860,
    full_name: 'Claudia  Maggi Moro',
    code: 'AMX-697'
  },
  {
    value: 759,
    full_name: 'Claudia Alejandra Brito Zavala',
    code: 'AMX-596'
  },
  {
    value: 747,
    full_name: 'Claudia Esperanza Aguilar Mateus',
    code: 'AMX-584'
  },
  {
    value: 837,
    full_name: 'Claudia Maria Antonia Gottschalk Fucs',
    code: 'AMX-674'
  },
  {
    value: 828,
    full_name: "CLAUDIA PATRICIA FERRO DE D'ORAZIO",
    code: 'AMX-665'
  },
  {
    value: 586,
    full_name: 'Claudio Arturo Torres Ortiz',
    code: 'AMX-423'
  },
  {
    value: 701,
    full_name: 'Claudio Miguel MEJIA Bonorino',
    code: 'AMX-538'
  },
  {
    value: 638,
    full_name: 'CLODIS VASQUEZ',
    code: 'AMX-475'
  },
  {
    value: 881,
    full_name: 'CLOUT ENHANCED INSURANCE SOLUTIONS LLC',
    code: 'AMX-718'
  },
  {
    value: 365,
    full_name: 'Cma Latam Llc',
    code: 'AMX-202'
  },
  {
    value: 261,
    full_name: 'COHEN BEKHOR, LUIS',
    code: 'AMX-98'
  },
  {
    value: 261,
    full_name: 'COHEN BEKHOR, LUIS',
    code: 'AMX-98'
  },
  {
    value: 527,
    full_name: 'COLATOSTI DE SOUSA, ANABEL MARINA',
    code: 'AMX-364'
  },
  {
    value: 416,
    full_name: 'CONASESA',
    code: 'AMX-253'
  },
  {
    value: 543,
    full_name: 'Conceicao sant Anna, Andre DA',
    code: 'AMX-380'
  },
  {
    value: 179,
    full_name: 'Copassa',
    code: 'AMX-16'
  },
  {
    value: 179,
    full_name: 'Copassa',
    code: 'AMX-16'
  },
  {
    value: 393,
    full_name: 'Cordero lugo, Rafael angel',
    code: 'AMX-230'
  },
  {
    value: 519,
    full_name: 'Cordero Velasquez, Ernesto Carlos',
    code: 'AMX-356'
  },
  {
    value: 550,
    full_name: 'Cortes de Trujillo, Carmen Adriana',
    code: 'AMX-387'
  },
  {
    value: 535,
    full_name: 'cortissoz Ospino, Cesar Jose',
    code: 'AMX-372'
  },
  {
    value: 577,
    full_name: 'Cristobal  Alvelo ',
    code: 'AMX-414'
  },
  {
    value: 516,
    full_name: 'Cruz Picado, Andrey Cruz',
    code: 'AMX-353'
  },
  {
    value: 814,
    full_name: 'CRUZANA  ORTEGA DE OLIVO',
    code: 'AMX-651'
  },
  {
    value: 348,
    full_name: 'Cueva leal, Sergio',
    code: 'AMX-185'
  },
  {
    value: 306,
    full_name: 'Cunapro Financial Services Inc.',
    code: 'AMX-143'
  },
  {
    value: 776,
    full_name: 'Cynthia Ruth Posner Smolin',
    code: 'AMX-613'
  },
  {
    value: 403,
    full_name: 'Dahik Ariss, Alexandra Alexandra',
    code: 'AMX-240'
  },
  {
    value: 883,
    full_name: 'DAISY BEATRIZ  MILA DE LA ROCA ',
    code: 'AMX-720'
  },
  {
    value: 620,
    full_name: 'Daisy Josefina Salazar Yegues',
    code: 'AMX-457'
  },
  {
    value: 920,
    full_name: 'Daniel Antonio Armenta Davila',
    code: 'AMX-757'
  },
  {
    value: 777,
    full_name: 'DANIEL EDUARDO BOBADILLA HENRIQUEZ',
    code: 'AMX-614'
  },
  {
    value: 914,
    full_name: 'DANIELA  GOMES PERCOPE NASCIMENTO',
    code: 'AMX-751'
  },
  {
    value: 732,
    full_name: 'Daniela Alexandra Galue Garcia',
    code: 'AMX-569'
  },
  {
    value: 666,
    full_name: 'Dario  Perez Ramos',
    code: 'AMX-503'
  },
  {
    value: 583,
    full_name: 'David  Artee Sitten',
    code: 'AMX-420'
  },
  {
    value: 540,
    full_name: 'De Abreu Rodriguez, Maribel',
    code: 'AMX-377'
  },
  {
    value: 686,
    full_name: 'DE BRUS',
    code: 'AMX-523'
  },
  {
    value: 501,
    full_name: 'DE LA GARZA GALLARDO, LUIS',
    code: 'AMX-338'
  },
  {
    value: 437,
    full_name: 'de lima Corvino, Oscar Antonio',
    code: 'AMX-274'
  },
  {
    value: 523,
    full_name: 'De Rada Carrillo, Humberto Marcelo',
    code: 'AMX-360'
  },
  {
    value: 788,
    full_name: 'De Seguro Hablamos',
    code: 'AMX-625'
  },
  {
    value: 880,
    full_name: 'Deguin  Robles ',
    code: 'AMX-717'
  },
  {
    value: 414,
    full_name: 'DEL BUEY DE DIEGO, LUIS',
    code: 'AMX-251'
  },
  {
    value: 561,
    full_name: 'Del fresno, Roberto Alfredo',
    code: 'AMX-398'
  },
  {
    value: 610,
    full_name: 'Deloway',
    code: 'AMX-447'
  },
  {
    value: 697,
    full_name: 'DIANA LORENA BERMEA MONTEMAYOR',
    code: 'AMX-534'
  },
  {
    value: 900,
    full_name: 'Diana Patricia Duque Campillo',
    code: 'AMX-737'
  },
  {
    value: 909,
    full_name: 'Diego Alberto Baez van Maanen',
    code: 'AMX-746'
  },
  {
    value: 556,
    full_name: 'Diversified Life Solutions Brokers Ltd',
    code: 'AMX-393'
  },
  {
    value: 343,
    full_name: 'DLeon Insurance',
    code: 'AMX-180'
  },
  {
    value: 229,
    full_name: 'Dominguez Gonzalez, Rodrigo',
    code: 'AMX-66'
  },
  {
    value: 483,
    full_name: 'dupret van den Bossche, Erik',
    code: 'AMX-320'
  },
  {
    value: 700,
    full_name: 'Ecshy Federico Castro Toro',
    code: 'AMX-537'
  },
  {
    value: 500,
    full_name: 'EDDIR CUELLAR',
    code: 'AMX-337'
  },
  {
    value: 856,
    full_name: 'EDGAR FERNANDO CORONEL VASQUEZ',
    code: 'AMX-693'
  },
  {
    value: 639,
    full_name: 'Edgard Adolfo Urdaneta Pernia',
    code: 'AMX-476'
  },
  {
    value: 655,
    full_name: 'Edith del Carmen Correa Narvaez',
    code: 'AMX-492'
  },
  {
    value: 704,
    full_name: 'eduardo  villegas ',
    code: 'AMX-541'
  },
  {
    value: 672,
    full_name: 'EDUARDO RAFAEL PEÑA AYALA',
    code: 'AMX-509'
  },
  {
    value: 430,
    full_name: 'EGM & Asociados/ BISSA',
    code: 'AMX-267'
  },
  {
    value: 570,
    full_name: 'Elard Enrique Ramirez Wadsworth',
    code: 'AMX-407'
  },
  {
    value: 324,
    full_name: 'ELCO Advisors S.A.',
    code: 'AMX-161'
  },
  {
    value: 510,
    full_name: 'Elias Conterno, Luz Maria',
    code: 'AMX-347'
  },
  {
    value: 636,
    full_name: 'Elvin Ramon Gutierrez Reynoza',
    code: 'AMX-473'
  },
  {
    value: 636,
    full_name: 'Elvin Ramon Gutierrez Reynoza',
    code: 'AMX-473'
  },
  {
    value: 190,
    full_name: 'Emilio  Bert Del Valle ',
    code: 'AMX-27'
  },
  {
    value: 895,
    full_name: 'ENRIQUE ANGEL  GARCIA BENCOMO ',
    code: 'AMX-732'
  },
  {
    value: 591,
    full_name: 'Erick Fidel Diaz Garcia',
    code: 'AMX-428'
  },
  {
    value: 662,
    full_name: 'Ernesto Abraham Rodriguez Munoz',
    code: 'AMX-499'
  },
  {
    value: 382,
    full_name: 'Espinel Martinez, Marcos A',
    code: 'AMX-219'
  },
  {
    value: 432,
    full_name: 'Estrada de Arevalo, Carmen',
    code: 'AMX-269'
  },
  {
    value: 588,
    full_name: 'EVELYN JOSEFINA ALCALA GUEVARA',
    code: 'AMX-425'
  },
  {
    value: 669,
    full_name: 'Excellence Asesores',
    code: 'AMX-506'
  },
  {
    value: 676,
    full_name: 'Excellence Asesores',
    code: 'AMX-513'
  },
  {
    value: 934,
    full_name: 'Fabiola  Mendoza Mayz',
    code: 'AMX-771'
  },
  {
    value: 198,
    full_name: 'Fabrissin, Ricardo',
    code: 'AMX-35'
  },
  {
    value: 198,
    full_name: 'Fabrissin, Ricardo',
    code: 'AMX-35'
  },
  {
    value: 520,
    full_name: 'Fairbarn Enterprises',
    code: 'AMX-357'
  },
  {
    value: 539,
    full_name: 'Falcon Chirinos, Carla Andreina',
    code: 'AMX-376'
  },
  {
    value: 440,
    full_name: 'Family Green Capital INC',
    code: 'AMX-277'
  },
  {
    value: 380,
    full_name: 'FEAUGAS MATA, JOSE JOAQUIN',
    code: 'AMX-217'
  },
  {
    value: 233,
    full_name: 'Fernandez Marcos, Maria Del Carmen',
    code: 'AMX-70'
  },
  {
    value: 233,
    full_name: 'Fernandez Marcos, Maria Del Carmen',
    code: 'AMX-70'
  },
  {
    value: 310,
    full_name: 'FERNANDEZ, IVAN N',
    code: 'AMX-147'
  },
  {
    value: 664,
    full_name: 'FERNANDO  QUIROZ MADRIGAL',
    code: 'AMX-501'
  },
  {
    value: 269,
    full_name: 'Ferreti Zarate, Armando Salvador',
    code: 'AMX-106'
  },
  {
    value: 269,
    full_name: 'Ferreti Zarate, Armando Salvador',
    code: 'AMX-106'
  },
  {
    value: 166,
    full_name: 'Five Partners Advisors, Sa',
    code: 'AMX-3'
  },
  {
    value: 166,
    full_name: 'Five Partners Advisors, Sa',
    code: 'AMX-3'
  },
  {
    value: 474,
    full_name: 'Forrisi Villalba, Ruth Maria',
    code: 'AMX-311'
  },
  {
    value: 879,
    full_name: 'FORTUNEE  DARWICH AGAMI',
    code: 'AMX-716'
  },
  {
    value: 401,
    full_name: 'Fourth A, Llc',
    code: 'AMX-238'
  },
  {
    value: 616,
    full_name: 'Francesaad LLC',
    code: 'AMX-453'
  },
  {
    value: 716,
    full_name: 'FRANCIS DEL CARMEN PEREZ CASTILLO',
    code: 'AMX-553'
  },
  {
    value: 813,
    full_name: 'FRANCIS MERCEDES GONZALEZ MENDOZA',
    code: 'AMX-650'
  },
  {
    value: 674,
    full_name: 'Francis Tibisay Tibisay Goyo Flores',
    code: 'AMX-511'
  },
  {
    value: 708,
    full_name: 'Francisco  Espinoza ',
    code: 'AMX-545'
  },
  {
    value: 855,
    full_name: 'FRANCISCO  VALLEJO Perez',
    code: 'AMX-692'
  },
  {
    value: 739,
    full_name: 'Francisco Javier Vasquez Freyle',
    code: 'AMX-576'
  },
  {
    value: 803,
    full_name: 'Frank ROBERTO Gonzalez CLEMENTE',
    code: 'AMX-640'
  },
  {
    value: 932,
    full_name: 'Freddy Omar Acevedo Villaldo',
    code: 'AMX-769'
  },
  {
    value: 668,
    full_name: 'Futura Risk Manangement',
    code: 'AMX-505'
  },
  {
    value: 384,
    full_name: 'GA BROKERS LLC',
    code: 'AMX-221'
  },
  {
    value: 907,
    full_name: 'Gabriel Armando Vivas González',
    code: 'AMX-744'
  },
  {
    value: 887,
    full_name: 'GABRIELA JASMIN ZAMBRANO VERA',
    code: 'AMX-724'
  },
  {
    value: 564,
    full_name: 'Gabriela Michelle Rodriguez Velasco',
    code: 'AMX-401'
  },
  {
    value: 396,
    full_name: 'GALARZA FREILE, FREDDY RODRIGO',
    code: 'AMX-233'
  },
  {
    value: 444,
    full_name: 'GALETH RAMIREZ, JANETH PATRICIA',
    code: 'AMX-281'
  },
  {
    value: 683,
    full_name: 'Galia MARIETA bustamante CANTOS',
    code: 'AMX-520'
  },
  {
    value: 455,
    full_name: 'GAMBUS ZAMBRANO, MARCOS RAFAEL',
    code: 'AMX-292'
  },
  {
    value: 488,
    full_name: 'Garcia Espinosa, Rodolfo Alfonso',
    code: 'AMX-325'
  },
  {
    value: 224,
    full_name: 'Garcia Moreno Meade, Rosario',
    code: 'AMX-61'
  },
  {
    value: 224,
    full_name: 'Garcia Moreno Meade, Rosario',
    code: 'AMX-61'
  },
  {
    value: 438,
    full_name: 'Garcia, Marian',
    code: 'AMX-275'
  },
  {
    value: 358,
    full_name: 'Garnier Mujica, Dimas Enrique',
    code: 'AMX-195'
  },
  {
    value: 256,
    full_name: 'GARZA CHIMES, JAVIER',
    code: 'AMX-93'
  },
  {
    value: 256,
    full_name: 'GARZA CHIMES, JAVIER',
    code: 'AMX-93'
  },
  {
    value: 273,
    full_name: 'Garzon, Jacobo',
    code: 'AMX-110'
  },
  {
    value: 905,
    full_name: 'Germán Wilfredo Palacios, Corredor de Seguros',
    code: 'AMX-742'
  },
  {
    value: 362,
    full_name: 'Gervitz Lozowsky, Michelle Caren',
    code: 'AMX-199'
  },
  {
    value: 761,
    full_name: 'Gisela  Haiek Batech',
    code: 'AMX-598'
  },
  {
    value: 756,
    full_name: 'Gladys  Alvarez ',
    code: 'AMX-593'
  },
  {
    value: 522,
    full_name: 'GLOBAL CARE GROUP LLC',
    code: 'AMX-359'
  },
  {
    value: 621,
    full_name: 'GLOBAL GROWTH CONSULTING',
    code: 'AMX-458'
  },
  {
    value: 509,
    full_name: 'Global Insurance Agency, Inc.',
    code: 'AMX-346'
  },
  {
    value: 600,
    full_name: 'Global Solutions Service LLC',
    code: 'AMX-437'
  },
  {
    value: 402,
    full_name: 'Global Wealth Solutions Inc',
    code: 'AMX-239'
  },
  {
    value: 165,
    full_name: 'Globalitas Group, Llc.',
    code: 'AMX-2'
  },
  {
    value: 165,
    full_name: 'Globalitas Group, Llc.',
    code: 'AMX-2'
  },
  {
    value: 912,
    full_name: 'gloria Eugenia Sierra Diosa',
    code: 'AMX-749'
  },
  {
    value: 511,
    full_name: 'GOLDEN PEGASUS LTD',
    code: 'AMX-348'
  },
  {
    value: 521,
    full_name: 'Gomes Jasmins, Americo Jose',
    code: 'AMX-358'
  },
  {
    value: 521,
    full_name: 'Gomes Jasmins, Americo Jose',
    code: 'AMX-358'
  },
  {
    value: 376,
    full_name: 'gomez sanchez GOMEZ, susana',
    code: 'AMX-213'
  },
  {
    value: 423,
    full_name: 'Gomez Vaca, Francisco Javier',
    code: 'AMX-260'
  },
  {
    value: 347,
    full_name: 'GONZALEZ Bustos, ORLANDO Adolfo',
    code: 'AMX-184'
  },
  {
    value: 482,
    full_name: 'González Calle, catalina',
    code: 'AMX-319'
  },
  {
    value: 559,
    full_name: 'GONZALEZ MORALES, LUIS ALBERTO',
    code: 'AMX-396'
  },
  {
    value: 427,
    full_name: 'GONZALEZ MORALES, RUBEN',
    code: 'AMX-264'
  },
  {
    value: 818,
    full_name: 'Gonzalo Ignacio Trujillo Maldonado',
    code: 'AMX-655'
  },
  {
    value: 431,
    full_name: 'GP GROUP INTERNATIONAL, C.A.',
    code: 'AMX-268'
  },
  {
    value: 936,
    full_name: 'GREAT LAKES CONSULTING INC',
    code: 'AMX-773'
  },
  {
    value: 633,
    full_name: 'Greenvalley Enterprises Inc',
    code: 'AMX-470'
  },
  {
    value: 196,
    full_name: 'Grupe, Gustavo Alberto',
    code: 'AMX-33'
  },
  {
    value: 196,
    full_name: 'Grupe, Gustavo Alberto',
    code: 'AMX-33'
  },
  {
    value: 778,
    full_name: 'GRUPO ELITE AGENTE DE SEGUROS SA DE CV',
    code: 'AMX-615'
  },
  {
    value: 773,
    full_name: 'Grupo RM Mendoza',
    code: 'AMX-610'
  },
  {
    value: 232,
    full_name: 'Guadalupe  Ponce De Leon Gonzalez ',
    code: 'AMX-69'
  },
  {
    value: 232,
    full_name: 'Guadalupe  Ponce De Leon Gonzalez ',
    code: 'AMX-69'
  },
  {
    value: 524,
    full_name: 'Guedez Deseda, Gerardo Enrique',
    code: 'AMX-361'
  },
  {
    value: 286,
    full_name: 'Guido Jalil Perna',
    code: 'AMX-123'
  },
  {
    value: 286,
    full_name: 'Guido Jalil Perna',
    code: 'AMX-123'
  },
  {
    value: 495,
    full_name: 'Guifarro Rosales, Aida Elizabeth',
    code: 'AMX-332'
  },
  {
    value: 783,
    full_name: 'GUILLERMO  MARTINEZ MANSILLA',
    code: 'AMX-620'
  },
  {
    value: 757,
    full_name: 'guillermo Ariel De Bernardo Urus',
    code: 'AMX-594'
  },
  {
    value: 573,
    full_name: 'Gustavo Enrique Contreras Santaromita',
    code: 'AMX-410'
  },
  {
    value: 722,
    full_name: 'Gustavo Heli Fernandez Fernandez',
    code: 'AMX-559'
  },
  {
    value: 364,
    full_name: 'Gutierrez Garcia, Aida Cora',
    code: 'AMX-201'
  },
  {
    value: 366,
    full_name: 'Guzman Martinez, Miguel Francisco',
    code: 'AMX-203'
  },
  {
    value: 222,
    full_name: 'Hamrick, Tony',
    code: 'AMX-59'
  },
  {
    value: 174,
    full_name: 'Hazkel Puterman & Asociados',
    code: 'AMX-11'
  },
  {
    value: 174,
    full_name: 'Hazkel Puterman & Asociados',
    code: 'AMX-11'
  },
  {
    value: 445,
    full_name: 'HEC Asesores',
    code: 'AMX-282'
  },
  {
    value: 497,
    full_name: 'HEC Asesores',
    code: 'AMX-334'
  },
  {
    value: 470,
    full_name: 'HEC&Asesores S.A.C.',
    code: 'AMX-307'
  },
  {
    value: 585,
    full_name: 'Hector  Kleemann Rodriguez',
    code: 'AMX-422'
  },
  {
    value: 913,
    full_name: 'hector jose maldonado duran',
    code: 'AMX-750'
  },
  {
    value: 566,
    full_name: 'Hector Luis Narvaez de Lima',
    code: 'AMX-403'
  },
  {
    value: 498,
    full_name: 'Hernandez Romero, Eduardo Ernesto',
    code: 'AMX-335'
  },
  {
    value: 486,
    full_name: 'HERNANDEZ YEPEZ, ALVARO FERNANDO',
    code: 'AMX-323'
  },
  {
    value: 316,
    full_name: 'Herrera Osorio, Ruben Enrique',
    code: 'AMX-153'
  },
  {
    value: 744,
    full_name: 'HOLDING GROUP LOPEZ LEON',
    code: 'AMX-581'
  },
  {
    value: 545,
    full_name: 'HOLMES Piedrabuena, PERCIVAL William',
    code: 'AMX-382'
  },
  {
    value: 889,
    full_name: 'HOMERO  LOPEZ GARRIDO',
    code: 'AMX-726'
  },
  {
    value: 317,
    full_name: 'Huete, Blass',
    code: 'AMX-154'
  },
  {
    value: 563,
    full_name: 'Hugo Ferreira de freitas ',
    code: 'AMX-400'
  },
  {
    value: 723,
    full_name: 'IA Seguros',
    code: 'AMX-560'
  },
  {
    value: 658,
    full_name: 'IAN MARTINSON',
    code: 'AMX-495'
  },
  {
    value: 258,
    full_name: 'IBARRONDO PEREZ, ALEJANDRA',
    code: 'AMX-95'
  },
  {
    value: 258,
    full_name: 'IBARRONDO PEREZ, ALEJANDRA',
    code: 'AMX-95'
  },
  {
    value: 645,
    full_name: 'ICG COMPANY S.A.',
    code: 'AMX-482'
  },
  {
    value: 541,
    full_name: 'InConServ, Inc',
    code: 'AMX-378'
  },
  {
    value: 720,
    full_name: 'IÑGO JOSE GONZALEZ DIAZ BARREIRO',
    code: 'AMX-557'
  },
  {
    value: 657,
    full_name: 'INTERBROKERAGE INSURANCE GROUP',
    code: 'AMX-494'
  },
  {
    value: 606,
    full_name: 'Interbrokers Of America, LLC',
    code: 'AMX-443'
  },
  {
    value: 910,
    full_name: 'Intercol Cobranza y Seguros S.A.S',
    code: 'AMX-747'
  },
  {
    value: 177,
    full_name: 'International Marketing Corp. Ltd.',
    code: 'AMX-14'
  },
  {
    value: 172,
    full_name: 'International Wealth Protection',
    code: 'AMX-9'
  },
  {
    value: 875,
    full_name: 'International Welath Protection',
    code: 'AMX-712'
  },
  {
    value: 699,
    full_name: 'Inversiones Adoisa 1054 C.A.',
    code: 'AMX-536'
  },
  {
    value: 529,
    full_name: 'Iraheta Palomo, Carlos Alfredo',
    code: 'AMX-366'
  },
  {
    value: 802,
    full_name: 'ISABEL CECILIA BONETTI DE PUMA',
    code: 'AMX-639'
  },
  {
    value: 731,
    full_name: 'Isabel Cristina  Romero Moreno ',
    code: 'AMX-568'
  },
  {
    value: 592,
    full_name: 'IVAN EMILIO BORREGO GOMEZ',
    code: 'AMX-429'
  },
  {
    value: 490,
    full_name: 'Jacob Playa Del Carmen Stavchansky ',
    code: 'AMX-327'
  },
  {
    value: 892,
    full_name: 'Jacqueline Vanessa Hofmeister ',
    code: 'AMX-729'
  },
  {
    value: 459,
    full_name: 'Jalil Brokers',
    code: 'AMX-296'
  },
  {
    value: 681,
    full_name: 'JAMES  ECHEVERRIA ',
    code: 'AMX-518'
  },
  {
    value: 836,
    full_name: 'Jason Brent Wagner ',
    code: 'AMX-673'
  },
  {
    value: 634,
    full_name: 'Javier  Meza ',
    code: 'AMX-471'
  },
  {
    value: 624,
    full_name: 'JAVIER  SALDIVAR RAMIREZ',
    code: 'AMX-461'
  },
  {
    value: 927,
    full_name: 'JB International Insurance',
    code: 'AMX-764'
  },
  {
    value: 751,
    full_name: 'Jenny  Bertin ',
    code: 'AMX-588'
  },
  {
    value: 626,
    full_name: 'JENNY ELIZABETH GUZMAN PROAÑO',
    code: 'AMX-463'
  },
  {
    value: 605,
    full_name: 'Jessica Nazareth Ramirez Dinarte',
    code: 'AMX-442'
  },
  {
    value: 581,
    full_name: 'Jesus  Contreras ',
    code: 'AMX-418'
  },
  {
    value: 721,
    full_name: 'Jesus  Uzcategui Uzcategui',
    code: 'AMX-558'
  },
  {
    value: 933,
    full_name: 'JESUS HUMBERTO ZAMBRANO PEREZ',
    code: 'AMX-770'
  },
  {
    value: 940,
    full_name: 'Jhonny Jose Lezama ',
    code: 'AMX-777'
  },
  {
    value: 692,
    full_name: 'Johan Leal',
    code: 'AMX-529'
  },
  {
    value: 611,
    full_name: 'Johana Esmeralda Blandino Fernández',
    code: 'AMX-448'
  },
  {
    value: 760,
    full_name: 'JORGE  ISGRO FERNANDEZ',
    code: 'AMX-597'
  },
  {
    value: 690,
    full_name: 'JORGE ALFONSO SANZ CERRADA',
    code: 'AMX-527'
  },
  {
    value: 625,
    full_name: 'jorge andres iniguez dagnino',
    code: 'AMX-462'
  },
  {
    value: 850,
    full_name: 'Jorge Antonio Baquerizo Muñoz',
    code: 'AMX-687'
  },
  {
    value: 869,
    full_name: 'JORGE LUIS EGAS CAVAGNARO',
    code: 'AMX-706'
  },
  {
    value: 742,
    full_name: 'JOSE ALFREDO RIVAS UBILLUS',
    code: 'AMX-579'
  },
  {
    value: 938,
    full_name: 'Jose Alirio Garcia Molina',
    code: 'AMX-775'
  },
  {
    value: 387,
    full_name: 'Jose Antonio Lacayo Sevilla',
    code: 'AMX-224'
  },
  {
    value: 654,
    full_name: 'Jose Antonio Olivares ',
    code: 'AMX-491'
  },
  {
    value: 596,
    full_name: 'JOSE GABRIEL PAEZ PIÑANGO',
    code: 'AMX-433'
  },
  {
    value: 930,
    full_name: 'JOSE JAIME GARCES JARAMILLO',
    code: 'AMX-767'
  },
  {
    value: 805,
    full_name: 'Jose Joaquin Escalona Arrieche',
    code: 'AMX-642'
  },
  {
    value: 567,
    full_name: 'JOSE LUIS  GAVIRIA NARVAEZ',
    code: 'AMX-404'
  },
  {
    value: 812,
    full_name: 'Jose Luis Cobos Delfin',
    code: 'AMX-649'
  },
  {
    value: 614,
    full_name: 'JOSE MANUEL MARTINEZ STENGER',
    code: 'AMX-451'
  },
  {
    value: 789,
    full_name: 'Josef Martin Zielinski Flores',
    code: 'AMX-626'
  },
  {
    value: 643,
    full_name: 'JOSEFINA  PELAYO GALAVIS',
    code: 'AMX-480'
  },
  {
    value: 323,
    full_name: 'JPG ASSOCIATES INC',
    code: 'AMX-160'
  },
  {
    value: 753,
    full_name: 'Juan  Mora ',
    code: 'AMX-590'
  },
  {
    value: 896,
    full_name: 'Juan Antonio Barrenechea Vergara',
    code: 'AMX-733'
  },
  {
    value: 791,
    full_name: 'Juan carlos  Dou Ludeña',
    code: 'AMX-628'
  },
  {
    value: 846,
    full_name: 'Juan Carlos Ibarra Arevalo',
    code: 'AMX-683'
  },
  {
    value: 703,
    full_name: 'JUAN CARLOS JAVIER SALDIVIA',
    code: 'AMX-540'
  },
  {
    value: 843,
    full_name: 'JUAN CARLOS MUJICA MAGO',
    code: 'AMX-680'
  },
  {
    value: 832,
    full_name: 'Juan Eduardo Godoy Estaba',
    code: 'AMX-669'
  },
  {
    value: 648,
    full_name: 'JUAN JOSE ANGELES GOMEZ',
    code: 'AMX-485'
  },
  {
    value: 916,
    full_name: 'Juan Manuel Castillo Alonzo',
    code: 'AMX-753'
  },
  {
    value: 695,
    full_name: 'JUAN MANUEL REYNA RIVERA',
    code: 'AMX-532'
  },
  {
    value: 653,
    full_name: 'JULIO  GUTIERREZ GUERRA',
    code: 'AMX-490'
  },
  {
    value: 319,
    full_name: 'Julio Cesar Rodrigueaz Cabello',
    code: 'AMX-156'
  },
  {
    value: 710,
    full_name: 'JULIO CESAR SALAS REYES',
    code: 'AMX-547'
  },
  {
    value: 688,
    full_name: 'Julio jose Chacon esis',
    code: 'AMX-525'
  },
  {
    value: 661,
    full_name: 'Karen  Peters Fernandez',
    code: 'AMX-498'
  },
  {
    value: 587,
    full_name: 'Karla Elizabeth Hernandez Hernández',
    code: 'AMX-424'
  },
  {
    value: 601,
    full_name: 'KARLA GAMARRA',
    code: 'AMX-438'
  },
  {
    value: 765,
    full_name: 'Katherine Mercedes Molina Zelaya',
    code: 'AMX-602'
  },
  {
    value: 784,
    full_name: 'Krystal Rose Gayle ',
    code: 'AMX-621'
  },
  {
    value: 434,
    full_name: 'Kuper Blasco, Migdalia Carolina',
    code: 'AMX-271'
  },
  {
    value: 911,
    full_name: 'Lagoval Sociedad de Corretaje de Seguros LLC',
    code: 'AMX-748'
  },
  {
    value: 622,
    full_name: 'LAMDA',
    code: 'AMX-459'
  },
  {
    value: 378,
    full_name: 'Lander, Flora E',
    code: 'AMX-215'
  },
  {
    value: 492,
    full_name: 'Lang Lapenta, Henry Jose',
    code: 'AMX-329'
  },
  {
    value: 263,
    full_name: 'Lara March, Cristina',
    code: 'AMX-100'
  },
  {
    value: 263,
    full_name: 'Lara March, Cristina',
    code: 'AMX-100'
  },
  {
    value: 517,
    full_name: 'Lassalle, Javier',
    code: 'AMX-354'
  },
  {
    value: 897,
    full_name: 'Laura Elisa Molina Urbina',
    code: 'AMX-734'
  },
  {
    value: 615,
    full_name: 'Laura Maria Carrion Lacayo',
    code: 'AMX-452'
  },
  {
    value: 544,
    full_name: 'LEAL SALGUERO, JOHAN EDUANTO',
    code: 'AMX-381'
  },
  {
    value: 594,
    full_name: 'Leida  Delgado ',
    code: 'AMX-431'
  },
  {
    value: 816,
    full_name: 'Leonardo Enrique Coutinho Gozaine',
    code: 'AMX-653'
  },
  {
    value: 702,
    full_name: 'Leonardo Javier Sancho ',
    code: 'AMX-539'
  },
  {
    value: 792,
    full_name: 'Leonie  Arguello YRIGOYEN',
    code: 'AMX-629'
  },
  {
    value: 844,
    full_name: 'LETIZIA  TRONCHI PICCIN',
    code: 'AMX-681'
  },
  {
    value: 593,
    full_name: 'Ligia  Pezzotti ',
    code: 'AMX-430'
  },
  {
    value: 898,
    full_name: 'Liliana  Pedraza Garay',
    code: 'AMX-735'
  },
  {
    value: 906,
    full_name: 'LISBETH del CARMEN CAMACARO COLMENAREZ',
    code: 'AMX-743'
  },
  {
    value: 675,
    full_name: 'Lisbeth Leonor Hernandez Mancilla',
    code: 'AMX-512'
  },
  {
    value: 342,
    full_name: 'LOPEZ GARCIA, FRIDA',
    code: 'AMX-179'
  },
  {
    value: 234,
    full_name: 'LOPEZ HERRERA, FRANCISCO JAVIER',
    code: 'AMX-71'
  },
  {
    value: 230,
    full_name: 'Lopez Quesada, Eduardo Alberto',
    code: 'AMX-67'
  },
  {
    value: 230,
    full_name: 'Lopez Quesada, Eduardo Alberto',
    code: 'AMX-67'
  },
  {
    value: 353,
    full_name: 'Lopez, Mildred B',
    code: 'AMX-190'
  },
  {
    value: 337,
    full_name: 'LOSSADA BELGRAVE, LEVY LEONARDO',
    code: 'AMX-174'
  },
  {
    value: 400,
    full_name: 'Lrl Investments Limited',
    code: 'AMX-237'
  },
  {
    value: 354,
    full_name: 'LUGANO CORPORATION',
    code: 'AMX-191'
  },
  {
    value: 429,
    full_name: 'Lugo, IslI',
    code: 'AMX-266'
  },
  {
    value: 418,
    full_name: 'Luigi Vittorio Bullo Bravo',
    code: 'AMX-255'
  },
  {
    value: 874,
    full_name: 'LUIS ANTONIO ROMERO VARGAS',
    code: 'AMX-711'
  },
  {
    value: 931,
    full_name: 'LUIS SIMON PAEZ MENDEZ',
    code: 'AMX-768'
  },
  {
    value: 568,
    full_name: 'Lupita Gutierrez, Inc',
    code: 'AMX-405'
  },
  {
    value: 902,
    full_name: 'LYAGroup',
    code: 'AMX-739'
  },
  {
    value: 667,
    full_name: 'MACIEL  PUPO MESTRE ',
    code: 'AMX-504'
  },
  {
    value: 285,
    full_name: 'MAGASA',
    code: 'AMX-122'
  },
  {
    value: 763,
    full_name: 'Magdalena  Silva Tallac',
    code: 'AMX-600'
  },
  {
    value: 475,
    full_name: 'Main Advisors, CA',
    code: 'AMX-312'
  },
  {
    value: 253,
    full_name: 'MAJZOUB, MAHMOUD',
    code: 'AMX-90'
  },
  {
    value: 715,
    full_name: 'Manuel Alejandro Perez Abraham',
    code: 'AMX-552'
  },
  {
    value: 597,
    full_name: 'Manuel Antonio Ortega Camargo',
    code: 'AMX-434'
  },
  {
    value: 728,
    full_name: 'Manuel Benito Carrion Guanipa',
    code: 'AMX-565'
  },
  {
    value: 800,
    full_name: 'MANUEL ISAAC RODRIGUEZ FERNANDEZ',
    code: 'AMX-637'
  },
  {
    value: 659,
    full_name: 'Manuel Ramon Rojas Salcedo',
    code: 'AMX-496'
  },
  {
    value: 607,
    full_name: 'Marcelo Enrique Cartagena ',
    code: 'AMX-444'
  },
  {
    value: 919,
    full_name: 'MARCELO MOISES AMPUERO CALDERON',
    code: 'AMX-756'
  },
  {
    value: 359,
    full_name: 'MARDENI CARRERO, ARGENIS RAFAEL',
    code: 'AMX-196'
  },
  {
    value: 754,
    full_name: 'MARGARITA  PRADILLO CUEVAS',
    code: 'AMX-591'
  },
  {
    value: 251,
    full_name: 'Margetic, Silvia del Valle',
    code: 'AMX-88'
  },
  {
    value: 251,
    full_name: 'Margetic, Silvia del Valle',
    code: 'AMX-88'
  },
  {
    value: 885,
    full_name: 'MARIA CAROLINA  GODOY LEI ',
    code: 'AMX-722'
  },
  {
    value: 599,
    full_name: 'Maria Carolina Nuñez De  Caceres',
    code: 'AMX-436'
  },
  {
    value: 772,
    full_name: 'Maria Carolina Sassano Villafañe',
    code: 'AMX-609'
  },
  {
    value: 727,
    full_name: 'MARIA DANIELA SALAZAR BANEGAS',
    code: 'AMX-564'
  },
  {
    value: 712,
    full_name: 'MARIA DE LOS ANGELES DE POOL ',
    code: 'AMX-549'
  },
  {
    value: 842,
    full_name: 'MARIA DE LOURDES  BAQUERIZO MUNOZ',
    code: 'AMX-679'
  },
  {
    value: 862,
    full_name: 'MARIA DE LOURDES NEDER MUÑOZ',
    code: 'AMX-699'
  },
  {
    value: 678,
    full_name: 'Marìa Emma Silva Careaga',
    code: 'AMX-515'
  },
  {
    value: 729,
    full_name: 'Maria Eugenia Eugenia CARREÑO De El Masri',
    code: 'AMX-566'
  },
  {
    value: 865,
    full_name: 'MARIA EUGENIA FRANCO DE IZQUIERDO',
    code: 'AMX-702'
  },
  {
    value: 660,
    full_name: 'MARIA Fernanda FERAUD Coto',
    code: 'AMX-497'
  },
  {
    value: 687,
    full_name: 'MARIA FERNANDA GRANDA ROMAN',
    code: 'AMX-524'
  },
  {
    value: 420,
    full_name: 'Maria Fernanda Salazar Banegas',
    code: 'AMX-257'
  },
  {
    value: 925,
    full_name: 'Maria Gabriela  Delgado Romero ',
    code: 'AMX-762'
  },
  {
    value: 589,
    full_name: 'Maria Gabriela Badilla Aredonde',
    code: 'AMX-426'
  },
  {
    value: 821,
    full_name: 'MARIA ISABEL FERRER ZUBILLAGA',
    code: 'AMX-658'
  },
  {
    value: 604,
    full_name: 'María José Castillo Barberena',
    code: 'AMX-441'
  },
  {
    value: 853,
    full_name: 'MARIA LUCIA morejon vallejko',
    code: 'AMX-690'
  },
  {
    value: 835,
    full_name: 'MARIA MERCEDES AZPURUA STARKE',
    code: 'AMX-672'
  },
  {
    value: 651,
    full_name: 'MARIANA  CARBALLO MORGAN',
    code: 'AMX-488'
  },
  {
    value: 823,
    full_name: 'Marianela  Rivas Chaustre',
    code: 'AMX-660'
  },
  {
    value: 935,
    full_name: 'Marianella Lisbeth Morales Rosales',
    code: 'AMX-772'
  },
  {
    value: 845,
    full_name: 'MARIELLA  TRONCHI PICCIN',
    code: 'AMX-682'
  },
  {
    value: 652,
    full_name: 'Marielos  Núñez Solano',
    code: 'AMX-489'
  },
  {
    value: 332,
    full_name: 'Marin Brathwaeite, Carlos Alberto',
    code: 'AMX-169'
  },
  {
    value: 820,
    full_name: 'Marino  Mandakovic ',
    code: 'AMX-657'
  },
  {
    value: 428,
    full_name: 'Mario Afredo Jimenez Loaiza',
    code: 'AMX-265'
  },
  {
    value: 888,
    full_name: 'MARIO Alberto CALVO Estrada',
    code: 'AMX-725'
  },
  {
    value: 735,
    full_name: 'MARIO ALBERTO GOMEZ GOMEZ',
    code: 'AMX-572'
  },
  {
    value: 711,
    full_name: 'mario Javier vargas Mavares',
    code: 'AMX-548'
  },
  {
    value: 752,
    full_name: 'Mark Churchill Neita ',
    code: 'AMX-589'
  },
  {
    value: 641,
    full_name: 'Marlon ISRAEL Peralta HERNANDEZ',
    code: 'AMX-478'
  },
  {
    value: 199,
    full_name: 'Marquez, Leandro Andres',
    code: 'AMX-36'
  },
  {
    value: 199,
    full_name: 'Marquez, Leandro Andres',
    code: 'AMX-36'
  },
  {
    value: 743,
    full_name: 'MARTHA DE LOURDES VENEGAS MURILLO',
    code: 'AMX-580'
  },
  {
    value: 858,
    full_name: 'Martha Emilia Robledo Villegas',
    code: 'AMX-695'
  },
  {
    value: 764,
    full_name: 'Martin Arturo olivos Jara',
    code: 'AMX-601'
  },
  {
    value: 569,
    full_name: 'Martin Augusto Lopez Santoro',
    code: 'AMX-406'
  },
  {
    value: 294,
    full_name: 'MARTINEZ HIDALGO MONROY, MARIA GABRIELA',
    code: 'AMX-131'
  },
  {
    value: 503,
    full_name: 'MARTINEZ INSFRAN, LIDIA CARMEN',
    code: 'AMX-340'
  },
  {
    value: 397,
    full_name: 'MARTINEZ MOYAR, JORGE',
    code: 'AMX-234'
  },
  {
    value: 345,
    full_name: 'MARTINEZ VALDES, RAFAEL LEOPOLDO',
    code: 'AMX-182'
  },
  {
    value: 698,
    full_name: 'Marty Frederick Leal Carmona',
    code: 'AMX-535'
  },
  {
    value: 734,
    full_name: 'Maryelba  López León',
    code: 'AMX-571'
  },
  {
    value: 917,
    full_name: 'MAURICIO A CHIRINOS IGLESIA',
    code: 'AMX-754'
  },
  {
    value: 733,
    full_name: 'Mauricio Jose Alvarado Rivera',
    code: 'AMX-570'
  },
  {
    value: 839,
    full_name: 'Mauricio Malo Malo Pozo',
    code: 'AMX-676'
  },
  {
    value: 572,
    full_name: 'Max Angelo Weiss Lazarotto',
    code: 'AMX-409'
  },
  {
    value: 859,
    full_name: 'Max Gomer arriojas Toledo',
    code: 'AMX-696'
  },
  {
    value: 277,
    full_name: 'MAYO, MARCOS ANTONIO',
    code: 'AMX-114'
  },
  {
    value: 238,
    full_name: 'MEDINA RAZO, SALVADOR',
    code: 'AMX-75'
  },
  {
    value: 238,
    full_name: 'MEDINA RAZO, SALVADOR',
    code: 'AMX-75'
  },
  {
    value: 864,
    full_name: 'MEGABROKERS',
    code: 'AMX-701'
  },
  {
    value: 395,
    full_name: 'Megabrokers Inc.',
    code: 'AMX-232'
  },
  {
    value: 357,
    full_name: 'MEJIA ALMONTE, CLAUDIO FERNANDO',
    code: 'AMX-194'
  },
  {
    value: 375,
    full_name: 'MEJIA LOBO, Jackson',
    code: 'AMX-212'
  },
  {
    value: 237,
    full_name: 'METTA SEVILLA, ABRAHAM',
    code: 'AMX-74'
  },
  {
    value: 237,
    full_name: 'METTA SEVILLA, ABRAHAM',
    code: 'AMX-74'
  },
  {
    value: 370,
    full_name: 'MICHAUS MENDOZA, Maria Patricia',
    code: 'AMX-207'
  },
  {
    value: 822,
    full_name: 'Michelle Dawn Harris ',
    code: 'AMX-659'
  },
  {
    value: 318,
    full_name: 'Miguel Angel  Delgado Sanchez ',
    code: 'AMX-155'
  },
  {
    value: 863,
    full_name: 'Millennial Brokers',
    code: 'AMX-700'
  },
  {
    value: 847,
    full_name: 'Minerva Ines Sandoval Canelon',
    code: 'AMX-684'
  },
  {
    value: 939,
    full_name: 'Miurel Judith Gaitan Tellez',
    code: 'AMX-776'
  },
  {
    value: 407,
    full_name: 'MIYATA, Flavio Pluhar',
    code: 'AMX-244'
  },
  {
    value: 264,
    full_name: 'MOLAS RAMIREZ, FEDERICO',
    code: 'AMX-101'
  },
  {
    value: 719,
    full_name: 'Moneda & Insurance Wealth Protector',
    code: 'AMX-556'
  },
  {
    value: 619,
    full_name: 'MONICA  PIZARRO SUAREZ VERGARA LOPE',
    code: 'AMX-456'
  },
  {
    value: 327,
    full_name: 'MORALES ramirez, Maria del carmen',
    code: 'AMX-164'
  },
  {
    value: 480,
    full_name: 'MORRONE DONATIELLO, JOSE ANTONIO',
    code: 'AMX-317'
  },
  {
    value: 368,
    full_name: 'munoz villarreal, jessica elizabeth',
    code: 'AMX-205'
  },
  {
    value: 344,
    full_name: 'NAIMARK WONS, JACOBO',
    code: 'AMX-181'
  },
  {
    value: 283,
    full_name: 'Najera Orozco, Rosa Yadira',
    code: 'AMX-120'
  },
  {
    value: 574,
    full_name: 'Nancy Rubicelly Navas #2 Lima',
    code: 'AMX-411'
  },
  {
    value: 194,
    full_name: 'Nasser Salomon, Jose Alberto',
    code: 'AMX-31'
  },
  {
    value: 797,
    full_name: 'NATHALY GIOCONDA ROJAS AGUILERA',
    code: 'AMX-634'
  },
  {
    value: 372,
    full_name: 'Nava Coca, Isidro n',
    code: 'AMX-209'
  },
  {
    value: 542,
    full_name: 'Nava Ruiz, Etna Beatriz',
    code: 'AMX-379'
  },
  {
    value: 452,
    full_name: 'NAVARRO MORALES, ALFONSO JOSE',
    code: 'AMX-289'
  },
  {
    value: 341,
    full_name: 'NAVAS NARANJO, FELIPE JOSE',
    code: 'AMX-178'
  },
  {
    value: 167,
    full_name: 'Nestrading International Ltd.',
    code: 'AMX-4'
  },
  {
    value: 167,
    full_name: 'Nestrading International Ltd.',
    code: 'AMX-4'
  },
  {
    value: 507,
    full_name: 'NEW TIME INVESTMENTS',
    code: 'AMX-344'
  },
  {
    value: 673,
    full_name: 'Nicolas José Radovechich Plata',
    code: 'AMX-510'
  },
  {
    value: 730,
    full_name: 'Nilto  Domingues Junior ',
    code: 'AMX-567'
  },
  {
    value: 801,
    full_name: 'Ninoska Esther Esther Perozo Rivas Rivas',
    code: 'AMX-638'
  },
  {
    value: 350,
    full_name: 'Noboa Freile, Felipe',
    code: 'AMX-187'
  },
  {
    value: 680,
    full_name: 'Norma  BRESANOVICH Acosta',
    code: 'AMX-517'
  },
  {
    value: 360,
    full_name: 'Novoa Altuve, Vanessa',
    code: 'AMX-197'
  },
  {
    value: 554,
    full_name: 'Nunez, Jennison Ernie',
    code: 'AMX-391'
  },
  {
    value: 346,
    full_name: 'OFG SERVICES CA',
    code: 'AMX-183'
  },
  {
    value: 530,
    full_name: 'Olavarri Zerain, Vanessa',
    code: 'AMX-367'
  },
  {
    value: 328,
    full_name: 'Oleas ORDOÑEZ, Santiago',
    code: 'AMX-165'
  },
  {
    value: 197,
    full_name: 'Open Insurance Llc.',
    code: 'AMX-34'
  },
  {
    value: 197,
    full_name: 'Open Insurance Llc.',
    code: 'AMX-34'
  },
  {
    value: 184,
    full_name: 'Optima Insurance',
    code: 'AMX-21'
  },
  {
    value: 205,
    full_name: 'Ortega Segobiano, Karla Alicia',
    code: 'AMX-42'
  },
  {
    value: 689,
    full_name: 'ORTIZ Y CANCINO S.C.',
    code: 'AMX-526'
  },
  {
    value: 557,
    full_name: 'OSEGUERA Larios, CLAUDIA Carolina',
    code: 'AMX-394'
  },
  {
    value: 496,
    full_name: 'Ostertag Ruttia, Maria Gladys',
    code: 'AMX-333'
  },
  {
    value: 795,
    full_name: 'OTTO FEDERICO ALBERS DEGWITZ',
    code: 'AMX-632'
  },
  {
    value: 717,
    full_name: 'Pablo Antonio Bello Rojas',
    code: 'AMX-554'
  },
  {
    value: 694,
    full_name: 'Pablo ROBERTO Herrera GALLARDO',
    code: 'AMX-531'
  },
  {
    value: 299,
    full_name: 'Pajares Alfaro, Kenny Elizabeth',
    code: 'AMX-136'
  },
  {
    value: 299,
    full_name: 'Pajares Alfaro, Kenny Elizabeth',
    code: 'AMX-136'
  },
  {
    value: 426,
    full_name: 'PALACIOS GARZA, JESUS DARIO',
    code: 'AMX-263'
  },
  {
    value: 425,
    full_name: 'PALMERO VILLARROEL, YOUXEMITH',
    code: 'AMX-262'
  },
  {
    value: 918,
    full_name: 'PAOLA  MUÑOZ gutierrez',
    code: 'AMX-755'
  },
  {
    value: 749,
    full_name: 'Paola Carolina Sevilla Holguín',
    code: 'AMX-586'
  },
  {
    value: 389,
    full_name:
      'PASTOR LUNA ORDORICA, PUNTO & COMA AGENTES DE SEGUROS Y DE FIANZAS',
    code: 'AMX-226'
  },
  {
    value: 852,
    full_name: 'PATRICIA  GUERRA ',
    code: 'AMX-689'
  },
  {
    value: 575,
    full_name: 'Patricio Marcelo Corvalan Pavez',
    code: 'AMX-412'
  },
  {
    value: 308,
    full_name: 'Pbc Marketing Inc',
    code: 'AMX-145'
  },
  {
    value: 617,
    full_name: 'pedro  vintimilla ',
    code: 'AMX-454'
  },
  {
    value: 794,
    full_name: 'Pedro Fernando Narvaez Ortega',
    code: 'AMX-631'
  },
  {
    value: 901,
    full_name: 'Pedro Luis Sojo Ebel',
    code: 'AMX-738'
  },
  {
    value: 854,
    full_name: 'Peggy Lorena Corral Dueñas',
    code: 'AMX-691'
  },
  {
    value: 494,
    full_name: 'PERE QUEVEDO, Juan DIEGO',
    code: 'AMX-331'
  },
  {
    value: 893,
    full_name: 'Perla  González ',
    code: 'AMX-730'
  },
  {
    value: 394,
    full_name: 'PERSONAL INSURANCE',
    code: 'AMX-231'
  },
  {
    value: 456,
    full_name: 'Peter  Abdool ',
    code: 'AMX-293'
  },
  {
    value: 915,
    full_name: 'Peter Llewellyn Samuels ',
    code: 'AMX-752'
  },
  {
    value: 824,
    full_name: 'Phidias  Noguera Mujica',
    code: 'AMX-661'
  },
  {
    value: 451,
    full_name: 'Pico, Marcos Mariano',
    code: 'AMX-288'
  },
  {
    value: 443,
    full_name: 'pina Garrido, nadeska Carolina',
    code: 'AMX-280'
  },
  {
    value: 493,
    full_name: 'pires de campos, Alexandre',
    code: 'AMX-330'
  },
  {
    value: 433,
    full_name: 'PIRES, PAULO A',
    code: 'AMX-270'
  },
  {
    value: 491,
    full_name: 'Plazas Grass, william Fernando',
    code: 'AMX-328'
  },
  {
    value: 514,
    full_name: 'Plut, Mara',
    code: 'AMX-351'
  },
  {
    value: 335,
    full_name: 'Prescott & Asociados',
    code: 'AMX-172'
  },
  {
    value: 453,
    full_name: 'PRIMAX',
    code: 'AMX-290'
  },
  {
    value: 531,
    full_name: 'Procino Betancourt, Mariano Antonio',
    code: 'AMX-368'
  },
  {
    value: 352,
    full_name: 'PROFESSIONAL HEALTH ADVISORS',
    code: 'AMX-189'
  },
  {
    value: 399,
    full_name: 'Prosperity Financial Consulting, LLC',
    code: 'AMX-236'
  },
  {
    value: 450,
    full_name: 'Puentes, Hector Ivan',
    code: 'AMX-287'
  },
  {
    value: 471,
    full_name: 'Purin, Marcos Damiano',
    code: 'AMX-308'
  },
  {
    value: 748,
    full_name: 'Qumbre Seguros',
    code: 'AMX-585'
  },
  {
    value: 809,
    full_name: 'RAFAEL  PICARDO Vera',
    code: 'AMX-646'
  },
  {
    value: 718,
    full_name: 'RAFAEL  RAMIREZ SAUCEDO',
    code: 'AMX-555'
  },
  {
    value: 632,
    full_name: 'RAFAEL Alfredo CACERES DEZA',
    code: 'AMX-469'
  },
  {
    value: 811,
    full_name: 'Rafael Antonio Rosas Alzolay',
    code: 'AMX-648'
  },
  {
    value: 804,
    full_name: 'RAFAEL ENRIQUE HERNANDEZ ANDREU',
    code: 'AMX-641'
  },
  {
    value: 876,
    full_name: 'Raiber Matilde Sánchez Caro',
    code: 'AMX-713'
  },
  {
    value: 696,
    full_name: 'RAUL ALEJANDRO PRADO ROQUE',
    code: 'AMX-533'
  },
  {
    value: 644,
    full_name: 'Ravee  Kapoor ',
    code: 'AMX-481'
  },
  {
    value: 239,
    full_name: 'Real De La Mora, Alejandro',
    code: 'AMX-76'
  },
  {
    value: 552,
    full_name: 'REYES ESPARZA, GUILLERMO ALFREDO',
    code: 'AMX-389'
  },
  {
    value: 558,
    full_name: 'Reyes Feison, Julio Cesar',
    code: 'AMX-395'
  },
  {
    value: 649,
    full_name: 'RICARDO  CHAUL CHAMUT',
    code: 'AMX-486'
  },
  {
    value: 768,
    full_name: 'Ricardo  Espina Palacios',
    code: 'AMX-605'
  },
  {
    value: 941,
    full_name: 'RICARDO Gabriel VILLARROEL MENDIBLE',
    code: 'AMX-778'
  },
  {
    value: 775,
    full_name: 'Ricardo Jesus Muci Ramos',
    code: 'AMX-612'
  },
  {
    value: 481,
    full_name: 'Ricaurte Chumo, Luis Alberto',
    code: 'AMX-318'
  },
  {
    value: 333,
    full_name: 'Ricci Giarratana, Gian Paolo',
    code: 'AMX-170'
  },
  {
    value: 404,
    full_name: 'Rio Lozano, Amando',
    code: 'AMX-241'
  },
  {
    value: 499,
    full_name: 'Rivas Santos, Raimundo Alberto',
    code: 'AMX-336'
  },
  {
    value: 782,
    full_name: 'ROBERTO  GONZALEZ CANTU',
    code: 'AMX-619'
  },
  {
    value: 725,
    full_name: 'ROBERTO GUADALUPE SOLIS PEÑA',
    code: 'AMX-562'
  },
  {
    value: 663,
    full_name: 'ROBERTO MIGUEL CERVANTES MONDRAGON',
    code: 'AMX-500'
  },
  {
    value: 260,
    full_name: 'ROCHA GOMEZ, JOSE ROBERTO',
    code: 'AMX-97'
  },
  {
    value: 665,
    full_name: 'RODOLFO  TORRES MARTINEZ',
    code: 'AMX-502'
  },
  {
    value: 737,
    full_name: 'Rofanny leonor LÓPEZ carrion',
    code: 'AMX-574'
  },
  {
    value: 834,
    full_name: 'ROLANDO JOSE SUAREZ ARANGUREN',
    code: 'AMX-671'
  },
  {
    value: 386,
    full_name: 'Romaña Ormachea, Carlos',
    code: 'AMX-223'
  },
  {
    value: 518,
    full_name: 'Romani, Hugo Alberto',
    code: 'AMX-355'
  },
  {
    value: 424,
    full_name: 'Romero Meza, Roman Arturo',
    code: 'AMX-261'
  },
  {
    value: 707,
    full_name: 'Ronald  Vázquez ',
    code: 'AMX-544'
  },
  {
    value: 679,
    full_name: 'Ronny Julio Alvarez Escudero',
    code: 'AMX-516'
  },
  {
    value: 780,
    full_name: 'Rosmery  Morales Parejo',
    code: 'AMX-617'
  },
  {
    value: 295,
    full_name: 'ROSS CHAIN, MAGALI',
    code: 'AMX-132'
  },
  {
    value: 647,
    full_name: 'RUBEN ALEXIS DA GRACA ABRANTES',
    code: 'AMX-484'
  },
  {
    value: 878,
    full_name: 'Ruckson Jose Tremont Gutierrez',
    code: 'AMX-715'
  },
  {
    value: 236,
    full_name: 'RUIZ MENDEZ, CESAR',
    code: 'AMX-73'
  },
  {
    value: 937,
    full_name: 'Ruth Candelaria Garzón Prado',
    code: 'AMX-774'
  },
  {
    value: 810,
    full_name: 'RUY  CASTILLO ROBLEDO',
    code: 'AMX-647'
  },
  {
    value: 266,
    full_name: 'SA, ADIUTUM',
    code: 'AMX-103'
  },
  {
    value: 340,
    full_name: 'Sabillon Diaz, Denia Francelia',
    code: 'AMX-177'
  },
  {
    value: 740,
    full_name: 'Sabrina  Barrios ',
    code: 'AMX-577'
  },
  {
    value: 329,
    full_name: 'Saenz, Pedro Rolando',
    code: 'AMX-166'
  },
  {
    value: 231,
    full_name: 'Salas Ardura, Ivette Gabriela',
    code: 'AMX-68'
  },
  {
    value: 231,
    full_name: 'Salas Ardura, Ivette Gabriela',
    code: 'AMX-68'
  },
  {
    value: 361,
    full_name: 'Salazar Vinueza, Eugenio Alejandro',
    code: 'AMX-198'
  },
  {
    value: 257,
    full_name: 'SALCEDO SIERRA, JOSE RAFAEL',
    code: 'AMX-94'
  },
  {
    value: 506,
    full_name: 'SAMBA MANAGEMENT LTD',
    code: 'AMX-343'
  },
  {
    value: 268,
    full_name: 'SANABRIA GAONA, VICTOR HUGO',
    code: 'AMX-105'
  },
  {
    value: 292,
    full_name: 'SANCHEZ PONCE DE LEON, KARLA ERICA',
    code: 'AMX-129'
  },
  {
    value: 349,
    full_name: 'Sanchez, Gledys Alicia',
    code: 'AMX-186'
  },
  {
    value: 314,
    full_name: 'SANDOVAL Antonucci, ALDO JOSE',
    code: 'AMX-151'
  },
  {
    value: 829,
    full_name: 'SANTIAGO RAFAEL USON RAMIREZ',
    code: 'AMX-666'
  },
  {
    value: 270,
    full_name: 'Sara Vanessa  Ifergan ',
    code: 'AMX-107'
  },
  {
    value: 270,
    full_name: 'Sara Vanessa  Ifergan ',
    code: 'AMX-107'
  },
  {
    value: 439,
    full_name: 'SAYEG SEADE, CARLOS ALBERTO',
    code: 'AMX-276'
  },
  {
    value: 526,
    full_name: 'Sayegh Sayegh, Jose',
    code: 'AMX-363'
  },
  {
    value: 454,
    full_name: 'Scalerandi, Nicolas',
    code: 'AMX-291'
  },
  {
    value: 435,
    full_name: 'scanga, jeancarlos Jose',
    code: 'AMX-272'
  },
  {
    value: 571,
    full_name: 'Segurisimo Carib',
    code: 'AMX-408'
  },
  {
    value: 374,
    full_name: 'Segurisimo Inc.',
    code: 'AMX-211'
  },
  {
    value: 281,
    full_name: 'SEQUERA, ISABELA',
    code: 'AMX-118'
  },
  {
    value: 849,
    full_name: 'Sequoia Angella Thomas ',
    code: 'AMX-686'
  },
  {
    value: 724,
    full_name: 'SERGIO  CHAVEZ CASTAÑEDA',
    code: 'AMX-561'
  },
  {
    value: 755,
    full_name: 'Sergio Enrique Torrendell ',
    code: 'AMX-592'
  },
  {
    value: 798,
    full_name: 'Sergio Mauricio Marquez Jager',
    code: 'AMX-635'
  },
  {
    value: 290,
    full_name: 'Services And Representation International Corp.',
    code: 'AMX-127'
  },
  {
    value: 691,
    full_name: 'SFS Global Corporation',
    code: 'AMX-528'
  },
  {
    value: 546,
    full_name: 'Sigma International Brokers',
    code: 'AMX-383'
  },
  {
    value: 629,
    full_name: 'SILATSA',
    code: 'AMX-466'
  },
  {
    value: 894,
    full_name: 'silvia Elizabeth bukowitz Kulka',
    code: 'AMX-731'
  },
  {
    value: 560,
    full_name: 'Simons Garcia, Juan Miguel',
    code: 'AMX-397'
  },
  {
    value: 770,
    full_name: 'SONIA  ELHALABI SNIH',
    code: 'AMX-607'
  },
  {
    value: 369,
    full_name: 'Soto Diaz, Jose Alberto',
    code: 'AMX-206'
  },
  {
    value: 584,
    full_name: 'South Planning',
    code: 'AMX-421'
  },
  {
    value: 321,
    full_name: 'STAVCHANSKY, JACOB LOS CABOS',
    code: 'AMX-158'
  },
  {
    value: 356,
    full_name: 'STAVCHANSKY, JACOB MONTERREY',
    code: 'AMX-193'
  },
  {
    value: 505,
    full_name: 'Stern De Carrero, Hanna',
    code: 'AMX-342'
  },
  {
    value: 322,
    full_name: 'Strength International Investment,inc',
    code: 'AMX-159'
  },
  {
    value: 462,
    full_name: 'Strunz Herrera, Heidi',
    code: 'AMX-299'
  },
  {
    value: 460,
    full_name: 'Studies careto',
    code: 'AMX-297'
  },
  {
    value: 551,
    full_name: 'SUNIAGA REGALADO, UBALDO GABRIEL',
    code: 'AMX-388'
  },
  {
    value: 538,
    full_name: 'Surga linares, Eylin daniela',
    code: 'AMX-375'
  },
  {
    value: 204,
    full_name: 'Sylvia Guadalupe De Jesus  Lechuga Rodriguez ',
    code: 'AMX-41'
  },
  {
    value: 204,
    full_name: 'Sylvia Guadalupe De Jesus  Lechuga Rodriguez ',
    code: 'AMX-41'
  },
  {
    value: 255,
    full_name: 'Tafich Guidi, Elisa Maria',
    code: 'AMX-92'
  },
  {
    value: 255,
    full_name: 'Tafich Guidi, Elisa Maria',
    code: 'AMX-92'
  },
  {
    value: 448,
    full_name: 'TAMARA DURAN SEGUROS LTDA',
    code: 'AMX-285'
  },
  {
    value: 942,
    full_name: 'Tania Sephora Waldron-Gooden ',
    code: 'AMX-779'
  },
  {
    value: 890,
    full_name: 'TEAM PROTECTION ASSIST',
    code: 'AMX-727'
  },
  {
    value: 301,
    full_name: 'Tellez Martinez, Iliana Jessica',
    code: 'AMX-138'
  },
  {
    value: 388,
    full_name: 'TOPAGENTS',
    code: 'AMX-225'
  },
  {
    value: 457,
    full_name: 'TORRES ALAVA, MAURO DANIEL',
    code: 'AMX-294'
  },
  {
    value: 408,
    full_name: 'Torres Saldarriaga, Leonardo Omar',
    code: 'AMX-245'
  },
  {
    value: 536,
    full_name: 'Tovar Quintero, Freddy',
    code: 'AMX-373'
  },
  {
    value: 779,
    full_name: 'TRADERGROUP COMPANY',
    code: 'AMX-616'
  },
  {
    value: 259,
    full_name: 'TREPMAN, NICOLAS MATIAS',
    code: 'AMX-96'
  },
  {
    value: 861,
    full_name: 'Trino Jose Lugo Razzak',
    code: 'AMX-698'
  },
  {
    value: 484,
    full_name: 'Twylite Investments',
    code: 'AMX-321'
  },
  {
    value: 774,
    full_name: 'Ufc Venezuela',
    code: 'AMX-611'
  },
  {
    value: 178,
    full_name: 'United Financial Consultant',
    code: 'AMX-15'
  },
  {
    value: 411,
    full_name: 'Universal Elite Associates',
    code: 'AMX-248'
  },
  {
    value: 512,
    full_name: 'Universal Elite Associates Ii',
    code: 'AMX-349'
  },
  {
    value: 385,
    full_name: 'Urban global services',
    code: 'AMX-222'
  },
  {
    value: 553,
    full_name: 'URBANO MELEAN, OSWALDO RAFAEL',
    code: 'AMX-390'
  },
  {
    value: 334,
    full_name: 'URBINA, CARLOS ALBERTO',
    code: 'AMX-171'
  },
  {
    value: 872,
    full_name: 'URSULA A. DELGADO ',
    code: 'AMX-709'
  },
  {
    value: 819,
    full_name: 'Valentina  Ponte de Mendoza ',
    code: 'AMX-656'
  },
  {
    value: 276,
    full_name: 'VALLADARES MARTINEZ, JORGE ARCADIO',
    code: 'AMX-113'
  },
  {
    value: 235,
    full_name: 'VALLE GUADARRAMA, DAVID SALVADOR',
    code: 'AMX-72'
  },
  {
    value: 785,
    full_name: 'Vania  Mendoza ',
    code: 'AMX-622'
  },
  {
    value: 436,
    full_name: 'VASEGURISIMO',
    code: 'AMX-273'
  },
  {
    value: 293,
    full_name: 'VASQUEZ DE LA SIERRA, MARIA CONCEPCION',
    code: 'AMX-130'
  },
  {
    value: 274,
    full_name: 'VAZQUEZ NAVARRO, ANA ESTHELA',
    code: 'AMX-111'
  },
  {
    value: 274,
    full_name: 'VAZQUEZ NAVARRO, ANA ESTHELA',
    code: 'AMX-111'
  },
  {
    value: 502,
    full_name: 'VB Health Insurance',
    code: 'AMX-339'
  },
  {
    value: 533,
    full_name: 'Velice Financial Services LTD',
    code: 'AMX-370'
  },
  {
    value: 409,
    full_name: 'veliz muñoz, berta andrea',
    code: 'AMX-246'
  },
  {
    value: 212,
    full_name: 'Veloz Restrepo, Gonzalo',
    code: 'AMX-49'
  },
  {
    value: 212,
    full_name: 'Veloz Restrepo, Gonzalo',
    code: 'AMX-49'
  },
  {
    value: 379,
    full_name: 'VEN ASESORES',
    code: 'AMX-216'
  },
  {
    value: 547,
    full_name: 'Veronezi Llc',
    code: 'AMX-384'
  },
  {
    value: 525,
    full_name: 'veronezi, Michelle',
    code: 'AMX-362'
  },
  {
    value: 841,
    full_name: 'Veronica Esmeralda Rodriguez Robalino',
    code: 'AMX-678'
  },
  {
    value: 377,
    full_name: 'VERROCCHI NAME, MARIO NASSIN',
    code: 'AMX-214'
  },
  {
    value: 612,
    full_name: 'Vesta María Barberena Baltodano',
    code: 'AMX-449'
  },
  {
    value: 464,
    full_name: 'Vestor International, Inc.',
    code: 'AMX-301'
  },
  {
    value: 677,
    full_name: 'VGV UNLIMITED LLC',
    code: 'AMX-514'
  },
  {
    value: 613,
    full_name: 'VICTOR HUGO RUIZ CARRILLO',
    code: 'AMX-450'
  },
  {
    value: 851,
    full_name: 'VICTOR JOSE MALDONADO CONTRERAS',
    code: 'AMX-688'
  },
  {
    value: 830,
    full_name: 'VICTOR MANUEL RETA MARTINEZ',
    code: 'AMX-667'
  },
  {
    value: 187,
    full_name: 'Vielledent Sisniega y Asociados',
    code: 'AMX-24'
  },
  {
    value: 458,
    full_name: 'Villalobos Acosta, Adriana',
    code: 'AMX-295'
  },
  {
    value: 325,
    full_name: 'Villareal Oropeza, Pedro Enrique',
    code: 'AMX-162'
  },
  {
    value: 637,
    full_name: 'Vinicius  Castello Branco ',
    code: 'AMX-474'
  },
  {
    value: 815,
    full_name: 'Violeta MARIA herrada APARICIO',
    code: 'AMX-652'
  },
  {
    value: 825,
    full_name: 'Vivianne Wuinoka Castillo Gari',
    code: 'AMX-662'
  },
  {
    value: 904,
    full_name: 'VK ADVISERS LLC',
    code: 'AMX-741'
  },
  {
    value: 336,
    full_name: 'von Lippke Miketta, G. Kurt',
    code: 'AMX-173'
  },
  {
    value: 548,
    full_name: 'Wealth Management Advisor Group',
    code: 'AMX-385'
  },
  {
    value: 928,
    full_name: 'WILLIAM ROBINSON CANCHIGNIA MEJIA',
    code: 'AMX-765'
  },
  {
    value: 307,
    full_name: 'World Of America Global Partners',
    code: 'AMX-144'
  },
  {
    value: 618,
    full_name: 'XIMENA  PALACIO Giraldo',
    code: 'AMX-455'
  },
  {
    value: 262,
    full_name: 'Y De Fianzas Sa De Cv, Boutique Coberturas Agente De Seguros',
    code: 'AMX-99'
  },
  {
    value: 262,
    full_name: 'Y De Fianzas Sa De Cv, Boutique Coberturas Agente De Seguros',
    code: 'AMX-99'
  },
  {
    value: 787,
    full_name: 'Yamir Jose Quiroz Romero',
    code: 'AMX-624'
  },
  {
    value: 745,
    full_name: 'Yaneth Del Carmen Morales Martínez',
    code: 'AMX-582'
  },
  {
    value: 882,
    full_name: 'Ysabel Maria Petit De Rosales',
    code: 'AMX-719'
  },
  {
    value: 767,
    full_name: 'Ysaita Mercedes Bonito ',
    code: 'AMX-604'
  },
  {
    value: 848,
    full_name: 'YUSKARY LYSANDY RENDON PATRIZZI',
    code: 'AMX-685'
  },
  {
    value: 738,
    full_name: 'Yusmely Andreina Gómez Lopez',
    code: 'AMX-575'
  },
  {
    value: 250,
    full_name: 'Zabaleta Stirling, Luisa Maria',
    code: 'AMX-87'
  },
  {
    value: 250,
    full_name: 'Zabaleta Stirling, Luisa Maria',
    code: 'AMX-87'
  },
  {
    value: 799,
    full_name: 'Zenovia Deyanira Moreno Diaz',
    code: 'AMX-636'
  },
  {
    value: 793,
    full_name: 'Zhara Federica Flaviani Alvarez',
    code: 'AMX-630'
  },
  {
    value: 410,
    full_name: 'Zogheib, Sergio',
    code: 'AMX-247'
  },
  {
    value: 339,
    full_name: 'ZORRILLA ASCANIO, ELEAZAR ANTONIO',
    code: 'AMX-176'
  }
];

export {
  adminsegGenders,
  adminsegProducts,
  adminsegFrequencies,
  adminsegRelationships,
  adminsegPhoneTypes,
  adminsegIdentityTypes,
  adminsegPersonTypes,
  adminsegHeightUnits,
  adminsegWeightUnits,
  adminsegAgents
};
