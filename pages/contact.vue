
<template>
  <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card class="elevation-2">
        <div class="mb-0 text-xs-center">  
          <iframe class="mt-5" src="http://admin.mohistory.org/forms/tt/contact.html">
            <p>Your browser does not support iframes.</p>
          </iframe>
          </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<style lang="stylus">
.responsive {
    width: 100%;
    height: auto;
}
iframe {
    width: 100%;
    height: 800px;
    border-width: 0px;

}
iframe:focus { 
    outline: none;
}

iframe[seamless] { 
    display: block;
}
</style>


<!-- webcomponent and custom framwork -->

<!--

<template>
<div id="formio"></div>

</templete>
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script type="text/javascript">
  window.onload = function () {
    Formio.createForm(document.getElementById('formio'), 'https://mhs.form.io/conacttt')
  }
</script>

-->

<!-- end webcomponent and custom framwork -->


<!-- Stand Alone Forms -->
<!-- 
<templete>
<iframe id="formio-form-5b885bb19deba7285326e2b8" style="width:100%;border:none;" height="600px" src="https://formview.io/#/mhs/conacttt?iframe=1&header=0"></iframe>

</template>

<script type='text/javascript'>
    (function a (d, w, u) {
      var h = d.getElementsByTagName('head')[0]
      var s = d.createElement('script')
      s.type = 'text/javascript'
      s.src = 'https://portal.form.io/lib/seamless/seamless.parent.min.js'
      s.onload = function b () {
        var f = d.getElementById('formio-form-5b885bb19deba7285326e2b8')
        if (!f || (typeof w.seamless === u)) {
          return setTimeout(b, 100)
        }
        w.seamless(f, {
          fallback: false
        }).receive(function (d, e) {})
      }
      h.appendChild(s)
    })(document, window)
</script>
-->

<!-- End Stand Alone Forms framework -->


<!-- Vue JS portal framework-->

<!-- 
<template>
  <formio :src="formUrl" v-on:submit="onSubmitMethod" />
</template>
<script>
import { Formio } from 'vue-formio'

export default {
  data: function () {
    // Load these from vuex or some other state store system.
    return {
      formUrl: 'https://mhs.form.io/conacttt'
    }
  },
  components: {
    formio: Formio
  },
  methods: {
    onSubmitMethod: function (submission) {
      console.log(submission)
    }
  }
}
</script>

-->
<!-- Vue JS portal framework-->



<!-- Vue JS github framework-->
<!-- 
<template>

  <div id="app">
    <formio src="" url="https://mhs.form.io/donation" form="" submission="" options="" v-on:submit=""></formio>
  </div> 
</template>
-->

<!-- 
<script>
  import { Form } from 'vue-formio'
  export default {
    name: 'app',
    components: { formio: Form }
  }
</script>

-->

<!-- Vue JS github framework-->