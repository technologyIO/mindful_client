import React from 'react'
import ZohoForm2 from '@/app/component/ZohoForm2'



const ContactForm = () => {
    const iframeSrc =
    "https://forms.zohopublic.in/nikhilmindf1/form/RequestanAppointment/formperma/GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk?zf_rszfm=1";
const containerId = "zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
  return (
    <section className="w-[500px] h-[450px] overflow-y-scroll rounded-lg bg-white p-6 m-6 shadow-lg">
   <ZohoForm2
        containerId="zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQkq"
        iframeSrc={iframeSrc}
      />
</section>
  )
}

export default ContactForm