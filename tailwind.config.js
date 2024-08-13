/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    aspectRatio:{
      youtube_card:'16/9'
    },
    colors:{
      white:'white',
      yellow:'yellow',
      red:'red',
      green: 'green',
      blue: 'blue',
      purple:'purple',
      orange:'orange',
      basecolor:'#0f0f0f',
      black:'black',
      glass1:'#FFFFFF20',
      glass:'#FFFFFF15',
      glass2:'#FFFFFF90',
      textcolor:'#f1f1f1'
    },
    borderRadius:{
      rounded1:'7px',
      rounded2:'14px',
      rounded3:'21px',
      rounded4:'28px',
      rounded5:'35px',
      _rounded:"50%"
    },
    padding:{
      padding1:'5px',
      padding2:'10px',
      padding3:'15px',
      padding4:'20px',
      padding5:'25px',
      padding6:"30px"
    },
    fontSize:{
      sm:'0.6rem',
      sm2:'0.8rem',
    },
    gap:{
      gap1:'6px',
      gap2:'12px',
      gap3:'18px',
      gap4:'24px',
      gap5:'30px',
      gap6:"36px"
    },
    margin:{
      margin1:'5px',
      margin2:'10px',
      margin3:'15px',
      margin4:'20px',
      margin5:'25px',
      margin6:"30px"
    },

    screens:{
      sm:"640px",
      md:"830px",
      lg:"1024px"
    }

    // sm (small) for screens 640px and up
    // md (medium) for screens 768px and up
    // lg (large) for screens 1024px and up
    // xl (extra-large) for screens 1280px and up
    // 2xl (double extra-large) for screens 1536px and up
    
  },
  plugins: [],
}

