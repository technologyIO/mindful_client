import React from 'react'
import Script from 'next/script';
// import RtmsDynamicLandingPage from  '../component/RtmsDynamicLandingPage'
import RtmsDynamicLandingPage from  '../../rtmsComponents/RtmsDynamicLandingPage'

import { headers } from 'next/headers';
export async function generateMetadata({ params }) {


  return {
    title: `Mindful TMS  `,
    description: `We help people with anxiety, depression, OCD, grief, trauma, and more in a safe space.

Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate Psychologists are here for you.`,
    robots: "noindex, nofollow",
  };

}

const page = ({ params }) => {

  const headersList = headers();
  const currentUrl = headersList.get('x-full-url') || '';
  const baseZohoForm = 'https://forms.zohopublic.in/nikhilmindf1/form/Form2025WhitefieldBangalore/formperma/MCQDm70m0i_L44OTsxM5WJ4mDJ4CEFPE4yAsjdtGinQ';
  const zohoFormWithUrl = `${baseZohoForm}?from=landingpage&url=${encodeURIComponent(currentUrl)}&solution=rtms`;

    const data = {
    phone:`8197341114`, 
    section2Img:'/ads/rtms/chairImg2.png',
    zohoForm: zohoFormWithUrl,
        heroSection: {
      h1: "rTMS for Depression",
      mainDescription: "rTMS works to give you better results faster. Whether you're already working with a psychiatrist or psychologist and want to enhance your treatment, or you're exploring options for the first time, rTMS helps your brain respond better to therapy and medication.",
      subPoints: [
        // "If you're already considering rTMS, you don't need more theory — you need the right provider.",
        // "At MindfulTMS Neurocare, every rTMS (repetitive transcranial magnetic stimulation) session is led by a specialist with evidence-based targeting specifically focused on Depression, Anxiety, OCD, PTSD and more.",
        // "Begin rTMS with one of India's most experienced speciality neurocare clinics"
      ]
    },
    
    // Why Mindful TMS Section
    whyMindfulSection: {
      title: "Why Mindful TMS",
      points: [
        {
          title: "400,000+ rTMS sessions delivered since 2015",
          description: ""
        },
        {
          title: "India's longest-running specialized TMS clinic chain",
          description: ""
        },
        {
          title: "MD Psychiatrists and Clinical Psychologists",
          description: ""
        },
        {
          title: "Bangalore and Delhi locations",
          description: ""
        }
      ]
    },
    
    // What to Expect Section
    whatToExpectSection: {
      title: "What to Expect",
      points: [
        "20-30 sessions over 4-6 weeks",
        "20-30 minutes per session",
        "Those taking rTMS can go back to normal activities right after",
        "Most patients feel better within 2-3 weeks"
      ],
      nextStep: "Next Step: First visit includes complete check-up, treatment plan, and clear talk about results and cost.",
      cta: "Schedule Your rTMS Consultation"
    }
  }
  return (
    <>
         <Script id="zfadvlead" strategy="afterInteractive">
{`(function(){
  function ZFAdvLead(){}
  ZFAdvLead.utmPValObj = ZFAdvLead.utmPValObj || {};
  ZFAdvLead.utmPNameArr = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
  ZFAdvLead.utmcustPNameArr = [];
  ZFAdvLead.isSameDomian = false;

  ZFAdvLead.prototype.zfautm_sC = function(paramName, path, domain, secure) {
    var value = ZFAdvLead.utmPValObj[paramName];
    if (value != null) {
      var cookieStr = paramName + "=" + encodeURIComponent(value);
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + 7);
      cookieStr += "; expires=" + exdate.toGMTString();
      cookieStr += "; path=/";
      if (domain) cookieStr += "; domain=" + encodeURIComponent(domain);
      if (secure) cookieStr += "; secure";
      document.cookie = cookieStr;
    }
  };

  ZFAdvLead.prototype.zfautm_ini = function() {
    this.zfautm_bscPCap();
    var url_search = document.location.search;
    ZFAdvLead.utmcustPNameArr.forEach(function(n){
      var v = n === 'referrername' ? (document.URL||'').slice(0,1500)
                : this.zfautm_gP(url_search,n) || this.zfautm_gC(n);
      if(v) ZFAdvLead.utmPValObj[n] = v;
    }, this);
    for(var k in ZFAdvLead.utmPValObj) this.zfautm_sC(k);
  };

  ZFAdvLead.prototype.zfautm_bscPCap = function() {
    var t = this.zfautm_calcTrafSrc();
    ['source','medium','campaign','term','content'].forEach(function(f){
      if(t[f]!=='') ZFAdvLead.utmPValObj['utm_'+f] = t[f];
    });
  };

  ZFAdvLead.prototype.zfautm_calcTrafSrc = function() {
    // full traffic-source logic here
    return {source:'',medium:'',campaign:'',term:'',content:''};
  };

  ZFAdvLead.prototype.zfautm_gP = function(s,q) {
    var m = s.match('[?&]'+q+'=([^&]+)'); return m?decodeURIComponent(m[1]):'';
  };
  ZFAdvLead.prototype.zfautm_gC = function(n) {
    var arr = document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){ var p=arr[i].split('='); if(p[0]===n) return decodeURIComponent(p[1]); }
  };

  ZFAdvLead.prototype.zfautm_iframeSprt = function() {
    /* append UTM params to iframes */
  };
  ZFAdvLead.prototype.zfautm_DHtmlSprt = function() {
    /* fill hidden form fields */
  };

  var inst = new ZFAdvLead();
  inst.zfautm_ini();
  window.addEventListener('load', function() {
    inst.zfautm_iframeSprt();
    inst.zfautm_DHtmlSprt();
  });
})();
`}
        </Script>
        <RtmsDynamicLandingPage city={"wf"} params={params}  data={data}/>
    </>
  )
}

export default page