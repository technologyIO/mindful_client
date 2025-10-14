import React from 'react'
import Script from 'next/script';
import RtmsLandingPage from  '../component/RtmsLandingPage'
export async function generateMetadata({ params }) {


  return {
    title: `Mindful TMS  `,
    description: `We help people with anxiety, depression, OCD, grief, trauma, and more in a safe space.

Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate Psychologists are here for you.`,
    robots: "noindex, nofollow",
  };

}

const page = ({ params }) => {
  const data = {
    phone:`9606067372`
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
        <RtmsLandingPage city={"gk"} params={params} data={data}/>
    </>
  )
}

export default page