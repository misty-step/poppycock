const portraits = [
  {
    name: "Dottie the cockatoo",
    art: (
      <>
        <path d="M36 30 26 14q14-2 22 14L48 6q15 5 14 24" fill="#ffe280" />
        <path d="M20 57q-6-32 27-33 32-3 33 31L75 81q-26 15-51-1Z" fill="#fffdf8" />
        <path d="M22 60 13 73l13 2M77 58l9 16-12 2" fill="#f9a9c5" />
        <path d="m46 49 18 8-16 11-8-10Z" fill="#ffb485" />
        <path d="m29 41 10-3m23 0 7 5" />
        <ellipse cx="34" cy="49" rx="3" ry="5" fill="#35233f" stroke="none" />
        <path d="m64 50 7 2" />
        <path d="m37 78 10 5-10 6Zm20 0-10 5 10 6Z" fill="#f9a9c5" />
        <circle cx="47" cy="83" r="3" fill="#35233f" />
      </>
    ),
  },
  {
    name: "Basil the crocodile",
    art: (
      <>
        <path d="m20 47-6-11 13 2 2-16 12 10 11-16 9 16 15-7-3 19" fill="#75bd91" />
        <path d="M20 45q0-18 19-18t20 21h18q15 1 12 16L79 80q-27 14-52 1L17 66Z" fill="#9be3dd" />
        <path d="M23 35q10-9 19-3M44 36l11 3" />
        <ellipse cx="33" cy="46" rx="3" ry="5" fill="#35233f" stroke="none" />
        <ellipse cx="51" cy="47" rx="3" ry="5" fill="#35233f" stroke="none" />
        <path d="M36 68h44m-27 0 4 8 5-8m8 0 4 6 4-6" fill="#fffdf8" />
        <circle cx="76" cy="57" r="2" fill="#35233f" stroke="none" />
        <path d="m28 81 11 5 11-4-6 10H30Z" fill="#d1bce9" />
      </>
    ),
  },
  {
    name: "Bea the moth",
    art: (
      <>
        <path
          d="M42 41Q10 11 8 36 2 58 29 62 7 77 27 87l20-18m6-28q33-30 35-5 6 22-21 26 22 15 2 25L49 69"
          fill="#d1bce9"
        />
        <path d="m17 39 13 10m-5 27 10-7m43-30-12 10m5 27-10-7" stroke="#8869a4" strokeWidth="5" />
        <path d="M37 38q-4-14 11-14t12 14l-1 31q-11 17-22 0Z" fill="#ffe280" />
        <path d="m42 26-6-13m18 13 7-13" />
        <circle cx="35" cy="12" r="3" fill="#f9a9c5" />
        <circle cx="62" cy="12" r="3" fill="#f9a9c5" />
        <circle cx="40" cy="45" r="9" fill="#fffdf8" />
        <circle cx="59" cy="45" r="9" fill="#fffdf8" />
        <path d="M49 44h1m-8-3v6m15-6v6m-12 13q4 5 9 0" />
      </>
    ),
  },
  {
    name: "Monty the walrus",
    art: (
      <>
        <path d="M15 57q0-34 34-34t32 34l7 21-20 8H28L8 77Z" fill="#eaa27f" />
        <path d="M29 24 33 11h29l5 14M25 27h45" fill="#d1bce9" />
        <path d="m27 43 10-3m20 1 11 3" />
        <circle cx="34" cy="50" r="3" fill="#35233f" stroke="none" />
        <circle cx="62" cy="51" r="12" fill="#fffdf8" />
        <circle cx="62" cy="51" r="3" fill="#35233f" stroke="none" />
        <path d="M74 53v26l-5 5" />
        <path d="M31 62 35 84q9-7 9-19m9-1q0 14 9 20l4-24" fill="#fffdf8" />
        <path d="M47 54Q29 50 22 63q16 10 26-1 12 13 28 0-12-12-29-8Z" fill="#35233f" />
        <ellipse cx="48" cy="55" rx="7" ry="5" fill="#f9a9c5" />
      </>
    ),
  },
  {
    name: "Clover the rabbit",
    art: (
      <>
        <path d="M29 43Q10 7 24 5q13-1 19 34M53 39Q61 1 74 9q9 6-6 36" fill="#f9a9c5" />
        <path d="m26 16 10 22m31-18-7 17" stroke="#c46990" strokeWidth="5" />
        <path d="M20 61q-1-29 28-28t28 28l-5 20q-25 13-47-1Z" fill="#f9a9c5" />
        <path d="m29 48 9-3m20 0 8 3" />
        <ellipse cx="34" cy="56" rx="3" ry="5" fill="#35233f" stroke="none" />
        <ellipse cx="61" cy="56" rx="3" ry="5" fill="#35233f" stroke="none" />
        <path d="m43 65 5 5 5-5m-5 5v7m-6-2q6 6 12 0" />
        <path d="m22 80 23 5 26-6-5 13H29Z" fill="#9be3dd" />
        <path d="m58 86 19-3-6 11Z" fill="#9be3dd" />
      </>
    ),
  },
  {
    name: "Otto the octopus",
    art: (
      <>
        <path
          d="M22 57q-9-37 24-40 34-2 30 37l-1 8q15 0 14 12-2 12-15 4-1 17-15 6-10 16-18 0-15 13-18-1Q7 92 7 77q0-11 16-13Z"
          fill="#b3bdf1"
        />
        <path d="m31 21 7-10 7 7 8-11 7 12" fill="#ffe280" />
        <path d="M27 41q6-5 13-2m14 0q7-4 13 2" />
        <circle cx="35" cy="49" r="7" fill="#fffdf8" />
        <circle cx="60" cy="49" r="7" fill="#fffdf8" />
        <path d="m36 47-1 4m26-4-1 4m-22 13q10 9 19-2" />
        <path d="m36 72 12 5-11 8Zm23-1-11 6 11 7Z" fill="#ffb485" />
        <circle cx="48" cy="77" r="3" fill="#35233f" />
      </>
    ),
  },
  {
    name: "Pip the pear",
    art: (
      <>
        <path d="M46 25q-2-13 7-19m-3 8q14-13 25-3-9 12-25 9" fill="#75bd91" />
        <path
          d="M35 35q2-15 14-15 14 0 15 19 2 8 13 21 21 31-27 31-46 0-30-29 14-18 15-27Z"
          fill="#d3dd87"
        />
        <path d="M30 31q-1-18 22-16 14-1 15 12-20 10-37 4Z" fill="#d1bce9" />
        <path d="m27 29 42-4M30 49l9-3" />
        <circle cx="58" cy="52" r="10" fill="#fffdf8" />
        <circle cx="35" cy="55" r="3" fill="#35233f" stroke="none" />
        <circle cx="59" cy="53" r="3" fill="#35233f" stroke="none" />
        <path d="m68 54 8 6M38 69q10 4 18-4" />
        <circle cx="29" cy="68" r="3" fill="#e7a477" stroke="none" />
        <circle cx="66" cy="68" r="3" fill="#e7a477" stroke="none" />
      </>
    ),
  },
  {
    name: "Cricket the frog",
    art: (
      <>
        <path
          d="M20 39q-6-24 11-25 13-1 18 17 5-18 18-17 18 1 11 27 9 11 7 27-1 23-37 23T12 68q-3-18 8-29Z"
          fill="#75bd91"
        />
        <path d="M18 34h24v21H18Zm37 0h24v21H55Z" fill="#fffdf8" />
        <path d="M42 41h13m-25-1v9m36-9v9" />
        <path d="M24 67q25 22 49-2" fill="#f9a9c5" />
        <path d="m25 65-3 5m51-7 3 5" />
        <path d="m34 88 14-7 13 7-13 6Z" fill="#ffe280" />
      </>
    ),
  },
  {
    name: "Mabel the mushroom",
    art: (
      <>
        <path d="m29 42-5 37q2 12 25 12 25 0 24-12l-7-37" fill="#fffdf8" />
        <path d="M8 46Q11 7 46 7q35-1 43 39-39 16-81 0Z" fill="#b18ed4" />
        <path d="M16 43q30 10 64 0" stroke="#795991" />
        <circle cx="28" cy="27" r="7" fill="#f9a9c5" stroke="none" />
        <circle cx="54" cy="20" r="5" fill="#ffe280" stroke="none" />
        <circle cx="72" cy="34" r="6" fill="#f9a9c5" stroke="none" />
        <path d="M31 59q5-5 10 0m13 0q5-5 10 0m-22 12q6 5 12-1" />
        <path d="m27 82 12-4 10 7 11-7 11 5" fill="#9be3dd" />
        <circle cx="49" cy="88" r="2" fill="#35233f" stroke="none" />
      </>
    ),
  },
  {
    name: "Finch the fox",
    art: (
      <>
        <path d="M19 47 10 10l32 20h14L85 9l-7 39 7 13-36 30L12 61Z" fill="#ed977e" />
        <path d="m20 24 5 20 10-10m39-10-5 20-9-10" fill="#d1bce9" />
        <path d="M15 56 33 48l16 25 15-25 18 8-33 33Z" fill="#fffdf8" />
        <path d="m26 45 13-3m18 0 13 3m-38 10 6 3m21 0 6-3" />
        <path d="m43 69 6 8 6-8Z" fill="#35233f" />
        <path d="M33 25q18-17 30 1l-19 9" fill="#ed977e" />
        <path d="m32 84 16 5 15-5 5 9H28Z" fill="#9be3dd" />
      </>
    ),
  },
  {
    name: "Winnie the whale",
    art: (
      <>
        <path
          d="M60 29q15 2 16 18l-1 22q13 4 14-9 8 19-9 26-15 6-26-1Q14 92 9 64q-9-41 34-38Z"
          fill="#8dc9e8"
        />
        <path d="M23 27 18 15q21 6 32-3l8 17-35 3Z" fill="#fffdf8" />
        <path d="M21 29h38" stroke="#b18ed4" strokeWidth="5" />
        <path d="m18 46 12-3m18 0 10 5" />
        <ellipse cx="26" cy="54" rx="3" ry="5" fill="#35233f" stroke="none" />
        <path d="m51 55 8-2M24 67q16 10 33-1" />
        <path d="M42 70q-5 19 12 19l5-16" fill="#8dc9e8" />
        <path d="m36 15-3-7m5 2 3-5" stroke="#8dc9e8" />
        <circle cx="17" cy="64" r="4" fill="#f9a9c5" stroke="none" />
      </>
    ),
  },
  {
    name: "Nell the owl",
    art: (
      <>
        <path d="m15 42 2-30 25 15h14l23-15 1 31q11 40-30 47-43-5-35-48Z" fill="#d6a175" />
        <path d="M24 62q-6 19 24 26 28-7 23-26L47 49Z" fill="#ffe280" />
        <path d="m13 37 29 3 2 18q-29 5-31-21Zm69 0-29 3-2 18q29 5 31-21Z" fill="#fffdf8" />
        <path d="M44 45h8" />
        <ellipse cx="32" cy="49" rx="3" ry="5" fill="#35233f" stroke="none" />
        <ellipse cx="63" cy="49" rx="3" ry="5" fill="#35233f" stroke="none" />
        <path d="m42 61 6 10 7-10Z" fill="#f9a9c5" />
        <path d="m35 76 3 4m9-2 2 4m10-6-2 4m-41-17 11 14m53-14L69 77" />
      </>
    ),
  },
];

export function Face({ seat = 0, small = false }: { seat?: number; small?: boolean }) {
  const portrait = portraits[seat % portraits.length];
  return (
    <span
      className={`face${small ? " face-small" : ""}`}
      data-avatar={portrait.name}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 96 96"
        fill="none"
        stroke="#35233f"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        {portrait.art}
      </svg>
    </span>
  );
}
