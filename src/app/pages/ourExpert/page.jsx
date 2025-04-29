import React from 'react'
import OurDoctorSection from '@/app/clinicLocation/[city]/OurDoctorSection'
import Script from 'next/script';


const allSection = {
    heroSection: {
        banner: "/home/banner01.png",
        title: "You Deserve to Feel Better ",
        para: `Get the best care from our experienced psychologists, TMS experts and psychiatrists for help with depression,OCD and more.
With empathy and confidence, our professionals will guide you through every challenge.`,
        button: {
            text: "SCHEDULE CONSULTATION",
            link: "/consultation/location",
        }
    },
    section2: {
        para1: `Not sure what you need?`,
        para2: `These tests can help identify
what you may have and need`,
        para2: `Take a FREE TEST to identify your symptoms`,
        html1: `<p class='text-center mb-5 font-[15px] text-[#3A3A3A]'>These tests can help identify
                        what you may have and need</p>

                    <h1 class='text-2xl text-center text-gray-800'>
                        Take a <span class="font-semibold">FREE TEST</span> to identify your symptoms
                    </h1>`,
        button: {
            text: "FREE TEST",
            link: "/assesment",
        }
    },
    section3: {
        title: "TMS Treatment",
        para1: `A new approach to treat depression, anxiety, OCD and more.`,
        box: {
            banner: "/home/doctor.png",
            para: `<p class='font-bold mb-3 text-gray-700 text-md'>NON-INVASIVE</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>NO MEDICATION</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>SAFE</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>US FDA Approved</p>`
        },
        para2: `<p style="font-size: 15px; color: #3A3A3A; text-align: center">At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in India and USA.</p>

        <p style="font-size: 15px; color: #3A3A3A; text-align: center">Is TMS for me? Learn how it works and if it is the right option for you. </p>`,
        button: {
            text: "MORE ABOUT TMS",
            link: "/blog/tms",
        }

    },
    section4:{
        header:`<h1 class='text-2xl font-[30px] text-center '>
                    Why choose <span class='font-semibold'>MindfulTMS?</span>
                </h1>`,
        para:`<p class='text-center'>
                    Your well being is our mission.
                </p>`,
        services:[
            {
                icon:'/home/medical.svg',
                text:'Personalized care',
            },
            {
                icon:'/home/handshake.svg',
                text:'Trust',
            },
            {
                icon:'/home/group.svg',
                text:'Safe',
            },
            {
                icon:'/home/heart.svg',
                text:'Holistic',
            },
        ]
    },
    section5:{
        header:'Services we offer',
        services:[
            {
                title:'Psychology/Therapy',
                array:[
                    {
                        img:"",
                        name:'Lorem Ipsum dolor qioe',
                    },
                    {
                        img:"",
                        name:'Lorem Ipsum dolor qioe',
                    },
                    {
                        img:"",
                        name:'Lorem Ipsum dolor qioe',
                    },
                ],
                button:{
                    text:'LEARN MORE',
                    link:'/services/Therapy Services'
                }
            }, {
                title:'Psychiatry',
                array:[
                    {
                        img:"",
                        name:'Lorem Ipsum dolor qioe',
                    },
                    {
                        img:"",
                        name:'Lorem Ipsum dolor qioe',
                    },
                    {
                        img:"",
                        name:'Lorem Ipsum dolor qioe',
                    },
                ],
                button:{
                    text:'LEARN MORE',
                    link:'/services/TMS Treatment Services'
                }
            }
        ]
    },
    section6:{
        header:'Our Locations',
        para:`Lorem ipsum dolor sit amet`,
        locations:[
           {
            title:'Bangalore',
            locationArray:[
                {
                    title:"Aster CMI",
                    address:"Bangalore North",
                },
                {
                    title:"Whitefield",
                    address:"Bangalore East",
                },
            ]
           },
           {
            title:'Delhi',
            locationArray:[
                {
                    title:"Greater Kailash",
                    address:"Delhi",
                },
                
            ]
           },
        ]
    },
    section7:{
        header:'Our Experts',
        expertArray:[
            {
                img:'/home/doctor1.png',
                name:'Dr.Sheela Rao',
                desig:'Clinical Psychologist',
                location:'Bangalore',
            },
            {
                img:'/home/doctor1.png',
                name:'Dr.Sheela Rao',
                desig:'Clinical Psychologist',
                location:'Bangalore',
            },
            {
                img:'/home/doctor1.png',
                name:'Dr.Sheela Rao',
                desig:'Clinical Psychologist',
                location:'Bangalore',
            },
            {
                img:'/home/doctor1.png',
                name:'Dr.Sheela Rao',
                desig:'Clinical Psychologist',
                location:'Bangalore',
            },
            {
                img:'/home/doctor1.png',
                name:'Dr.Sheela Rao',
                desig:'Clinical Psychologist',
                location:'Bangalore',
            },
            {
                img:'/home/doctor1.png',
                name:'Dr.Sheela Rao',
                desig:'Clinical Psychologist',
                location:'Bangalore',
            },
         
        ]
    }
}

