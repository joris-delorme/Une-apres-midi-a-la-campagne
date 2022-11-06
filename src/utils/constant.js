import homeImage from '../assets/image/hero.png'
import homeInstitutionImage from '../assets/image/PHOTO INSTITUT PAGE ACCUEIL.jpg'
import footerImage from '../assets/image/footer.jpg'
import prestationsImage from '../assets/image/prestations.png'
import produitsImage from '../assets/image/produits.png'

import scrollDown from '../assets/image/scrollDown.svg'

import logo from '../assets/image/logo.png'
// INSTITUTION IMAGES

import institut1 from '../assets/image/institut1.png'
import institut2 from '../assets/image/institut2.png'
import institut3 from '../assets/image/institut3.png'

import institutPage1 from '../assets/image/institution/1.png'
import institutPage2 from '../assets/image/institution/2.png'

// PRESATIONS IMAGES

import presationImage1 from '../assets/image/prestations/CELLU M6.png'
import presationImage2 from '../assets/image/prestations/EPILATIONS.png'
import presationImage3 from '../assets/image/prestations/GOMMAGES.png'
import presationImage4 from '../assets/image/prestations/LUXOTHERAPIE.png'
import presationImage5 from '../assets/image/prestations/SOINS CORPS ET VISAGE.png'
import presationImage6 from '../assets/image/prestations/SOINS DES YEUX.png'
import presationImage7 from '../assets/image/prestations/SOINS DU CORPS.png'
import presationImage8 from '../assets/image/prestations/SOINS DU VISAGE.png'
import presationImage9 from '../assets/image/prestations/SOINS ENERGETIQUES.png'

// PRODUITS IMAGES

import marque1 from '../assets/image/produits/marque1.png'
import marque2 from '../assets/image/produits/marque2.png'
import produits1 from '../assets/image/produits/produits1.png'
import produits2 from '../assets/image/produits/produits2.png'

