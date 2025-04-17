import React from 'react'
import ZohoForm2 from '@/app/component/ZohoForm2'



const ContactForm = ({iframeSrc}) => {
    // const iframeSrc =
    // // "https://forms.zohopublic.in/nikhilmindf1/form/RequestanAppointment/formperma/GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk?zf_rszfm=1";
    // "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationLPGK/formperma/ZSzbxKx_hXcJlDGEB0w3ryiWi8oK-NfameMJkXw7mi4";

const containerId = "zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
  return (
    <section className="w-[450px] h-[550px] overflow-y-scroll rounded-lg bg-white p-6 m-6 shadow-lg">
   <ZohoForm2
        containerId="zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQkq"
        iframeSrc={iframeSrc}
      />
</section>
  )
}

export default ContactForm