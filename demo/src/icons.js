import React from 'react'

export default {
    singleLineText: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M98.1739016,9.19 L90.2939016,9.19 L90.2939016,90.81 L98.1739016,90.81 L98.1739016,100 L72.6139016,100 L72.6139016,90.81 L81.1039016,90.81 L81.1039016,9.19 L72.6139016,9.19 L72.6139016,0 L98.1739016,0 L98.1739016,9.19 Z M30.1039016,17.82 C43.5420329,17.7587898 54.5065229,28.5624315 54.6439016,42 L54.6439016,82.76 L45.4539016,82.76 L45.4539016,79.46 C38.9939016,83.69 30.9239016,84.23 27.3039016,84.23 C26.2239016,84.23 25.5339016,84.17 25.4139016,84.17 C17.7439016,84.1 2.37390157,80.33 1.10390157,66 C-0.166098433,51.67 10.5139016,46.21 16.3439016,45.31 L17.0339016,45.26 L45.4539016,45.26 L45.4539016,42 C45.3277719,33.6001729 38.4239387,26.8887343 30.0239016,27 C22.2539016,27 12.1239016,31 12.0239016,31 L8.65390157,22.45 C9.13390157,22.26 20.4839016,17.82 30.0439016,17.82 L30.1039016,17.82 Z M42.0239016,70.52 C44.3339016,68.37 45.4539016,65.44 45.4539016,61.59 L45.4539016,54.47 L17.4539016,54.47 C15.6339016,54.86 9.50390157,56.8 10.2439016,65.19 C11.0739016,74.65 25.6639016,75 25.8139016,75 C26.1939016,75 36.5239016,75.65 42.0239016,70.52 Z"
                    fill="currentColor"/>
            </g>
        </svg>
    ),
    autonumber: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M57.8,64.89 L46.8,64.89 L46.8,75.89 L37.56,75.89 L37.56,64.89 L21.24,64.89 L21.24,75.89 L12,75.89 L12,64.89 L1,64.89 L1,55.65 L12,55.65 L12,39.32 L1,39.32 L1,30.08 L12,30.08 L12,19.08 L21.23,19.08 L21.23,30.08 L37.56,30.08 L37.56,19.08 L46.8,19.08 L46.8,30.08 L57.8,30.08 L57.8,39.32 L46.8,39.32 L46.8,55.65 L57.8,55.65 L57.8,64.89 Z M21.23,55.65 L37.56,55.65 L37.56,39.32 L21.23,39.32 L21.23,55.65 Z M92.48,72.67 L99.02,79.2 L78.21,100 L57.39,79.17 L63.92,72.64 L73.58,82.31 L73.58,0 L82.82,0 L82.82,82.32 L92.48,72.67 Z"
                    fill="currentColor" fillRule="nonzero"/>
            </g>
        </svg>
    ),
    attachment: props => (
        <svg {...props} viewBox="0 0 100 100">
            <path
                fill="currentColor"
                d="M35.11,94.26c-8.15,0-16.26-4-24.1-11.81C3.43,74.86-.27,66.73,0,58.28c.43-12.65,9.86-21,10.26-21.37L41.43,5.74l6.86,6.86L16.89,44c-.29.27-6.94,6.29-7.18,14.7-.16,5.63,2.58,11.32,8.16,16.9,6.16,6.16,12.14,9.19,17.82,9a16.67,16.67,0,0,0,10.95-5L85.41,40.75c1.4-1.36,4.86-5.59,4.89-9.66a7.77,7.77,0,0,0-2.61-5.66c-2-2-4-2.88-6.08-2.82-4.61.2-8.83,5-8.87,5L36.55,63.83,29.69,57,65.6,21.06c.42-.52,6.78-7.77,15.6-8.14,4.88-.24,9.44,1.75,13.35,5.65A17.42,17.42,0,0,1,100,31.25c-.11,8.87-7,15.7-7.82,16.45L53.74,86.13a26.38,26.38,0,0,1-17.69,8.11Z"/>
        </svg>
    ),
    date: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M0,0 L100,0 L100,100 L0,100 L0,0 Z M90.91,24.17 L90.91,9.09 L77.7,9.09 L77.7,24.17 L90.91,24.17 Z M31.39,24.17 L45.45,24.17 L45.45,9.09 L31.39,9.09 L31.39,24.17 Z M54.55,9.09 L54.55,24.17 L68.61,24.17 L68.61,9.09 L54.55,9.09 Z M22.3,9.09 L9.09,9.09 L9.09,24.17 L22.3,24.17 L22.3,9.09 Z M9.09,90.91 L90.91,90.91 L90.91,33.26 L9.09,33.26 L9.09,90.91 Z M54.81,45.34 L54.81,72.9 L61.98,72.9 L61.98,81.99 L38.02,81.99 L38.02,72.9 L45.72,72.9 L45.72,54.43 L38.02,54.43 L38.02,45.34 L54.81,45.34 Z"
                    fill="currentColor" fillRule="nonzero"/>
            </g>
        </svg>
    ),
    checkbox: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g fill="currentColor">
                <path d="M0,0V100H100V0ZM90.91,90.91H9.09V9.09H90.91Z"/>
                <polygon points="75.94 36.87 69.51 30.45 45.74 54.22 30.49 38.96 24.06 45.38 45.74 67.07 75.94 36.87"/>
            </g>
        </svg>
    ),
    collaborator: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                <path
                    d="M83.23,58.9799994 C93.5594001,68.2188953 99.4624523,81.4216554 99.46,95.2799994 L99.4600008,99.9799994 L1,99.9799994 L1,95.2799994 C1.07408505,81.265278 7.11069041,67.9447446 17.6,58.6499994 C13.460329,52.9977133 11.2861432,46.1449886 11.41,39.1399994 C11.4100003,17.5235745 28.9335751,-1.32532874e-15 50.55,0 C72.1664249,1.32185929e-15 89.6899997,17.5235745 89.69,39.1399994 C89.8137713,46.2893375 87.5394825,53.2741503 83.23,58.9799994 Z M50.53,9.36999942 C34.0868604,9.358948 20.7465609,22.6768645 20.73,39.1199994 C20.73,57.0699994 36.09,63.4699994 50.48,63.4699994 C64.87,63.4699994 80.23,57.1199994 80.23,39.1199994 C80.2135338,22.7158614 66.9340872,9.4140587 50.53,9.36999942 Z M10.68,90.5899994 L89.79,90.5899994 C88.6132575,80.8422251 83.8464902,71.8826991 76.42,65.4599994 C69.76,70.1899994 60.91,72.8599994 50.53,72.8599994 C39.98,72.8599994 31,70.0799994 24.31,65.1999994 C16.7699638,71.6759779 11.9110413,80.7271915 10.68,90.5899994 Z M63.32,40.0599994 C63.3089747,33.0024685 57.5875374,27.2855045 50.53,27.2799994 L50.53,17.8899994 C62.7712062,17.9010164 72.6934628,27.8187994 72.71,40.0599994 L63.32,40.0599994 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    ),
    createdCollaborator: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                <path
                    d="M83.23,58.9799994 C93.5594001,68.2188953 99.4624523,81.4216554 99.46,95.2799994 L99.4600008,99.9799994 L1,99.9799994 L1,95.2799994 C1.07408505,81.265278 7.11069041,67.9447446 17.6,58.6499994 C13.460329,52.9977133 11.2861432,46.1449886 11.41,39.1399994 C11.4100003,17.5235745 28.9335751,-1.32532874e-15 50.55,0 C72.1664249,1.32185929e-15 89.6899997,17.5235745 89.69,39.1399994 C89.8137713,46.2893375 87.5394825,53.2741503 83.23,58.9799994 Z M50.53,9.36999942 C34.0868604,9.358948 20.7465609,22.6768645 20.73,39.1199994 C20.73,57.0699994 36.09,63.4699994 50.48,63.4699994 C64.87,63.4699994 80.23,57.1199994 80.23,39.1199994 C80.2135338,22.7158614 66.9340872,9.4140587 50.53,9.36999942 Z M10.68,90.5899994 L89.79,90.5899994 C88.6132575,80.8422251 83.8464902,71.8826991 76.42,65.4599994 C69.76,70.1899994 60.91,72.8599994 50.53,72.8599994 C39.98,72.8599994 31,70.0799994 24.31,65.1999994 C16.7699638,71.6759779 11.9110413,80.7271915 10.68,90.5899994 Z M63.32,40.0599994 C63.3089747,33.0024685 57.5875374,27.2855045 50.53,27.2799994 L50.53,17.8899994 C62.7712062,17.9010164 72.6934628,27.8187994 72.71,40.0599994 L63.32,40.0599994 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    ),
    createdTime: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M0,0 L100,0 L100,100 L0,100 L0,0 Z M90.91,24.17 L90.91,9.09 L77.7,9.09 L77.7,24.17 L90.91,24.17 Z M31.39,24.17 L45.45,24.17 L45.45,9.09 L31.39,9.09 L31.39,24.17 Z M54.55,9.09 L54.55,24.17 L68.61,24.17 L68.61,9.09 L54.55,9.09 Z M22.3,9.09 L9.09,9.09 L9.09,24.17 L22.3,24.17 L22.3,9.09 Z M9.09,90.91 L90.91,90.91 L90.91,33.26 L9.09,33.26 L9.09,90.91 Z M62.32,68.21 C58.9179259,68.21 56.16,65.4520741 56.16,62.05 C56.16,58.6479259 58.9179259,55.89 62.32,55.89 C65.7220741,55.89 68.48,58.6479259 68.48,62.05 C68.48,65.4520741 65.7220741,68.21 62.32,68.21 Z M50,55.89 C46.5979259,55.89 43.84,53.1320741 43.84,49.73 C43.84,46.3279259 46.5979259,43.57 50,43.57 C53.4020741,43.57 56.16,46.3279259 56.16,49.73 C56.16,53.1320741 53.4020741,55.89 50,55.89 Z M50,80.53 C46.5979259,80.53 43.84,77.7720741 43.84,74.37 C43.84,70.9679259 46.5979259,68.21 50,68.21 C53.4020741,68.21 56.16,70.9679259 56.16,74.37 C56.16,77.7720741 53.4020741,80.53 50,80.53 Z M37.68,68.21 C34.2779259,68.21 31.52,65.4520741 31.52,62.05 C31.52,58.6479259 34.2779259,55.89 37.68,55.89 C41.0820741,55.89 43.84,58.6479259 43.84,62.05 C43.84,65.4520741 41.0820741,68.21 37.68,68.21 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    ),
    linkToAnotherRecord: props => (
        <svg {...props} viewBox="0 0 100 100">
            <path
                d="M57.11,70.8 L100,70.8 L100,79.98 L57.11,79.98 L57.11,70.8 Z M57.11,45.4 L100,45.4 L100,54.58 L57.11,54.58 L57.11,45.4 Z M57.11,20 L100,20 L100,29.18 L57.11,29.18 L57.11,20 Z M22.4,36.33 L28.89,29.84 L49.03,49.98 L28.87,70.14 L22.38,63.65 L31.45,54.58 L0,54.58 L0,45.4 L31.46,45.4 L22.4,36.33 Z"
                fill="currentColor"
            />
        </svg>
    ),
    longText: props => (
        <svg {...props} viewBox="0 0 100 100">
            <path
                d="M66.2951452,18.0000811 L100.005145,18.0000811 L100.005145,27.2800811 L66.2951452,27.2800811 L66.2951452,18.0000811 Z M66.2951452,36.1600811 L100.005145,36.1600811 L100.005145,45.4400811 L66.2951452,45.4400811 L66.2951452,36.1600811 Z M66.2951452,54.3200811 L100.005145,54.3200811 L100.005145,63.6000811 L66.2951452,63.6000811 L66.2951452,54.3200811 Z M66.2951452,72.4800811 L100.005145,72.4800811 L100.005145,81.7600811 L66.2951452,81.7600811 L66.2951452,72.4800811 Z M28.0051452,18.0000811 C40.9344898,17.9664947 51.4688072,28.3713102 51.5951452,41.3000811 L51.5951452,80.1000811 L42.3151452,80.1000811 L42.3151452,77.4100811 C36.2051452,81.2400811 28.7151452,81.7600811 25.3151452,81.7600811 C24.2751452,81.7600811 23.6151452,81.7100811 23.5051452,81.7100811 C16.1051452,81.6400811 1.36514519,78.0200811 0.105145187,64.1600811 C-1.15485481,50.3000811 9.21514519,45.0200811 14.8451452,44.1600811 L15.5451452,44.1100811 L42.3251452,44.1100811 L42.3251452,41.2700811 C42.1936259,33.4446187 35.7713235,27.1920294 27.9451452,27.2700811 C21.7951452,27.2700811 13.5551452,30.0000811 10.8851452,31.0500811 L7.47514519,22.4300811 C7.94514519,22.2500811 18.7851452,18.0000811 27.9451452,18.0000811 L28.0051452,18.0000811 Z M39.1751452,68.2700811 C41.3151452,66.2700811 42.3551452,63.5400811 42.3551452,59.9400811 L42.3551452,53.4200811 L16.0051452,53.4200811 C13.9451452,53.8800811 8.67514519,55.7100811 9.34514519,63.3500811 C10.1151452,72.1200811 23.7751452,72.4500811 23.9151452,72.4500811 C26.9051452,72.6700811 34.8951452,72.2700811 39.1751452,68.2700811 Z"
                fill="currentColor"
            />
        </svg>
    ),
    multipleCollaborator: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path
                    d="M66.81,42.06 C76.34,42.06 86.52,37.82 86.52,25.93 C86.5200001,18.8882951 82.7632954,12.3814914 76.6650001,8.86063895 C70.5667048,5.33978646 63.0532952,5.33978646 56.9549999,8.86063895 C50.8567046,12.3814914 47.0999999,18.8882951 47.1,25.93 C47.1,37.82 57.29,42.06 66.81,42.06 Z M66.81,11.86 C74.924018,11.871017 81.498983,18.445982 81.51,26.56 L75.28,26.56 C75.2744896,21.8844326 71.4855674,18.0955104 66.81,18.09 L66.81,11.86 Z"
                />
                <path
                    d="M84,43.38 C79.59,46.51 73.72,48.28 66.84,48.28 C62.9563285,48.3195715 59.0964613,47.6694886 55.44,46.36 C57.6266254,50.2317056 58.7738322,54.6034935 58.77,59.05 C58.77,59.39 58.77,59.71 58.77,60.05 L92.82,60.05 C92.0539801,53.5902725 88.909625,47.6473701 84,43.38 Z"
                />
                <path
                    d="M50,76.51 C45.59,79.64 39.72,81.41 32.84,81.41 C25.96,81.41 19.91,79.57 15.47,76.34 C10.487539,80.6362427 7.27983715,86.631081 6.47,93.16 L58.82,93.16 C58.0510724,86.7068393 54.9067932,80.7712102 50,76.51 Z"
                />
                <path
                    d="M55.41,46.36 C59.0664613,47.6694886 62.9263285,48.3195715 66.81,48.28 C73.69,48.28 79.56,46.51 83.97,43.38 C88.8798804,47.6300938 92.0342296,53.5538548 92.82,60 L58.71,60 C58.6391504,62.1140861 58.2722458,64.2077985 57.62,66.22 L99.2300005,66.22 L99.23,63.14 C99.2315501,53.9490427 95.31393,45.1935073 88.46,39.07 C91.3177407,35.2928037 92.8249006,30.6656822 92.74,25.93 C92.74,11.6092564 81.1307436,8.76892638e-16 66.81,0 C52.4892564,-8.76892638e-16 40.88,11.6092564 40.88,25.93 C40.8548618,29.0986698 41.5095841,32.2358806 42.8,35.13 C48.1356729,37.3661444 52.5731336,41.3179829 55.41,46.36 Z M66.81,6.22 C77.6909627,6.23102429 86.5089757,15.0490373 86.52,25.93 C86.52,37.82 76.34,42.06 66.81,42.06 C57.28,42.06 47.1,37.82 47.1,25.93 C47.1165204,15.0513179 55.9313179,6.23652043 66.81,6.22 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
                <path
                    d="M75.28,26.56 L81.51,26.56 C81.498983,18.445982 74.924018,11.871017 66.81,11.86 L66.81,18.09 C71.4855674,18.0955104 75.2744896,21.8844326 75.28,26.56 Z"
                    fill="currentColor"
                />
                <path
                    d="M58.71,60 C58.71,59.68 58.71,59.36 58.71,59 C58.7138322,54.5534935 57.5666254,50.1817056 55.38,46.31 C52.5421473,41.2916766 48.1168681,37.3588768 42.8,35.13 C34.7978513,31.7891279 25.6553563,32.6694682 18.4377171,37.4758694 C11.2200778,42.2822706 6.88278431,50.3784487 6.88,59.05 C6.79734399,63.7014851 8.24486792,68.2513479 11,72 C4.0529197,78.1606502 0.0534558524,86.9849218 0,96.27 L0,99.38 L65.2300032,99.38 L65.23,96.27 C65.2341021,87.0784982 61.3160366,78.3219674 54.46,72.2 C55.8453791,70.3932964 56.9139008,68.3644576 57.62,66.2 C58.2704096,64.194208 58.6372917,62.1073556 58.71,60 Z M32.81,39.35 C43.6779695,39.3829154 52.4815693,48.1820486 52.52,59.05 C52.52,59.39 52.52,59.71 52.52,60.05 C52.4531157,62.2003085 51.9352672,64.3125854 51,66.25 C47.79,72.71 40.14,75.19 32.86,75.19 C23.29,75.19 13.1,71 13.1,59.05 C13.1165333,48.1729427 21.9329357,39.3610134 32.81,39.35 Z M58.81,93.16 L6.41,93.16 C7.21983715,86.631081 10.427539,80.6362427 15.41,76.34 C19.85,79.57 25.79,81.41 32.78,81.41 C39.77,81.41 45.56,79.64 50,76.51 C54.9067932,80.7712102 58.0510724,86.7068393 58.82,93.16 L58.81,93.16 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
                <path
                    d="M40.92,57.22 C41.157016,58.0185666 41.2782508,58.8470041 41.28,59.68 L47.51,59.68 C47.4770511,51.5783463 40.911691,45.0219187 32.81,45 L32.81,51.22 C33.9290378,51.2181449 35.0372464,51.4391068 36.07,51.87 C38.3973785,52.8496381 40.172686,54.807967 40.92,57.22 Z"
                    fill="currentColor"
                />
            </g>
        </svg>
    ),
    multipleSelect: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M100,100 L68.18,100 L68.18,90.91 L90.91,90.91 L90.91,68.18 L100,68.18 L100,100 Z M31.82,100 L0,100 L0,68.18 L9.09,68.18 L9.09,90.91 L31.82,90.91 L31.82,100 Z M9.09,31.82 L0,31.82 L0,0 L31.82,0 L31.82,9.09 L9.09,9.09 L9.09,31.82 Z M100,31.82 L90.91,31.82 L90.91,9.09 L68.18,9.09 L68.18,0 L100,0 L100,31.82 Z M22.61,23.06 L31.7,23.06 L31.7,76.94 L22.61,76.94 L22.61,23.06 Z M45.45,23.06 L54.54,23.06 L54.54,76.94 L45.45,76.94 L45.45,23.06 Z M68.3,23.06 L77.39,23.06 L77.39,76.94 L68.3,76.94 L68.3,23.06 Z"
                    fill="currentColor"
                />
            </g>
        </svg>
    ),
    number: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M100,32.5 L100,22.5 L77.5,22.5 L77.5,0 L67.5,0 L67.5,22.5 L32.5,22.5 L32.5,0 L22.5,0 L22.5,22.5 L0,22.5 L0,32.5 L22.5,32.5 L22.5,67.5 L0,67.5 L0,77.5 L22.5,77.5 L22.5,100 L32.5,100 L32.5,77.5 L67.5,77.5 L67.5,100 L77.5,100 L77.5,77.5 L100,77.5 L100,67.5 L77.5,67.5 L77.5,32.5 L100,32.5 Z M67.5,67.5 L32.5,67.5 L32.5,32.5 L67.5,32.5 L67.5,67.5 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    ),
    singleSelect: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill="currentColor">
                    <path
                        d="M100,100 L68.18,100 L68.18,90.91 L90.91,90.91 L90.91,68.18 L100,68.18 L100,100 Z M31.82,100 L0,100 L0,68.18 L9.09,68.18 L9.09,90.91 L31.82,90.91 L31.82,100 Z M9.09,31.82 L0,31.82 L0,0 L31.82,0 L31.82,9.09 L9.09,9.09 L9.09,31.82 Z M100,31.82 L90.91,31.82 L90.91,9.09 L68.18,9.09 L68.18,0 L100,0 L100,31.82 Z M45.46,23.06 L54.55,23.06 L54.55,76.94 L45.46,76.94 L45.46,23.06 Z"/>
                </g>
            </g>
        </svg>
    ),
    updatedTime: props => (
        <svg {...props} viewBox="0 0 100 100">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M0,0 L100,0 L100,100 L0,100 L0,0 Z M90.91,24.17 L90.91,9.09 L77.7,9.09 L77.7,24.17 L90.91,24.17 Z M31.39,24.17 L45.45,24.17 L45.45,9.09 L31.39,9.09 L31.39,24.17 Z M54.55,9.09 L54.55,24.17 L68.61,24.17 L68.61,9.09 L54.55,9.09 Z M22.3,9.09 L9.09,9.09 L9.09,24.17 L22.3,24.17 L22.3,9.09 Z M9.09,90.91 L90.91,90.91 L90.91,33.26 L9.09,33.26 L9.09,90.91 Z M45.74,69.11 L69.51,45.34 L75.94,51.77 L45.74,81.97 L24.06,60.28 L30.49,53.85 L45.74,69.11 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    )
}