const prestationsData = [

    {
        title: "Soins du visage YON-KA",
        cardTitle: "Soins du visage YON-KA",
        id: "soins-du-visage-yon-ka",
        image: presationImage8,
        content:
            [
                {
                    paragraph: [
                        {
                            prestations: [
                                {
                                    text: "Soin du visage spécifique (différents protocoles 1h30)",
                                    price: "79€"
                                },
                                {
                                    text: "Soin du visage (différents protocoles 1h)",
                                    price: "72€"
                                },
                                {
                                    text: "Soin Evasion sensorielle aux pinceaux",
                                    price: "89€"
                                },
                                {
                                    text: "Soin visage Eclat - Anti-taches 1h30 + 3 soins de 45mn",
                                    price: "69€"
                                },
                            ]
                        }
                    ]
                }
            ]
    },
    {
        title: "Soins des yeux",
        cardTitle: "Soins des yeux",
        id: "soins-des-yeux",
        image: presationImage6,
        content: [
            {
                paragraph: [
                    {
                        prestations: [
                            {
                                text: "Soin perfection regard et lèvres aux quartzs",
                                price: "69€"
                            },
                            {
                                text: "Teinture des cils",
                                price: "25€"
                            },
                            {
                                text: "Teinture des sourcils",
                                price: "9,50€"
                            },
                            {
                                text: "Teinture cils + sourcils",
                                price: "29€"
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Epilations douceur au Calendula",
        cardTitle: "Epilations",
        id: "epilations-douceur-au-calendula",
        image: presationImage2,
        content: [
            {
                paragraph: [
                    {
                        prestations: [
                            {
                                text: "1/2 jambes",
                                price: "24€"
                            },
                            {
                                text: "Maillot ou aisselles",
                                price: "14€"
                            },
                            {
                                text: "Maillot intégral",
                                price: "31€"
                            },
                            {
                                text: "Maillot 1/2 intégral",
                                price: "25€"
                            },
                            {
                                text: "1/2 jambes + maillot + aisselles",
                                price: "41€"
                            },
                            {
                                text: "Jambes",
                                price: "35€"
                            },
                            {
                                text: "Jambes + maillot ou aisselles",
                                price: "39€"
                            },
                            {
                                text: "Jambes + maillot + aisselles",
                                price: "43€"
                            },
                            {
                                text: "Bras",
                                price: "20€"
                            },
                            {
                                text: "Torse ou dos",
                                price: "25€"
                            },
                            {
                                text: "Torse et dos",
                                price: "45€"
                            },
                            {
                                text: "Sourcils ou lèvres ou menton",
                                price: "8,50€"
                            },
                            {
                                text: "Sourcils + lèvres",
                                price: "14,50€"
                            },
                        ]
                    }
                ]
            }
        ]


    },
    {
        title: "Les modelages",
        cardTitle: "Soins du corps",
        id: "les-modelages",
        image: presationImage7,
        content: [
            {
                paragraph: [
                    {
                        prestations: [
                            {
                                text: "Modelage Suédois",
                                price: "1h10 89€"
                            },
                            {
                                text: "Modelage destiné à éliminer les tensions musculaires et à favoriser une bonne récupération physique. Son travail important sur le dos apporte une détente profonde.",
                                price: "45mn 69€ <br /> 30mn 59€"
                            },
                        ]
                    },
                    {
                        prestations: [
                            {
                                text: "Modelage à Bali",
                                price: "1h10 89€"
                            },
                            {
                                text: "Modelage à la fois relaxant et énergisant qui marie les différentes techniques américaine, asiatique et indienne.",
                                price: "45mn 69€"
                            },
                            {
                                text: "Son parcours tout autour du corps en fait un modelage ludique et original.",
                                price: "30mn 59€"
                            }
                        ]
                    },
                    {
                        prestations: [
                            {
                                text: "Modelage Californien",
                                price: "1h10 89€"
                            },
                            {
                                text: "Modelage relaxant utilisant des manoeuvres enveloppantes et glissées sur l'ensemble du corps. Il permet d'apporter harmonie entre le corps et l'esprit.",
                                price: "45mn 69€ <br /> 30mn 59€"
                            }
                        ]
                    },
                    {
                        prestations: [
                            {
                                text: "Modelage Hawaien",
                                price: "1h10 89€"
                            },
                            {
                                text: "Modelage relaxant utilisant le travail des vagues, effectué par les avant-bras sur l'ensemble du corps. Ces manoeuvres enveloppantes apportent un bercement et favorisent la circulation de retour.",
                                price: "45mn 69€ <br /> 30mn 59€"
                            }
                        ]
                    },
                    {
                        prestations: [
                            {
                                text: "Modelage Polynésien Mahanna",
                                price: "79€"
                            },
                            {
                                text: "Modelage en étoile crâne, visage, mains et pieds.",
                            }
                        ]
                    },
                    {
                        prestations: [
                            {
                                text: "Voyage sur la route de Malaisie - 1h30",
                                price: "109€"
                            },
                            {
                                text: "Gommage ou Enveloppement au beurre de karité.",
                            },
                            {
                                text: "Onction huile chaude sur le corps et modelage (45mn).",
                            }
                        ]
                    },
                    {
                        prestations: [
                            {
                                text: "Voyage Polynésien aux coquillages chauffants - 1h45",
                                price: "145€"
                            },
                            {
                                text: "Gommage modelage aux coquillages chauds (1h10).",
                            }
                        ]
                    },
                    {
                        prestations: [
                            {
                                text: "Voyage sur la route des délices - 1h15",
                                price: "89€"
                            },
                            {
                                text: "Gommage fleur d'oranger + modelage 30mn.",
                            }
                        ]
                    },
                    {
                        prestations: [
                            {
                                text: "Voyage aromatique - 1h",
                                price: "79€"
                            },
                            {
                                text: "Modelage à la bougie à la senteur aromatique de rose.",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Les soins corps et visage",
        cardTitle: "Les soins corps et visage",
        id: "les-soins-corps-et-visage",
        image: presationImage5,
        content: [
            {
                paragraph: [
                    {
                        prestations: [
                            {
                                text: "La Sultane de Saba",
                                price: "130€"
                            },
                            {
                                text: "Sur la route de darjeeling 2h."
                            },
                            {
                                text: "Soin du visage (1h), modelage du corps (45mn)."
                            }
                        ]
                    },
                    {
                        prestations: [
                            {
                                text: "Yon-Ka",
                                price: "169€"
                            },
                            {
                                text: "Secret de beauté, soin d'absolu bien être 2h30."
                            },
                            {
                                text: "Gommage, modelage du corps (30mn), soin du visage (1h)"
                            }
                        ]
                    }
                ]
            }
        ]


    },
    {
        title: "Gommages du corps",
        cardTitle: "Gommages",
        id: "gommages-du-corps",
        image: presationImage3,
        content: [
            {
                paragraph: [
                    {
                        prestations: [
                            {
                                text: "- Au sucre de gommage"
                            },
                            {
                                text: "- Au sel de gommage",
                                price: "49€"
                            },
                            {
                                text: "- A la cire de gommage"
                            }
                        ]
                    }
                ]
            }
        ]


    },
    {
        title: "Luxothérapie",
        cardTitle: "Luxothérapie",
        id: "luxothérapie",
        image: presationImage4,
        content: [
            {
                paragraph: [
                    {
                        title: "C'est une méthode indolore générant un rayonnement infrarouges afin de rétablir l'équilibre d'une ou plusieurs fonctions.",
                        prestations: [
                            {
                                price: "62€ la séance"
                            },
                            {
                                text: "- Troubles du comportement alimentaire."
                            },
                            {
                                text: "- Troubles liés à la ménopause"
                            },
                            {
                                text: "- Troubles du sommeil et du stress"
                            },
                            {
                                text: "- Arrêt du tabac"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Cellu M6",
        cardTitle: "Cellu M6",
        id: "cellu-m6",
        image: presationImage1,
        content: [
            {
                title: "LE CORPS",

                paragraph: [
                    {
                        prestations: [
                            {
                                text: "CELLU M6 35mn"
                            },
                            {
                                text: "Cellu M6 - à la séance",
                                price: "54€"
                            },
                            {
                                text: "Cellu M6 10 séances + 1 offerte",
                                price: "540€"
                            },
                            {
                                text: "Cellu M6 15 séances + 2 offertes",
                                price: "810€"
                            },
                        ]

                    },
                    {
                        prestations: [
                            {
                                text: "CELLU M6 15mn"
                            },
                            {
                                text: "Cellu M6 - à la séance",
                                price: "27€"
                            },
                            {
                                text: "Cellu M6 10 séances + 1 offerte",
                                price: "270€"
                            },
                            {
                                text: "Cellu M6 15 séances + 2 offertes",
                                price: "405€"
                            },
                        ]
                    }
                ]
            },
            {
                title: "LE VISAGE",

                paragraph: [
                    {
                        prestations: [
                            {
                                text: "CELLU M6 35mn"
                            },
                            {
                                text: "Cellu M6 - à la séance",
                                price: "54€"
                            },
                            {
                                text: "Cellu M6 10 séances + 1 offerte",
                                price: "540€"
                            },
                            {
                                text: "Cellu M6 15 séances + 2 offertes",
                                price: "810€"
                            },
                        ]

                    },
                    {
                        prestations: [
                            {
                                text: "CELLU M6 15mn"
                            },
                            {
                                text: "Cellu M6 - à la séance",
                                price: "27€"
                            },
                            {
                                text: "Cellu M6 10 séances + 1 offerte",
                                price: "270€"
                            },
                            {
                                text: "Cellu M6 15 séances + 2 offertes",
                                price: "405€"
                            },
                        ]
                    }
                ]
            },
        ]

    },
    {
        title: "LaHoChi",
        cardTitle: "Soins énergétiques",
        id: "lahochi",
        image: presationImage9,
        content: [
            {
                paragraph: []
            }
        ]


    }
]

export {
    homeImage,
    homeInstitutionImage,
    institut1,
    institut2,
    institut3,
    footerImage,
    prestationsImage,
    produitsImage,
    prestationsData,
    marque1,
    marque2,
    produits1,
    produits2,
    scrollDown,
    institutPage1,
    institutPage2,
    logo
}