<template>

  <div class="field" :class="input.fieldType">

    <!-- Label -->
    <label class="label">{{input.fieldLabel}} <template v-if="!input.isRequired">(opsiyonel)</template></label>
    <!-- Label -->

    <!-- Only Phone -->
    <template v-if="input.fieldType === 'phone'">
      <div class="customPhone">
        <div class="innerField">
          <select class="selectPhone" :required="input.isRequired">
            <option>+90</option>
          </select>
          <i class="formIcon icon_select"></i>
        </div>
        <div class="innerField">
          <input :required="input.isRequired" @keypress="maskPhone($event)" :type="input.fieldType">
        </div>
      </div>
    </template>
    <!-- Only Phone -->

    <!-- Textarea -->
    <textarea :required="input.isRequired" v-else-if="input.fieldType === 'textarea'"></textarea>
    <!-- Textarea -->

    <!-- Select -->
    <template v-else-if="input.fieldType === 'select'">
      <select :required="input.isRequired">
        <option :value="option.optionValue != 0 ? option.optionValue : null" v-for="option in input.infoRequestFormOptions" :key="option.orderNum">{{option.optionText}}</option>
      </select>
      <i class="formIcon icon_select"></i>
    </template>
    <!-- Select -->

    <!-- Other's input (date,text,tel etc...) -->
    <input v-else :required="input.isRequired" :type="input.fieldType">
    <!-- Other's input (date,text,tel etc...) -->

    <!-- icon -->
    <i class="formIcon" :class="input.fieldName" @click="focusCurrentInput($event)"></i>
    <!-- icon -->

  </div>

</template>

<script>
export default {
  name: "formInput",
  props: ['input'],
  methods : {
    focusCurrentInput(_this){
      _this.target.parentNode.querySelector("input").focus();
    },
    maskPhone(_this){
      let x = _this.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
      _this.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    }
  }
}
</script>

<style>

:root {
  --main-border: 1px solid #A5A5A5;
  --main-border-radius: 4px;
  --default-height: 45px;
  --default-textarea: 60px;
  --label-font-size: 15px;
}

.field{display: flex;flex-flow: column;margin:10px 0 0 0;position: relative;}
.innerField{position: relative;}
.innerField .formIcon.icon_select{top:20px;}
.customPhone{display: flex;width: 100%;justify-content: space-between;}
.label{font-size:var(--label-font-size);letter-spacing: -0.27px;color: #1A1A1A;margin:0 0 5px 0;}
input[type="text"],
input[type="email"],
input[type="phone"],
input[type="tel"],
input[type="date"]{height: var(--default-height);width: 100%;padding: 0 45px 0 15px;border: var(--main-border) ;border-radius: var(--main-border-radius);background-color: #fff;}
select {height: var(--default-height);width: 100%;padding: 0 0 0 15px;-webkit-appearance: none;-moz-appearance: none;text-indent: 1px;text-overflow: '';background-color: #fff;border: var(--main-border) ;border-radius: var(--main-border-radius)}
textarea{width:100%;resize:none;height:var(--default-textarea);padding: 15px;}
.formIcon{position: absolute;right: 15px;top: 50%;}
.text .formIcon{background-image: url("~assets/images/ad_soyad_58.svg");width:22px;height: 17px;}
.email .formIcon{background-image: url("~assets/images/e_mail_60.svg");width:22px;height: 16.5px;}
.phone .formIcon{background-image: url("~assets/images/telefon_61.svg");width:22px;height: 22px;}
.date .formIcon{background-image: url("~assets/images/dugun_tarihi_1.svg");width:19.5px;height: 22px;}
.formIcon.icon_select{background-image: url("~assets/images/icon-down.svg");width:12px;height: 7px;top:40px;}
::-webkit-calendar-picker-indicator {color: rgba(0, 0, 0, 0);opacity: 0;}
.selectPhone{width: 110px;}

</style>
