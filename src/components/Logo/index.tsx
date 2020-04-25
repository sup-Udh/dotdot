import React from 'react'

type Props = {
  className: string
  theme: 'dark' | 'light'
}

export default ({ className, theme }: Props) => {
  const lettersColor = theme === 'light' ? '282B2D' : 'F3F3F3'

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="717"
      height="139"
      viewBox="0 0 717 139"
    >
      <defs>
        <path
          id="main-black-a"
          d="M29.0928934,85.7089474 C35.276613,85.7089474 40.4425154,84.2681579 44.5906006,81.3865789 C45.0197129,81.0884846 45.4378302,80.7792888 45.8449525,80.4589915 L45.9155783,80.402 L45.9156834,83.98 L59.7426341,83.98 L59.7426341,0.99052624 L43.9568654,0.99052624 L43.9562341,23.746 L43.6237812,23.5352083 C39.952661,21.2683262 35.567712,20.0944052 30.468934,20.0134451 L29.8994655,20.0089473 C23.9461951,20.0089473 18.7610886,21.4305263 14.344146,24.2736842 C9.9272034,27.1168421 6.49927187,31.0069736 4.0603514,35.9440789 C1.62143093,40.8811842 0.401970697,46.5194736 0.401970697,52.8589473 C0.401970697,59.0831579 1.60222683,64.673421 4.00273911,69.6297368 C6.40325138,74.5860526 9.75436651,78.505 14.0560845,81.3865789 C18.3578025,84.2681579 23.3700721,85.7089474 29.0928934,85.7089474 Z M31.6278343,71.7621053 C28.2479131,71.7621053 25.4825229,70.9168421 23.3316639,69.2263158 C21.1808049,67.5357895 19.5868648,65.2593421 18.5498435,62.3969737 C17.5128222,59.5346052 16.9943115,56.3552631 16.9943115,52.8589473 C16.9943115,49.4010526 17.5320263,46.240921 18.6074558,43.3785526 C19.6828853,40.5161842 21.3440398,38.2301315 23.5909193,36.5203947 C25.8377987,34.8106578 28.7088114,33.9557894 32.2039573,33.9557894 C35.468654,33.9557894 38.1092175,34.743421 40.1256478,36.3186842 C42.1420781,37.8939473 43.6111916,40.1031579 44.5329883,42.9463158 C45.454785,45.7894736 45.9156834,49.0936842 45.9156834,52.8589473 C45.9156834,56.6242105 45.454785,59.928421 44.5329883,62.7715789 C43.6111916,65.6147368 42.1036699,67.8239474 40.0104232,69.3992105 C37.9171765,70.9744737 35.1229802,71.7621053 31.6278343,71.7621053 Z M102.374154,85.7089474 C108.596281,85.7089474 114.079051,84.3161842 118.822464,81.5306579 C123.565876,78.7451316 127.272267,74.8838158 129.941637,69.9467105 C132.611006,65.0096052 133.945691,59.3136842 133.945691,52.8589473 C133.945691,46.4426315 132.620608,40.765921 129.970443,35.8288157 C127.320277,30.8917105 123.623488,27.0207894 118.880076,24.2160526 C114.136664,21.4113157 108.63469,20.0089473 102.374154,20.0089473 C96.2288422,20.0089473 90.7940824,21.3921052 86.0698743,24.158421 C81.3456661,26.9247368 77.6392752,30.7764473 74.9507014,35.7135526 C72.2621277,40.6506579 70.9178408,46.3657894 70.9178408,52.8589473 C70.9178408,59.2752631 72.2333215,64.9519737 74.864283,69.8890789 C77.4952444,74.8261842 81.1728292,78.6971053 85.8970374,81.5018421 C90.6212455,84.3065789 96.1136176,85.7089474 102.374154,85.7089474 Z M102.374154,71.0705263 C97.4963127,71.0705263 93.7995238,69.4280263 91.2837869,66.1430263 C88.7680501,62.8580263 87.5101816,58.43 87.5101816,52.8589473 C87.5101816,49.2473684 88.0382943,46.0776315 89.0945197,43.3497368 C90.1507451,40.6218421 91.7734914,38.4894736 93.9627586,36.9526315 C96.1520258,35.4157894 98.9558242,34.6473684 102.374154,34.6473684 C107.328811,34.6473684 111.064008,36.2994736 113.579745,39.6036842 C116.095482,42.9078947 117.35335,47.3263158 117.35335,52.8589473 C117.35335,58.1994737 116.114686,62.5698684 113.637357,65.9701316 C111.160029,69.3703947 107.405627,71.0705263 102.374154,71.0705263 Z M170.807431,85.0461842 C174.936312,85.1422368 179.151612,84.7868421 183.45333,83.98 L183.45333,83.98 L183.45333,70.9552631 C179.766143,71.4547368 176.405426,71.608421 173.371178,71.4163158 C170.336931,71.2242105 168.12846,70.0331579 166.745765,67.8431579 C166.016009,66.6905263 165.622325,65.1440789 165.564713,63.2038158 C165.5071,61.2635526 165.478294,59.0831579 165.478294,56.6626316 L165.478294,56.6626316 L165.477558,33.841 L183.45333,33.8405263 L183.45333,21.7378947 L165.477558,21.738 L165.478294,4.44842098 L149.80775,4.44842098 L149.806803,21.738 L139.207088,21.7378947 L139.207088,33.8405263 L149.806803,33.841 L149.80775,57.5847368 C149.80775,61.0248988 149.840477,64.1295017 149.90593,66.8985456 L149.922975,67.5838158 C149.999791,70.5230263 150.806363,73.4142105 152.342691,76.2573684 C154.032652,79.2926316 156.500378,81.4922368 159.745871,82.8561842 C162.991363,84.2201316 166.67855,84.9501316 170.807431,85.0461842 Z M222.556557,85.7089474 C228.740277,85.7089474 233.906179,84.2681579 238.054264,81.3865789 C238.483376,81.0884846 238.901494,80.7792888 239.308616,80.4589915 L239.378821,80.402 L239.379347,83.98 L253.206298,83.98 L253.206298,0.99052624 L237.420529,0.99052624 L237.420476,23.747 L237.087445,23.5352083 C233.416325,21.2683262 229.031375,20.0944052 223.932597,20.0134451 L223.363129,20.0089473 C217.409859,20.0089473 212.224752,21.4305263 207.807809,24.2736842 C203.390867,27.1168421 199.962935,31.0069736 197.524015,35.9440789 C195.085094,40.8811842 193.865634,46.5194736 193.865634,52.8589473 C193.865634,59.0831579 195.06589,64.673421 197.466403,69.6297368 C199.866915,74.5860526 203.21803,78.505 207.519748,81.3865789 C211.821466,84.2681579 216.833736,85.7089474 222.556557,85.7089474 Z M225.091498,71.7621053 C221.711577,71.7621053 218.946186,70.9168421 216.795327,69.2263158 C214.644468,67.5357895 213.050528,65.2593421 212.013507,62.3969737 C210.976486,59.5346052 210.457975,56.3552631 210.457975,52.8589473 C210.457975,49.4010526 210.99569,46.240921 212.071119,43.3785526 C213.146549,40.5161842 214.807703,38.2301315 217.054583,36.5203947 C219.301462,34.8106578 222.172475,33.9557894 225.667621,33.9557894 C228.932317,33.9557894 231.572881,34.743421 233.589311,36.3186842 C235.605742,37.8939473 237.074855,40.1031579 237.996652,42.9463158 C238.918449,45.7894736 239.379347,49.0936842 239.379347,52.8589473 C239.379347,56.6242105 238.918449,59.928421 237.996652,62.7715789 C237.074855,65.6147368 235.567333,67.8239474 233.474087,69.3992105 C231.38084,70.9744737 228.586644,71.7621053 225.091498,71.7621053 Z M295.837817,85.7089474 C302.059945,85.7089474 307.542715,84.3161842 312.286127,81.5306579 C317.029539,78.7451316 320.73593,74.8838158 323.4053,69.9467105 C326.07467,65.0096052 327.409355,59.3136842 327.409355,52.8589473 C327.409355,46.4426315 326.084272,40.765921 323.434106,35.8288157 C320.783941,30.8917105 317.087152,27.0207894 312.34374,24.2160526 C307.600327,21.4113157 302.098353,20.0089473 295.837817,20.0089473 C289.692506,20.0089473 284.257746,21.3921052 279.533538,24.158421 C274.80933,26.9247368 271.102939,30.7764473 268.414365,35.7135526 C265.725791,40.6506579 264.381504,46.3657894 264.381504,52.8589473 C264.381504,59.2752631 265.696985,64.9519737 268.327947,69.8890789 C270.958908,74.8261842 274.636493,78.6971053 279.360701,81.5018421 C284.084909,84.3065789 289.577281,85.7089474 295.837817,85.7089474 Z M295.837817,71.0705263 C290.959976,71.0705263 287.263187,69.4280263 284.74745,66.1430263 C282.231714,62.8580263 280.973845,58.43 280.973845,52.8589473 C280.973845,49.2473684 281.501958,46.0776315 282.558183,43.3497368 C283.614409,40.6218421 285.237155,38.4894736 287.426422,36.9526315 C289.615689,35.4157894 292.419488,34.6473684 295.837817,34.6473684 C300.792474,34.6473684 304.527672,36.2994736 307.043408,39.6036842 C309.559145,42.9078947 310.817014,47.3263158 310.817014,52.8589473 C310.817014,58.1994737 309.578349,62.5698684 307.101021,65.9701316 C304.623692,69.3703947 300.869291,71.0705263 295.837817,71.0705263 Z M364.271095,85.0461842 C368.399976,85.1422368 372.615276,84.7868421 376.916994,83.98 L376.916994,83.98 L376.916994,70.9552631 C373.229807,71.4547368 369.86909,71.608421 366.834842,71.4163158 C363.800594,71.2242105 361.592123,70.0331579 360.209428,67.8431579 C359.479672,66.6905263 359.085988,65.1440789 359.028376,63.2038158 C358.970764,61.2635526 358.941958,59.0831579 358.941958,56.6626316 L358.941958,56.6626316 L358.9418,33.841 L376.916994,33.8405263 L376.916994,21.7378947 L358.9418,21.738 L358.941958,4.44842098 L343.271414,4.44842098 L343.271045,21.738 L332.670751,21.7378947 L332.670751,33.8405263 L343.271045,33.841 L343.271414,57.5847368 C343.271414,61.0248988 343.30414,64.1295017 343.369593,66.8985456 L343.386638,67.5838158 C343.463455,70.5230263 344.270027,73.4142105 345.806354,76.2573684 C347.496315,79.2926316 349.964042,81.4922368 353.209534,82.8561842 C356.455027,84.2201316 360.142214,84.9501316 364.271095,85.0461842 Z"
        />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(339.337 25.02)">
          <mask id="main-black-b" fill="#fff">
            <use xlinkHref="#main-black-a" />
          </mask>
          <use
            fill="#FFF"
            fill-rule="nonzero"
            opacity=".9"
            xlinkHref="#main-black-a"
          />
          <g fill={`#${lettersColor}`} mask="url(#main-black-b)">
            <rect
              width="377.177"
              height="86.18"
              transform="translate(0 -.158)"
            />
          </g>
        </g>
        <g transform="translate(0 1)">
          <ellipse
            cx="217.427"
            cy="69.5"
            fill="#FF5151"
            rx="67.477"
            ry="67.5"
          />
          <ellipse cx="67.477" cy="67.5" fill="#4DCBC3" rx="67.477" ry="67.5" />
        </g>
      </g>
    </svg>
  )
}