export async function generateMetadata() {


    return {
     title: 'Meet Our Mental Health & rTMS Experts | MindfulTMS Clinics',
     description:`Meet the expert team at Mindful TMS—rTMS specialists, neurofeedback professionals, therapists, psychologists, and psychiatrists focused on your wellbeing.`,
   };
  
  }
  
const page = () => {
  return (
    <>
     <Script id="zf-adv-lead" strategy="beforeInteractive">
{`
function ZFAdvLead(){
}
ZFAdvLead.utmPValObj = ZFAdvLead.utmPValObj || {};

ZFAdvLead.utmPNameArr = new Array('utm_source','utm_medium','utm_campaign','utm_term','utm_content');ZFAdvLead.utmcustPNameArr = new Array();ZFAdvLead.isSameDomian = false;

ZFAdvLead.prototype.zfautm_sC = function( paramName,path,domain,secure ){
  var value = ZFAdvLead.utmPValObj[paramName];
  if ( typeof value !== "undefined" && value !== null ){
    var cookieStr = paramName + "=" + encodeURIComponent( value );
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+7);
    cookieStr += "; expires=" + exdate.toGMTString();
    cookieStr += "; path=/";
    if ( domain ) {
      cookieStr += "; domain=" + encodeURIComponent( domain );
    }
    if ( secure ) {
      cookieStr += "; secure";
    }
    document.cookie = cookieStr;
  }
};
ZFAdvLead.prototype.zfautm_ini = function (){
  this.zfautm_bscPCap();
  var url_search = document.location.search;
  for (var i = 0; i < ZFAdvLead.utmcustPNameArr.length ; i ++){
    var zf_pN = ZFAdvLead.utmcustPNameArr[i];
    var zf_pV;
    if ( zf_pN == 'referrername' ) {
      zf_pV = ( document.URL || '' ).slice( 0, 1500 );
    } else {
      zf_pV = this.zfautm_gP(url_search, zf_pN);
      if (zf_pV == undefined || zf_pV == ''){
          zf_pV = this.zfautm_gC(zf_pN);
      }
    }
    if ( typeof zf_pV !== "undefined" && zf_pV !== null & zf_pV != "" ) {
      ZFAdvLead.utmPValObj[ zf_pN ] = zf_pV;
    }
  }
  for (var pkey in ZFAdvLead.utmPValObj) {
    this.zfautm_sC(pkey);
  }
};
ZFAdvLead.prototype.zfautm_bscPCap = function () {
  var trafSrc = this.zfautm_calcTrafSrc();
  if ( trafSrc.source != "" ) {
    ZFAdvLead.utmPValObj.utm_source = trafSrc.source;
  }
  if ( trafSrc.medium != "" ) {
    ZFAdvLead.utmPValObj.utm_medium = trafSrc.medium;
  }
  if ( trafSrc.campaign != "" ) {
    ZFAdvLead.utmPValObj.utm_campaign = trafSrc.campaign;
  }
  if ( trafSrc.term != "" ) {
    ZFAdvLead.utmPValObj.utm_term = trafSrc.term;
  }
  if ( trafSrc.content != "" ) {
    ZFAdvLead.utmPValObj.utm_content = trafSrc.content;
  }
}
ZFAdvLead.prototype.zfautm_calcTrafSrc = function() {
  var u1='', u2='', u3='', u4='', u5='';
  var search_engines = [['bing', 'q'], ['google', 'q'], ['yahoo', 'q'], ['baidu', 'q'], ['yandex', 'q'], ['ask', 'q']]; //List of search engines 
  var ref = document.referrer;
  ref = ref.substr(ref.indexOf('//')+2);
  ref_domain = ref;
  ref_path = '/';
  ref_search = '';

  // Checks for campaign parameters
  var url_search = document.location.search;
  if(url_search.indexOf('utm_source') > -1 || url_search.indexOf('utm_medium') > -1 || url_search.indexOf('utm_campaign') > -1 || url_search.indexOf('utm_term') > -1 || url_search.indexOf('utm_content') > -1) {
    u1 = this.zfautm_gP(url_search, 'utm_source'); 
    u2 = this.zfautm_gP(url_search, 'utm_medium'); 
    u3 = this.zfautm_gP(url_search, 'utm_campaign'); 
    u4 = this.zfautm_gP(url_search, 'utm_term'); 
    u5 = this.zfautm_gP(url_search, 'utm_content'); 
  } else if ( this.zfautm_gP(url_search, 'gclid')) {
    u1 = 'Google Ads'; 
    u2 = 'cpc'; 
    u3 = '(not set)'; 
    if ( !ZFAdvLead.utmcustPNameArr.includes('gclid') ) {
      ZFAdvLead.utmcustPNameArr.push('gclid');
    }
  } else if(ref) {
    var r_u1 = this.zfautm_gC('utm_source'); 
    var r_u2 = this.zfautm_gC('utm_medium'); 
    var r_u3 = this.zfautm_gC('utm_campaign'); 
    var r_u4 = this.zfautm_gC('utm_term'); 
    var r_u5 = this.zfautm_gC('utm_content'); 
    if ( typeof r_u1 === "undefined" && typeof r_u2 === "undefined" && typeof r_u3 === "undefined" && typeof r_u4 === "undefined" && typeof r_u5 === "undefined") {
      // separate domain, path and query parameters
      if (ref.indexOf('/') > -1) {
        ref_domain = ref.substr(0,ref.indexOf('/'));
        ref_path = ref.substr(ref.indexOf('/'));
        if (ref_path.indexOf('?') > -1) {
          ref_search = ref_path.substr(ref_path.indexOf('?'));
          ref_path = ref_path.substr(0, ref_path.indexOf('?'));
        }
      }
      u2 = 'referral'; 
      u1 = ref_domain;                    
    // Extract term for organic source
      for (var i=0; i<search_engines.length; i++){
        if(ref_domain.indexOf(search_engines[i][0]) > -1){
          u2 = 'organic'; 
          u1 = search_engines[i][0];
          u4 = this.zfautm_gP(ref_search, search_engines[i][1]) || '(not provided)';
          break;
        }
      }
    } else {
      if ( typeof r_u1 !== "undefined" ) {
        u1 = r_u1;
      }
      if ( typeof r_u2 !== "undefined" ) {
          u2 = r_u2;
      }
      if ( typeof r_u3 !== "undefined" ) {
        u3 = r_u3;
      }
      if ( typeof r_u4 !== "undefined" ) {
        u4 = r_u4;
      }
      if ( typeof r_u5 !== "undefined" ) {
        u5 = r_u5;
      }
    }
  } else {
    var r_u1 = this.zfautm_gC('utm_source'); 
    var r_u2 = this.zfautm_gC('utm_medium'); 
    var r_u3 = this.zfautm_gC('utm_campaign'); 
    var r_u4 = this.zfautm_gC('utm_term'); 
    var r_u5 = this.zfautm_gC('utm_content'); 
    if ( typeof r_u1 === "undefined" && typeof r_u2 === "undefined" && typeof r_u3 === "undefined" && typeof r_u4 === "undefined" && typeof r_u5 === "undefined") {
      var locRef = document.URL;
      locRef = locRef.substr(locRef.indexOf('//')+2);
      if (locRef.indexOf('/') > -1) {
        locRef = locRef.substr(0,locRef.indexOf('/'));
      }
      u1 = locRef;
      u2 = 'referral'; 
    } else {
      if ( typeof r_u1 !== "undefined" ) {
        u1 = r_u1;
      }
      if ( typeof r_u2 !== "undefined" ) {
        u2 = r_u2;
      }
      if ( typeof r_u3 !== "undefined" ) {
        u3 = r_u3;
      }
      if ( typeof r_u4 !== "undefined" ) {
        u4 = r_u4;
      }
      if ( typeof r_u5 !== "undefined" ) {
        u5 = r_u5;
      }
    }
  }
  return {
    'source'  : u1, 
    'medium'  : u2, 
    'campaign': u3, 
    'term'    : u4, 
    'content' : u5 
  };
}
ZFAdvLead.prototype.zfautm_gP = function(s, q) {
  try{
      var match = s.match('[?&]' + q + '=([^&]+)');
      return match ? decodeURIComponent(match[1]) : '';
  } catch(e){
    return '';  
  }
}
ZFAdvLead.prototype.zfautm_gC = function( cookieName ){
  var cookieArr = document.cookie.split('; ');
  for ( var i = 0 ; i < cookieArr.length ; i ++ ){
    var cookieVals = cookieArr[i].split('=');
      if ( cookieVals[0] === cookieName && cookieVals[1] ) {
        return decodeURIComponent(cookieVals[1]);
      }
  }
};
ZFAdvLead.prototype.zfautm_gC_enc = function( cookieName ){
  var cookieArr = document.cookie.split('; ');
  for ( var i = 0 ; i < cookieArr.length ; i ++ ){
    var cookieVals = cookieArr[i].split('=');
      if ( cookieVals[0] === cookieName && cookieVals[1] ) {
        return cookieVals[1];
      }
  }
};
ZFAdvLead.prototype.zfautm_iframeSprt = function () {
  var zf_frame = document.getElementsByTagName("iframe");
  for(var i = 0; i < zf_frame.length; ++i){
    if((zf_frame[i].src).indexOf('formperma') > 0 ){
      var zf_src = zf_frame[i].src;
      for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
        var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
        utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
        var utmVal = this.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
        if ( typeof utmVal !== "undefined" ) {
          if ( utmVal != "" ){
            if(zf_src.indexOf('?') > 0){
              zf_src = zf_src+'&'+utmPm+'='+ utmVal;
            }else{
              zf_src = zf_src+'?'+utmPm+'='+ utmVal;
            }
          }
        }
      }
      if ( zf_frame[i].src.length < zf_src.length ) {
        zf_frame[i].src = zf_src;
      }
    }
  }
};
ZFAdvLead.prototype.zfautm_DHtmlSprt = function () {
  var zf_formsArr = document.forms;
  for ( var frmInd = 0 ; frmInd < zf_formsArr.length ; frmInd ++ ) {
    var zf_form_act = zf_formsArr[frmInd].action;
      if ( zf_form_act && zf_form_act.indexOf('formperma') > 0 ){
        for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
          var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
          var utmVal = this.zfautm_gC( ZFAdvLead.utmPNameArr[ prmIdx ] );
          if ( typeof utmVal !== "undefined" ) {
            if ( utmVal != "" ) {
              var fieldObj = zf_formsArr[frmInd][utmPm];
            if ( fieldObj ) {
              fieldObj.value = utmVal;
            }
          }
        }
      }
    }
  }
};
ZFAdvLead.prototype.zfautm_jsEmbedSprt = function ( id ) {
  document.getElementById('zforms_iframe_id').removeAttribute("onload");
  var jsEmbdFrm = document.getElementById("zforms_iframe_id");
  var embdSrc = jsEmbdFrm.src;
  for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
    var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
    utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
    var utmVal = this.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
    if ( typeof utmVal !== "undefined" ) {
      if ( utmVal != "" ) {
        if(embdSrc.indexOf('?') > 0){
                    embdSrc = embdSrc+'&'+utmPm+'='+utmVal;
        }else{
            embdSrc = embdSrc+'?'+utmPm+'='+utmVal;
        }
      }
    }
  }
  jsEmbdFrm.src = embdSrc;
};
var zfutm_zfAdvLead = new ZFAdvLead();
zfutm_zfAdvLead.zfautm_ini();
if( document.readyState == "complete" ){
    zfutm_zfAdvLead.zfautm_iframeSprt();
    zfutm_zfAdvLead.zfautm_DHtmlSprt();
} else {
  window.addEventListener('load', function (){
        zfutm_zfAdvLead.zfautm_iframeSprt();
        zfutm_zfAdvLead.zfautm_DHtmlSprt();
  }, false);
}

`}
        </Script>
    <OurDoctorSection/>
    </>
  )
}

export default page